R = React.DOM
cx = React.addons.classSet

module.exports = React.createClass
  displayName: 'BoardNodeIPDiv'

  componentDidUpdate: ->
    $el = $(@refs.nodediv.getDOMNode())
    $el.addClass 'nodediv-flash'
    fn = -> $el.removeClass('nodediv-flash')
    setTimeout fn, 100


  handleIPClick: (dir, ev)->
    @props.handleIPClick @props.side, dir

  shouldComponentUpdate: (nP)->
    nP.ip != @props.ip

  render: ->
    position = if @props.side == 'usa' then 1 else 0

    ipZero = if @props.ip == 0 then 'ipZero' else ''

    gAttrs =
      className: "nodediv-ip-#{@props.side} nodediv-ip #{ipZero}"
      ref: 'nodediv'

    textAttrs =
      x: @props.node.width/4
      y: @props.node.height/2 - 1
      className: "nodediv-ip-text"

    ipClickHeight = (@props.node.height - @props.node.titleHeight) / 2

    ip = if @props.ip > 0 then @props.ip else ''

    R.div gAttrs, [
      R.span textAttrs, ip
      R.div
        className: "nodediv-ip-click-up"
        onClick: @handleIPClick.bind this, 'up'
      R.div
        className: "nodediv-ip-click-dn"
        onClick: @handleIPClick.bind this, 'dn'
    ]
