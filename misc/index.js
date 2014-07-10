var fs = require('fs');
var _ = require('lodash');
var Promise = require('bluebird');
var cheerio = require('cheerio');

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


function makeCountriesAndLinks() {
  readFile('countries-fixed.tsv', 'utf8').then(function(data){
    var tsv = require('tsv')
    var dataCleaned = data.replace(/\t+/g,'\t');
    var countries = tsv.parse(dataCleaned);
    countries = _.filter(countries,function(el){
      if(el.group)
        return true; 
    });
    countries = countries.map(function(el,index){
      el.id = index;
      if(el.position) {
        var coords = el.position.split(',')
        el.x = coords[0];
        el.y = coords[1];
        el.fixed = true;
      }
        
      return el;
    });
    //console.log(countries);
    //;w
    //
    writeFile('../app/data/countries.json', JSON.stringify(countries, null, '  '));
    
    links = countries.reduce(function(out,country){
      if(country.links) {
        out.push.apply(out, country.links.split(',').map(function(target) {
          targetCountry = _.find(countries,{name:target});
          // Have to figure out if it's cross-continental
          return {
            source:country.id,
            target:targetCountry.id,
            nodes: [country.name, targetCountry.name],
            crossContinent: country.continent !== targetCountry.continent
          }
        }));
      }
      return out;
    },[]);

    writeFile('../app/data/countries-links.json', JSON.stringify(links, null, ' '));
    writeFile('../app/data/countries-for-graph.json', JSON.stringify({
      nodes: countries,
      links: links
    }, null, ''));
  });
}

makeCountriesAndLinks();

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
//addStageToCardsJSON();

function stripLinksFromStratPages() {
  for(var i=1; i<111; i++) {
    (function(index) {
      var fileIndex = ("000" + index).substr(-3,3);
      readFile('../app/data/cardStrategy/' + fileIndex + '.html', 'utf8')
        .then(function(markup){
          content = markup.replace(/<a\b[^>]*>(.*?)<\/a>/ig,"$1")
          var dest = '../app/data/cardStrategy/' + fileIndex + '.html';
          writeFile(dest, content);
        });
    })(i)
  }
  
}

//stripLinksFromStratPages(
