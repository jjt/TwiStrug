R = React.DOM
cx = React.addons.classSet
libs = require '../libs'

CardList = require '../views/CardList'

module.exports = React.createClass
  displayName: 'CardsView'
  defaultState: (props)->
    filter = props?.state?.filter
    fullText: if filter then true else false
    cardFilterInput: if filter then filter.join(' ') else ''
    sort: 'stage'
    filter: null

  componentWillReceiveProps: (nextProps) ->
    if nextProps.state?
      @setState nextProps.state
    else
      @setState @defaultState()

  getInitialState: ->
    _.merge @defaultState(@props), @props.state

  getFilterIds: () ->

    if @state?.filter?
      filterIds = @state.filter.sort(libs.sortNumerical)
        .filter(libs.filterTruthy)
        .filter(libs.filterUnique)
    if not filterIds? then filterIds = []
    return filterIds

  # Just filtering by id right now
  getFilteredCards: ->
    if @state.filter?
      return @props.cards.filter (el) =>
        if el.id in @state.filter
          return el
    @props.cards
        

  filterAndSortCards: ->
    cards = @getFilteredCards()
    [sort, order] = @state.sort.split '-'

    sortParam = switch sort
      when 'textlen' then (el) -> el.text.length
      when 'side' then ['owner','stage','id']
      when 'ops' then 'ops'
      when 'titlelen' then (el) -> el.title.length
      else ['stage', 'id']
    cards = _.sortBy cards, sortParam

    if order == 'rev'
      cards.reverse()

    cards


  handleFullText: ->
    @setState
      fullText: @refs.fullText.getDOMNode().checked

  handleCardFilterChange: ->
    value = @refs.cardFilter.getDOMNode().value
    # WGR adds "Ops 3: ...", so don't pick those up
    ids = value.match(/\d+[^:]|\d+$/g)?.map (el)-> parseInt el, 10
    if value == '' or not ids?
      state =
        cardFilterInput: value
        filter: null
    else
      state =
        cardFilterInput: value
        fullText: true
        filter: ids.sort(libs.sortNumerical).filter(libs.filterValidCardIds)

    @setState state

  handleCardFilterBlur: ->
    filterIds = @getFilterIds()

    @setState
      cardFilterInput: filterIds.join ' '

    if filterIds? and filterIds.length > 0
      libs.qs.set 'filter', filterIds
    else
      libs.qs.delete 'filter'

  handleCardFilterClear: ()->
    @refs.cardFilter.getDOMNode().value = ''
    @setState
      filter:null
      cardFilterInput: ''

    libs.qs.delete 'filter'



  render: ->
    sortLink = (sort, display) =>
      className = cx active: @state.sort == sort
      ref = "#{sort}Sort"
      onClick = ()->
        libs.qs.set 'sort', sort
      R.a {onClick, ref, className}, display


    R.div className: 'cardsView' , [
      R.div className: 'page-header row', [
        R.div className: 'col-md-6', [
          R.div className: 'cardControls', [
            R.span className: 'label', 'Sort by:'
            sortLink 'stage', 'Stage'
            sortLink 'ops', 'Ops'
            sortLink 'side', 'Side'
          ]
          R.div className: 'cardControls', [
            R.input
              name: 'fullText'
              id: 'fullText'
              type:'checkbox'
              ref:'fullText'
              onChange: @handleFullText
              checked: @state.fullText
            " "
            R.label {htmlFor:'fullText', className:'card-show-text-label'}, 'Show card text'
          ]
        ]
        R.div className: 'cards-filter-by-id col-md-6', [
          R.label {htmlFor:'cardFilter'}, [
            "Filter cards by ids "
          ]
          R.input
            name: 'cardFilter'
            type: 'text'
            ref: 'cardFilter'
            onChange: @handleCardFilterChange
            onBlur: @handleCardFilterBlur
            value: @state.cardFilterInput
            placeholder: 'Paste from Wargameroom or enter ids'
          R.a {className:'cards-filter-by-id-clear', onClick:@handleCardFilterClear}, 'clear'
        ]
      ]
      CardList
        cards: @filterAndSortCards()
        fullText: @state.fullText
    ]
