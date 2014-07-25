R = React.DOM

module.exports = React.createClass
  displayName: 'Die'

  getDefaultProps: ->
    rolls: 30

  getInitialState: ->
    val: 1
    rolling: false
    rolls: @props.rolls

  clickDie: ->
    @rollDie()

  rollDie: ->
    return if @state.rolling
    @iterateRoll()

  iterateRoll: ->
    if not @state.rolling
      @setState rolling: true, rolls: @props.rolls

    if @state.rolls == 0
      @setState rolling: false, rolls: @props.rolls
    else
      time = (10 - @state.rolls) * 18 + 50
      if @state.rolls > 10
        time = 50

      @setState
        val: _.random(1,6)
        rolls: @state.rolls - 1
      setTimeout @iterateRoll, time

  render: ->
    rolling = if @state.rolling and @state.rolls > 0 then 'rolling' else ''
    R.div onClick: @clickDie, className: "die die-#{@props.side} #{rolling}", @state.val

