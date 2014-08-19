class MicroEventClass
  _init:-> @_listn or @_listn = {}
  _create:(e)-> @_init()[e] or  @_init()[e] = []
  on:(e, f)-> (@_create e).push f
  off:(e, f)-> (t.splice (t.indexOf f), 1) if (t = @_init()[e])?
  once:(e, f)-> @on e, (t = => (@off e, t) && f.apply @, arguments)
  emit:(e, r...)-> l.apply @, r for l in t if (t = @_init()[e])?; 0
  @mixin=(t)-> t::[p] = @::[p] for p of @::; 0

module.exports = MicroEventClass
