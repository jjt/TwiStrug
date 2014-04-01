var fs = require('fs');
var _ = require('lodash');
var Promise = require('bluebird');

var readFile = Promise.promisify(fs.readFile);
var writeFile = Promise.promisify(fs.writeFile);

Promise.all([readFile('cards.tsv', 'utf8'), readFile('cardUrls.txt', 'utf8')])
  .spread(function(cardsTSV,urlsTXT) {
    var urls = urlsTXT.split('\n').slice(0,-1);
    var cards = require('tsv').parse(cardsTSV).slice(0,-1).map(function(el, i){
      el.url = urls[i];
      return el;
    });
    return cards;
  })
  .then(function(data){
    console.log(data);
    return writeFile('cards.json',JSON.stringify(data));
  })
  .catch(function(e){
    console.log('Error', e); 
  });

