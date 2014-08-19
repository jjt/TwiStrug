WebSocketServer = require("ws").Server
http = require "http"
express = require "express"
gamelist = require './gamelist'
app = express()
port = process.env.PORT or 3000

app.use express.static(__dirname + "/")

server = http.createServer(app)
server.listen port

require('./routes/game')(app)


console.log "http server listening on %d", port
wss = new WebSocketServer server: server
console.log "websocket server created"
wss.on "connection", (ws) ->
  ws.send JSON.stringify new Date()
  ws.send JSON.stringify 'yea'

  console.log 'connection'
  ws.on "close", ->
    console.log "websocket connection close"
    return

  return
