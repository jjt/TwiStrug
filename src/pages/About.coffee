R = React.DOM

module.exports = React.createClass
  displayName: 'AboutView'
  render: ->
    R.div className: 'aboutView', [
      R.div className: 'row', [
        R.div className: 'col-md-8', [
          R.div className: 'col-md-12',
            R.h2 {}, [
              "About "
              R.span className: 'twi', 'Twi'
              R.span className: 'strug', 'Strug'
            ]
            R.p {}, [
              "TwiStrug was created as a card reference for "
              R.a href:"http://en.wikipedia.org/wiki/Twilight_Struggle",
                "Twilight Struggle"
              ". It has since expanded to include a playable version of the board for
              local games without taking up as much table space."
            ]
            R.p {}, [
              "For more in-depth strategy, look no further than the inimitable "
              R.a href: "http://twilightstrategy.com", "Twilight Strategy"
              ". It has tons of great content and
              analysis available, including discussions about nearly every card.
              Please support Twilight Strategy and its author, "
              R.em {}, "theory"
              ", by purchasing Twilight Struggle from Amazon on the sidebar of his
              site, or by paying some money for the associated "
              R.a href: "https://leanpub.com/twilightstrategy", "e-book"
              ". It's Twilight Strategy in book form and deserves your money."
            ]
            R.p {}, [
              "TwiStrug was made by "
              R.a href: "http://jjt.io/", "Jason Trill"
              ". Source available on "
              R.a href: "https://github.com/jjt/twistrug", "Github"
              "."
            ]
            R.h2 {}, "About Twilight Struggle"
            R.blockquote {}, [
              R.p {}, "Twilight Struggle is a card driven game played over a maximum of 10 turns [each with 6 or 7 rounds]. The game may end sooner (and frequently does)."
        
              R.p {}, "[It] is fundamentally a game about area control. There are six geopolitical regions on the map: Europe (split into Eastern and Western Europe subregions), Asia (including the Southeast Asia subregion), the Middle East, Africa, Central America, and South America. Within each region are countries that have a stability number, representing how stable the government tends to be."

              R.p {}, "Having control of countries helps determine whether you have presence, domination, or control of a region, which in turn helps you earn victory points. Within each region, there are a number of battleground countries, which are considered key to the region."
              R.p {},
                R.em {},
                  R.a href: 'http://boardgamegeek.com/thread/471953/rogers-reviews-deluxe-twilight-struggle-comprehens', 'Forum post by leroy43'
            ]

        
        ]
        R.div className: 'col-md-4', [
          R.img className: 'img img-fluid AboutView-tsbox', src: "/images/tsbox.jpg"
        ]
      ]

      R.div className: 'row',
        R.div className: 'col-md-12',
          R.p {},
            R.a className: 'img-link', href: "/images/tsboard.jpg",
              R.img className: 'img img-fluid img-center', src: '/images/tsboard-md.jpg'
    ]
