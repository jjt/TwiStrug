R = React.DOM
module.exports = React.createClass
  displayName: 'BoardLink'
  shouldComponentUpdate: ->
    false
  render: ->
    R.line @props

