R = React.DOM
cx = React.addons.classSet

$app = document.getElementById 'app'

Card = React.createClass
  render: ->
    console.log @props
    classes = cx
      'card': true
      'owner-us': @props.owner == 'us'
      'owner-ussr': @props.owner == 'ussr'

    R.div className: classes, [
      R.h5 {}, @props.title
      R.h1 className: 'card-ops', @props.ops
    ]

CardList = React.createClass
  render: ->
    console.log @props
    R.div className:'cardList', @props.cards.map (el)->
      Card el
    

CardsView = React.createClass
  render: ->
    console.log @props.cards

    R.div {}, [
      R.h2 {}, 'Cards'
      CardList {cards: @props.cards}
    ]

TwiStrug = React.createClass
  render: ->
    R.div {}, [
      R.h2 {}, 'TWISTRUG'
    ]


showCards = (filter = 'none') ->
  console.log 'showCards'
  $.getJSON('/data/cards.json').done (cards)->
    React.renderComponent CardsView({cards}), $app

showCard = (id) ->

showMap = () ->
  console.log 'showMap'

routes =
  '/': showCards
  '/cards': showCards
  '/cards/:filter': showCards
  '/card/:id': showCard
  '/map': showMap

router = Router routes
router.init()
