MicroEventClass = require './MicroEventClass'

class StateHistory extends MicroEventClass
  # @id is used for persistance
  constructor: (opts)->
    #_.assign this, MicroEvent
    @states = []
    @staged = []
    @latest = null
    @current = null
    @show = false
    @id = opts.id
    @statesToSave = 50
  
  save: ->
    states = @states.slice 0, @statesToSave
    json = JSON.stringify states
    localStorage.setItem @id, json

  load: ->
    states = JSON.parse localStorage.getItem(@id)
    if states and _.isArray states
      @states = states
      @current = states.length - 1
      @latest = @current

      @emit 'load'
      @emit 'update'
      return states

  add: (state, meta={})->
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

  goTo: (index)->
    @current = index
    @emit 'goTo', @getCurrent()
    @emit 'update'

  get: (index)->
    _.cloneDeep @states[index]

  getCurrent: ()->
    @get(@current)

  getPrev: ->
    prev = @current - 1
    if prev < 0 then prev = 0
    return @get(prev)

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
