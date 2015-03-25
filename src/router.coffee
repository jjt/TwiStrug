vent = require './vent'
mapDatav2 = require '../app/data/map-data-v2.json'
oneLetterContinentCode = require './libs/oneLetterContinentCode'
setPageTitle = require './libs/setPageTitle'
qs = require './libs/qs'

setRouteOriginal = Router::setRoute
Router::setRoute = ->
  @currentRoute = @getRoute()
  setRouteOriginal.apply this, arguments


module.exports =
  getDefaultProps: ->
    router: new Router

  # Takes a view name and associated data
  setView: (name, title, menuActive='', data={}) ->
    if title? then setPageTitle title
    @setState
      view: {name, data, title}
      menuActive: menuActive
      slideIn: @state.view?.name != name

  componentDidMount: ->

    stateRoute = (name, pageTitle, menuActive, args)=>
      state = qs.toObj args
      # Convert filter ids from str -> number
      if state?.filter?
        if not _.isArray state.filter
          state.filter = [state.filter]
        state.filter = state.filter.map (el)->
          parseInt el, 10
      @setView name, pageTitle, menuActive,
        state: state

    router = @props.router

    vent.on 'setRoute', router.setRoute.bind router

    router.configure
      notfound: @setView.bind this, 'whoops', 'Whoops'
      #'/board': @setView.bind this, 'board', 'Board'

    router.on '/', @setView.bind this, 'home', 'Home'


    router.on '/card/:id', (id)=>
      id = parseInt id, 10
      nextId = if id == 110 then 1 else id + 1
      prevId = if id == 1 then 110 else id - 1
      card = _.find @props.cards, id: id
      nextCard = _.find @props.cards, id: nextId
      prevCard =  _.find @props.cards, id: prevId
      pageTitle = "#{card.title} (##{card.id})"
      @setView 'card', pageTitle, 'cards', {card, nextCard, prevCard}


    router.on '/countries', @setView.bind this, 'countries', 'Countries', 'countries'


    router.on '/about', @setView.bind this, 'about', 'About', 'about'


    router.on /cards\??(.*)/, ()=>
      # If we're on a small screen, redir the user to view=title
      pageQS = qs.toObj()
      if window.innerWidth < 768 and not pageQS?.view?
        qs.set('view','title')
        return

      stateRoute 'cards', 'Cards', 'cards'


    router.on /game\/?(\w*)\/?(.*)/, (gameId, incomingState)=>

      if not gameId? or gameId == ''
        gameId = Math.random().toString(36).slice(2,10)
        window.history.replaceState null, "Game #{gameId}", "#/game/#{gameId}"

      {countryShortcuts, countries, links, regionInfoNodes} = mapDatav2

      # Countries and region info nodes combined
      nodes = _.union countries, regionInfoNodes

      props = {
        gameId, countries, regionInfoNodes, links, nodes
        incomingState, countryShortcuts}

      @setView 'game', 'Game', 'game', props
      console.log 'GAME ROUTE'


    router.on /board\/?(\w*)\/?(.*)/, (gameId, incomingState)=>
      if not gameId? or gameId == ''
        gameId = Math.random().toString(36).slice(2,10)
        window.history.replaceState null, "Board #{gameId}", "#/board/#{gameId}"

      {countryShortcuts, countries, links, regionInfoNodes} = mapDatav2

      # Countries and region info nodes combined
      nodes = _.union countries, regionInfoNodes

      boardProps = {
        gameId, countries, regionInfoNodes, links, nodes
        incomingState, countryShortcuts}

      @setView 'board', 'Board', 'board', boardProps


    router.on /(access_token.*)/, (qs)=>
      console.log qs


    router.init('/')

