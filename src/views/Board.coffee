R = React.DOM
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
        domination: hRegion.non > 0 and hRegion.btl > vRegion.btl
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
      ips: _.mapValues @props.countries, (c)-> [c.usa, c.ussr]

    gameState


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


  # Adds the state to the history
  # This is to avoid having to deep-check the state in componentWillUpdate
  setStateHistory: (state, meta)->
    @props.stateHistory.add state, meta
    @setState state


  componentWillMount: ->
    $(document).on 'keypress', @keypressHandler
    @props.stateHistory.add @state, msg: 'New game'


  componentWillUnmount: ->
    $(document).off 'keypress', @keypressHandler


  keypressHandler: (ev)->
    kC = ev.keyCode
    # (Z) Undo
    if kC == 122 or kC == 90
      prev = @props.stateHistory.undo()
      @setState prev.state
    # (Y) Redo
    if kC == 121 or kC == 89
      next = @props.stateHistory.redo()
      @setState next.state
    # (H) History show/hide
    if kC == 104 or kC == 72
      # Code smell - stateHistory shouldn't be aware of its visibilty
      @props.stateHistory.toggleVisible()


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
      delta:"#{sign}#{Math.abs delta}"


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
      
      countryId = countryData.id
      if countryId of @state.ips
        props.usa = @state.ips[countryId][0]
        props.ussr = @state.ips[countryId][1]

      BoardNode props

    R.div className: 'Board', [
      R.svg width:@props.width, height:@props.height, ref: 'svg', [
        links
        nodes
      ]
      BoardStatus _.assign {handleValClick: @handleValClick}, @state.game
    ]
