_ = require 'lodash'
cards = require './cards.json'

module.exports = (china = true)->
  if not china
    cards = _.reject cards, {id:6}

  cardsFromIds = (ids = [])->
    _.filter cards, (card)->
      card.id in ids

  cardById = (id)->
    card = _.find cards, {id}

  cardTitlesFromIds = (ids = [])->
    _.pluck cardsFromIds(ids), 'title'

  cardTitleById = (id)->
    _.pluck _.find(cards, {id}), 'title'

  { cardsFromIds, cardById, cardTitlesFromIds, cardTitleById, cards }
    
