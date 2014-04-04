R = React.DOM
cx = React.addons.classSet

$app = document.getElementById 'app'


cardClassName = (props) ->
  ownerClass = "owner-#{props.owner}"
  classes = cx
    'card': true
    'asiaScoring': props.title == 'Asia Scoring'
    'europeScoring': props.title == 'Europe Scoring'
    'middleEastScoring': props.title == 'Middle East Scoring'
    'centralAmericaScoring': props.title == 'Central America Scoring'
    'southeastAsiaScoring': props.title == 'Southeast Asia Scoring*'
    'africaScoring': props.title == 'Africa Scoring'
    'southAmericaScoring': props.title == 'South America Scoring'
    'ongoing': props.ongoing

  ownerClass + ' ' + classes

Card = React.createClass
  render: ->
    R.a href: "#/card/#{@props.id}", className: cardClassName(@props), [
      R.h3 className: 'card-ops', @props.ops 
      R.div className: 'card-title-holder', [
        R.h4 className: 'card-title', @props.title
      ]
    ]

CardList = React.createClass
  render: ->
    R.div className:'cardList', @props.cards.map (el)->
      Card el


CardsView = React.createClass
  render: ->
    R.div {}, [
      R.h2 {}, 'Cards'
      CardList {cards: @props.cards}
    ]

CardView = React.createClass
  render: ->
    imageUrl = "/images/cards/#{('000' + @props.id).substr(-3,3)}.jpg"
    R.div className: 'cardView ' + cardClassName(@props), [
      R.h2 {}, [
        R.span className:'card-ops', @props.ops
        @props.title
      ]
      R.img className: 'pull-right', src: imageUrl
      R.p {}, @props.text
    ]

MapView = React.createClass
  render: ->
    R.img className: 'fluid', src:'/images/tsmap.jpg'

TwiStrug = React.createClass
  getInitialState: ->
    view: 'cards'

  handleRoute: ->
    console.log arguments

  componentDidMount: ->
    router = Router
      '/cards': @setState.bind this, view: 'cards'
      '/map': @setState.bind this, view: 'map'
      '/card/:id': ()=>
        id = +arguments[0]
        console.log id
        @setState
          view: 'card'
          card: _.find @props.cards, 'id': id
    router.init()
    return

  render: ->
    switch @state.view
      when 'card' then CardView @state.card
      when 'cards' then CardsView cards: @props.cards
      when 'map' then MapView()



$.getJSON('/data/cards.json').done (cards)->
  cards = cards.map (el)->
    el.ops = 'S' if el.title.indexOf('Scoring') != -1
    el
  React.renderComponent TwiStrug({cards}), $app

