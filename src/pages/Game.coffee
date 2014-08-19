R = React.DOM
cx = React.addons.classSet
StateHistory = require '../libs/StateHistory'
BoardStateHistory = require '../libs/BoardStateHistory'
BoardStateHistoryView = require '../views/BoardStateHistory'
Board = require '../views/Board'

module.exports = React.createClass
  displayName: 'GamePage'

  stateHistory: null

  componentWillMount: ->
    @stateHistory = new BoardStateHistory id: @props.gameId

  getDefaultProps: ->
    width: 1140
    height: 730
    node:
      width: 66
      height: 50
      gutter: 14
      titleHeight: 16
      titleFontSize: 12

  render: ->
    R.div className: 'BoardView', [
      BoardStateHistoryView
        stateHistory: @stateHistory
        key: "BoardStateHistory-#{@props.gameId}"
      R.div className: 'container', [
        Board _.assign stateHistory: @stateHistory, @props
      ]
    ]

