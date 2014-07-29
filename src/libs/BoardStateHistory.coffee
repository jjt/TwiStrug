StateHistory = require './StateHistory'
superpowerToIndex = require './superpowerToIndex'
stateEncoder = require './stateEncoder'

module.exports = class BoardStateHistory extends StateHistory
  add: (state, meta)->
    # If it's the same thing as the previous entry, don't update the history
    # This is so we can batch the changes for display
    cur = @getCurrent()
    if not cur?
      return super state, meta

    nm = _.cloneDeep meta
    ns = _.cloneDeep state
    cm = cur.meta
    cs = cur.state
   
    # Set ip delta to be an array
    if meta.type == 'ip'
      usa = if nm.side == 'usa' then nm.delta else 0
      ussr = if nm.side == 'ussr' then nm.delta else 0
      nm.delta = [usa, ussr]


    if nm.type == cm.type and ns.game.round == cs.game.round
      sideSame = if nm.id == 'score' then true else nm.side == cm.side
      idSame = nm.id == cm.id

      typeIpSame = nm.type == 'ip' and nm.country.id == cm.country.id
      typeValSame = nm.type == 'val' and nm.id != 'turn' and
      nm.id != 'round' and sideSame and idSame

      if typeIpSame or typeValSame
        return @mergeWithCurrent ns, nm

    super ns, nm


  mergeWithCurrent: (state,meta)->
    c = _.cloneDeep @getCurrent()
    nm = _.cloneDeep meta
    cm = c.meta
    switch cm.type
      when 'ip'
        nm.delta[0] += cm.delta[0]
        nm.delta[1] += cm.delta[1]
        nm.side = 'both'
        if nm.delta[0] == 0
          nm.side = 'ussr'
        if nm.delta[1] == 0
          nm.side = 'usa'
        if nm.delta[0] == nm.delta[1] == 0
          pop = true

      when 'val'
        nm.old = cm.old
        if nm.old == nm.new
          pop = true

    if @latest != @current
      @states = @states.slice(0,@current+1)
      @latest = @current

    if pop == true
      @states.pop()
      @current--
      if(@latest > @current)
        @latest = @current

    else
      @states[@current] =
        meta: nm
        state: state

    @save()
    @emit 'merge', @getCurrent()
    @emit 'update', @getCurrent()
    @emit 'change'


  # Turn state into a minimal representation
  encodeCurrent: ()->
    stateEncoder.encode @getCurrent()
    
