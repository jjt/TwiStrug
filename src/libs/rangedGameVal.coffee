module.exports = (id, val)->
  ranges =
    score: [-20, 20]
    turn: [1, 10]
    round: [0, 16]
    defcon: [1, 5]
    milops: [0, 5]
    space: [0, 8]

  range = ranges[id]

  if val < range[0]
    return range[1]
  if val > range[1]
    return range[0]
  val

