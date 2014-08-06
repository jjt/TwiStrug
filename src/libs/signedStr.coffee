module.exports = (num)->
  sign = ''
  if num > 0
    sign = '+'
  console.log sign + num
  return sign + num
