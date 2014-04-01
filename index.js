var fs = require('fs');
var _ = require('lodash');

fs.readFile('cards.tsv', {encoding:'utf8'}, function(err, data) {
  if (err)
    return console.log(err);
  var cards = require('tsv').parse(data).slice(0,-1);
  console.log(cards);
  fs.readFile('cardPages.json', {encoding:'utf8'}, function(err, data){
    if (err)
      return console.log(err);
    fs.writeFile('cards.json', JSON.stringify(cards), function(err) {
      if (err)
        return console.log(err)
    });
  
  }) 
});
