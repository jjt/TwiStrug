R = React.DOM
cx = React.addons.classSet
Board = require '../views/Board'

module.exports = React.createClass
  displayName: 'BoardView'
  
  getDefaultProps: ->
    width: 1140
    height: 730
    node:
      width: 66
      height: 50
      gutter: 14
      titleHeight: 16
      titleFontSize: 12

  getInitialState: ->
    debugObj: {}

  dragend: (el)->
    coords = @state.coords
    coords[el.name] =
      x: Math.round(el.x)
      y: Math.round(el.y)
    el.fixed = true
    @setState {coords}

  render: ->
    R.div className: 'BoardView', [
      #R.div className: 'page-header',
          #R.h2 {}, "Board"
      Board @props
      R.textarea className: 'map-position-debug', ref:'debug', style:{width:'100%', height:'60rem'}, value: JSON.stringify(@state.coords, null, ' ')
    ]

