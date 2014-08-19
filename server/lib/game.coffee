_ = require 'lodash'
# Get cards and remove the China Card
Card = require('../../lib/card')(false)
console.log Card

module.exports = class Game
  init: ->
    _.assign this,
      game:
        score: 0
        defcon: 5
        turn: 0
        round: 0
        milops:
          usa: 0
          ussr: 0
        space:
          usa: 0
          ussr: 0
      
      board: ''

      cards:
        usa: []
        ussr: []
        deck: []
        discard: []
        # Active cards are ones that are being resolved
        active: []
        # Keeps track of persistent events
        ongoing: []
        # Cards that are removed from the game
        removed: []
        china:
          owner: 'ussr'
          up: true

    @makeDeck()
    @dealCards()

  constructor: (opts = {})->
    @init()
    @id = opts.id or Math.random().toString(36).substr(2,10)

  logCards: ->
    ussr = Card.cardTitlesFromIds(@cards.ussr)
    usa = Card.cardTitlesFromIds(@cards.usa)
    console.log "USSR hand (#{ussr.length}):", ussr.join ', '
    console.log "USA hand (#{ussr.length}):", usa.join ', '
    console.log "Deck (#{@cards.deck.length}):", "Discard (#{@cards.discard.length}):", "Removed (#{@cards.removed.length}):"

  logAllCards: ->
    ussr = Card.cardTitlesFromIds(@cards.ussr)
    usa = Card.cardTitlesFromIds(@cards.usa)
    deck = Card.cardTitlesFromIds(@cards.deck)
    discard = Card.cardTitlesFromIds(@cards.discard)
    removed = Card.cardTitlesFromIds(@cards.removed)
    ongoing = Card.cardTitlesFromIds(@cards.ongoing)
    console.log "TURN #{@game.turn} | USSR hand (#{ussr.length}):", ussr.join ', '
    console.log "TURN #{@game.turn} | USA hand (#{ussr.length}):", usa.join ', '
    console.log "TURN #{@game.turn} | Deck (#{deck.length}):", deck.join ', '
    console.log "TURN #{@game.turn} | Discard (#{discard.length}):", discard.join ', '
    console.log "TURN #{@game.turn} | Removed (#{removed.length}):", removed.join ', '
    console.log "TURN #{@game.turn} | Ongoing (#{ongoing.length}):", ongoing.join ', '

  # After initial setup, starts the game
  start: ->
    @game.turn = 1

  nextTurn: ->
    @game.turn++
    stage = switch @game.turn
      when 4 then 2
      when 8 then 3
      else null
    if stage?
      @makeDeck(stage)

    console.log "Game Turn #{@game.turn}"
    @dealCards()

  dealCards: ->
    # Hand size increases on turn 4, Mid War
    handSize = if @game.turn < 4 then 8 else 9
    i = handSize
    while i--
      if @cards.ussr.length < handSize
        @cards.ussr.push @getCard()
      if @cards.usa.length < handSize
        @cards.usa.push @getCard()
    #@logCards()

  getCard: ->
    if @cards.deck.length == 0
      @reshuffle()
    @cards.deck.shift()

  # If own card, action is either 'evt', 'ops'
  # If opp's card, action indicates which one happens first
  playCard: (side, id, action)->
    hand = @cards[side]
    return false if not hand or not side? or id not in hand
    card = Card.cardById id
    _.pull hand, id
    @cards.active.push { id, side, action }

    if card.ongoing
      @cards.ongoing.push id
    console.log "TURN #{@game.turn} | #{side.toUpperCase()} played #{Card.cardTitlesFromIds([id])}"
    #@logCards()
  
  # Cards in play need resolving
  # For now, just clear the active cards
  resolveActiveCards: ->
    _.each @cards.active, (obj)=>
      card = Card.cardById obj.id
      if card.removed
        @cards.removed.push card.id
      else
        @cards.discard.push card.id

    @cards.active = []

  reshuffle: ->
    console.log 'RESHUFF'
    @cards.deck = _.shuffle @cards.discard
    @cards.discard = []
    @cards.deck

  # Makes the deck depending on the stage
  makeDeck: (stage = 1)->
    stageCards = _.chain Card.cards
      .filter {stage}
      #.shuffle()
      .pluck 'id'
      .value()
    @cards.deck = _.union(stageCards, @cards.deck)
    
