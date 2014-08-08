R = React.DOM
cx = React.addons.classSet

BoardNodeIPDiv = require './BoardNodeIPDiv'
 
module.exports = React.createClass
  displayName: 'BoardNodeDiv'

  #shouldComponentUpdate: (nextProps)->
    ## Assume country
    #shouldIt = nextProps.usa != @props.usa or nextProps.ussr != @props.ussr
    ## Continent labels
    #if @props.points?
      #shouldIt = nextProps.stats.usa != @props.stats.usa or
        #nextProps.stats.ussr != @props.stats.ussr
    ## Superpower labels
    #if @props.superpower
      #nPS = nextProps.stats
      #tPS = @props.stats
      #shouldIt = nPS.countries.btl != tPS.countries.btl or
        #nPS.regions.presence != tPS.regions.presence or
        #nPS.regions.domination != tPS.regions.domination or
        #nPS.regions.control != tPS.regions.control
#
    #shouldIt

  handleIPClick: (side, dir)->
    @props.handleIPClick @props.id, side, dir

  render: ->
    controlUSA = (@props.usa - @props.ussr) >= @props.stab
    controlUSSR = (@props.ussr - @props.usa) >= @props.stab


    gAttrs =
      style:
        left: @props.x - @props.width/2 + 'px'
        top: @props.y - @props.height/2 + 'px'
      className: "nodediv-#{@props.group} " + cx
        'nodediv': true
        'nodediv-btl': @props.btl == 1
        'nodediv-nonbtl': @props.btl != 1
        'nodediv-region-info': @props.regionInfo
        'nodediv-usa-control': controlUSA
        'nodediv-ussr-control': controlUSSR
        'nodediv-region-info': @props.regionInfo
        'nodediv-on-top': @props.onTop and not (@props.regionInfo or @props.superpower)


    titleTextAttrs =
      className: "nodediv-title-text"
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
      className: "nodediv-stab"
      x: (@props.node.width/2) - 10
      y: -(@props.node.height/2) + @props.node.titleFontSize + 1




    regionTextAttrs =
      className: if @props.points or @props.superpower then 'nodediv-text' else 'hide'
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
        R.span className:pCN, @props.points[0]
        R.span className:'blank', " "
        R.span className:dCN, @props.points[1]
        R.span className:'blank', " "
        R.span className:cCN, @props.points[2]
      ]

    if @props.superpower
      psr = @props.stats.regions
      regionText = [psr.presence, psr.domination, psr.control].join ' '
      regionTextAttrs.y = 20

    # Background for E+W Europe and SE Asia
    polyClassName = switch @props.group
      when 'eu' then 'nodediv-bg-eu'
      when 'sea' then 'nodediv-bg-sea'
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
      className: 'nodediv-shortcut'
      

    stabText = @props.stab

    isCountry = @props.superpower or @props.regionInfo
    if not isCountry
      ipUSA = BoardNodeIPDiv node: @props.node, side: 'usa', ip: @props.usa, ctrl: controlUSA, handleIPClick: @handleIPClick, ref: 'ipusa'
      ipUSSR = BoardNodeIPDiv node: @props.node, side: 'ussr', ip: @props.ussr, ctrl: controlUSSR, handleIPClick: @handleIPClick, ref: 'ipussr'
      stab = R.span stabTextAttrs, stabText
    else
      regionInfo = R.span regionTextAttrs, regionText

    if @props.superpower
      btl =
        R.span className: 'nodediv-btl-num', [
          "Battle: "
          R.span className: 'strong', @props.stats.countries.btl
        ]

    R.div gAttrs, [
      btl
      R.div className: 'nodediv-title', [
        R.span titleTextAttrs, @props.shortname
        stab
      ]
      regionInfo
      #R.text shortCutAttrs, @props.shortcut
      ipUSA
      ipUSSR
        
    ]



