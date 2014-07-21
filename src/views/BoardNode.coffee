R = React.DOM
cx = React.addons.classSet

BoardNodeIP = require './BoardNodeIP'
 
module.exports = React.createClass
  displayName: 'BoardNode'

  handleIPClick: (side, dir)->
    @props.handleIPClick @props.id, side, dir

  render: ->
    controlUSA = (@props.usa - @props.ussr) >= @props.stab
    controlUSSR = (@props.ussr - @props.usa) >= @props.stab

    gAttrs =
      transform: @props.transform
      className: "node-#{@props.group} " + cx
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
    stabText = @props.stab
    if @props.superpower
      stabText = [
        R.tspan {}, "Btl "
        R.tspan className:'numBtl', @props.stats.countries.btl
      ]
      stabTextAttrs.x = 0
      stabTextAttrs.y += 1



    regionTextAttrs =
      className: if @props.points or @props.superpower then 'node-text' else 'hide'
      x: 0
      y: 10
      width: @props.node.width


    regionText = ''
    if @props.points
      regionCx = (key)=>
        obj =
          usa: @props.stats.usa == key
          ussr: @props.stats.ussr == key
          both: @props.stats.ussr == key and @props.stats.usa == key
        obj[key] = true
        cx obj
        
      cCN = regionCx 'control'
      dCN = regionCx 'domination'
      pCN = regionCx 'presence'

      regionText = [
        R.tspan className:pCN, @props.points[0]
        R.tspan className:'blank', " "
        R.tspan className:dCN, @props.points[1]
        R.tspan className:'blank', " "
        R.tspan className:cCN, @props.points[2]
      ]

    if @props.superpower
      psr = @props.stats.regions
      regionText = [psr.presence, psr.domination, psr.control].join ' '
      regionTextAttrs.y = 20

    R.g gAttrs, [
      # Node bg
      R.rect
        className: 'node-bg'
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
      R.text stabTextAttrs, stabText
      R.text regionTextAttrs, regionText

      BoardNodeIP node: @props.node, side: 'usa', ip: @props.usa, ctrl: controlUSA, handleIPClick: @handleIPClick, ref: 'ipusa'
      BoardNodeIP node: @props.node, side: 'ussr', ip: @props.ussr, ctrl: controlUSSR, handleIPClick: @handleIPClick, ref: 'ipussr'
    ]



