R = React.DOM

module.exports = React.createClass
  displayName: 'HomeView'
  render: ->
    R.div {}, [
      R.p className:'lead blurb', [
        "TwiStrug is a companion application for "
        R.a href:"http://en.wikipedia.org/wiki/Twilight_Struggle", "Twilight Struggle"
        ". It would not exist without "
        R.a href: "http://twilightstrategy.com", "Twilight Strategy"
        "."
      ]
      CardsView cards: @props.cards, state: @props.state
    ]
