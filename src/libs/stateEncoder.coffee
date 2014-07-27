numToChar = require './numToChar'

# Turn a game state object into a string, values delimited by index in the string
#
# Bytes     Items
# -----------------------------------------------------------
# 0-7       Board state:  Score, Defcon, Turn, Round,
#                         MO USA, MO USSR, Space USA, Space USSR
# 8-176     Country IPs, 2 bytes each, sequentially by id
module.exports =
  encode: (stateObj)->
    state = stateObj.state
    game = state.game
    ips = state.ips

    # Score is from -20 to +20, but this encoder is positive integers only
    board = [
      game.score + 20, game.defcon, game.turn, game.round,
      game.milops[0], game.milops[1], game.space[0], game.space[1]
    ]

    # First 2 ips are the superpowers - pretty useless, should change in future
    board.concat _.flatten ips.slice(2)
      .map numToChar.encode
      .join ''
      
  decode: (str)->
    arr = str.split('').map (el)-> numToChar.decode el
    boardArr = arr.slice(0,8)
    ipArr = arr.slice(8)

    [score, defcon, turn, round, mousa, moussr, spusa, spussr] = boardArr
    milops = [mousa, moussr]
    space = [spusa, spussr]
    score -= 20
    game = {score, defcon, turn, round, milops, space}

    ips = []
    for ip, index in ipArr
      ipsIndex = Math.floor index/2
      sideIndex = index % 2
      if sideIndex == 0
        ips[ipsIndex] = [ip]
      else
        ips[ipsIndex][sideIndex] = ip

    # Add the superpower IPs back in
    ips.unshift [0,0], [0,0]

    {game, ips}

