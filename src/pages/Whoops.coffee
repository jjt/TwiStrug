R = React.DOM

module.exports = React.createClass
  displayName: 'WhoopsView'
  render: ->
    R.div {}, [
      R.h2 {}, "DEFCON 1"
      R.p className:'lead', [
        "Looks like TwiStrug triggered nuclear war. WHOOPSIE DAISY!"
        R.br {}
        R.a href:"#/cards", "How about looking over the cards?"
      ]
    ]
