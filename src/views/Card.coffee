R = React.DOM
cx = React.addons.classSet
zeroPad = require '../libs/zeroPad'

cardStages = 1:'EARLY', 2:'MID', 3:'LATE'

cardClassName = (props) ->
  classes = cx
    'asiaScoring': props.title == 'Asia Scoring'
    'europeScoring': props.title == 'Europe Scoring'
    'middleEastScoring': props.title == 'Middle East Scoring'
    'centralAmericaScoring': props.title == 'Central America Scoring'
    'southeastAsiaScoring': props.title == 'Southeast Asia Scoring*'
    'africaScoring': props.title == 'Africa Scoring'
    'southAmericaScoring': props.title == 'South America Scoring'
    'ongoing': props.ongoing

  "owner-#{props.owner} card-view-#{props.view} #{classes}"

module.exports = React.createClass
  displayName: 'Card'
  render: ->
    main = [
        R.span {className: 'card-title-holder' }, [
          R.span className: 'card-stage', cardStages[@props.stage]
          R.h4 className: 'card-ops', if @props.ops < 1 then "S" else @props.ops
          R.h4 className: 'card-title', [
            "#{@props.title} "
            R.span className: 'card-id', "##{@props.id}"
          ]
        ]
        R.p className: 'card-text', @props.text
      ]

    if @props.view == 'img'
      main =
        R.img
          className: 'card-img'
          src: "/images/cards/sm/#{zeroPad @props.id}.jpg"

    R.a href: "#/card/#{@props.id}", className: cardClassName(@props) + ' card', main

