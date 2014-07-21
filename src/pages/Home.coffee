R = React.DOM

module.exports = React.createClass
  displayName: 'HomeView'
  render: ->
    R.div className: 'HomeView', [
      R.div className: 'row', [
        R.div className: 'col-xs-12', [
          R.h1 className: 'text-center', [
            R.span className: "twi owner-us", "Twi"
            R.span className: "strug owner-ussr", "Strug"
          ]
          R.p className:'lead blurb', [
            "TwiStrug is a companion application for "
            R.a href:"http://en.wikipedia.org/wiki/Twilight_Struggle", "Twilight Struggle"
            ". It would not exist without "
            R.a href: "http://twilightstrategy.com", "Twilight Strategy"
            "."
          ]
        ]
      ]
      R.div className: 'row', [
        R.div className: 'col-md-6', [
          R.a className: 'home-link', href: '#/board', [
            R.h3 {}, 'Playable Board'
            R.img className: 'img-responsive', src: '/images/home-board.jpg'
            R.p {}, 'Fully playable board - just add cards'
          ]
        ]
        R.div className: 'col-md-6', [
          R.a className: 'home-link home-link-cards', href: '#/cards', [
            R.h3 {}, 'View Cards'
            R.img className: 'img-responsive', src: '/images/home-cards.jpg'
            R.p {}, 'Explore the cards of Twilight Struggle'
          ]
        ]
      ]
    ]

