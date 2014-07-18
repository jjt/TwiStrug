R = React.DOM
cx = React.addons.classSet
libs = require '../libs'

BoardNode = require './BoardNode'
BoardStatus = require './BoardStatus'
BoardLink = require './BoardLink'

module.exports = React.createClass
  displayName: 'Board'

  getInitialState: ->
    gameState =
      game:
        score: 0
        turn: 1
        round: 0
        defcon: 5
        milops: [0,0]
        space: [0,0]

    _.assign gameState, @props

  handleValClick: (id, dir, side)->
    state = this.state
    delta = if dir == 'inc' then 1 else -1
    if id not in ['milops', 'space']
      state.game[id] = libs.rangedGameVal(id, state.game[id] + delta)
    else
      index = if side == 'usa' then 0 else 1
      state.game[id][index] = libs.rangedGameVal(id, state.game[id][index] + delta)

    @setState state

  handleIPClick: (nodeId, side, dir)->
    node = _.find @state.nodes, {id: nodeId}
    # Don't let the non-country nodes get updated 
    if node.points or node.superpower then return
    state = @state

    ip = state.nodes[nodeId][side]
    delta = if dir == 'up' then 1 else -1
    ip += delta
    if ip < 0 then ip = 0

    state.nodes[nodeId][side] = ip

    @setState state

  render: ->
    nodeProps = @props.node

    links = @props.links.map (linkData)=>
      source = _.find @props.countries, id: linkData.source
      target = _.find @props.countries, id: linkData.target
      nodes = {source, target}

      jUSA = (link, targ)=>
        japanUSABump = 18
        if _.contains(link.nodes, 'USA') and _.contains(link.nodes, 'Japan')
          return nodes[targ].y - japanUSABump
        nodes[targ].y

      linkProps =
        key: "BoardLink-#{linkData.source}-#{linkData.target}"
        x1: source.x
        y1: jUSA(linkData, 'source')
        x2: target.x
        y2: jUSA(linkData, 'target')
        className: cx
          "link": true
          "link-cross": linkData.crossContinent
          "link-usa": _.contains linkData.nodes, 'USA'
          "link-ussr": _.contains linkData.nodes, 'USSR'

      BoardLink linkProps

    nodes = _.map @state.nodes, (countryData)=>
      props = _.assign countryData,
        node: nodeProps
        key: "BoardNode-#{countryData.id}"
        transform: "translate(#{countryData.x}, #{countryData.y})"
        width: @props.node.width
        height: @props.node.height
        gutter: @props.node.gutter
        titleHeight: @props.node.titleHeight
        titleFontSize: @props.node.titleFontSize
        handleIPClick: @handleIPClick

      BoardNode props

    R.div className: 'Board', [
      R.svg width:@props.width, height:@props.height, ref: 'svg', [
        links
        nodes
      ]
      BoardStatus _.assign {handleValClick: @handleValClick}, @state.game
    ]





