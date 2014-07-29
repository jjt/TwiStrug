R = React.DOM
RCTG = React.addons.CSSTransitionGroup
update = React.addons.update
cx = React.addons.classSet
$ = Zepto

cardsData = require('../app/data/cards.json')


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

router = require './router'

TwiStrug = React.createClass
  mixins: [router]

  getInitialState: ->
    menuActive:null
    view: {}

  componentWillMount: ()->
    $('#placeholder').hide()

  componentWillUpdate: ->
    $slideIn = $(@refs.slideIn.getDOMNode())
    $slideIn.removeClass 'slideIn-in'
    #$mainView = $(@refs.mainView.getDOMNode())
    #$mainView.removeClass 'mainView-out'

  componentDidUpdate: -> @slideIn()

  slideIn: ->
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
        when 'about' then pages.About()
        when 'whoops' then pages.Whoops()

    mainViewClass = cx
      'container': @state.view.name != 'board' # Board needs to have its own container
      'slideIn': @state.slideIn?

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
