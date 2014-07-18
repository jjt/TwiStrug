R = React.DOM
cx = React.addons.classSet

module.exports = React.createClass
  displayName: 'BoardStatusValue'
  render: ->
    sideClass = switch @props.side
      when 'usa', 'ussr' then @props.side
      else ''

    decAttrs =
      className: 'dec'
      onClick: @props.handleValClick.bind(null, @props.id, 'dec', @props.side)
    incAttrs =
      className: 'inc',
      onClick: @props.handleValClick.bind(null, @props.id, 'inc', @props.side)

    R.div {}, [
      R.dt {}, @props.title
      R.dd className: "StatusValue #{sideClass}", [
        R.span decAttrs, '◀'
        R.span className: 'val', @props.val
        R.span incAttrs, '▶'
      ]
    ]

