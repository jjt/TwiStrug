R = React.DOM
RCTG = React.addons.CSSTransitionGroup
update = React.addons.update
cx = React.addons.classSet
$ = Zepto
vent = require './vent'

cardsData = require('../lib/cards.json')


# Add function to Zepto
$.getScript = (src, func) ->
  script = document.createElement('script')
  script.async = "async"
  script.src = src
  if func
    script.onload = func

  document.getElementsByTagName("head")[0].appendChild script


pages = require './pages'
views = require './views'

router = require './router'

TwiStrug = React.createClass
  mixins: [router]

  getInitialState: ->
    menuActive:null
    view: {}
    slideIn: true

  componentWillMount: ()->
    $('#placeholder').hide()

  componentDidMount: ->
    vent.on 'boardStateChange', (gameId, stateEnc)=>
      window.history.replaceState null, "#{@state.view.name} #{gameId}",
        "#/#{@state.view.name}/#{gameId}/#{stateEnc}"

  componentWillUpdate: ->
    $slideIn = $(@refs.slideIn.getDOMNode())
    $slideIn.removeClass 'slideIn-in'
    #$mainView = $(@refs.mainView.getDOMNode())
    #$mainView.removeClass 'mainView-out'

  componentDidUpdate: -> @slideIn()

  slideIn: ->
    if not @state.slideIn
      return
    $slideIn = $(@refs.slideIn.getDOMNode())
    setTimeout ->
      $slideIn.addClass('slideIn-in')
    , 10


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
        when 'game' then pages.Game @state.view.data
        when 'about' then pages.About()
        when 'whoops' then pages.Whoops()

    mainViewClass = cx
      'container': @state.view.name not in ['board', 'game']
      'slideIn': @state.slideIn

    R.div {}, [
      views.Nav key:'nav', active: @state.menuActive
      R.div key:'mainview', ref: 'slideIn', className: mainViewClass, mainView
      views.Footer key:'footer'
    ]


# Add keys to cards
addReactKey = (el)->
  el.key = "rk-#{el.id}"
  el

React.renderComponent TwiStrug({cards: cardsData.map(addReactKey)}),
  document.getElementById 'app'
