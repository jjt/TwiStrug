module.exports =
  turn: (val)->
    switch val
      when 0 then 'S'
      when 11 then 'E'
      else val
  round: (val)->
    if val == 0 then 'H' else Math.ceil(val / 2)
  
