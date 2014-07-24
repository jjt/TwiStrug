R = React.DOM
cx = React.addons.classSet
gameValDisplay = require '../libs/gameValDisplay'
upperFirst = require '../libs/upperFirst'
zeroPad = require '../libs/zeroPad'
intToStrWithSign = require '../libs/intToStrWithSign'
superpowerToIndex = require '../libs/superpowerToIndex'


scoreSide = (score)->
  if score < 0
    return 'ussr'
  if score > 0
    return 'usa'
  ''


shEntry = (sh)->
  roundSide = if sh.state.game.round % 2 == 0 then 'usa' else 'ussr'
  if sh.state.game.round == 0
    roundSide = ''

  if sh.state.game.turn > 10
    turn = "END"
    round = ''
  else if sh.state.game.turn > 0
    turn = "T#{gameValDisplay('turn', sh.state.game.turn)}-"
    if sh.state.game.round != 0
      round = "AR#{gameValDisplay('round', sh.state.game.round)}"
    else
      round = "HEAD"
  else
    turn = "SETUP"
    round = ''

  turnRound =
    R.span className: 'turnRound', [
      turn
      R.span className: roundSide, round
    ]

  shSide = sh.meta.side

  switch sh.meta.type
    when 'ip'
      [ipUSA, ipUSSR] = sh.meta.ips
      country = sh.meta.country
      ctrlUSA = if (ipUSA - ipUSSR) >= country.stab then 'control' else ''
      ctrlUSSR = if (ipUSSR - ipUSA) >= country.stab then 'control' else ''
      ips = if sh.meta.side == 'both'
        [
          R.span className: "usa ip", intToStrWithSign sh.meta.delta[0]
          R.span className: "divider", '/'
          R.span className: "ussr ip", intToStrWithSign sh.meta.delta[1]
        ]
      else
        R.span className: "#{sh.meta.side} ip", intToStrWithSign sh.meta.delta[superpowerToIndex sh.meta.side]
      [
        turnRound
        ips
        " in #{sh.meta.country.shortname} ("
        R.span className: "usa #{ctrlUSA}", sh.meta.ips[0]
        "/"
        R.span className: "ussr #{ctrlUSSR}", sh.meta.ips[1]
        ")"
      ]
    when 'val'
      oldSide = newSide = sh.meta.side

      if sh.meta.id == 'score'
        oldSide = scoreSide sh.meta.old
        newSide = scoreSide sh.meta.new

      R.span {}, [
        turnRound
        "#{upperFirst(sh.meta.id)} "
        R.strong className: oldSide, "#{gameValDisplay(sh.meta.id, sh.meta.old, 'long')} "
        R.span className: 'arrow', '➔ '
        R.strong className: newSide, "#{gameValDisplay(sh.meta.id, sh.meta.new, 'long')}"
      ]
    when 'round'
      side = roundSide
      roundTitle = if sh.state.game.round == 0
          "Headline Phase"
        else
          "#{side.toUpperCase()} Action Round #{gameValDisplay(sh.meta.id, sh.meta.new, 'long')}"
          
      #side = ['ussr', 'usa'][(sh.state.game.round + 1) % 2]
      R.span {}, [
        turnRound
        R.span className: side, roundTitle
      ]
    when 'turn'
      disp = "#{gameValDisplay(sh.meta.id, sh.meta.new, 'long')}"
      if sh.state.game.turn != 0 and sh.state.game.turn <= 10
        disp = "Turn #{disp}"
      R.span className:'strong', [
        turnRound
        disp
      ]
    else
      sh.meta.msg


module.exports = React.createClass
  getInitialState: ->
    r: 0

  componentDidMount: ->
    @props.stateHistory.on 'update', @forceUpdate.bind this

    #fn = ()=>
      #@setState r: Math.random()
      #setTimeout fn, 2000
    #fn()
   
  handleSHClick: (id)->
    @props.stateHistory.goTo id

  render: ->
    stateComponents = @props.stateHistory.states.map (sh, index)=>
      attrs =
        onClick: @handleSHClick.bind this, index
        className: cx
          'clearfix': true
          'StateHistory-latest': @props.stateHistory.latest == index
          'StateHistory-current': @props.stateHistory.current == index
      R.li attrs, shEntry(sh)


    divAttrs =
      className: cx
        'StateHistory': true
        'in': @props.stateHistory.show

    R.div divAttrs, [
      R.h3 {}, "Action History"
      R.ul className: 'list-unstyled', stateComponents.reverse()
    ]
