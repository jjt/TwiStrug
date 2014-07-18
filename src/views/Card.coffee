R = React.DOM
cx = React.addons.classSet

cardStages = 1:'EARLY', 2:'MID', 3:'LATE'

cardClassName = (props) ->
  ownerClass = "owner-#{props.owner}"
  classes = cx
    'asiaScoring': props.title == 'Asia Scoring'
    'europeScoring': props.title == 'Europe Scoring'
    'middleEastScoring': props.title == 'Middle East Scoring'
    'centralAmericaScoring': props.title == 'Central America Scoring'
    'southeastAsiaScoring': props.title == 'Southeast Asia Scoring*'
    'africaScoring': props.title == 'Africa Scoring'
    'southAmericaScoring': props.title == 'South America Scoring'
    'ongoing': props.ongoing

  ownerClass + ' ' + classes

module.exports = React.createClass
  displayName: 'Card'
  render: ->
    R.div className: cardClassName(@props) + ' card', [
      R.a {className: 'card-title-holder', href: "#/card/#{@props.id}"}, [
        R.span className: 'card-stage', cardStages[@props.stage]
        R.h4 className: 'card-ops', if @props.ops < 1 then "S" else @props.ops
        R.h4 className: 'card-title', [
          "#{@props.title} "
          R.span className: 'card-id', "##{@props.id}"
        ]
      ]
      R.p className: 'card-text', @props.text
    ]

