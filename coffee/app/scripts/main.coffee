R = React.DOM
update = React.addons.update
cx = React.addons.classSet
$ = Zepto

$.getScript = (src, func) ->
  script = document.createElement('script')
  script.async = "async"
  script.src = src
  if func
    script.onload = func

  document.getElementsByTagName("head")[0].appendChild script

# Hashed qs
# Handles strings and arrays
# Anything with a comma will be parsed as an array
qs =
  merge: (obj)->

  get: (field)->
  
  set: (field, val)->
    qsObj = @toObj() || {}
    qsObj[field] = val
    @setQS @toQS(qsObj)

  delete: (field)->
    qsObj = @toObj() || {}
    return if not qsObj?
    delete qsObj[field]
    @setQS @toQS qsObj

  encodeCharsIn: ['=','&']

  encodeCharsOut:['%3D','%26']

  encode: (obj)->
    if _.isArray obj
      obj = obj.join(',')
    obj.replace(@encodeCharsIn, @encodeCharsOut)

  decode: (str)->
    str = str.replace(@encodeCharsOut, @encodeCharsIn)
    if str.indexOf(',') != -1
      str = str.split(',')
    str


  toObj: (qs = window.location.hash.split('?')?[1])->
    if not qs
      return
    out = {}
    pairs = qs.split('&')
    pairs?.forEach (pair)=>
      kvArr = pair.split('=')
      out[@decode(kvArr[0])] = @decode(kvArr[1])
    out

  toQS: (obj)->
    pairs = []
    for own k,v of obj
      pairs.push "#{@encode(k)}=#{@encode(v)}"
    pairs.join('&')
       
  setQS: (qs)->
    window.location.hash = window.location.hash.split('?')[0] + '?' + qs
 


setPageTitle = (args...)-> document.title = args.join(' | ') + ' - TwiStrug'

zeroPad = (str, len=3)-> ('000' + str).substr(-len,len)

sortNumerical = (a,b)-> a-b

filterTruthy = (el)-> el if el

filterUnique = (el,i,arr)-> arr.indexOf(el) == i




cardClassName = (props) ->
  ownerClass = "owner-#{props.owner}"
  classes = cx
    'asiaScoring': props.title == 'Asia Scoring'
    'europeScoring': props.title == 'Europe Scoring'
    'middleEastScoring': props.title == 'Middle East Scoring'
    'centralAmericaScoring': props.title == 'Central America Scoring'
    'southeastAsiaScoring': props.title == 'Southeast Asia Scoring*'
    'africaScoring': props.title == 'Africa Scoring'
    'southAmericaScoring': props.title == 'South America Scoring'
    'ongoing': props.ongoing

  ownerClass + ' ' + classes

cardStages = 1:'EARLY', 2:'MID', 3:'LATE'

filterValidCardIds = (el)-> 1 <= el <= 110

Card = React.createClass
  render: ->
    R.div className: cardClassName(@props) + ' card', [
      R.a {className: 'card-title-holder', href: "#/card/#{@props.id}"}, [
        R.span className: 'card-stage', cardStages[@props.stage]
        R.h4 className: 'card-ops', if @props.ops < 1 then "S" else @props.ops
        R.h4 className: 'card-title', [
          "#{@props.title} "
          R.span className: 'card-id', "##{@props.id}"
        ]
      ]
      R.p className: 'card-text', @props.text
    ]


CardList = React.createClass
  render: ->
    className = cx
      'cardList': true
      'cardListFull': @props.fullText
    R.div {className}, @props.cards.map (el) =>
      Card _.merge el, showFullText: @props.fullText


CardsView = React.createClass
  defaultState: (props)->
    filter = props?.state?.filter
    fullText: if filter then true else false
    cardFilterInput: if filter then filter.join(' ') else ''
    sort: 'stage'
    filter: null

  componentWillReceiveProps: (nextProps) ->
    if nextProps.state?
      @setState nextProps.state
    else
      @setState @defaultState()

  getInitialState: ->
    _.merge @defaultState(@props), @props.state

  getFilterIds: () ->

    if @state?.filter?
      filterIds = @state.filter.sort(sortNumerical)
        .filter(filterTruthy)
        .filter(filterUnique)
    if not filterIds? then filterIds = []
    return filterIds

  # Just filtering by id right now
  getFilteredCards: ->
    if @state.filter?
      return @props.cards.filter (el) =>
        if el.id in @state.filter
          return el
    @props.cards
        

  filterAndSortCards: ->
    cards = @getFilteredCards()
    [sort, order] = @state.sort.split '-'

    sortParam = switch sort
      when 'textlen' then (el) -> el.text.length
      when 'side' then ['owner','stage','id']
      when 'ops' then 'ops'
      when 'titlelen' then (el) -> el.title.length
      else ['stage', 'id']
    cards = _.sortBy cards, sortParam

    if order == 'rev'
      cards.reverse()

    cards


  handleFullText: ->
    @setState
      fullText: @refs.fullText.getDOMNode().checked

  handleCardFilterChange: ->
    value = @refs.cardFilter.getDOMNode().value
    # WGR adds "Ops 3: ...", so don't pick those up
    ids = value.match(/\d+[^:]|\d+$/g)?.map (el)-> parseInt el, 10
    if value == '' or not ids?
      state =
        cardFilterInput: value
        filter: null
    else
      state =
        cardFilterInput: value
        fullText: true
        filter: ids.sort(sortNumerical).filter(filterValidCardIds)

    @setState state

  handleCardFilterBlur: ->
    filterIds = @getFilterIds()

    @setState
      cardFilterInput: filterIds.join ' '

    if filterIds? and filterIds.length > 0
      qs.set 'filter', filterIds
    else
      qs.delete 'filter'

  handleCardFilterClear: ()->
    @refs.cardFilter.getDOMNode().value = ''
    @setState
      filter:null
      cardFilterInput: ''

    qs.delete 'filter'



  render: ->
    sortLink = (sort, display) =>
      className = cx active: @state.sort == sort
      ref = "#{sort}Sort"
      onClick = ()->
        qs.set 'sort', sort
      R.a {onClick, ref, className}, display


    R.div className: 'cardsView' , [
      R.div className: 'page-header row', [
        R.div className: 'col-md-6', [
          R.div className: 'cardControls', [
            R.span className: 'label', 'Sort by:'
            sortLink 'stage', 'Stage'
            sortLink 'ops', 'Ops'
            sortLink 'side', 'Side'
          ]
          R.div className: 'cardControls', [
            R.input
              name: 'fullText'
              id: 'fullText'
              type:'checkbox'
              ref:'fullText'
              onChange: @handleFullText
              checked: @state.fullText
            " "
            R.label {htmlFor:'fullText', className:'card-show-text-label'}, 'Show card text'
          ]
        ]
        R.div className: 'cards-filter-by-id col-md-6', [
          R.label {htmlFor:'cardFilter'}, [
            "Filter cards by ids "
          ]
          R.input
            name: 'cardFilter'
            type: 'text'
            ref: 'cardFilter'
            onChange: @handleCardFilterChange
            onBlur: @handleCardFilterBlur
            value: @state.cardFilterInput
            placeholder: 'Paste from Wargameroom or enter ids'
          R.a {className:'cards-filter-by-id-clear', onClick:@handleCardFilterClear}, 'clear'
        ]
      ]
      CardList
        cards: @filterAndSortCards()
        fullText: @state.fullText
    ]


AboutView = React.createClass
  render: ->
    R.div className: 'aboutView', [
      R.h2 {}, "About TwiStrug"
      R.img className: 'imgRight', src: "/images/tsbox.jpg"
      R.p {}, [
        "TwiStrug is for people who want to reference or learn about the
        cards of "
        R.a href:"http://en.wikipedia.org/wiki/Twilight_Struggle",
          "Twilight Struggle"
        " in a zippy web app. "
      ]
      R.p {}, [
        "For more in-depth strategy, go to the excellent "
        R.a href: "http://twilightstrategy.com", "Twilight Strategy"
        " site. It has tons of great content and
        analysis available, including discussions about nearly every card.
        Please support Twilight Strategy and its author, "
        R.em {}, "theory"
        ", by purchasing Twilight Struggle from Amazon on the sidebar of the
        site, or by paying some money for the associated"
        R.a href: "https://leanpub.com/twilightstrategy", "e-book"
        ". It's Twilight Strategy in book form and deserves your money."
      ]
      R.p {}, [
        "TwiStrug was made by "
        R.a href: "http://jjt.io/", "Jason Trill"
        ". Source available on "
        R.a href: "https://github.com/jjt/twistrug", "Github"
        "."
      ]
    ]
    

CardView = React.createClass
  componentDidMount: ->
    @getStrategy()
    @setWindowKeypressHandler()

  componentDidUpdate: ->
    @getStrategy()
    @setWindowKeypressHandler()

  setWindowKeypressHandler: ->
    window.onkeypress = (ev) =>
      kC = ev.keyCode
      if kC == 104 or kC == 72
        id = @props.prevCard.id
      if kC == 108 or kC == 76
        id = @props.nextCard.id
      if id?
        window.location = "#/card/#{id}"

  getStrategy: ->
    @refs.cardStrategy.getDOMNode().innerHTML = '<p>Loading data...</p>'
    $.get "/data/cardStrategyLinked/#{zeroPad(@props.card.id)}.html", (data)=>
      @refs.cardStrategy.getDOMNode().innerHTML = data

  render: ->
    card = @props.card
    imageUrl = "/images/cards/#{zeroPad(card.id)}.jpg"
    R.div className: 'cardView', [
      R.div className: 'page-header clearfix',
        R.h2 className: cardClassName(card), [
          R.span className:'card-ops', if card.ops < 1 then "S" else card.ops
          "#{card.title} "
          R.span className:'card-id', "##{card.id}"
        ]
        R.div className: 'card-nav', [
          R.a {href:"#/card/#{@props.prevCard.id}", className:'card-nav-prev'}, [
            "#{@props.prevCard.title}"
            R.span className: 'card-nav-label', [
              R.small {}, '◀'
              ' prev (H)'
            ]
          ]
          R.a {href:"#/card/#{@props.nextCard.id}", className:'card-nav-next'}, [
            "#{@props.nextCard.title}"
            R.span className: 'card-nav-label', [
              'next (L) '
              R.small {}, '▶'
            ]
          ]
        ]
      R.p {className: 'pull-left'}, card.text
      R.img src: imageUrl, className: 'imgRight'
      R.div {className: 'card-strategy', id: 'card-strategy'}, [
        R.h3 {}, [
          'Strategic Notes from'
          ' '
          R.a href:card.url, 'TwilightStrategy.com'
        ]
        R.div ref:'cardStrategy',
          R.p {}, 'Loading data'
      ]
    ]


CountriesView = React.createClass
  render: ->
    R.div className: 'countriesView', [
      R.h2 {}, 'Countries'
    ]

BoardPicView = React.createClass
  render: ->
    R.div className: 'boardView', [
      R.div className: 'page-header',
        R.h2 {}, 'Board'
      R.a href:'/images/tsboard.jpg',
        R.img className: 'fluid', src:'/images/tsboard.jpg'
    ]









BoardView = React.createClass
  displayName: 'BoardView'
  
  getDefaultProps: ->
    width: 1140
    height: 730
    node:
      width: 66
      height: 50
      gutter: 14
      titleHeight: 16
      titleFontSize: 12

  getInitialState: ->
    debugObj: {}

  dragend: (el)->
    coords = @state.coords
    coords[el.name] =
      x: Math.round(el.x)
      y: Math.round(el.y)
    el.fixed = true
    @setState {coords}

  render: ->
    R.div className: 'BoardView', [
      #R.div className: 'page-header',
          #R.h2 {}, "Board"
      Board @props
      R.textarea className: 'map-position-debug', ref:'debug', style:{width:'100%', height:'60rem'}, value: JSON.stringify(@state.coords, null, ' ')
    ]

rangedGameVal = (id, val)->
  ranges =
    score: [-20, 20]
    turn: [1, 10]
    round: [0, 16]
    defcon: [1, 5]
    milops: [0, 5]
    space: [0, 8]

  range = ranges[id]

  if val < range[0]
    return range[1]
  if val > range[1]
    return range[0]
  val

Board = React.createClass
  displayName: 'Board'

  getInitialState: ->
    gameState =
      game:
        score: 0
        turn: 1
        round: 0
        defcon: 5
        milops: [0,0]
        space: [0,0]

    _.assign gameState, @props

  handleValClick: (id, dir, side)->
    state = this.state
    delta = if dir == 'inc' then 1 else -1
    if id not in ['milops', 'space']
      state.game[id] = rangedGameVal(id, state.game[id] + delta)
    else
      index = if side == 'usa' then 0 else 1
      state.game[id][index] = rangedGameVal(id, state.game[id][index] + delta)

    @setState state

  handleIPClick: (nodeId, side, dir)->
    node = _.find @state.nodes, {id: nodeId}
    # Don't let the non-country nodes get updated 
    if node.points or node.superpower then return
    state = @state

    ip = state.nodes[nodeId][side]
    delta = if dir == 'up' then 1 else -1
    ip += delta
    if ip < 0 then ip = 0

    state.nodes[nodeId][side] = ip

    @setState state

  render: ->
    nodeProps = @props.node

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

    nodes = _.map @state.nodes, (countryData)=>
      props = _.assign countryData,
        node: nodeProps
        key: "BoardNode-#{countryData.id}"
        transform: "translate(#{countryData.x}, #{countryData.y})"
        width: @props.node.width
        height: @props.node.height
        gutter: @props.node.gutter
        titleHeight: @props.node.titleHeight
        titleFontSize: @props.node.titleFontSize
        handleIPClick: @handleIPClick

      BoardNode props

    R.div className: 'Board', [
      R.svg width:@props.width, height:@props.height, ref: 'svg', [
        links
        nodes
      ]
      BoardStatus _.assign {handleValClick: @handleValClick}, @state.game
    ]


StatusValue = React.createClass
  render: ->

    sideClass = switch @props.side
      when 'usa', 'ussr' then @props.side
      else ''

    decAttrs =
      className: 'dec'
      onClick: @props.handleValClick.bind(null, @props.id, 'dec', @props.side)
    incAttrs =
      className: 'inc',
      onClick: @props.handleValClick.bind(null, @props.id, 'inc', @props.side)

    R.div {}, [
      R.dt {}, @props.title
      R.dd className: "StatusValue #{sideClass}", [
        R.span decAttrs, '◀'
        R.span className: 'val', @props.val
        R.span incAttrs, '▶'
      ]
    ]
    

BoardStatus = React.createClass

  render: ->
  
    scoreSide = ''
    if @props.score != 0
      scoreSide = if @props.score < 0 then 'ussr' else 'usa'

    # Round: 0 is headline, odds are USSR, evens are USA
    round = if @props.round == 0 then 'H' else Math.ceil(@props.round / 2)
    roundSide = ''
    if @props.round != 0
      roundSide = if @props.round % 2 == 1 then 'ussr' else 'usa'

    # Shorthand for the components
    statusValue = (id='', title='', val='', side='')=>
      StatusValue _.assign {id, title, val, side}, handleValClick: @props.handleValClick


    R.div className: 'BoardStatus', [
      R.dl className: 'col', [
        statusValue 'score', 'Score', Math.abs(@props.score), scoreSide
        statusValue 'defcon', 'Defcon', @props.defcon
        statusValue 'milops', 'MilOps', @props.milops[0], 'usa'
        statusValue 'milops', '', @props.milops[1], 'ussr'
      ]
      R.dl className: 'col', [
        statusValue 'turn', 'Turn', @props.turn
        statusValue 'round', 'Round', round, roundSide
        statusValue 'space', 'Space', @props.space[0], 'usa'
        statusValue 'space', '', @props.space[1], 'ussr'
      ]
    ]



BoardLink = React.createClass
  displayName: 'BoardLink'
  render: ->
    R.line @props



BoardNode = React.createClass
  displayName: 'BoardNode'

  handleIPClick: (side, dir)->
    @props.handleIPClick @props.id, side, dir

  getInitialState: ->
    @componentWillReceiveProps @props

  componentWillReceiveProps: (nextProps)->
    {usa, ussr} = nextProps
    state = {usa, ussr}
    @setState state
    state


  render: ->
    controlUSA = (@state.usa - @state.ussr) >= @props.stab
    controlUSSR = (@state.ussr - @state.usa) >= @props.stab


    gAttrs =
      transform: @props.transform
      className: "node-#{@props.group} usa#{@state.usa} " + cx
        'node': true
        'node-btl': @props.btl == 1
        'node-nonbtl': @props.btl != 1
        'node-region-info': @props.regionInfo
        'node-usa-control': controlUSA
        'node-ussr-control': controlUSSR
        'node-region-info': @props.regionInfo



    polyClassName =
        if @props.regionInfo
          'hide'
        else switch @props.group
          when 'eu' then 'node-bg-eu'
          when 'sea' then 'node-bg-sea'
          else 'hide'

    titleTextAttrs =
      className: "node-title-text"
      x: if @props.regionInfo or @props.superpower
            0
          else
            -@props.node.width/2 + 2
      y: if @props.regionInfo
            -6
          else if @props.superpower
            6
          else
            -(@props.node.height/2) + @props.node.titleFontSize
       

    stabTextAttrs =
      className: "node-stab"
      x: (@props.node.width/2) - 10
      y: -(@props.node.height/2) + @props.node.titleFontSize + 1

    regionTextAttrs =
      className: if @props.points then 'node-text' else 'hide'
      x: 0
      y: 10
      width: @props.node.width

    regionText = if @props.points then @props.points.join(' ') else ''

    R.g gAttrs, [
      # Node bg
      R.rect
        className: 'node-bg ' + @state.usa
        width: @props.width
        height: @props.height
        title: Math.random()
        x: -@props.width/2
        y: -@props.height/2

      R.polygon
          className: polyClassName
          points: [
              "#{-@props.width/2},#{@props.height/2}"
              "#{@props.width/2},#{@props.height/2}"
              "#{@props.width/2},#{-@props.height/2 + @props.titleHeight}"
            ].join ' '
             
      R.rect
        className: 'node-title-bg'
        width: @props.width
        height: @props.titleHeight
        x: -@props.width/2
        y: -@props.height/2

      R.line
        className: 'node-line'
        width: @props.width
        x1: -@props.width/2
        y1: -@props.height/2 + @props.node.titleHeight
        x2: @props.width/2
        y2: -@props.height/2 + @props.node.titleHeight

      R.text titleTextAttrs, @props.shortname
      R.text stabTextAttrs, @props.stab
      R.text regionTextAttrs, regionText

      BoardNodeIP node: @props.node, side: 'usa', ip: @state.usa, ctrl: controlUSA, handleIPClick: @handleIPClick, ref: 'ipusa'
      BoardNodeIP node: @props.node, side: 'ussr', ip: @state.ussr, ctrl: controlUSSR, handleIPClick: @handleIPClick, ref: 'ipussr'
    ]


BoardNodeIP = React.createClass
  displayName: 'BoardNodeIP'

  handleIPClick: (dir, ev)->
    @props.handleIPClick @props.side, dir

  render: ->
    position = if @props.side == 'usa' then 1 else 0

    hideIP = if @props.ip == 0 then 'hide' else ''

    gAttrs =
      transform: "translate(#{-@props.node.width/2 * position}, #{-@props.node.titleHeight/2 - 1})"
      width: @props.node.width/2
      height: @props.node.height - @props.node.titleHeight
      className: "node-ip-#{@props.side}"

    textAttrs =
      x: @props.node.width/4
      y: @props.node.height/2 - 1
      className: hideIP

    ipClickHeight = (@props.node.height - @props.node.titleHeight) / 2

    R.g gAttrs, [
      R.rect
        width: @props.node.width/2
        height: @props.node.height - @props.node.titleHeight
        className: "node-ip-bg-#{@props.side} #{hideIP}"
      R.text textAttrs, @props.ip
      R.rect
        width: @props.node.width/2
        height: ipClickHeight
        className: "node-ip-click"
        onClick: @handleIPClick.bind this, 'up'
      R.rect
        width: @props.node.width/2
        height: ipClickHeight
        y: ipClickHeight
        className: "node-ip-click"
        onClick: @handleIPClick.bind this, 'dn'
    ]

  












WhoopsView = React.createClass
  render: ->
    R.div {}, [
      R.h2 {}, "DEFCON 1"
      R.p className:'lead', [
        "Looks like TwiStrug triggered nuclear war. WHOOPSIE DAISY!"
        R.br {}
        R.a href:"#/cards", "How about looking over the cards?"
      ]
    ]

HomeView = React.createClass
  render: ->
    R.div {}, [
      R.p className:'lead blurb', [
        "TwiStrug is a companion application for "
        R.a href:"http://en.wikipedia.org/wiki/Twilight_Struggle", "Twilight Struggle"
        ". It would not exist without "
        R.a href: "http://twilightstrategy.com", "Twilight Strategy"
        "."
      ]
      CardsView cards: @props.cards, state: @props.state
    ]



NavView = React.createClass
  getDefaultProps: ->
    active: ''

  render: ->

    li = (menuKey, href, title)=>
      R.li className: cx('active': @props.active == menuKey),
        R.a 'data-before': '★', 'data-after': '★', href: href, title

    R.nav className: "navbar ", role: "navigation",
      R.div className: "container", [

        R.div className: "navbar-header",
          R.a className: "navbar-brand", href: '#/', [
            R.span className: "twi", "Twi"
            R.span className: "strug", "Strug"
          ]

        R.ul className: "nav navbar-nav", [
          li 'cards', '#/cards', 'Cards'
          li 'board', '#/board', 'Board'
          li 'about', '#/about', 'About'
        ]

      ]




# Main application component
# Responsible for routing and view management
TwiStrug = React.createClass
  componentWillMount: ()->
    $('#placeholder').hide()

  getInitialState: ->
    menuActive:null

  # Takes a view name and associated data
  setView: (name, pageTitle, menuActive='', data={}) ->
    if pageTitle? then setPageTitle pageTitle
    @setState
      view: {name, data}
      menuActive: menuActive

  componentDidMount: ->
    stateRoute = (name, pageTitle, menuActive, args)->
      state = qs.toObj args
      # Convert filter ids from str -> number
      if state?.filter?
        state.filter = state.filter.map (el)->
          parseInt el, 10
      @setView name, pageTitle, menuActive,
        state: state

    router = new Router
      #'/board': @setView.bind this, 'board', 'Board'

      '/board': ()=>
        $.getJSON '/data/map-data.json', (mapData) =>
          {countryPositions, countries, links, regionInfoNodes} = mapData

          countries = countries.map (node)->
            node.x = countryPositions[node.name].x
            node.y = countryPositions[node.name].y
            node.fixed = true
            node
          
          regionInfoNodes = regionInfoNodes.map (node)->
            node.regionInfo = true
            node.fixed = true
            node

          nodes = _.union(countries, regionInfoNodes)
          nodes = _.zipObject _.pluck(nodes, 'id'), nodes

          @setView 'board', 'Board', 'board', {mapData, countries, regionInfoNodes, links, nodes}

      '/card/:id': (id)=>
        id = parseInt id, 10
        nextId = if id == 110 then 1 else id + 1
        prevId = if id == 1 then 110 else id - 1
        card = _.find @props.cards, id: id
        nextCard = _.find @props.cards, id: nextId
        prevCard =  _.find @props.cards, id: prevId
        pageTitle = "#{card.title} (##{card.id})"
        @setView 'card', pageTitle, 'cards', {card, nextCard, prevCard}
      
      '/countries': @setView.bind this, 'countries', 'Countries', 'countries'
      
      '/about': @setView.bind this, 'about', 'About', 'about'

    router.configure
      notfound: @setView.bind this, 'whoops', 'Whoops'

    router.on /cards\??(.*)/, stateRoute.bind this, 'cards', 'Cards', 'cards'
    router.on /\??(.*)/, stateRoute.bind this, 'cards', 'Cards', 'cards'

    router.init('/')
    return

  render: ->
    # If the router hasn't kicked in, do nothing
    if not @state?.view
      mainView = R.p className: 'lead', 'TwiStrug is loading...'
    else
      mainView = switch @state.view.name
        when 'home' then HomeView
          cards: @props.cards
          state: @state.view.data.state
        when 'card' then CardView @state.view.data
        when 'cards' then CardsView
          cards: @props.cards
          state: @state.view.data.state
        when 'countries' then CountriesView()
        #when 'board' then return BoardPicView()
        when 'board' then BoardView @state.view.data
        when 'about' then AboutView()
        when 'whoops' then WhoopsView()


    R.div {}, [
      NavView active: @state.menuActive
      R.div className: 'container', mainView
    ]
    

# Add keys to cards
addReactKey = (el)->
  el.key = "rk-#{el.id}"
  el

React.renderComponent TwiStrug({cards: cardsData.map(addReactKey)}),
  document.getElementById 'app'
