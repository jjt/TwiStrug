module.exports = (id, val, opt)->
  switch id
    when 'turn'
      start = 'S'
      end = 'E'
      if opt == 'long'
        start = 'New Game'
        end = 'Game End'
      switch val
        when 0 then start
        when 11 then end
        else val
    when 'round'
      h = if opt == 'long' then 'Headline' else 'H'
      if val == 0 then h else Math.ceil(val / 2)
    when 'score'
      Math.abs val
    else
      val
