fs = require('fs')
_ = require('lodash')
Promise = require('bluebird')
rimraf = require('rimraf')

readFile = Promise.promisify(fs.readFile)
writeFile = Promise.promisify(fs.writeFile)
rimraf = Promise.promisify(rimraf)
mkdir = Promise.promisify(fs.mkdir)

zeroPad = (str, len=3) ->
 ('000' + str).substr(-len,len)

outputDir = '../app/data/cardStrategyLinked'


processFile = (i, cards) ->
  fileIndex = zeroPad i
  readFile("../app/data/cardStrategy/#{fileIndex}.html", 'utf8')
    .then (markup)->
      # First pass, tokenize the markup and delimit with |
      cards.forEach (card) ->
        return if card.id == i
        # Strip asterisk from search
        title = card.title.replace "*", ''
        # a-z range is to stop short titles matching as part of a word
        re = new RegExp "([^a-zA-Z])#{title}\*?([^a-zA-Z])", "gi"
        console.log 'first pass', card.id,title, i
        markup = markup.replace re, "$1AAAA#{title}BBBB$2"
      # Second pass, turn the tokens into links
      console.log markup
      cards.forEach (card) ->
        return if card.id == i
        title = card.title.replace "*", ''
        console.log 'second pass', card.id,title, i
        re = new RegExp "AAAA#{title}BBBB", "gi"
        markup = markup.replace re, "<a href=\"#/card/#{card.id}\" title=\"#{card.text}\">#{card.title}</a>"

      writeFile "#{outputDir}/#{fileIndex}.html", markup

linkCardsInStratFiles = ()->
  rimraf(outputDir)
    .then ()-> mkdir(outputDir)
    .then ()-> readFile('../app/data/cards.json', 'utf8')
    .then (cardData)->
      cards = JSON.parse cardData
      # Sort by title length, descending
      # This is so "Nixon Plays the China Card" comes before "the China Card"
      cards = _.sortBy(cards, (el)-> el.title.length).reverse()
      
      for i in [1..110]
        processFile(i, cards)

linkCardsInStratFiles()
