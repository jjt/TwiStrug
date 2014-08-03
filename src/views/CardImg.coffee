R = React.DOM
cx = React.addons.classSet
zeroPad = require '../libs/zeroPad'

module.exports = React.createClass
  displayName: 'CardImg'
  render: ->
    R.div className: 'card cardImg',
      R.a href: "#/card/#{@props.id}",
        R.img src: "/images/cards/sm/#{zeroPad @props.id}.jpg"
