R = React.DOM
cx = React.addons.classSet



BoardNodeIP = require './BoardNodeIP'
 
module.exports = React.createClass
  displayName: 'BoardNode'

  shouldComponentUpdate: (nextProps)->
    # Assume country
    shouldIt = nextProps.usa != @props.usa or nextProps.ussr != @props.ussr
    # Continent labels
    if @props.points?
      shouldIt = nextProps.stats.usa != @props.stats.usa or
        nextProps.stats.ussr != @props.stats.ussr
    # Superpower labels
    if @props.superpower
      nPS = nextProps.stats
      tPS = @props.stats
      shouldIt = nPS.countries.btl != tPS.countries.btl or
        nPS.regions.presence != tPS.regions.presence or
        nPS.regions.domination != tPS.regions.domination or
        nPS.regions.control != tPS.regions.control

    shouldIt

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
        R.tspan {}, "Battle: "
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

    # Background for E+W Europe and SE Asia
    polyClassName = switch @props.group
      when 'eu' then 'node-bg-eu'
      when 'sea' then 'node-bg-sea'
      else null

    if polyClassName? and not @props.points?
      poly = R.polygon
        className: polyClassName
        points: [
            "#{-@props.width/2},#{@props.height/2}"
            "#{@props.width/2},#{@props.height/2}"
            "#{@props.width/2},#{-@props.height/2 + @props.titleHeight}"
          ].join ' '

    shortCutAttrs =
      className: 'node-shortcut'
      

    R.g gAttrs, [
      # Node bg
      R.rect
        className: 'node-bg'
        width: @props.width
        height: @props.height
        title: Math.random()
        x: -@props.width/2
        y: -@props.height/2

      poly

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

      #R.text shortCutAttrs, @props.shortcut

      BoardNodeIP node: @props.node, side: 'usa', ip: @props.usa, ctrl: controlUSA, handleIPClick: @handleIPClick, ref: 'ipusa'
      BoardNodeIP node: @props.node, side: 'ussr', ip: @props.ussr, ctrl: controlUSSR, handleIPClick: @handleIPClick, ref: 'ipussr'
    ]



