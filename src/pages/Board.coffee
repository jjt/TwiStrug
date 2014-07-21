R = React.DOM
cx = React.addons.classSet
Board = require '../views/Board'

BoardInfo = React.createClass
  render: ->
    R.div {}, [
      R.div className: 'col-lg-6', [
        R.h3 {}, 'Fully playable Twilight Struggle board'
        R.p {}, "This is a fully playable board with a more
          compact layout to fit on smaller screens, like a Chromebook or iPad. Just add cards
          and you'll be able to play anywhere. The board isn't aware of the rules, nor will
          it do anything automatically. Use it as you would a physical copy of the game."
        R.h3 {}, "Upcoming and potential features"
        R.ul {}, [
          R.li {}, "Reminder chits for NATO, Red Scare/Purge, etc (Possibly)"
          R.li {}, "Keyboard shortcuts for game status and adjusting IP (Possibly)"
          R.li {}, "Virtual cards (shuffling, hands, etc) meaning TwiStrug is self-contained as a web application instead of requiring the physical cards (Mayyyybe)"
          R.li {}, "Remote games (Unlikely but possible)"
          R.li {}, "Complete game a la Wargameroom and Vassal (Unlikely but possible)"
        ]
      ]
      R.div className: 'col-lg-6', [
        R.h3 {}, "Instructions"
        R.p {}, "To add/remove influnce in a country, click in the top/bottom of the influence space on the desired side (USA on left, USSR on right)."
        R.p {}, "To undo/redo one or more actions, press Z/Y one or more times."
        R.p {}, "The dice can be rolled individually by clicking on them, or as a pair by clicking on \"ROLL DICE\"."
        R.p {}, "Each superpower box (USA, USSR) shows the number of controlled battleground countries on top. On the bottom it shows the number of regions in which the power has presence, domination and control. For example, if the USSR had \"4 2 1\", it would mean that they have presence in 4 regions, dominate 2, and control 1."
        R.h3 {}, "Keyboard Shortcuts"
        R.p {}, [
          R.strong {}, "H: "
          R.span {}, "Show/hide action history"
          R.br {}
          R.strong {}, "Z: "
          R.span {}, "Undo action"
          R.br {}
          R.strong {}, "Y: "
          R.span {}, "Redo action"
          R.br {}
          R.em {}, "More coming soon..."
        ]
      ]
    ]



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
      Board @props
      BoardInfo()
      R.textarea
        className: 'map-position-debug'
        ref:'debug'
        value: JSON.stringify(@state.coords, null, ' ')
        style:
          width:'100%'
          height:'60rem'
    ]

