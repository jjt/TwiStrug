MicroEventClass = require './MicroEventClass'

class StateHistory extends MicroEventClass
  # @id is used for persistance
  constructor: (opts)->
    #_.assign this, MicroEvent
    @states = []
    @latest = null
    @current = null
    @show = false
    @id = opts.id
    @statesToSave = 50
  
  save: ->
    states = @states.slice 0, @statesToSave
    json = JSON.stringify states
    localStorage.setItem @id, json
    console.log "StateHistory stored #{states.length} states in #{json.length} characters"

  add: (state, meta)->
    if @latest != @current
      @states = @states.slice(0,@current+1)

    if not @current?
      @current = 0
    else
      @current++

    @latest = @current

    newState =
      state: _.cloneDeep state
      meta: _.cloneDeep meta

    @states[@current] = newState

    @save()

    @emit 'add', newState, 'a', 'b', 'c'
    @emit 'update'
  
  undo: ()->
    if @current > 0
      @current--
    @emit 'undo'
    @emit 'update'
    @showThenHide()
    state = @getCurrent()
    state
  
  redo: ()->
    if @current < @latest
      @current++
    @emit 'redo'
    @emit 'update'
    @showThenHide()
    state = @getCurrent()
    state

  get: (index)->
    _.cloneDeep @states[index]

  getCurrent: ()->
    @get(@current)

  toggleVisible: (force, showTemp=false)->
    clearTimeout @showThenHideTimeout
    @showTemp = showTemp
    @show = if force? then force else !@show
    @emit 'toggleVisible', @show
    @emit 'update'

  showThenHide: (time = 1000)->
    clearTimeout @showThenHideTimeout
    if not @show
      @toggleVisible true, true
    if @showTemp
      @showThenHideTimeout = setTimeout @toggleVisible.bind(this, false), time

module.exports = StateHistory
