R = React.DOM
cx = React.addons.classSet
$ = Zepto

$app = document.getElementById 'app'


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

cardStage = (stage) ->
  return 'EARLY' if stage == 1
  return 'MID' if stage == 2
  return 'LATE'

zeroPad = (str, len=3) ->
 ('000' + str).substr(-len,len)

Card = React.createClass
  render: ->
    R.div className: cardClassName(@props) + ' card', [
      R.a {className: 'card-title-holder', href: "#/card/#{@props.id}"}, [
        R.span className: 'card-stage', cardStage @props.stage
        R.h4 className: 'card-ops', if @props.ops < 1 then "S" else @props.ops
        R.h4 className: 'card-title', @props.title
      ]
      R.p className: 'card-text', @props.text
    ]


CardList = React.createClass
  render: ->
    className = cx
      'cardList': true
      'cardListFull': @props.fullText
    R.div {className}, @props.cards.map (el) =>
      Card _.merge el, {showFullText: @props.fullText}


CardsView = React.createClass
  componentWillReceiveProps: (nextProps) ->
    @setState @propsToState nextProps

  propsToState: (props = @props) ->
    filter: if props.filter? then props.filter else false
    sort: if props.sort? then props.sort else 'stage'

  getInitialState: ->
    _.merge @propsToState(@props), fullText: false

  handleFullText: ->
    @setState
      fullText: this.refs.fullText.getDOMNode().checked

  sortAndFilterCards: ->
    [sort, order] = @state.sort.split '-'


    sortParam = switch sort
      when 'textlen' then (el) -> el.text.length
      when 'side' then ['owner','stage','id']
      when 'ops' then 'ops'
      else ['stage', 'id']

    if sort == 'ops'
      order = if order == 'rev' then false else 'rev'

    cards = _.sortBy @props.cards, sortParam

    if order == 'rev'
      cards.reverse()

    cards

  render: ->
    sortLink = (sort, display) =>
      className = cx active: @state.sort == sort
      href = "#/cards/sort/#{sort}"
      ref = "#{sort}Sort"
      R.a {href, ref, className}, display

    R.div className: 'cardsView' , [
      R.div className: 'page-header', [
        R.h2 {}, 'Cards'
        " "
        R.div className: 'cardControls sortBy pull-left', [
          R.strong {}, 'Sort by:'
          sortLink 'stage', 'Stage'
          sortLink 'ops', 'Ops'
          sortLink 'side', 'Side'
        ]
        R.input
          name: 'fullText'
          id: 'fullText'
          type:'checkbox'
          ref:'fullText'
          onChange: @handleFullText
          checked: @state.fullText
        " "
        R.label {htmlFor:'fullText'}, 'Show card text'
        
      ]
      CardList
        cards: @sortAndFilterCards()
        fullText: @state.fullText
    ]


AboutView = React.createClass
  render: ->
    R.div className: 'aboutView', [
      R.div className: 'page-header',
        R.h2 {}, "About TwiStrug"
      R.img className: 'imgRight', src: "/images/tsbox.jpg"
      R.p {}, [
        "TwiStrug is for people who want to learn more about the
        cards of Twilight Struggle in a zippy web application. For more
        in-depth strategy, go to the excellent"
        " "
        R.a href: "http://twilightstrategy.com", "Twilight Strategy"
        " "
        "site. It has tons of great content and
        analysis available, including discussions about nearly every card. Please
        support Twilight Strategy and its author,"
        " "
        R.em {}, "theory"
        ", "
        "by purchasing Twilight Strugle from Amazon on the sidebar of the site."
      ]
    ]
    

CardView = React.createClass
  componentDidMount: ->
    $.get "/data/cardStrategy/#{zeroPad(@props.id)}.html", (data)=>
      @refs.cardStrategy.getDOMNode().innerHTML = data
  render: ->
    imageUrl = "/images/cards/#{zeroPad(@props.id)}.jpg"
    R.div className: 'cardView', [
      R.div className: 'page-header',
        R.h2 className: cardClassName(@props), [
          R.span className:'card-ops', if @props.ops < 1 then "S" else @props.ops
          @props.title
        ]
      R.img src: imageUrl, className: 'imgRight'
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
      R.div className: 'page-header',
        R.h2 {}, 'Map'
      R.a href:'/images/tsmap.jpg',
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

# Main application component
# Responsible for routing and view management
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
      '/about': @setView.bind this, 'about'
    router.configure
      notfound: @setView.bind this, 'whoops'
    router.init('/cards')
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
      when 'countries' then return CountriesView()
      when 'map' then return MapView()
      when 'about' then return AboutView()
      when 'whoops' then return WhoopsView()
    
    WhoopsView()

# Should move this initialisation to all card(s) routes
$.getJSON '/data/cards.json', (cards)->
  # Default ordering should be by stage, then id
  cards = _.sortBy cards, ['stage', 'id']
  React.renderComponent TwiStrug({cards}), $app

