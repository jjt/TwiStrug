R = React.DOM
cx = React.addons.classSet
Board = require '../views/Board'

reduceShortcuts = (arr, shortcut)->
  arr.push R.dt {}, shortcut.key
  arr.push R.dd {}, shortcut.desc
  arr


BoardInfo = React.createClass
  scrollTop: ->
    setTimeout ->
      window.scrollTo 0,0
    , 0
  getDefaultProps: ->
    shortcuts:
      left: [
        { key:'s/S', desc: 'Score inc/dec' }
        { key:'d/D', desc: 'Defcon inc/dec' }
        { key:'m/M', desc: 'USA Military Ops inc/dec' }
        { key:'o/O', desc: 'USSR Military Ops inc/dec' }
        { key:'z', desc: 'Undo action' }
        { key:'y', desc: 'Redo action' }
        { key:'h', desc: 'Show/hide action history' }
      ]
      right: [
        { key:'t/T', desc: 'Turn inc/dec' }
        { key:'r/R', desc: 'Round inc/dec' }
        { key:'p/P', desc: 'USA Space Race inc/dec' }
        { key:'a/A', desc: 'USSR Space Race inc/dec' }
        { key:'c', desc: 'Roll dice' }
      ]
      
  render: ->
    R.div {}, [
      R.div className: 'col-lg-6', [
        R.div className: 'row', [
          R.h3 {}, 'Virtual Twilight Struggle board'
          R.p {}, "This is a fully playable board with a more
            compact layout to fit on smaller screens, like a Chromebook or iPad. Just add cards
            and you'll be able to play anywhere. The board isn't aware of the rules, nor will
            it do anything automatically. Use it as you would a physical copy of the game."
        ]
        R.div className: 'row', [
          R.h3 {}, "Keyboard Shortcuts"
          R.dl className:'BoardPage-shortcuts col-lg-6', _.reduce @props.shortcuts.left, reduceShortcuts, []
          R.dl className:'BoardPage-shortcuts col-lg-6', _.reduce @props.shortcuts.right, reduceShortcuts, []
        ]
        #R.div className: 'row', [
          #R.h3 {}, "Upcoming and potential features"
          #R.ul {}, [
            #R.li {}, "Reminder chits for NATO, Red Scare/Purge, etc (Possibly)"
            #R.li {}, "Keyboard shortcuts for adding/removing IP (Possibly)"
            #R.li {}, "Virtual cards (shuffling, hands, etc) meaning TwiStrug is self-contained as a web application instead of requiring the physical cards (Mayyyybe)"
            #R.li {}, "Remote games (Unlikely but possible)"
            #R.li {}, "Complete game a la Wargameroom and Vassal (Unlikely but possible)"
          #]
        #]
      ]
      R.div className: 'col-lg-6', [
        R.h3 {}, "Instructions"
        R.p {}, [
          "This game, "
          R.a href: "#/board/#{@props.id}",
            R.code {}, @props.id
          ", will be saved in your browser and can be bookmarked and resumed at a later time, even if you close your browser. "
          R.a onClick: @scrollTop, href:'#/board', 'Click here to start a new game'
          '.'
        ]
        R.p {}, "To add/remove influnce in a country, click in the top/bottom of the influence space on the desired side (USA on left, USSR on right)."
        R.p {}, "To undo/redo one or more actions, press Z/Y one or more times."
        R.p {}, "The dice can be rolled individually by clicking on them, or as a pair by clicking on \"ROLL DICE\"."
        R.p {}, "Each superpower box (USA, USSR) shows the number of controlled battleground countries on top. On the bottom it shows the number of regions in which the power has presence, domination, and control. For example, if the USSR had \"4 2 1\", it would mean that they have presence in 4 regions, dominate 2, and control 1."
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
      R.div className: 'row', BoardInfo id: @props.gameId
      R.textarea
        className: 'map-position-debug'
        ref:'debug'
        value: JSON.stringify(@state.coords, null, ' ')
        style:
          width:'100%'
          height:'60rem'
    ]

