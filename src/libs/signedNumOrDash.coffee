module.exports = (num)->
  if num == 0
    out = '—'
  if num > 0
    out = "+#{num}"
  if num < 0
    out = num
  out
