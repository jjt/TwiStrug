R = React.DOM
cx = React.addons.classSet
StateHistory = require '../libs/StateHistory'
BoardStateHistory = require '../libs/BoardStateHistory'
BoardStateHistoryView = require '../views/BoardStateHistory'
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
      ip: [
        { key:'i', desc: 'Enter IP placement by keyboard (IPbK) mode' }
        { key:'esc', desc: 'Go "up" (country -> continent -> exit IPbK mode)' }
        { key:'enter', desc: '(same as above)' }
        { key:'a/A', desc: 'USA influence inc/dec (when country selected)' }
        { key:'r/R', desc: 'USSR influence inc/dec (when country selected)' }
        { key:'esc', desc: 'Cancel IP placement (when country selected)' }
        { key:'enter', desc: 'Confirm IP placement (when country selected)' }
      ]
      left: [
        { key:'s/S', desc: 'Score inc/dec' }
        { key:'d/D', desc: 'Defcon inc/dec' }
        { key:'m/M', desc: 'USA Military Ops inc/dec' }
        { key:'o/O', desc: 'USSR Military Ops inc/dec' }
        { key:'h', desc: 'Show/hide Action History' }
        { key:'c', desc: 'Roll dice' }
      ]
      right: [
        { key:'t/T', desc: 'Turn inc/dec' }
        { key:'r/R', desc: 'Round inc/dec' }
        { key:'p/P', desc: 'USA Space Race inc/dec' }
        { key:'a/A', desc: 'USSR Space Race inc/dec' }
        { key:'z', desc: 'Undo (Action History)' }
        { key:'y', desc: 'Redo (Action History)' }
      ]
      
  render: ->
    R.div {}, [
      R.div className: 'row',
        R.div className: 'col-lg-12', [
          R.h3 {}, 'Virtual Twilight Struggle board'
          R.p {}, "This is a fully playable board with a more
            compact layout to fit on smaller screens, like a Chromebook or iPad. Just add cards
            and you'll be able to play anywhere. The board isn't aware of the rules, nor will
            it do anything automatically. Use it as you would a physical copy of the game."
          R.p {}, [
            "This game, "
            R.a href: "#/board/#{@props.id}",
              R.code {}, @props.id
            ", will be saved in your browser and can be bookmarked and resumed at a later time, even if you close your browser. "
            R.a onClick: @scrollTop, href:'#/board', 'Click here to start a new game'
            '.'
          ]
          R.p {}, "The URL contains the complete state of the board and will
            update with each action taken. This can be used to play remotely
            with someone by sending the URL back and forth. For
            instance, if you were the USSR starting a new game, you would place your
            initial influence then copy the URL and send it to your opponent. They
            would go to that URL, place their influence and send the new URL back to you. Lather, rinse, repeat."
        ]
      R.div className: 'row', [
        R.div className: 'col-lg-6', [
          R.h3 {}, "Instructions"
          R.p {}, "To add/remove influnce in a country, click in the top/bottom of the influence space on the desired side (USA on left, USSR on right)."
          R.p {}, "To undo/redo one or more actions, press Z/Y one or more times."
          R.p {}, "The dice can be rolled individually by clicking on them, or as a pair by clicking on \"ROLL DICE\"."
          R.p {}, "Each superpower box (USA, USSR) shows the number of controlled battleground countries on top. On the bottom it shows the number of regions in which the power has presence, domination, and control. For example, if the USSR had \"4 2 1\", it would mean that they have presence in 4 regions, dominate 2, and control 1."
        ]
        R.div className: 'col-lg-6', [
          R.h3 {}, "Keyboard Shortcuts"
          R.dl className:'BoardPage-shortcuts col-lg-6', _.reduce @props.shortcuts.left, reduceShortcuts, []
          R.dl className:'BoardPage-shortcuts col-lg-6', _.reduce @props.shortcuts.right, reduceShortcuts, []
          R.div className: 'row',
            R.div className: 'col-lg-12', [
              R.h4 {}, "Influence placement by keyboard"
              R.dl className:'BoardPage-shortcuts BoardPage-shortcuts-ip', _.reduce @props.shortcuts.ip, reduceShortcuts, []
            ]
        ]
      ]
    ]



module.exports = React.createClass
 
  displayName: 'BoardView'
  
  stateHistory: null

  componentWillMount: ->
    @stateHistory = new BoardStateHistory id: @props.gameId

  componentWillReceiveProps: (nP)->

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


  render: ->
    R.div className: 'BoardView', [
      BoardStateHistoryView
        stateHistory: @stateHistory
        key: "BoardStateHistory-#{@props.gameId}"
      R.div className: 'container', [
        Board _.assign stateHistory: @stateHistory, @props
        BoardInfo id: @props.gameId
        R.textarea
          className: 'map-position-debug'
          ref:'debug'
          value: JSON.stringify(@state.coords, null, ' ')
          style:
            width:'100%'
            height:'60rem'
      ]
    ]

