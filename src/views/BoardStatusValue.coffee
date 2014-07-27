R = React.DOM
cx = React.addons.classSet

module.exports = React.createClass
  displayName: 'BoardStatusValue'
  shouldComponentUpdate: (nP)->
    nP.val != @props.val

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
      R.div className: "StatusLabel", @props.title
      R.div className: "StatusValue #{sideClass}", [
        R.span decAttrs, '◀'
        R.span className: 'val', @props.val
        R.span incAttrs, '▶'
      ]
    ]

