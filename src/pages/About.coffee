R = React.DOM

module.exports = React.createClass
  displayName: 'AboutView'
  render: ->
    R.div className: 'aboutView', [
      R.h2 {}, "About TwiStrug"
      R.img className: 'imgRight', src: "/images/tsbox.jpg"
      R.p {}, [
        "TwiStrug was created as a card reference for "
        R.a href:"http://en.wikipedia.org/wiki/Twilight_Struggle",
          "Twilight Struggle"
        ". It has since expanded to include a playable version of the board for
        local games without taking up as much table space."
      ]
      R.p {}, [
        "For more in-depth strategy, go to the excellent "
        R.a href: "http://twilightstrategy.com", "Twilight Strategy"
        " site. It has tons of great content and
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
    ]
