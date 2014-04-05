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

cardStage = (stage) ->
  return 'EARLY' if stage == 1
  return 'MID' if stage == 2
  return 'LATE'

zeroPad = (str, len=3) ->
 ('000' + str).substr(-len,len)

Card = React.createClass
  render: ->
    R.div className: cardClassName(@props), [
      R.span className: 'card-stage', cardStage @props.stage
      R.a {className: 'card-title-holder', href: "#/card/#{@props.id}"}, [
        R.h4 className: 'card-ops', if @props.ops < 1 then "S" else @props.ops
        R.h4 className: 'card-title', @props.title
      ]
      R.div className: 'card-text', @props.text
    ]

CardList = React.createClass

  getInitialState: (props) ->
    _.merge {fullText: false}, @propsToState(@props)

  propsToState: (props = @props) ->
    filter: if props.filter? then props.filter else false
    sort: if props.sort? then props.sort else 'default'

  componentWillReceiveProps: (nextProps) ->
    @setState @propsToState nextProps

  sortAndFilterCards: ->
    [sort, order] = @state.sort.split '-'

    if sort == 'default'
      sort = ['stage', 'id']

    if sort == 'textlen'
      sort = (el) -> el.text.length

    cards = _.sortBy @props.cards, sort
    if order == 'rev' then cards.reverse()
    cards

  render: ->
    console.log @props.fullText
    className = cx
      'cardList': true
      'cardListFull': @props.fullText
    R.div {className}, @sortAndFilterCards().map (el) =>
      Card _.merge el, {showFullText: @props.fullText}


CardsView = React.createClass
  getInitialState: ->
    fullText: false

  handleFullText: ->
    @setState
      fullText: this.refs.fullText.getDOMNode().checked

  render: ->
    console.log 'CardsView', @state
    R.div className: 'cardsView' , [
      R.div className: 'header', [
        R.div className:'pull-right', [
          R.input
            name: 'fullText'
            id: 'fullText'
            type:'checkbox'
            ref:'fullText'
            onChange: @handleFullText
            checked: @state.fullText
          " "
          R.label {htmlFor:'fullText'}, 'Show card descriptions'
        ]
        R.h2 {}, 'Cards'
      ]
      CardList
        cards: @props.cards
        sort: @props.sort
        fullText: @state.fullText
    ]

CardView = React.createClass
  componentDidMount: ->
    $.get("/data/cardStrategy/#{zeroPad(@props.id)}.html")
      .done (data)=>
        @refs.cardStrategy.getDOMNode().innerHTML = data
  render: ->
    imageUrl = "/images/cards/#{zeroPad(@props.id)}.jpg"
    R.div className: 'cardView ' + cardClassName(@props), [
      R.h2 {}, [
        R.span className:'card-ops', if @props.ops < 1 then "S" else @props.ops
        @props.title
      ]
      R.img className: 'pull-right', src: imageUrl
      R.p {}, @props.text
      R.div {className: 'card-strategy', id: 'card-strategy'}, [
        R.h3 {}, [
          'Strategic Notes from'
          ' '
          R.a href:@props.url, 'TwilightStrategy.com'
        ]
        R.div ref:'cardStrategy'
      ]
    ]


CountriesView = React.createClass
  render: ->
    R.div className: 'countriesView', [
      R.h2 {}, 'Countries'
    ]

MapView = React.createClass
  render: ->
    R.div className: 'mapView', [
      R.h2 {}, 'Map'
      R.img className: 'fluid', src:'/images/tsmap.jpg'
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


TwiStrug = React.createClass
  # Takes a view name and associated data
  setView: (name, data={}) ->
    @setState view: {name, data}

  componentDidMount: ->
    router = Router
      '/cards':
        '': @setView.bind this, 'cards'
        '/sort/:sort': (sort) =>
          @setView 'cards',
            sort: sort
      '/map': @setView.bind this, 'map'
      '/card/:id': (id) =>
        @setView 'card',
          card: _.find @props.cards, id: +id
      '/countries': @setView.bind this, 'countries'
    router.configure
      notfound: @setView.bind this, 'whoops'
    router.init()
    return

  render: ->
    # If the router hasn't kicked in, do nothing
    if not @state?.view
      return R.p className: 'lead', 'TwiStrug is loading'

    switch @state.view.name
      when 'card' then return CardView @state.view.data.card
      when 'cards' then return CardsView
        cards: @props.cards
        sort: @state.view.data.sort
        sortReverse: @state.view.data.sortReverse
      when 'countries' then return CountriesView()
      when 'map' then return MapView()
      when 'whoops' then return WhoopsView()
    
    WhoopsView()


$.getJSON('/data/cards.json').done (cards)->
  # Default ordering should be by stage, then id
  cards = _.sortBy cards, ['stage', 'id']
  React.renderComponent TwiStrug({cards}), $app

