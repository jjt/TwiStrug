R = React.DOM
libs = require '../libs'

module.exports  = React.createClass
  displayName: 'CardView'
  componentDidMount: ->
    @getStrategy()
    @setWindowKeypressHandler()

  componentWillUnmount: ->
    window.onkeypress = null

  componentDidUpdate: ->
    @getStrategy()
    #@setWindowKeypressHandler()

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
    $.get "/data/cardStrategyLinked/#{libs.zeroPad(@props.card.id)}.html", (data)=>
      @refs.cardStrategy.getDOMNode().innerHTML = data

  render: ->
    card = @props.card
    imageUrl = "/images/cards/#{libs.zeroPad(card.id)}.jpg"
    R.div className: 'cardView', [
      R.div className: 'page-header clearfix',
        R.h2 className: libs.cardClassName(card), [
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
