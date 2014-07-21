R = React.DOM
update = React.addons.update
cx = React.addons.classSet
$ = Zepto


# Add function to Zepto
$.getScript = (src, func) ->
  script = document.createElement('script')
  script.async = "async"
  script.src = src
  if func
    script.onload = func

  document.getElementsByTagName("head")[0].appendChild script


libs = require './libs'
pages = require './pages'
views = require './views'

NavView = require './views/Nav'

TwiStrug = React.createClass
  componentWillMount: ()->
    $('#placeholder').hide()

  getInitialState: ->
    menuActive:null

  # Takes a view name and associated data
  setView: (name, pageTitle, menuActive='', data={}) ->
    if pageTitle? then libs.setPageTitle pageTitle
    @setState
      view: {name, data}
      menuActive: menuActive

  componentDidMount: ->
    stateRoute = (name, pageTitle, menuActive, args)->
      state = libs.qs.toObj args
      # Convert filter ids from str -> number
      if state?.filter?
        state.filter = state.filter.map (el)->
          parseInt el, 10
      @setView name, pageTitle, menuActive,
        state: state

    router = new Router
      #'/board': @setView.bind this, 'board', 'Board'
      '/': @setView.bind this, 'home', 'Home'

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

          gameId = Math.random().toString(36).slice(2)
          stateHistory = new libs.StateHistory
            id: gameId


          boardProps = {gameId, mapData, countries, regionInfoNodes, links, nodes, stateHistory}

          @setView 'board', 'Board', 'board', boardProps

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
    #router.on /\??(.*)/, stateRoute.bind this, 'cards', 'Cards', 'cards'

    router.init('/')
    return

  render: ->
    # If the router hasn't kicked in, do nothing
    if not @state?.view
      mainView = R.p className: 'lead', 'TwiStrug is loading...'
    else
      mainView = switch @state.view.name
        when 'home' then pages.Home
          cards: @props.cards
          state: @state.view.data.state
        when 'card' then pages.Card @state.view.data
        when 'cards' then pages.Cards
          cards: @props.cards
          state: @state.view.data.state
        when 'countries' then pages.Countries()
        #when 'board' then return BoardPicView()
        when 'board' then pages.Board @state.view.data
        when 'about' then pages.About()
        when 'whoops' then pages.Whoops()

      if @state.view.name == 'board'
        boardStateHistory = views.BoardStateHistory stateHistory: @state.view.data.stateHistory


    R.div {}, [
      NavView active: @state.menuActive
      R.div className: 'container', mainView
      boardStateHistory
    ]
    

# Add keys to cards
addReactKey = (el)->
  el.key = "rk-#{el.id}"
  el

React.renderComponent TwiStrug({cards: cardsData.map(addReactKey)}),
  document.getElementById 'app'
