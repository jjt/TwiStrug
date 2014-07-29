R = React.DOM
libs = require '../libs'

module.exports  = React.createClass
  displayName: 'CardView'
  componentDidMount: ->
    $(window).on 'scroll', @floatingCard
    $(window).on 'resize', @floatingCard
    $(document).on 'keypress', @handleKeyPress
    @getStrategy()

  componentWillUnmount: ->
    window.onkeypress = null
    $(window).off 'scroll', @floatingCard
    $(window).off 'resize', @floatingCard
    $(document).off 'keypress', @handleKeyPress

  componentDidUpdate: ->
    @getStrategy()
    #@setWindowKeypressHandler()

  floatingCard: ->
    $header = $ @refs.header.getDOMNode()
    $img = $ @refs.cardImg.getDOMNode()
    $win = $ window
    ho = $header.offset()
    isScrolling = $win.scrollTop() > ho.top + ho.height
    $img.toggleClass 'card-img-scroll', isScrolling
    $img.css 'right', "#{($win.width() - ho.width - 15) / 2}px"

  handleKeyPress: (ev) ->
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
      R.div className: 'page-header clearfix', ref: 'header',
        R.h2 className: libs.cardClassName(card), [
          R.span className:'card-ops', if card.ops < 1 then "S" else card.ops
          "#{card.title} "
          R.span className:'card-id', "##{card.id}"
        ]
        R.div className: 'card-nav', [
          R.a {href:"#/card/#{@props.prevCard.id}", className:'card-nav-prev'}, [
            "#{@props.prevCard.title}"
            R.span className: 'card-nav-label', [
              R.small {}, '◀ '
              R.span className: 'shortcut', '(H)'
              ' prev'
            ]
          ]
          R.a {href:"#/card/#{@props.nextCard.id}", className:'card-nav-next'}, [
            "#{@props.nextCard.title}"
            R.span className: 'card-nav-label', [
              'next '
              R.span className: 'shortcut', '(L)'
              R.small {}, ' ▶'
            ]
          ]
        ]
      R.p {className: 'pull-left card-body'}, card.text
      R.img key: imageUrl, src: imageUrl, className: 'imgRight', ref:'cardImg'
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
