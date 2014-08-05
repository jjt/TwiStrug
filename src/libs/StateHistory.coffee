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
  
  # Extend to add custom encoding/decoding functionality
  encodeState: (state)->
    state

  decodeState: (state)->
    state
  
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
      state: @encodeState _.cloneDeep state
      meta: _.cloneDeep meta

    @states[@current] = newState

    @save()

    @emit 'add', newState, 'YEAH'
    @emit 'update', newState, 'YEAH'
    @emit 'change'
  
  undo: ()->
    if @current > 0
      @current--
    @showThenHide()
    state = @getCurrent()
    @emit 'undo'
    @emit 'update', state
    @emit 'change'
    state
  
  redo: ()->
    if @current < @latest
      @current++
    @showThenHide()
    state = @getCurrent()
    @emit 'redo'
    @emit 'update', state
    @emit 'change'
    state

  goTo: (index)->
    return if not index?
    @current = index
    @emit 'goTo', @getCurrent()
    @emit 'update', @getCurrent()
    @emit 'change'

  get: (index)->
    return null if @states.length == 0
    sh = _.cloneDeep @states[index]
    sh.state = @decodeState sh.state
    sh

  getCurrent: ()->
    @get(@current)

  getPrev: ->
    prev = @current - 1
    if prev < 0 then prev = 0
    return @get(prev)

  getAll: ->
    _.map @states, (sh, index)=>
      @get index


module.exports = StateHistory
