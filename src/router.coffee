libs = require './libs'
vent = require './vent'
mapData = require '../app/data/map-data.json'
oneLetterContinentCode = require './libs/oneLetterContinentCode'

setRouteOriginal = Router::setRoute
Router::setRoute = ->
  @currentRoute = @getRoute()
  setRouteOriginal.apply this, arguments

module.exports =
  getDefaultProps: ->
    router: new Router

  # Takes a view name and associated data
  setView: (name, pageTitle, menuActive='', data={}) ->
    if pageTitle? then libs.setPageTitle pageTitle
    @setState
      view: {name, data}
      menuActive: menuActive
      slideIn: @state.view?.name != name

  componentDidMount: ->
    stateRoute = (name, pageTitle, menuActive, args)->
      state = libs.qs.toObj args
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


    router.on /cards\??(.*)/, stateRoute.bind this, 'cards', 'Cards', 'cards'


    router.on /board\/?(\w*)\/?(.*)/, (gameId, incomingState)=>
      #if not gameId? or gameId == ''
        #return router.setRoute "board/#{Math.random().toString(36).slice(2)}"

      if not gameId? or gameId == ''
        gameId = Math.random().toString(36).slice(2,10)
        window.history.replaceState null, "Board #{gameId}", "#/board/#{gameId}"

      {countryPositions, countries, links, regionInfoNodes} = mapData

      #countries = countries.map (node)->
        #node.x = countryPositions[node.name].x
        #node.y = countryPositions[node.name].y
        #if not node.shortcut?
          #node.shortcut = node.shortname.slice(0,2).toLowerCase()
        #node.fixed = true
        #node

      # Add shortcuts
      countries = countries.map (node)->
          node.x = countryPositions[node.name].x
          node.y = countryPositions[node.name].y
          if not node.shortcut?
            node.shortcut = node.shortname.slice(0,2).toLowerCase()
          node

      countries = countries.map (node, index, countries)->
        node.shortcutUnique = node.shortcut
        isUnique = undefined == _.find countries, (c)->
          if c.continent == node.continent
            if c.shortcut.charAt(0) == node.shortcut.charAt(0) and c.id != node.id
              return true
            else
              return false
        if isUnique
          node.shortcutUnique = node.shortcut.charAt 0
        node

        
      
      regionInfoNodes = regionInfoNodes.map (node)->
        node.regionInfo = true
        node.fixed = true
        node

      nodes = _.union(countries, regionInfoNodes)
      nodes = _.zipObject _.pluck(nodes, 'id'), nodes

      countryShortcuts = _.mapValues _.groupBy(countries, 'continent'), (cNodes, continent)->
        _.pluck cNodes, 'shortcut'
      delete countryShortcuts.usa
      delete countryShortcuts.ussr

      shortKeys = _.map _.keys(countryShortcuts), (cS)-> oneLetterContinentCode cS
      countryShortcuts = _.zipObject shortKeys, _.values(countryShortcuts)

      key = gameId


      boardProps = {
        gameId, mapData, countries, regionInfoNodes, links, nodes,
        key, incomingState, countryShortcuts}

      @setView 'board', 'Board', 'board', boardProps


    router.init('/')

