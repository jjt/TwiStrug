module.exports = (app)->
  gameController = require '../controllers/game'
  app.get '/game/:id', gameController.get
