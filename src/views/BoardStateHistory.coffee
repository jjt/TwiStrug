R = React.DOM
cx = React.addons.classSet


BoardStateHistoryEntry = require './BoardStateHistoryEntry'



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

  handleCloseHistory: ->
    @props.stateHistory.hide()

  render: ->
    stateComponents = @props.stateHistory.states.map (sh, index)=>
      shM = sh.meta
      # IP placement in country
      if shM.country?
        key = "country-#{shM.country.id}"
      else
        key = "#{shM.id}-#{shM.side}"

      BoardStateHistoryEntry
        onClick: @handleSHClick.bind this, index
        key: "BSHE-#{index}-#{key}"
        isLatest: @props.stateHistory.latest == index
        isCurrent: @props.stateHistory.current == index
        sh: sh

    divAttrs =
      className: cx
        'StateHistory': true
        'in': @props.stateHistory.show

    R.div divAttrs, [
      R.a className: 'close pull-right', onClick: @handleCloseHistory, [
        'Close '
        R.span className: 'StatusLabel-shortcut', '(h)'
      ]
      R.h3 {}, "Action History"
      R.ul className: 'list-unstyled', stateComponents.reverse()
    ]
