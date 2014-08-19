Game = require './lib/game'

game = new Game

playRound = ->
  while game.cards.usa.length > 1 or game.cards.ussr.length > 1
    side = 'ussr'
    if game.cards.usa.length > game.cards.ussr.length
      side = 'usa'
    game.playCard side, game.cards[side][0]
    game.resolveActiveCards()

game.start()
playRound()
game.logAllCards()

while game.game.turn < 10
  game.nextTurn()
  playRound()
  game.logAllCards()

