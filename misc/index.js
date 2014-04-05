var fs = require('fs');
var _ = require('lodash');
var Promise = require('bluebird');

var readFile = Promise.promisify(fs.readFile);
var writeFile = Promise.promisify(fs.writeFile);

function writeJSON(data) {
  console.log(data);
  return writeFile('../app/data/cards.json',JSON.stringify(data));
}

function notNull(el) {
  return el != null;
}

// TODO: add stage of war to JSON file
function makeCardsJSONFromTSV() {
  Promise.all([readFile('cards.tsv', 'utf8'), readFile('cardUrls.txt', 'utf8'),
    readFile('cardTable.html', 'utf8')])
    .spread(function(cardsTSV, urlsTXT, markup) {
      var urls = urlsTXT.split('\n').slice(0,-1);
      var cardsMoreInfo = parseHTML(markup);

      var cards = require('tsv').parse(cardsTSV).slice(0,-1).map(function(el, i){
        el.url = urls[i];
        return el;
      });

      console.log(cards.length, cardsMoreInfo.length);
      cards = cards.map(function(el, i){
        return _.merge(el, cardsMoreInfo[i]);
      });
      console.log(_.sample(cards,4));
      return cards;

    })
    .then(writeJSON)
    .catch(function(e){
      console.log('Error', e); 
    });
}

function parseHTML(markup) {
  var trs = markup.split('<tr');
  var cards = trs
    .map(function(tr){
      var trmatch = tr.match("background-color:(\#[0-9a-f]*)");
      if(trmatch == null || trmatch.length < 2)
        return undefined; 
      var bg = trmatch[1];
      var owner = 'neutral';
      if(bg === '#f4cccc') owner = 'ussr';
      if(bg === '#c9daf8') owner = 'us';
      console.log(tr.indexOf('text-decoration:underline'));
      return {
        owner: owner,
        removed: tr.indexOf('*<') !== -1,
        ongoing: tr.indexOf('text-decoration:underline') !== -1
      }
    })
    .filter(notNull);

  return cards;
}

//makeCardsJSONFromTSV();

function makeStrategyInfoFiles() {
  for(var i=1; i<111; i++) {
    (function(index) {
      var fileIndex = ("000" + index).substr(-3,3);
      readFile('cardPages/' + fileIndex + '.html', 'utf8')
        .then(function(markup){
          var content = markup.split('</blockquote>')[1].split('<div class="wpa')[0];
          var dest = '../app/data/cardStrategy/' + fileIndex + '.html';
          writeFile(dest, content);
        });
    })(i)
  }
}

//makeStrategyInfoFiles();

function addStageToCardsJSON() {
  var file = '../app/data/cards.json';
  readFile(file, 'utf8')
    .then(function(cards){
      cards = JSON.parse(cards);
      cards = cards.map(function(el) {
        var stage = 1;
        if((el.id >= 37 && el.id <=81) || el.id == 107 || el.id == 108)
          stage = 2;
        if((el.id >=82 && el.id <=103) || el.id >= 109)
          stage = 3;
        el.stage = stage;
        return el;
      });
      writeFile(file, JSON.stringify(cards));
    });
}
addStageToCardsJSON();


