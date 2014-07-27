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
    # Load state from url
    when 'load'
      [
        turnRound
        R.span className:'strong', 'Loaded state from URL'
      ]
    when 'ip'
      [ipUSA, ipUSSR] = sh.meta.ips
      country = sh.meta.country
      ctrlUSA = if (ipUSA - ipUSSR) >= country.stab then 'control' else ''
      ctrlUSSR = if (ipUSSR - ipUSA) >= country.stab then 'control' else ''

      if sh.meta.side == 'both'
        ips = [
          R.span className: "usa ip", intToStrWithSign sh.meta.delta[0]
          R.span className: "divider", '/'
          R.span className: "ussr ip", intToStrWithSign sh.meta.delta[1]
        ]
      else
        ips = R.span className: "#{sh.meta.side} ip", intToStrWithSign sh.meta.delta[superpowerToIndex sh.meta.side]

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
  displayName: 'BoardStateHistoryEntry'

  shouldComponentUpdate: (nP)->
    shouldIt = false
    tP = @props
    tShM = @props.sh.meta
    nShM = nP.sh.meta
    # IP placement
    if tShM?.ips?
      shouldIt = tShM.ips[0] != nShM.ips[0] or
        tShM.ips[1] != nShM.ips[1]
    if tShM.type == 'val'
      shouldIt = tShM.new != nShM.new
    # If current/latest changed
    if tP.isLatest != nP.isLatest or tP.isCurrent != nP.isCurrent
      shouldIt = true

    shouldIt

  render:->
    attrs =
      onClick: @props.onClick
      className: cx
        'clearfix': true
        'StateHistory-latest': @props.isLatest
        'StateHistory-current': @props.isCurrent
    R.li attrs, shEntry(@props.sh)
