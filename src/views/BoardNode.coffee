R = React.DOM
cx = React.addons.classSet

BoardNodeIP = require './BoardNodeIP'
 
module.exports = React.createClass
  displayName: 'BoardNode'

  handleIPClick: (side, dir)->
    @props.handleIPClick @props.id, side, dir

  getInitialState: ->
    @componentWillReceiveProps @props

  componentWillReceiveProps: (nextProps)->
    {usa, ussr} = nextProps
    state = {usa, ussr}
    @setState state
    state


  render: ->
    controlUSA = (@state.usa - @state.ussr) >= @props.stab
    controlUSSR = (@state.ussr - @state.usa) >= @props.stab


    gAttrs =
      transform: @props.transform
      className: "node-#{@props.group} usa#{@state.usa} " + cx
        'node': true
        'node-btl': @props.btl == 1
        'node-nonbtl': @props.btl != 1
        'node-region-info': @props.regionInfo
        'node-usa-control': controlUSA
        'node-ussr-control': controlUSSR
        'node-region-info': @props.regionInfo



    polyClassName =
        if @props.regionInfo
          'hide'
        else switch @props.group
          when 'eu' then 'node-bg-eu'
          when 'sea' then 'node-bg-sea'
          else 'hide'

    titleTextAttrs =
      className: "node-title-text"
      x: if @props.regionInfo or @props.superpower
            0
          else
            -@props.node.width/2 + 2
      y: if @props.regionInfo
            -6
          else if @props.superpower
            6
          else
            -(@props.node.height/2) + @props.node.titleFontSize
       

    stabTextAttrs =
      className: "node-stab"
      x: (@props.node.width/2) - 10
      y: -(@props.node.height/2) + @props.node.titleFontSize + 1

    regionTextAttrs =
      className: if @props.points then 'node-text' else 'hide'
      x: 0
      y: 10
      width: @props.node.width

    regionText = if @props.points then @props.points.join(' ') else ''

    R.g gAttrs, [
      # Node bg
      R.rect
        className: 'node-bg ' + @state.usa
        width: @props.width
        height: @props.height
        title: Math.random()
        x: -@props.width/2
        y: -@props.height/2

      R.polygon
          className: polyClassName
          points: [
              "#{-@props.width/2},#{@props.height/2}"
              "#{@props.width/2},#{@props.height/2}"
              "#{@props.width/2},#{-@props.height/2 + @props.titleHeight}"
            ].join ' '
             
      R.rect
        className: 'node-title-bg'
        width: @props.width
        height: @props.titleHeight
        x: -@props.width/2
        y: -@props.height/2

      R.line
        className: 'node-line'
        width: @props.width
        x1: -@props.width/2
        y1: -@props.height/2 + @props.node.titleHeight
        x2: @props.width/2
        y2: -@props.height/2 + @props.node.titleHeight

      R.text titleTextAttrs, @props.shortname
      R.text stabTextAttrs, @props.stab
      R.text regionTextAttrs, regionText

      BoardNodeIP node: @props.node, side: 'usa', ip: @state.usa, ctrl: controlUSA, handleIPClick: @handleIPClick, ref: 'ipusa'
      BoardNodeIP node: @props.node, side: 'ussr', ip: @state.ussr, ctrl: controlUSSR, handleIPClick: @handleIPClick, ref: 'ipussr'
    ]



