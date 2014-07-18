R = React.DOM
cx = React.addons.classSet

module.exports = React.createClass
  displayName: 'NavView'
  getDefaultProps: ->
    active: ''

  render: ->

    li = (menuKey, href, title)=>
      R.li className: cx('active': @props.active == menuKey),
        R.a 'data-before': '★', 'data-after': '★', href: href, title

    R.nav className: "navbar ", role: "navigation",
      R.div className: "container", [

        R.div className: "navbar-header",
          R.a className: "navbar-brand", href: '#/', [
            R.span className: "twi", "Twi"
            R.span className: "strug", "Strug"
          ]

        R.ul className: "nav navbar-nav", [
          li 'cards', '#/cards', 'Cards'
          li 'board', '#/board', 'Board'
          li 'about', '#/about', 'About'
        ]

      ]
