R = React.DOM
RCTG = React.addons.CSSTransitionGroup
cx = React.addons.classSet
libs = require '../libs'

BoardNode = require './BoardNode'
BoardStatus = require './BoardStatus'
BoardLink = require './BoardLink'


superpowerToIndex = (str)-> if str == 'usa' then 0 else 1


getIpStats = (ips, countries)->
  accumulator = ->
    btl: 0
    non: 0
    total: 0
    eu:   non: 0, btl: 0, total: 0
    as:   non: 0, btl: 0, total: 0
    me:   non: 0, btl: 0, total: 0
    af:   non: 0, btl: 0, total: 0
    sa:   non: 0, btl: 0, total: 0
    ca:   non: 0, btl: 0, total: 0

  fn = (accum, ips, countryId)->
    country = _.find countries, id: parseInt(countryId, 10)
    if ips[0] - ips[1] >= country.stab
      accum[country.continent].total++
      accum.total++
      if country.btl
        accum[country.continent].btl++
        accum.btl++
      else
        accum[country.continent].non++
        accum.non++
    accum

  # Flipped to have USSR ips first
  ipsRev = _.map ips, (ips)-> _.cloneDeep(ips).reverse()

  usa = _.reduce ips, fn, accumulator()
  ussr = _.reduce ipsRev, fn, accumulator()

  {usa, ussr}

sumRegion = (metric, sum, region)-> sum + region[metric]

getRegionStats = (ipStats, regions)->
  stats = _.mapValues ipStats, (hero, power, powers)->
    villain = if power == 'usa' then powers.ussr else powers.usa
    regionStats = regions.map (region)->
      hRegion = hero[region.id]
      vRegion = villain[region.id]
      out =
        presence: hRegion.total > 0
        domination: hRegion.non > 0 and hRegion.btl > vRegion.btl and hRegion.total > vRegion.total
        control: hRegion.btl == region.numBtl and hRegion.total > vRegion.total

    regionStats = _.zipObject _.pluck(regions, 'id'), regionStats
    regionStats = _.assign regionStats,
      presence: _.reduce regionStats, sumRegion.bind(null, 'presence'), 0
      domination: _.reduce regionStats, sumRegion.bind(null, 'domination'), 0
      control: _.reduce regionStats, sumRegion.bind(null, 'control'), 0
  
  stats


# Returns a simple {usa: 'presence', ussr: 'domination'}
getRegionStatus = (stats)->
  _.mapValues stats, (stat)->
    return 'control' if stat.control
    return 'domination' if stat.domination
    return 'presence' if stat.presence
    return false



superStats = (ips, countryArr, regionArr)->
  countries = getIpStats(ips, countryArr)
  regions = getRegionStats(countries, regionArr)
  {countries, regions}


module.exports = React.createClass
  displayName: 'Board'

  getInitialState: ->
    gameState =
      game:
        score: 0
        turn: 0
        round: 0
        defcon: 5
        milops: [0,0]
        space: [0,0]
      ips: _.map @props.countries, (c)-> [c.usa, c.ussr]

    if @props.incomingState
      gameState = @props.incomingState
      @props.stateHistory.add gameState,
        type: 'load'
        id: 'load'
    else if @props.stateHistory.states.length > 0
      gameState = @props.stateHistory.getCurrent().state
    else
      @props.stateHistory.add gameState,
        newGame: true
        type: 'turn'
        id: 'turn'
        new: 0
        old: 0

    gameState

  componentWillReceiveProps: ->
    state = @getInitialState()
    @setState state
    #if @props.stateHistory.states.length < 1
      #@props.stateHistory.add state,

  componentWillMount: ->
    $(document).on 'keypress', @keypressHandler
    @props.stateHistory.on 'goTo', (state)=>
      @setState state.state


  componentWillUnmount: ->
    $(document).off 'keypress', @keypressHandler

  # Adds the state to the history
  # This is to avoid having to deep-check the state in componentWillUpdate
  setStateHistory: (state, meta)->
    @props.stateHistory.add state, meta
    @setState state

  keypressHandler: (ev)->
    kC = ev.keyCode
    dir = if kC >= 97 then 'inc' else 'dec'

    switch kC
      # (c/C) Dice
      when 99, 67
        @refs.BoardStatus.rollDice()

      # History
      #-----------------
      # (z/Z) Undo
      when 122, 90
        @undoHist()
      # (y/Y) Redo
      when 121, 89
        @redoHist()
      # (h/H) History show/hide
      when 104, 72
        @toggleHist()

      # Game properties
      #------------------
      # (t/T) Turn inc/dec
      when 116, 84
        @handleValClick 'turn', dir
      # (r/R) Round inc/dec
      when 114, 82
        @handleValClick 'round', dir
      # (S/s) Score inc/dec
      when 115, 83
        @handleValClick 'score', dir
      # (D/d) Defcon inc/dec
      when 100, 68
        @handleValClick 'defcon', dir
      # (M/m) USA MilOps inc/dec
      when 109, 77
        @handleValClick 'milops', dir, 'usa'
      # (O/o) USSR MilOps inc/dec
      when 111, 79
        @handleValClick 'milops', dir, 'ussr'
      # (P/p) USA Space inc/dec
      when 112, 80
        @handleValClick 'space', dir, 'usa'
      # (A/a) USSR Space inc/dec
      when 97, 65
        @handleValClick 'space', dir, 'ussr'

    return true


  handleValClick: (id, dir, side)->
    state = this.state
    delta = if dir == 'inc' then 1 else -1
    if id in ['milops', 'space']
      index = if side == 'usa' then 0 else 1
      oldVal = state.game[id][index]
      newVal = libs.rangedGameVal(id, state.game[id][index] + delta)
      state.game[id][index] = newVal
    else
      oldVal = state.game[id]
      newVal = libs.rangedGameVal(id, state.game[id] + delta)
      state.game[id] = newVal

    meta =
      type: 'val'
      side: if side? then side else ''
      id: id
      old: oldVal
      new: newVal

    if id == 'turn' or id == 'round'
      meta.type = id

    @setStateHistory state, meta


  handleIPClick: (nodeId, side, dir)->
    node = _.find @props.nodes, {id: nodeId}
    # Don't let the non-country nodes get updated 
    if node.points or node.superpower then return

    state = @state

    index = superpowerToIndex side
    ip = state.ips[nodeId][index]
    delta = if dir == 'up' then 1 else -1
    ip += delta
    if ip < 0 then return

    sign = if dir == 'up' then '+' else '-'
    state.ips[nodeId][index] = ip

    @setStateHistory state,
      type: 'ip'
      side: side
      country: node
      ips: state.ips[nodeId]
      delta:delta

  handleHistoryClick: (type)->
    @["#{type}Hist"]()

  undoHist: ->
    state = @props.stateHistory.undo()
    @setState state.state
  redoHist: ->
    state = @props.stateHistory.redo()
    @setState state.state
  toggleHist: ->
    @props.stateHistory.toggleVisible()


  render: ->
    nodeProps = @props.node

    superpowerStats = superStats @state.ips, @props.countries, @props.regionInfoNodes

    links = @props.links.map (linkData)=>
      source = _.find @props.countries, id: linkData.source
      target = _.find @props.countries, id: linkData.target
      nodes = {source, target}

      jUSA = (link, targ)=>
        japanUSABump = 18
        if _.contains(link.nodes, 'USA') and _.contains(link.nodes, 'Japan')
          return nodes[targ].y - japanUSABump
        nodes[targ].y

      linkProps =
        key: "BoardLink-#{linkData.source}-#{linkData.target}"
        x1: source.x
        y1: jUSA(linkData, 'source')
        x2: target.x
        y2: jUSA(linkData, 'target')
        className: cx
          "link": true
          "link-cross": linkData.crossContinent
          "link-usa": _.contains linkData.nodes, 'USA'
          "link-ussr": _.contains linkData.nodes, 'USSR'

      BoardLink linkProps

    nodes = _.map @props.nodes, (countryData)=>
      props =
        node: nodeProps
        key: "BoardNode-#{countryData.id}"
        transform: "translate(#{countryData.x}, #{countryData.y})"
        width: @props.node.width
        height: @props.node.height
        gutter: @props.node.gutter
        titleHeight: @props.node.titleHeight
        titleFontSize: @props.node.titleFontSize
        handleIPClick: @handleIPClick

      _.assign props, countryData

      if(props.superpower)
        props.stats =
          countries: _.pick superpowerStats.countries[props.name.toLowerCase()], ['btl', 'non', 'total']
          regions: _.pick superpowerStats.regions[props.name.toLowerCase()], ['presence', 'domination', 'control']

      if(props.points)
        props.stats = getRegionStatus
          usa: superpowerStats.regions.usa[props.id]
          ussr: superpowerStats.regions.ussr[props.id]
      
      countryId = parseInt countryData.id, 10
      if countryId of @state.ips
        props.usa = @state.ips[countryId][0]
        props.ussr = @state.ips[countryId][1]

      BoardNode props

    boardStatusAttrs =
      ref:'BoardStatus'
      handleValClick: @handleValClick
      handleHistoryClick: @handleHistoryClick

    R.div className: 'Board', [
      R.svg width:@props.width, height:@props.height, ref: 'svg', [
        links
        nodes
      ]
      BoardStatus _.assign boardStatusAttrs, @state.game
    ]
