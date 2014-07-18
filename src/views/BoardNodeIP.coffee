R = React.DOM
cx = React.addons.classSet

module.exports = React.createClass
  displayName: 'BoardNodeIP'

  handleIPClick: (dir, ev)->
    @props.handleIPClick @props.side, dir

  render: ->
    position = if @props.side == 'usa' then 1 else 0

    hideIP = if @props.ip == 0 then 'hide' else ''

    gAttrs =
      transform: "translate(#{-@props.node.width/2 * position}, #{-@props.node.titleHeight/2 - 1})"
      width: @props.node.width/2
      height: @props.node.height - @props.node.titleHeight
      className: "node-ip-#{@props.side}"

    textAttrs =
      x: @props.node.width/4
      y: @props.node.height/2 - 1
      className: hideIP

    ipClickHeight = (@props.node.height - @props.node.titleHeight) / 2

    R.g gAttrs, [
      R.rect
        width: @props.node.width/2
        height: @props.node.height - @props.node.titleHeight
        className: "node-ip-bg-#{@props.side} #{hideIP}"
      R.text textAttrs, @props.ip
      R.rect
        width: @props.node.width/2
        height: ipClickHeight
        className: "node-ip-click"
        onClick: @handleIPClick.bind this, 'up'
      R.rect
        width: @props.node.width/2
        height: ipClickHeight
        y: ipClickHeight
        className: "node-ip-click"
        onClick: @handleIPClick.bind this, 'dn'
    ]

