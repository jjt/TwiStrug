R = React.DOM
cx = React.addons.classSet

BoardStatusValue = require './BoardStatusValue'
Die = require './Die'

module.exports = React.createClass
  displayName: 'BoardStatus'

  rollDice: ->
    _.each @refs, (ref)-> ref.rollDie()

  handleBothClick: ->
    @rollDice()

  render: ->
  
    scoreSide = ''
    if @props.score != 0
      scoreSide = if @props.score < 0 then 'ussr' else 'usa'

    # Round: 0 is headline, odds are USSR, evens are USA
    round = if @props.round == 0 then 'H' else Math.ceil(@props.round / 2)
    roundSide = ''
    if @props.round != 0
      roundSide = if @props.round % 2 == 1 then 'ussr' else 'usa'

    turn = switch @props.turn
      when 0 then 'S'
      when 11 then 'E'
      else @props.turn

    # Shorthand for the components
    statusValue = (id='', title='', val='', side='')=>
      BoardStatusValue _.assign {id, title, val, side}, handleValClick: @props.handleValClick


    R.div className: 'BoardStatus', [
      R.div className: 'col', [
        statusValue 'score', 'Score', Math.abs(@props.score), scoreSide
        statusValue 'defcon', 'Defcon', @props.defcon
        statusValue 'milops', 'MilOps', @props.milops[0], 'usa'
        statusValue 'milops', 'MilOps', @props.milops[1], 'ussr'
      ]
      R.div className: 'col', [
        statusValue 'turn', 'Turn', turn
        statusValue 'round', 'Round', round, roundSide
        statusValue 'space', 'Space', @props.space[0], 'usa'
        statusValue 'space', 'Space', @props.space[1], 'ussr'
      ]
      R.div className: 'historyControls', [
        R.span className: 'historyControls-undo',
          R.a onClick: @props.handleHistoryClick.bind(null,'undo'), 'Undo'
        R.span className: 'historyControls-history',
          R.a onClick: @props.handleHistoryClick.bind(null,'toggle'), 'Action History'
        R.span className: 'historyControls-redo',
          R.a onClick: @props.handleHistoryClick.bind(null,'redo'), 'Redo'
      ]
      R.div className: 'dice', [
        Die ref: 'die-usa', side: 'usa'
        R.a className: 'roll-dice', onClick: @handleBothClick, 'Roll dice'
        Die ref: 'die-ussr', side: 'ussr'
      ]
    ]
