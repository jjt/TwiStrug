R = React.DOM
cx = React.addons.classSet

superStats = require '../libs/superStats'
rangedGameVal = require '../libs/rangedGameVal'
stateEncoder = require '../libs/stateEncoder'
upperFirst = require '../libs/upperFirst'
oneLetterContinentCode = require '../libs/oneLetterContinentCode'
continentCodeFromLetter = require '../libs/continentCodeFromLetter'

BoardNode = require './BoardNode'
BoardNodeDiv = require './BoardNodeDiv'
BoardStatus = require './BoardStatus'
BoardLink = require './BoardLink'


superpowerToIndex = (str)-> if str == 'usa' then 0 else 1

# Returns a simple {usa: 'presence', ussr: 'domination'}
getRegionStatus = (stats)->
  _.mapValues stats, (stat)->
    return 'control' if stat.control
    return 'domination' if stat.domination
    return 'presence' if stat.presence
    return false




continentShortcutData = [
  { char: 'C', x:127, y:200 }
  { char: 'S', x:127, y:510 }
  { char: 'F', x:533, y:550 }
  { char: 'E', x:480, y:220 }
  { char: 'A', x:840, y:150 }
  { char: 'M', x:840, y:380 }
]
  





module.exports = React.createClass
  displayName: 'Board'

  getInitialState: (props = @props) ->
    stateHistory = props.stateHistory
    stateHistory.load()
    state = @handleIncomingState props.incomingState
    if not state?
      state = stateHistory.getCurrent()?.state
    if not state?
      gameState =
        game:
          score: 0
          turn: 0
          round: 0
          defcon: 5
          milops: [0,0]
          space: [0,0]
        ips: _.map props.countries, (c)-> [c.usa, c.ussr]

      meta =
        type: 'turn'
        id: 'turn'
        newGame: true
        new: 0
        old:0

      stateHistory.add gameState, meta
      state = gameState

    _.assign state,
      ipShowCountries: []
      ipKeySequence: ''
      ipShowContinent: ''
      ipSetCountry: null

  componentWillReceiveProps: (nP)->
    state = @getInitialState nP
    @setState state
    #if @props.stateHistory.states.length < 1
      #@props.stateHistory.add state,

  componentWillMount: ->
    {stateHistory, gameId} = @props
      
    # When state changes, update the url
    stateHistory.on 'change', =>
      state = @props.stateHistory.getCurrent()
      if state? and not state.meta.newGame
        stateEnc = stateHistory.encodeCurrent()
        window.history.replaceState null, "Board #{gameId}", "#/board/#{gameId}/#{stateEnc}"

    stateHistory.on 'goTo', (state)=>
      @setState state.state

    @kpHT = _.throttle @keypressHandler, 100
    @kuHT = _.throttle @keyupHandler, 100
    @kdHT = _.throttle @keydownHandler, 100

    $(document).on 'keypress', @kpHT
    $(document).on 'keyup', @kuHT
    $(document).on 'keydown', @kdHT

  componentWillUnmount: ->
    $(document).off 'keypress', @kpHT
    $(document).off 'keyup', @kuHT
    $(document).off 'keydown', @kdHT

  handleIncomingState: (stateEncoded = @props.incomingState) ->
    index = @props.stateHistory.findStateIndex state: stateEncoded
    if index?
      @props.stateHistory.goTo index
      current = @props.stateHistory.getCurrent()
      return current.state
    else
      current = @props.stateHistory.getCurrent()
      if stateEncoded? and stateEncoded != '' and current?.meta.state != stateEncoded
        state = stateEncoder.decode stateEncoded
        @props.stateHistory.add state,
          type: 'load'
          id: 'load'
          state: stateEncoded
        return state


  # Adds the state to the history
  # This is to avoid having to deep-check the state in componentWillUpdate
  setStateHistory: (state, meta)->
    @props.stateHistory.add state, meta
    @setState state

  keypressHandler: (ev)->
    kC = ev.keyCode
    dir = if kC >= 97 then 'inc' else 'dec'

    if @state.ipKeySequence.length > 0
      return @ipKeySequence(kC)

    if kC == 105 or kC == 73
      return @ipKeySequence kC
      return

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


  # Esc doesn't trigger on keypress, so it has to be keyup
  keyupHandler: (ev)->
    if 37 <= ev.keyCode <= 40
      return @ipKeySequence ev.keyCode
    if ev.keyCode == 27
      @clearIpKeySequence()
      return
    ev.preventDefault()
    return false

  keydownHandler: (ev)->
    # Prevent backspace from navigating the page
    # Oridinarily I don't like taking over browser shortcuts, but in this case
    # we want to prevent users from over-backspacing
    if ev.keyCode == 8
      ev.preventDefault()
      @ipKeySequence(ev.keyCode)
      return false

  clearIpKeySequence: ->
    @setState
      ipKeySequence: ''
      ipShowCountries: []
      ipShowContinent: ''
      ipSetCountry: null

  ipKeySequence: (code)->
    ipKS = @state.ipKeySequence
    char = String.fromCharCode(code)

    # Backspace should delete the last char from the ipKS, and set the "current"
    # char to the last char
    if code == 8
      # Back up two spaces when a country is selected
      delta = -1
      if ipKS.length == 4
        delta = -2
      ipKS = ipKS.slice(0,delta)
      char = ipKS.slice(-1)
      ipKS = ipKS.slice(0,-1)

    charLower = char.toLowerCase()

    if not ipKS and not char
      @clearIpKeySequence()
      return

    @props.stateHistory.toggleVisible false
    if ipKS.length == 0 and charLower == 'i'
      @setState
        ipKeySequence: 'i'
        ipShowCountries: []
        ipShowContinent: ''
        ipSetCountry: null
      return

    # Continent selection
    if ipKS.length == 1 and charLower in ['c','s','e','f','a','m']
      ipKS += charLower
      @setState
        ipKeySequence: ipKS
        ipShowCountries: @props.countryShortcuts[charLower]
        ipShowContinent: charLower
        ipSetCountry: null
      return
    
    continent = ipKS.charAt 1

    # Country selection
    # ipKS should be 'i[continent]' or 'i[continent][countryChar]'
    if 2 <= ipKS.length <= 3
      ipKS += charLower
      country = ipKS.slice(2)

      countries = @props.countryShortcuts[continent].filter (sc = '')->
        sc.charAt(0) == country.charAt(0)

      if country.length == 2
        countries = countries.filter (sc = '')->
          sc.charAt(1) == country.charAt(1)

      # Make sure we have at least one country
      if countries.length != 0
        @setState
          ipKeySequence: ipKS
          ipShowCountries: countries
          ipSetCountry: null
      return
    
    # We have a country "selected" for ip placement
    country = ipKS.slice(2)
    if ipKS.length == 4 and country.length == 2
      node = _.find @props.nodes,
        shortcut: country
        continent: continentCodeFromLetter continent
      if not node?
        return

      switch char
        when 'a'
          side = 'usa'
          dir = 'up'
        when 'A'
          side = 'usa'
          dir = 'dn'
        when 'r'
          side = 'ussr'
          dir = 'up'
        when 'R'
          side = 'ussr'
          dir = 'dn'

      if side? and dir?
        @handleIPClick node.id, side, dir
      return false

  handleValClick: (id, dir, side)->
    state = this.state
    delta = if dir == 'inc' then 1 else -1
    if id in ['milops', 'space']
      index = if side == 'usa' then 0 else 1
      oldVal = state.game[id][index]
      newVal = rangedGameVal(id, state.game[id][index] + delta)
      state.game[id][index] = newVal
    else
      oldVal = state.game[id]
      newVal = rangedGameVal(id, state.game[id] + delta)
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

    ipKeySequence = @state?.ipKeySequence
    ipShowCountries = @state?.ipShowCountries || []
    ipShowContinent = @state?.ipShowContinent

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
      onTop = not ipKeySequence or
        countryData.shortcut in ipShowCountries and
        oneLetterContinentCode(countryData.continent) == ipShowContinent and
        ipKeySequence.length >= 4
      props =
        node: nodeProps
        key: "BoardNode-#{countryData.id}"
        transform: "translate(#{countryData.x}, #{countryData.y})"
        x: countryData.x
        y: countryData.y
        width: @props.node.width
        height: @props.node.height
        gutter: @props.node.gutter
        titleHeight: @props.node.titleHeight
        titleFontSize: @props.node.titleFontSize
        handleIPClick: @handleIPClick
        # Determine if the country should be on top of the ip shortcut layer
        onTop: onTop
          

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

      BoardNodeDiv props

    boardStatusAttrs =
      ref:'BoardStatus'
      handleValClick: @handleValClick
      handleHistoryClick: @handleHistoryClick



    continentShortcuts = continentShortcutData.map (o)=>
      if ipKeySequence.length == 1
        show = 'in'
      attrs =
        className: "Board-shortcutContinent Board-shortcut #{show}"
        style:
          left: o.x
          top: o.y
      R.div attrs, o.char

    nodesByContinent = _.groupBy @props.nodes, 'continent'

    countryShortcuts = _.map nodesByContinent, (nodes, continent)=>
      contKey = oneLetterContinentCode continent
      nodeComponents = _.map nodes, (node)=>
        if node.superpower? or node.points?
          return null
        show = ''
        ipKSL = ipKeySequence.length
        if ipKSL < 4 and _.contains(@state.ipShowCountries, node.shortcut) and @state.ipShowContinent == oneLetterContinentCode(continent)
          show = 'in'
        attrs =
          className: "Board-shortcut Board-shortcutCountry #{show}"
          style:
            left: node.x
            top: node.y
        R.div attrs, upperFirst(node.shortcut)

      nodeComponents


    R.div className: 'Board', [
      R.svg width:@props.width, height:@props.height, ref: 'svg', [
        links
      ]
      nodes
      R.div onClick: @clearIpKeySequence ,className: "Board-shortcutHeader #{if ipKeySequence then 'in' else ''}", [
        R.h3 {}, "Placing Influence"
        R.span {}, [
          "Press "
          R.span className: 'shortcut', "ESC"
          " or click this box to exit"
        ]
      ]
      R.div
        className: "Board-shortcutMask #{if ipKeySequence then 'in' else ''}"
      R.div className: "Board-shortcutContinents #{if ipKeySequence and ipKeySequence.length <= 1 then 'in' else ''}",
        continentShortcuts
      countryShortcuts
      BoardStatus _.assign boardStatusAttrs, @state.game
    ]
