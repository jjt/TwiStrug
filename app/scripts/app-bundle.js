(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $, NavView, R, TwiStrug, addReactKey, cx, libs, pages, update, views;

R = React.DOM;

update = React.addons.update;

cx = React.addons.classSet;

$ = Zepto;

$.getScript = function(src, func) {
  var script;
  script = document.createElement('script');
  script.async = "async";
  script.src = src;
  if (func) {
    script.onload = func;
  }
  return document.getElementsByTagName("head")[0].appendChild(script);
};

libs = require('./libs');

pages = require('./pages');

views = require('./views');

NavView = require('./views/Nav');

TwiStrug = React.createClass({
  componentWillMount: function() {
    return $('#placeholder').hide();
  },
  getInitialState: function() {
    return {
      menuActive: null
    };
  },
  setView: function(name, pageTitle, menuActive, data) {
    if (menuActive == null) {
      menuActive = '';
    }
    if (data == null) {
      data = {};
    }
    if (pageTitle != null) {
      libs.setPageTitle(pageTitle);
    }
    return this.setState({
      view: {
        name: name,
        data: data
      },
      menuActive: menuActive
    });
  },
  componentDidMount: function() {
    var router, stateRoute;
    stateRoute = function(name, pageTitle, menuActive, args) {
      var state;
      state = libs.qs.toObj(args);
      if ((state != null ? state.filter : void 0) != null) {
        state.filter = state.filter.map(function(el) {
          return parseInt(el, 10);
        });
      }
      return this.setView(name, pageTitle, menuActive, {
        state: state
      });
    };
    router = new Router({
      '/': this.setView.bind(this, 'home', 'Home'),
      '/card/:id': (function(_this) {
        return function(id) {
          var card, nextCard, nextId, pageTitle, prevCard, prevId;
          id = parseInt(id, 10);
          nextId = id === 110 ? 1 : id + 1;
          prevId = id === 1 ? 110 : id - 1;
          card = _.find(_this.props.cards, {
            id: id
          });
          nextCard = _.find(_this.props.cards, {
            id: nextId
          });
          prevCard = _.find(_this.props.cards, {
            id: prevId
          });
          pageTitle = "" + card.title + " (#" + card.id + ")";
          return _this.setView('card', pageTitle, 'cards', {
            card: card,
            nextCard: nextCard,
            prevCard: prevCard
          });
        };
      })(this),
      '/countries': this.setView.bind(this, 'countries', 'Countries', 'countries'),
      '/about': this.setView.bind(this, 'about', 'About', 'about')
    });
    router.configure({
      notfound: this.setView.bind(this, 'whoops', 'Whoops')
    });
    router.on(/cards\??(.*)/, stateRoute.bind(this, 'cards', 'Cards', 'cards'));
    router.on(/board\/?(.*)/, (function(_this) {
      return function(gameId) {
        if ((gameId == null) || gameId === '') {
          return router.setRoute("board/" + (Math.random().toString(36).slice(2)));
        }
        return $.getJSON('/data/map-data.json', function(mapData) {
          var boardProps, countries, countryPositions, key, links, nodes, regionInfoNodes, stateHistory;
          countryPositions = mapData.countryPositions, countries = mapData.countries, links = mapData.links, regionInfoNodes = mapData.regionInfoNodes;
          countries = countries.map(function(node) {
            node.x = countryPositions[node.name].x;
            node.y = countryPositions[node.name].y;
            node.fixed = true;
            return node;
          });
          regionInfoNodes = regionInfoNodes.map(function(node) {
            node.regionInfo = true;
            node.fixed = true;
            return node;
          });
          nodes = _.union(countries, regionInfoNodes);
          nodes = _.zipObject(_.pluck(nodes, 'id'), nodes);
          stateHistory = new libs.StateHistory({
            id: gameId
          });
          stateHistory.load();
          key = gameId;
          boardProps = {
            gameId: gameId,
            mapData: mapData,
            countries: countries,
            regionInfoNodes: regionInfoNodes,
            links: links,
            nodes: nodes,
            stateHistory: stateHistory,
            key: key
          };
          return _this.setView('board', 'Board', 'board', boardProps);
        });
      };
    })(this));
    router.init('/');
  },
  render: function() {
    var boardStateHistory, mainView, _ref;
    if (!((_ref = this.state) != null ? _ref.view : void 0)) {
      mainView = R.p({
        className: 'lead'
      }, 'TwiStrug is loading...');
    } else {
      mainView = (function() {
        switch (this.state.view.name) {
          case 'home':
            return pages.Home({
              cards: this.props.cards,
              state: this.state.view.data.state
            });
          case 'card':
            return pages.Card(this.state.view.data);
          case 'cards':
            return pages.Cards({
              cards: this.props.cards,
              state: this.state.view.data.state
            });
          case 'countries':
            return pages.Countries();
          case 'board':
            return pages.Board(this.state.view.data);
          case 'about':
            return pages.About();
          case 'whoops':
            return pages.Whoops();
        }
      }).call(this);
      if (this.state.view.name === 'board') {
        boardStateHistory = views.BoardStateHistory({
          stateHistory: this.state.view.data.stateHistory,
          key: Math.random()
        });
      }
    }
    return R.div({}, [
      NavView({
        active: this.state.menuActive
      }), R.div({
        className: 'container'
      }, mainView), boardStateHistory
    ]);
  }
});

addReactKey = function(el) {
  el.key = "rk-" + el.id;
  return el;
};

React.renderComponent(TwiStrug({
  cards: cardsData.map(addReactKey)
}), document.getElementById('app'));


},{"./libs":10,"./pages":28,"./views":40,"./views/Nav":39}],2:[function(require,module,exports){
var MicroEventClass,
  __slice = [].slice;

MicroEventClass = (function() {
  function MicroEventClass() {}

  MicroEventClass.prototype._init = function() {
    return this._listn || (this._listn = {});
  };

  MicroEventClass.prototype._create = function(e) {
    return this._init()[e] || (this._init()[e] = []);
  };

  MicroEventClass.prototype.on = function(e, f) {
    return (this._create(e)).push(f);
  };

  MicroEventClass.prototype.off = function(e, f) {
    var t;
    if ((t = this._init()[e]) != null) {
      return t.splice(t.indexOf(f), 1);
    }
  };

  MicroEventClass.prototype.once = function(e, f) {
    var t;
    return this.on(e, (t = (function(_this) {
      return function() {
        return (_this.off(e, t)) && f.apply(_this, arguments);
      };
    })(this)));
  };

  MicroEventClass.prototype.emit = function() {
    var e, l, r, t, _i, _len;
    e = arguments[0], r = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if ((t = this._init()[e]) != null) {
      for (_i = 0, _len = t.length; _i < _len; _i++) {
        l = t[_i];
        l.apply(this, r);
      }
    }
    return 0;
  };

  MicroEventClass.mixin = function(t) {
    var p;
    for (p in this.prototype) {
      t.prototype[p] = this.prototype[p];
    }
    return 0;
  };

  return MicroEventClass;

})();

module.exports = MicroEventClass;


},{}],3:[function(require,module,exports){
var MicroEventClass, StateHistory,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

MicroEventClass = require('./MicroEventClass');

StateHistory = (function(_super) {
  __extends(StateHistory, _super);

  function StateHistory(opts) {
    this.states = [];
    this.latest = null;
    this.current = null;
    this.show = false;
    this.id = opts.id;
    this.statesToSave = 50;
  }

  StateHistory.prototype.save = function() {
    var json, states;
    states = this.states.slice(0, this.statesToSave);
    json = JSON.stringify(states);
    return localStorage.setItem(this.id, json);
  };

  StateHistory.prototype.load = function() {
    var states;
    states = JSON.parse(localStorage.getItem(this.id));
    if (states && _.isArray(states)) {
      this.states = states;
      this.current = states.length - 1;
      this.latest = this.current;
      this.emit('load');
      this.emit('update');
      return states;
    }
  };

  StateHistory.prototype.add = function(state, meta) {
    var newState;
    if (meta == null) {
      meta = {};
    }
    if (this.latest !== this.current) {
      this.states = this.states.slice(0, this.current + 1);
    }
    if (this.current == null) {
      this.current = 0;
    } else {
      this.current++;
    }
    this.latest = this.current;
    newState = {
      state: _.cloneDeep(state),
      meta: _.cloneDeep(meta)
    };
    this.states[this.current] = newState;
    this.save();
    this.emit('add', newState, 'a', 'b', 'c');
    return this.emit('update');
  };

  StateHistory.prototype.undo = function() {
    var state;
    if (this.current > 0) {
      this.current--;
    }
    this.emit('undo');
    this.emit('update');
    this.showThenHide();
    state = this.getCurrent();
    return state;
  };

  StateHistory.prototype.redo = function() {
    var state;
    if (this.current < this.latest) {
      this.current++;
    }
    this.emit('redo');
    this.emit('update');
    this.showThenHide();
    state = this.getCurrent();
    return state;
  };

  StateHistory.prototype.get = function(index) {
    return _.cloneDeep(this.states[index]);
  };

  StateHistory.prototype.getCurrent = function() {
    return this.get(this.current);
  };

  StateHistory.prototype.toggleVisible = function(force, showTemp) {
    if (showTemp == null) {
      showTemp = false;
    }
    clearTimeout(this.showThenHideTimeout);
    this.showTemp = showTemp;
    this.show = force != null ? force : !this.show;
    this.emit('toggleVisible', this.show);
    return this.emit('update');
  };

  StateHistory.prototype.showThenHide = function(time) {
    if (time == null) {
      time = 1000;
    }
    clearTimeout(this.showThenHideTimeout);
    if (!this.show) {
      this.toggleVisible(true, true);
    }
    if (this.showTemp) {
      return this.showThenHideTimeout = setTimeout(this.toggleVisible.bind(this, false), time);
    }
  };

  return StateHistory;

})(MicroEventClass);

module.exports = StateHistory;


},{"./MicroEventClass":2}],4:[function(require,module,exports){
var cx;

cx = React.addons.classSet;

module.exports = function(props) {
  var classes, ownerClass;
  ownerClass = "owner-" + props.owner;
  classes = cx({
    'asiaScoring': props.title === 'Asia Scoring',
    'europeScoring': props.title === 'Europe Scoring',
    'middleEastScoring': props.title === 'Middle East Scoring',
    'centralAmericaScoring': props.title === 'Central America Scoring',
    'southeastAsiaScoring': props.title === 'Southeast Asia Scoring*',
    'africaScoring': props.title === 'Africa Scoring',
    'southAmericaScoring': props.title === 'South America Scoring',
    'ongoing': props.ongoing
  });
  return ownerClass + ' ' + classes;
};


},{}],5:[function(require,module,exports){
module.exports = function(el) {
  if (el) {
    return el;
  }
};


},{}],6:[function(require,module,exports){
module.exports = function(el, i, arr) {
  return arr.indexOf(el) === i;
};


},{}],7:[function(require,module,exports){
module.exports = function(el) {
  return (1 <= el && el <= 110);
};


},{}],8:[function(require,module,exports){
module.exports = {
  turn: function(val) {
    switch (val) {
      case 0:
        return 'S';
      case 11:
        return 'E';
      default:
        return val;
    }
  },
  round: function(val) {
    if (val === 0) {
      return 'H';
    } else {
      return Math.ceil(val / 2);
    }
  }
};


},{}],9:[function(require,module,exports){
module.exports = function(id, val, opt) {
  var end, h, start;
  switch (id) {
    case 'turn':
      start = 'S';
      end = 'E';
      if (opt === 'long') {
        start = 'New Game';
        end = 'Game End';
      }
      switch (val) {
        case 0:
          return start;
        case 11:
          return end;
        default:
          return val;
      }
      break;
    case 'round':
      h = opt === 'long' ? 'Headline' : 'H';
      if (val === 0) {
        return h;
      } else {
        return Math.ceil(val / 2);
      }
      break;
    case 'score':
      return Math.abs(val);
    default:
      return val;
  }
};


},{}],10:[function(require,module,exports){
module.exports = (function () {var f = require("/Users/jjt/Sites/twistrug/src/libs/index.coffee");f["MicroEventClass"]=require("/Users/jjt/Sites/twistrug/src/libs/MicroEventClass.coffee");f["StateHistory"]=require("/Users/jjt/Sites/twistrug/src/libs/StateHistory.coffee");f["cardClassName"]=require("/Users/jjt/Sites/twistrug/src/libs/cardClassName.coffee");f["filterTruthy"]=require("/Users/jjt/Sites/twistrug/src/libs/filterTruthy.coffee");f["filterUnique"]=require("/Users/jjt/Sites/twistrug/src/libs/filterUnique.coffee");f["filterValidCardIds"]=require("/Users/jjt/Sites/twistrug/src/libs/filterValidCardIds.coffee");f["gameVal"]=require("/Users/jjt/Sites/twistrug/src/libs/gameVal.coffee");f["gameValDisplay"]=require("/Users/jjt/Sites/twistrug/src/libs/gameValDisplay.coffee");f["index"]=require("/Users/jjt/Sites/twistrug/src/libs/index.coffee");f["qs"]=require("/Users/jjt/Sites/twistrug/src/libs/qs.coffee");f["rangedGameVal"]=require("/Users/jjt/Sites/twistrug/src/libs/rangedGameVal.coffee");f["setPageTitle"]=require("/Users/jjt/Sites/twistrug/src/libs/setPageTitle.coffee");f["signFromDir"]=require("/Users/jjt/Sites/twistrug/src/libs/signFromDir.coffee");f["signString"]=require("/Users/jjt/Sites/twistrug/src/libs/signString.coffee");f["sortNumerical"]=require("/Users/jjt/Sites/twistrug/src/libs/sortNumerical.coffee");f["upperFirst"]=require("/Users/jjt/Sites/twistrug/src/libs/upperFirst.coffee");f["views"]=require("/Users/jjt/Sites/twistrug/src/libs/views.coffee");f["zeroPad"]=require("/Users/jjt/Sites/twistrug/src/libs/zeroPad.coffee");return f;})();


},{"/Users/jjt/Sites/twistrug/src/libs/MicroEventClass.coffee":2,"/Users/jjt/Sites/twistrug/src/libs/StateHistory.coffee":3,"/Users/jjt/Sites/twistrug/src/libs/cardClassName.coffee":4,"/Users/jjt/Sites/twistrug/src/libs/filterTruthy.coffee":5,"/Users/jjt/Sites/twistrug/src/libs/filterUnique.coffee":6,"/Users/jjt/Sites/twistrug/src/libs/filterValidCardIds.coffee":7,"/Users/jjt/Sites/twistrug/src/libs/gameVal.coffee":8,"/Users/jjt/Sites/twistrug/src/libs/gameValDisplay.coffee":9,"/Users/jjt/Sites/twistrug/src/libs/index.coffee":10,"/Users/jjt/Sites/twistrug/src/libs/qs.coffee":11,"/Users/jjt/Sites/twistrug/src/libs/rangedGameVal.coffee":12,"/Users/jjt/Sites/twistrug/src/libs/setPageTitle.coffee":13,"/Users/jjt/Sites/twistrug/src/libs/signFromDir.coffee":14,"/Users/jjt/Sites/twistrug/src/libs/signString.coffee":15,"/Users/jjt/Sites/twistrug/src/libs/sortNumerical.coffee":16,"/Users/jjt/Sites/twistrug/src/libs/upperFirst.coffee":17,"/Users/jjt/Sites/twistrug/src/libs/views.coffee":18,"/Users/jjt/Sites/twistrug/src/libs/zeroPad.coffee":19}],11:[function(require,module,exports){
var __hasProp = {}.hasOwnProperty;

module.exports = {
  merge: function(obj) {},
  get: function(field) {},
  set: function(field, val) {
    var qsObj;
    qsObj = this.toObj() || {};
    qsObj[field] = val;
    return this.setQS(this.toQS(qsObj));
  },
  "delete": function(field) {
    var qsObj;
    qsObj = this.toObj() || {};
    if (qsObj == null) {
      return;
    }
    delete qsObj[field];
    return this.setQS(this.toQS(qsObj));
  },
  encodeCharsIn: ['=', '&'],
  encodeCharsOut: ['%3D', '%26'],
  encode: function(obj) {
    if (_.isArray(obj)) {
      obj = obj.join(',');
    }
    return obj.replace(this.encodeCharsIn, this.encodeCharsOut);
  },
  decode: function(str) {
    str = str.replace(this.encodeCharsOut, this.encodeCharsIn);
    if (str.indexOf(',') !== -1) {
      str = str.split(',');
    }
    return str;
  },
  toObj: function(qs) {
    var out, pairs, _ref;
    if (qs == null) {
      qs = (_ref = window.location.hash.split('?')) != null ? _ref[1] : void 0;
    }
    if (!qs) {
      return;
    }
    out = {};
    pairs = qs.split('&');
    if (pairs != null) {
      pairs.forEach((function(_this) {
        return function(pair) {
          var kvArr;
          kvArr = pair.split('=');
          return out[_this.decode(kvArr[0])] = _this.decode(kvArr[1]);
        };
      })(this));
    }
    return out;
  },
  toQS: function(obj) {
    var k, pairs, v;
    pairs = [];
    for (k in obj) {
      if (!__hasProp.call(obj, k)) continue;
      v = obj[k];
      pairs.push("" + (this.encode(k)) + "=" + (this.encode(v)));
    }
    return pairs.join('&');
  },
  setQS: function(qs) {
    return window.location.hash = window.location.hash.split('?')[0] + '?' + qs;
  }
};


},{}],12:[function(require,module,exports){
module.exports = function(id, val) {
  var range, ranges;
  ranges = {
    score: [-20, 20],
    turn: [0, 11],
    round: [0, 16],
    defcon: [1, 5],
    milops: [0, 5],
    space: [0, 8]
  };
  range = ranges[id];
  if (val < range[0]) {
    return range[1];
  }
  if (val > range[1]) {
    return range[0];
  }
  return val;
};


},{}],13:[function(require,module,exports){
var __slice = [].slice;

module.exports = function() {
  var args;
  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return document.title = args.join(' | ') + ' - TwiStrug';
};


},{}],14:[function(require,module,exports){
module.exports = function(dir) {
  if (dir === 'up') {
    return '+';
  } else {
    return '-';
  }
};


},{}],15:[function(require,module,exports){
module.exports = function(num) {
  if (num > 0) {
    return '+';
  }
  if (num < 0) {
    return '-';
  }
  return '';
};


},{}],16:[function(require,module,exports){
module.exports = function(a, b) {
  return a - b;
};


},{}],17:[function(require,module,exports){
module.exports = function(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};


},{}],18:[function(require,module,exports){
module.exports = function(str, len) {
  if (len == null) {
    len = 3;
  }
  return ('000' + str).substr(-len, len);
};


},{}],19:[function(require,module,exports){
module.exports = function(str, len) {
  if (len == null) {
    len = 3;
  }
  return ('000' + str).substr(-len, len);
};


},{}],20:[function(require,module,exports){
var R;

R = React.DOM;

module.exports = React.createClass({
  displayName: 'AboutView',
  render: function() {
    return R.div({
      className: 'aboutView'
    }, [
      R.h2({}, "About TwiStrug"), R.img({
        className: 'imgRight',
        src: "/images/tsbox.jpg"
      }), R.p({}, [
        "TwiStrug was created for people who want to reference or learn about the cards of ", R.a({
          href: "http://en.wikipedia.org/wiki/Twilight_Struggle"
        }, "Twilight Struggle"), ". It has since expanded to include a playable version of the board for local games without taking up as much table space."
      ]), R.p({}, [
        "For more in-depth strategy, go to the excellent ", R.a({
          href: "http://twilightstrategy.com"
        }, "Twilight Strategy"), " site. It has tons of great content and analysis available, including discussions about nearly every card. Please support Twilight Strategy and its author, ", R.em({}, "theory"), ", by purchasing Twilight Struggle from Amazon on the sidebar of his site, or by paying some money for the associated", R.a({
          href: "https://leanpub.com/twilightstrategy"
        }, "e-book"), ". It's Twilight Strategy in book form and deserves your money."
      ]), R.p({}, [
        "TwiStrug was made by ", R.a({
          href: "http://jjt.io/"
        }, "Jason Trill"), ". Source available on ", R.a({
          href: "https://github.com/jjt/twistrug"
        }, "Github"), "."
      ])
    ]);
  }
});


},{}],21:[function(require,module,exports){
var Board, BoardInfo, R, cx;

R = React.DOM;

cx = React.addons.classSet;

Board = require('../views/Board');

BoardInfo = React.createClass({
  render: function() {
    return R.div({}, [
      R.div({
        className: 'col-lg-6'
      }, [R.h3({}, 'Fully playable Twilight Struggle board'), R.p({}, "This is a fully playable board with a more compact layout to fit on smaller screens, like a Chromebook or iPad. Just add cards and you'll be able to play anywhere. The board isn't aware of the rules, nor will it do anything automatically. Use it as you would a physical copy of the game."), R.h3({}, "Upcoming and potential features"), R.ul({}, [R.li({}, "Reminder chits for NATO, Red Scare/Purge, etc (Possibly)"), R.li({}, "Keyboard shortcuts for game status and adjusting IP (Possibly)"), R.li({}, "Virtual cards (shuffling, hands, etc) meaning TwiStrug is self-contained as a web application instead of requiring the physical cards (Mayyyybe)"), R.li({}, "Remote games (Unlikely but possible)"), R.li({}, "Complete game a la Wargameroom and Vassal (Unlikely but possible)")])]), R.div({
        className: 'col-lg-6'
      }, [R.h3({}, "Instructions"), R.p({}, "To add/remove influnce in a country, click in the top/bottom of the influence space on the desired side (USA on left, USSR on right)."), R.p({}, "To undo/redo one or more actions, press Z/Y one or more times."), R.p({}, "The dice can be rolled individually by clicking on them, or as a pair by clicking on \"ROLL DICE\"."), R.p({}, "Each superpower box (USA, USSR) shows the number of controlled battleground countries on top. On the bottom it shows the number of regions in which the power has presence, domination and control. For example, if the USSR had \"4 2 1\", it would mean that they have presence in 4 regions, dominate 2, and control 1."), R.h3({}, "Keyboard Shortcuts"), R.p({}, [R.strong({}, "H: "), R.span({}, "Show/hide action history"), R.br({}), R.strong({}, "Z: "), R.span({}, "Undo action"), R.br({}), R.strong({}, "Y: "), R.span({}, "Redo action"), R.br({}), R.em({}, "More coming soon...")])])
    ]);
  }
});

module.exports = React.createClass({
  displayName: 'BoardView',
  getDefaultProps: function() {
    return {
      width: 1140,
      height: 730,
      node: {
        width: 66,
        height: 50,
        gutter: 14,
        titleHeight: 16,
        titleFontSize: 12
      }
    };
  },
  getInitialState: function() {
    return {
      debugObj: {}
    };
  },
  dragend: function(el) {
    var coords;
    coords = this.state.coords;
    coords[el.name] = {
      x: Math.round(el.x),
      y: Math.round(el.y)
    };
    el.fixed = true;
    return this.setState({
      coords: coords
    });
  },
  render: function() {
    return R.div({
      className: 'BoardView'
    }, [
      Board(this.props), BoardInfo(), R.textarea({
        className: 'map-position-debug',
        ref: 'debug',
        value: JSON.stringify(this.state.coords, null, ' '),
        style: {
          width: '100%',
          height: '60rem'
        }
      })
    ]);
  }
});


},{"../views/Board":29}],22:[function(require,module,exports){
module.exports = React.createClass({
  displayName: 'BoardPicView',
  render: function() {
    return R.div({
      className: 'boardView'
    }, [
      R.div({
        className: 'page-header'
      }, R.h2({}, 'Board')), R.a({
        href: '/images/tsboard.jpg'
      }, R.img({
        className: 'fluid',
        src: '/images/tsboard.jpg'
      }))
    ]);
  }
});


},{}],23:[function(require,module,exports){
var R, libs;

R = React.DOM;

libs = require('../libs');

module.exports = React.createClass({
  displayName: 'CardView',
  componentDidMount: function() {
    $(window).on('scroll', this.floatingCard);
    $(window).on('resize', this.floatingCard);
    $(document).on('keypress', this.handleKeyPress);
    this.getStrategy();
    return this.setWindowKeypressHandler();
  },
  componentWillUnmount: function() {
    window.onkeypress = null;
    $(window).off('scroll', this.floatingCard);
    $(window).off('resize', this.floatingCard);
    return $(document).off('keypress', this.handleKeyPress);
  },
  componentDidUpdate: function() {
    return this.getStrategy();
  },
  floatingCard: function() {
    var $header, $img, $win, ho, isScrolling;
    $header = $(this.refs.header.getDOMNode());
    $img = $(this.refs.cardImg.getDOMNode());
    $win = $(window);
    ho = $header.offset();
    isScrolling = $win.scrollTop() > ho.top + ho.height;
    console.log(ho);
    $img.toggleClass('card-img-scroll', isScrolling);
    return $img.css('right', "" + (($win.width() - ho.width - 15) / 2) + "px");
  },
  handleKeyPress: function(ev) {
    var id, kC;
    kC = ev.keyCode;
    if (kC === 104 || kC === 72) {
      id = this.props.prevCard.id;
    }
    if (kC === 108 || kC === 76) {
      id = this.props.nextCard.id;
    }
    if (id != null) {
      return window.location = "#/card/" + id;
    }
  },
  getStrategy: function() {
    this.refs.cardStrategy.getDOMNode().innerHTML = '<p>Loading data...</p>';
    return $.get("/data/cardStrategyLinked/" + (libs.zeroPad(this.props.card.id)) + ".html", (function(_this) {
      return function(data) {
        return _this.refs.cardStrategy.getDOMNode().innerHTML = data;
      };
    })(this));
  },
  render: function() {
    var card, imageUrl;
    card = this.props.card;
    imageUrl = "/images/cards/" + (libs.zeroPad(card.id)) + ".jpg";
    return R.div({
      className: 'cardView'
    }, [
      R.div({
        className: 'page-header clearfix',
        ref: 'header'
      }, R.h2({
        className: libs.cardClassName(card)
      }, [
        R.span({
          className: 'card-ops'
        }, card.ops < 1 ? "S" : card.ops), "" + card.title + " ", R.span({
          className: 'card-id'
        }, "#" + card.id)
      ]), R.div({
        className: 'card-nav'
      }, [
        R.a({
          href: "#/card/" + this.props.prevCard.id,
          className: 'card-nav-prev'
        }, [
          "" + this.props.prevCard.title, R.span({
            className: 'card-nav-label'
          }, [R.small({}, '◀'), ' prev (H)'])
        ]), R.a({
          href: "#/card/" + this.props.nextCard.id,
          className: 'card-nav-next'
        }, [
          "" + this.props.nextCard.title, R.span({
            className: 'card-nav-label'
          }, ['next (L) ', R.small({}, '▶')])
        ])
      ])), R.p({
        className: 'pull-left'
      }, card.text), R.img({
        src: imageUrl,
        className: 'imgRight',
        ref: 'cardImg'
      }), R.div({
        className: 'card-strategy',
        id: 'card-strategy'
      }, [
        R.h3({}, [
          'Strategic Notes from', ' ', R.a({
            href: card.url
          }, 'TwilightStrategy.com')
        ]), R.div({
          ref: 'cardStrategy'
        }, R.p({}, 'Loading data'))
      ])
    ]);
  }
});


},{"../libs":10}],24:[function(require,module,exports){
var CardList, R, cx, libs,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

R = React.DOM;

cx = React.addons.classSet;

libs = require('../libs');

CardList = require('../views/CardList');

module.exports = React.createClass({
  displayName: 'CardsView',
  defaultState: function(props) {
    var filter, _ref;
    filter = props != null ? (_ref = props.state) != null ? _ref.filter : void 0 : void 0;
    return {
      fullText: filter ? true : false,
      cardFilterInput: filter ? filter.join(' ') : '',
      sort: 'stage',
      filter: null
    };
  },
  componentWillReceiveProps: function(nextProps) {
    if (nextProps.state != null) {
      return this.setState(nextProps.state);
    } else {
      return this.setState(this.defaultState());
    }
  },
  getInitialState: function() {
    return _.merge(this.defaultState(this.props), this.props.state);
  },
  getFilterIds: function() {
    var filterIds, _ref;
    if (((_ref = this.state) != null ? _ref.filter : void 0) != null) {
      filterIds = this.state.filter.sort(libs.sortNumerical).filter(libs.filterTruthy).filter(libs.filterUnique);
    }
    if (filterIds == null) {
      filterIds = [];
    }
    return filterIds;
  },
  getFilteredCards: function() {
    if (this.state.filter != null) {
      return this.props.cards.filter((function(_this) {
        return function(el) {
          var _ref;
          if (_ref = el.id, __indexOf.call(_this.state.filter, _ref) >= 0) {
            return el;
          }
        };
      })(this));
    }
    return this.props.cards;
  },
  filterAndSortCards: function() {
    var cards, order, sort, sortParam, _ref;
    cards = this.getFilteredCards();
    _ref = this.state.sort.split('-'), sort = _ref[0], order = _ref[1];
    sortParam = (function() {
      switch (sort) {
        case 'textlen':
          return function(el) {
            return el.text.length;
          };
        case 'side':
          return ['owner', 'stage', 'id'];
        case 'ops':
          return 'ops';
        case 'titlelen':
          return function(el) {
            return el.title.length;
          };
        default:
          return ['stage', 'id'];
      }
    })();
    cards = _.sortBy(cards, sortParam);
    if (order === 'rev') {
      cards.reverse();
    }
    return cards;
  },
  handleFullText: function() {
    return this.setState({
      fullText: this.refs.fullText.getDOMNode().checked
    });
  },
  handleCardFilterChange: function() {
    var ids, state, value, _ref;
    value = this.refs.cardFilter.getDOMNode().value;
    ids = (_ref = value.match(/\d+[^:]|\d+$/g)) != null ? _ref.map(function(el) {
      return parseInt(el, 10);
    }) : void 0;
    if (value === '' || (ids == null)) {
      state = {
        cardFilterInput: value,
        filter: null
      };
    } else {
      state = {
        cardFilterInput: value,
        fullText: true,
        filter: ids.sort(libs.sortNumerical).filter(libs.filterValidCardIds)
      };
    }
    return this.setState(state);
  },
  handleCardFilterBlur: function() {
    var filterIds;
    filterIds = this.getFilterIds();
    this.setState({
      cardFilterInput: filterIds.join(' ')
    });
    if ((filterIds != null) && filterIds.length > 0) {
      return libs.qs.set('filter', filterIds);
    } else {
      return libs.qs["delete"]('filter');
    }
  },
  handleCardFilterClear: function() {
    this.refs.cardFilter.getDOMNode().value = '';
    this.setState({
      filter: null,
      cardFilterInput: ''
    });
    return libs.qs["delete"]('filter');
  },
  render: function() {
    var sortLink;
    sortLink = (function(_this) {
      return function(sort, display) {
        var className, onClick, ref;
        className = cx({
          active: _this.state.sort === sort
        });
        ref = "" + sort + "Sort";
        onClick = function() {
          return libs.qs.set('sort', sort);
        };
        return R.a({
          onClick: onClick,
          ref: ref,
          className: className
        }, display);
      };
    })(this);
    return R.div({
      className: 'cardsView'
    }, [
      R.div({
        className: 'page-header row'
      }, [
        R.div({
          className: 'col-md-6'
        }, [
          R.div({
            className: 'cardControls'
          }, [
            R.span({
              className: 'label'
            }, 'Sort by:'), sortLink('stage', 'Stage'), sortLink('ops', 'Ops'), sortLink('side', 'Side')
          ]), R.div({
            className: 'cardControls'
          }, [
            R.input({
              name: 'fullText',
              id: 'fullText',
              type: 'checkbox',
              ref: 'fullText',
              onChange: this.handleFullText,
              checked: this.state.fullText
            }), " ", R.label({
              htmlFor: 'fullText',
              className: 'card-show-text-label'
            }, 'Show card text')
          ])
        ]), R.div({
          className: 'cards-filter-by-id col-md-6'
        }, [
          R.label({
            htmlFor: 'cardFilter'
          }, ["Filter cards by ids "]), R.input({
            name: 'cardFilter',
            type: 'text',
            ref: 'cardFilter',
            onChange: this.handleCardFilterChange,
            onBlur: this.handleCardFilterBlur,
            value: this.state.cardFilterInput,
            placeholder: 'Paste from Wargameroom or enter ids'
          }), R.a({
            className: 'cards-filter-by-id-clear',
            onClick: this.handleCardFilterClear
          }, 'clear')
        ])
      ]), CardList({
        cards: this.filterAndSortCards(),
        fullText: this.state.fullText
      })
    ]);
  }
});


},{"../libs":10,"../views/CardList":37}],25:[function(require,module,exports){
module.exports = React.createClass({
  displayName: 'CountriesView ',
  render: function() {
    return R.div({
      className: 'countriesView'
    }, [R.h2({}, 'Countries')]);
  }
});


},{}],26:[function(require,module,exports){
var R;

R = React.DOM;

module.exports = React.createClass({
  displayName: 'HomeView',
  render: function() {
    return R.div({
      className: 'HomeView'
    }, [
      R.div({
        className: 'row'
      }, [
        R.div({
          className: 'col-xs-12'
        }, [
          R.h1({
            className: 'text-center'
          }, [
            R.span({
              className: "twi owner-us"
            }, "Twi"), R.span({
              className: "strug owner-ussr"
            }, "Strug")
          ]), R.p({
            className: 'lead blurb'
          }, [
            "TwiStrug is a companion application for ", R.a({
              href: "http://en.wikipedia.org/wiki/Twilight_Struggle"
            }, "Twilight Struggle"), ". It would not exist without ", R.a({
              href: "http://twilightstrategy.com"
            }, "Twilight Strategy"), "."
          ])
        ])
      ]), R.div({
        className: 'row'
      }, [
        R.div({
          className: 'col-md-6'
        }, [
          R.a({
            className: 'home-link',
            href: '#/board'
          }, [
            R.h3({}, 'Playable Board'), R.img({
              className: 'img-responsive',
              src: '/images/home-board.jpg'
            }), R.p({}, 'Fully playable board - just add cards')
          ])
        ]), R.div({
          className: 'col-md-6'
        }, [
          R.a({
            className: 'home-link home-link-cards',
            href: '#/cards'
          }, [
            R.h3({}, 'View Cards'), R.img({
              className: 'img-responsive',
              src: '/images/home-cards.jpg'
            }), R.p({}, 'Explore the cards of Twilight Struggle')
          ])
        ])
      ])
    ]);
  }
});


},{}],27:[function(require,module,exports){
var R;

R = React.DOM;

module.exports = React.createClass({
  displayName: 'WhoopsView',
  render: function() {
    return R.div({}, [
      R.h2({}, "DEFCON 1"), R.p({
        className: 'lead'
      }, [
        "Looks like TwiStrug triggered nuclear war. WHOOPSIE DAISY!", R.br({}), R.a({
          href: "#/cards"
        }, "How about looking over the cards?")
      ])
    ]);
  }
});


},{}],28:[function(require,module,exports){
module.exports = (function () {var f = require("/Users/jjt/Sites/twistrug/src/pages/index.coffee");f["About"]=require("/Users/jjt/Sites/twistrug/src/pages/About.coffee");f["Board"]=require("/Users/jjt/Sites/twistrug/src/pages/Board.coffee");f["BoardPic"]=require("/Users/jjt/Sites/twistrug/src/pages/BoardPic.coffee");f["Card"]=require("/Users/jjt/Sites/twistrug/src/pages/Card.coffee");f["Cards"]=require("/Users/jjt/Sites/twistrug/src/pages/Cards.coffee");f["Countries"]=require("/Users/jjt/Sites/twistrug/src/pages/Countries.coffee");f["Home"]=require("/Users/jjt/Sites/twistrug/src/pages/Home.coffee");f["Whoops"]=require("/Users/jjt/Sites/twistrug/src/pages/Whoops.coffee");f["index"]=require("/Users/jjt/Sites/twistrug/src/pages/index.coffee");return f;})();


},{"/Users/jjt/Sites/twistrug/src/pages/About.coffee":20,"/Users/jjt/Sites/twistrug/src/pages/Board.coffee":21,"/Users/jjt/Sites/twistrug/src/pages/BoardPic.coffee":22,"/Users/jjt/Sites/twistrug/src/pages/Card.coffee":23,"/Users/jjt/Sites/twistrug/src/pages/Cards.coffee":24,"/Users/jjt/Sites/twistrug/src/pages/Countries.coffee":25,"/Users/jjt/Sites/twistrug/src/pages/Home.coffee":26,"/Users/jjt/Sites/twistrug/src/pages/Whoops.coffee":27,"/Users/jjt/Sites/twistrug/src/pages/index.coffee":28}],29:[function(require,module,exports){
var BoardLink, BoardNode, BoardStatus, R, cx, getIpStats, getRegionStats, getRegionStatus, libs, sumRegion, superStats, superpowerToIndex;

R = React.DOM;

cx = React.addons.classSet;

libs = require('../libs');

BoardNode = require('./BoardNode');

BoardStatus = require('./BoardStatus');

BoardLink = require('./BoardLink');

superpowerToIndex = function(str) {
  if (str === 'usa') {
    return 0;
  } else {
    return 1;
  }
};

getIpStats = function(ips, countries) {
  var accumulator, fn, ipsRev, usa, ussr;
  accumulator = function() {
    return {
      btl: 0,
      non: 0,
      total: 0,
      eu: {
        non: 0,
        btl: 0,
        total: 0
      },
      as: {
        non: 0,
        btl: 0,
        total: 0
      },
      me: {
        non: 0,
        btl: 0,
        total: 0
      },
      af: {
        non: 0,
        btl: 0,
        total: 0
      },
      sa: {
        non: 0,
        btl: 0,
        total: 0
      },
      ca: {
        non: 0,
        btl: 0,
        total: 0
      }
    };
  };
  fn = function(accum, ips, countryId) {
    var country;
    country = _.find(countries, {
      id: parseInt(countryId, 10)
    });
    if (ips[0] - ips[1] >= country.stab) {
      accum[country.continent].total++;
      accum.total++;
      if (country.btl) {
        accum[country.continent].btl++;
        accum.btl++;
      } else {
        accum[country.continent].non++;
        accum.non++;
      }
    }
    return accum;
  };
  ipsRev = _.map(ips, function(ips) {
    return _.cloneDeep(ips).reverse();
  });
  usa = _.reduce(ips, fn, accumulator());
  ussr = _.reduce(ipsRev, fn, accumulator());
  return {
    usa: usa,
    ussr: ussr
  };
};

sumRegion = function(metric, sum, region) {
  return sum + region[metric];
};

getRegionStats = function(ipStats, regions) {
  var stats;
  stats = _.mapValues(ipStats, function(hero, power, powers) {
    var regionStats, villain;
    villain = power === 'usa' ? powers.ussr : powers.usa;
    regionStats = regions.map(function(region) {
      var hRegion, out, vRegion;
      hRegion = hero[region.id];
      vRegion = villain[region.id];
      return out = {
        presence: hRegion.total > 0,
        domination: hRegion.non > 0 && hRegion.btl > vRegion.btl && hRegion.total > vRegion.total,
        control: hRegion.btl === region.numBtl && hRegion.total > vRegion.total
      };
    });
    regionStats = _.zipObject(_.pluck(regions, 'id'), regionStats);
    return regionStats = _.assign(regionStats, {
      presence: _.reduce(regionStats, sumRegion.bind(null, 'presence'), 0),
      domination: _.reduce(regionStats, sumRegion.bind(null, 'domination'), 0),
      control: _.reduce(regionStats, sumRegion.bind(null, 'control'), 0)
    });
  });
  return stats;
};

getRegionStatus = function(stats) {
  return _.mapValues(stats, function(stat) {
    if (stat.control) {
      return 'control';
    }
    if (stat.domination) {
      return 'domination';
    }
    if (stat.presence) {
      return 'presence';
    }
    return false;
  });
};

superStats = function(ips, countryArr, regionArr) {
  var countries, regions;
  countries = getIpStats(ips, countryArr);
  regions = getRegionStats(countries, regionArr);
  return {
    countries: countries,
    regions: regions
  };
};

module.exports = React.createClass({
  displayName: 'Board',
  componentWillReceiveProps: function() {
    var state;
    state = this.getInitialState();
    this.setState(state);
    if (this.props.stateHistory.states.length < 1) {
      return this.props.stateHistory.add(state, {
        msg: 'Setup'
      });
    }
  },
  getInitialState: function() {
    var gameState;
    gameState = {
      game: {
        score: 0,
        turn: 0,
        round: 0,
        defcon: 5,
        milops: [0, 0],
        space: [0, 0]
      },
      ips: _.mapValues(this.props.countries, function(c) {
        return [c.usa, c.ussr];
      })
    };
    if (this.props.stateHistory.states.length > 0) {
      gameState = this.props.stateHistory.getCurrent().state;
    } else {
      this.props.stateHistory.add(gameState, {
        msg: 'Setup'
      });
    }
    return gameState;
  },
  handleValClick: function(id, dir, side) {
    var delta, index, meta, newVal, oldVal, state;
    state = this.state;
    delta = dir === 'inc' ? 1 : -1;
    if (id === 'milops' || id === 'space') {
      index = side === 'usa' ? 0 : 1;
      oldVal = state.game[id][index];
      newVal = libs.rangedGameVal(id, state.game[id][index] + delta);
      state.game[id][index] = newVal;
    } else {
      oldVal = state.game[id];
      newVal = libs.rangedGameVal(id, state.game[id] + delta);
      state.game[id] = newVal;
    }
    meta = {
      type: 'val',
      side: side != null ? side : '',
      id: id,
      old: oldVal,
      "new": newVal
    };
    if (id === 'turn' || id === 'round') {
      meta.type = id;
    }
    return this.setStateHistory(state, meta);
  },
  setStateHistory: function(state, meta) {
    this.props.stateHistory.add(state, meta);
    return this.setState(state);
  },
  componentWillMount: function() {
    return $(document).on('keypress', this.keypressHandler);
  },
  componentWillUnmount: function() {
    return $(document).off('keypress', this.keypressHandler);
  },
  componentWillReceiveProps: function() {},
  keypressHandler: function(ev) {
    var kC, next, prev;
    kC = ev.keyCode;
    if (kC === 122 || kC === 90) {
      prev = this.props.stateHistory.undo();
      this.setState(prev.state);
    }
    if (kC === 121 || kC === 89) {
      next = this.props.stateHistory.redo();
      this.setState(next.state);
    }
    if (kC === 104 || kC === 72) {
      return this.props.stateHistory.toggleVisible();
    }
  },
  handleIPClick: function(nodeId, side, dir) {
    var delta, index, ip, node, sign, state;
    node = _.find(this.props.nodes, {
      id: nodeId
    });
    if (node.points || node.superpower) {
      return;
    }
    state = this.state;
    index = superpowerToIndex(side);
    ip = state.ips[nodeId][index];
    delta = dir === 'up' ? 1 : -1;
    ip += delta;
    if (ip < 0) {
      return;
    }
    sign = dir === 'up' ? '+' : '-';
    state.ips[nodeId][index] = ip;
    return this.setStateHistory(state, {
      type: 'ip',
      side: side,
      country: node,
      ips: state.ips[nodeId],
      delta: "" + sign + (Math.abs(delta))
    });
  },
  render: function() {
    var links, nodeProps, nodes, superpowerStats;
    nodeProps = this.props.node;
    superpowerStats = superStats(this.state.ips, this.props.countries, this.props.regionInfoNodes);
    links = this.props.links.map((function(_this) {
      return function(linkData) {
        var jUSA, linkProps, nodes, source, target;
        source = _.find(_this.props.countries, {
          id: linkData.source
        });
        target = _.find(_this.props.countries, {
          id: linkData.target
        });
        nodes = {
          source: source,
          target: target
        };
        jUSA = function(link, targ) {
          var japanUSABump;
          japanUSABump = 18;
          if (_.contains(link.nodes, 'USA') && _.contains(link.nodes, 'Japan')) {
            return nodes[targ].y - japanUSABump;
          }
          return nodes[targ].y;
        };
        linkProps = {
          key: "BoardLink-" + linkData.source + "-" + linkData.target,
          x1: source.x,
          y1: jUSA(linkData, 'source'),
          x2: target.x,
          y2: jUSA(linkData, 'target'),
          className: cx({
            "link": true,
            "link-cross": linkData.crossContinent,
            "link-usa": _.contains(linkData.nodes, 'USA'),
            "link-ussr": _.contains(linkData.nodes, 'USSR')
          })
        };
        return BoardLink(linkProps);
      };
    })(this));
    nodes = _.map(this.props.nodes, (function(_this) {
      return function(countryData) {
        var countryId, props;
        props = {
          node: nodeProps,
          key: "BoardNode-" + countryData.id,
          transform: "translate(" + countryData.x + ", " + countryData.y + ")",
          width: _this.props.node.width,
          height: _this.props.node.height,
          gutter: _this.props.node.gutter,
          titleHeight: _this.props.node.titleHeight,
          titleFontSize: _this.props.node.titleFontSize,
          handleIPClick: _this.handleIPClick
        };
        _.assign(props, countryData);
        if (props.superpower) {
          props.stats = {
            countries: _.pick(superpowerStats.countries[props.name.toLowerCase()], ['btl', 'non', 'total']),
            regions: _.pick(superpowerStats.regions[props.name.toLowerCase()], ['presence', 'domination', 'control'])
          };
        }
        if (props.points) {
          props.stats = getRegionStatus({
            usa: superpowerStats.regions.usa[props.id],
            ussr: superpowerStats.regions.ussr[props.id]
          });
        }
        countryId = countryData.id;
        if (countryId in _this.state.ips) {
          props.usa = _this.state.ips[countryId][0];
          props.ussr = _this.state.ips[countryId][1];
        }
        return BoardNode(props);
      };
    })(this));
    return R.div({
      className: 'Board'
    }, [
      R.svg({
        width: this.props.width,
        height: this.props.height,
        ref: 'svg'
      }, [links, nodes]), BoardStatus(_.assign({
        handleValClick: this.handleValClick
      }, this.state.game))
    ]);
  }
});


},{"../libs":10,"./BoardLink":30,"./BoardNode":31,"./BoardStatus":34}],30:[function(require,module,exports){
var R;

R = React.DOM;

module.exports = React.createClass({
  displayName: 'BoardLink',
  render: function() {
    return R.line(this.props);
  }
});


},{}],31:[function(require,module,exports){
var BoardNodeIP, R, cx;

R = React.DOM;

cx = React.addons.classSet;

BoardNodeIP = require('./BoardNodeIP');

module.exports = React.createClass({
  displayName: 'BoardNode',
  handleIPClick: function(side, dir) {
    return this.props.handleIPClick(this.props.id, side, dir);
  },
  render: function() {
    var cCN, controlUSA, controlUSSR, dCN, gAttrs, pCN, polyClassName, psr, regionCx, regionText, regionTextAttrs, stabText, stabTextAttrs, titleTextAttrs;
    controlUSA = (this.props.usa - this.props.ussr) >= this.props.stab;
    controlUSSR = (this.props.ussr - this.props.usa) >= this.props.stab;
    gAttrs = {
      transform: this.props.transform,
      className: ("node-" + this.props.group + " ") + cx({
        'node': true,
        'node-btl': this.props.btl === 1,
        'node-nonbtl': this.props.btl !== 1,
        'node-region-info': this.props.regionInfo,
        'node-usa-control': controlUSA,
        'node-ussr-control': controlUSSR,
        'node-region-info': this.props.regionInfo
      })
    };
    polyClassName = (function() {
      if (this.props.regionInfo) {
        return 'hide';
      } else {
        switch (this.props.group) {
          case 'eu':
            return 'node-bg-eu';
          case 'sea':
            return 'node-bg-sea';
          default:
            return 'hide';
        }
      }
    }).call(this);
    titleTextAttrs = {
      className: "node-title-text",
      x: this.props.regionInfo || this.props.superpower ? 0 : -this.props.node.width / 2 + 2,
      y: this.props.regionInfo ? -6 : this.props.superpower ? 6 : -(this.props.node.height / 2) + this.props.node.titleFontSize
    };
    stabTextAttrs = {
      className: "node-stab",
      x: (this.props.node.width / 2) - 10,
      y: -(this.props.node.height / 2) + this.props.node.titleFontSize + 1
    };
    stabText = this.props.stab;
    if (this.props.superpower) {
      stabText = [
        R.tspan({}, "Battle: "), R.tspan({
          className: 'numBtl'
        }, this.props.stats.countries.btl)
      ];
      stabTextAttrs.x = 0;
      stabTextAttrs.y += 1;
    }
    regionTextAttrs = {
      className: this.props.points || this.props.superpower ? 'node-text' : 'hide',
      x: 0,
      y: 10,
      width: this.props.node.width
    };
    regionText = '';
    if (this.props.points) {
      regionCx = (function(_this) {
        return function(key) {
          var obj;
          obj = {
            usa: _this.props.stats.usa === key,
            ussr: _this.props.stats.ussr === key,
            both: _this.props.stats.ussr === key && _this.props.stats.usa === key
          };
          obj[key] = true;
          return cx(obj);
        };
      })(this);
      cCN = regionCx('control');
      dCN = regionCx('domination');
      pCN = regionCx('presence');
      regionText = [
        R.tspan({
          className: pCN
        }, this.props.points[0]), R.tspan({
          className: 'blank'
        }, " "), R.tspan({
          className: dCN
        }, this.props.points[1]), R.tspan({
          className: 'blank'
        }, " "), R.tspan({
          className: cCN
        }, this.props.points[2])
      ];
    }
    if (this.props.superpower) {
      psr = this.props.stats.regions;
      regionText = [psr.presence, psr.domination, psr.control].join(' ');
      regionTextAttrs.y = 20;
    }
    return R.g(gAttrs, [
      R.rect({
        className: 'node-bg',
        width: this.props.width,
        height: this.props.height,
        title: Math.random(),
        x: -this.props.width / 2,
        y: -this.props.height / 2
      }), R.polygon({
        className: polyClassName,
        points: ["" + (-this.props.width / 2) + "," + (this.props.height / 2), "" + (this.props.width / 2) + "," + (this.props.height / 2), "" + (this.props.width / 2) + "," + (-this.props.height / 2 + this.props.titleHeight)].join(' ')
      }), R.rect({
        className: 'node-title-bg',
        width: this.props.width,
        height: this.props.titleHeight,
        x: -this.props.width / 2,
        y: -this.props.height / 2
      }), R.line({
        className: 'node-line',
        width: this.props.width,
        x1: -this.props.width / 2,
        y1: -this.props.height / 2 + this.props.node.titleHeight,
        x2: this.props.width / 2,
        y2: -this.props.height / 2 + this.props.node.titleHeight
      }), R.text(titleTextAttrs, this.props.shortname), R.text(stabTextAttrs, stabText), R.text(regionTextAttrs, regionText), BoardNodeIP({
        node: this.props.node,
        side: 'usa',
        ip: this.props.usa,
        ctrl: controlUSA,
        handleIPClick: this.handleIPClick,
        ref: 'ipusa'
      }), BoardNodeIP({
        node: this.props.node,
        side: 'ussr',
        ip: this.props.ussr,
        ctrl: controlUSSR,
        handleIPClick: this.handleIPClick,
        ref: 'ipussr'
      })
    ]);
  }
});


},{"./BoardNodeIP":32}],32:[function(require,module,exports){
var R, cx;

R = React.DOM;

cx = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'BoardNodeIP',
  handleIPClick: function(dir, ev) {
    return this.props.handleIPClick(this.props.side, dir);
  },
  render: function() {
    var gAttrs, hideIP, ipClickHeight, position, textAttrs;
    position = this.props.side === 'usa' ? 1 : 0;
    hideIP = this.props.ip === 0 ? 'hide' : '';
    gAttrs = {
      transform: "translate(" + (-this.props.node.width / 2 * position) + ", " + (-this.props.node.titleHeight / 2 - 1) + ")",
      width: this.props.node.width / 2,
      height: this.props.node.height - this.props.node.titleHeight,
      className: "node-ip-" + this.props.side
    };
    textAttrs = {
      x: this.props.node.width / 4,
      y: this.props.node.height / 2 - 1,
      className: hideIP
    };
    ipClickHeight = (this.props.node.height - this.props.node.titleHeight) / 2;
    return R.g(gAttrs, [
      R.rect({
        width: this.props.node.width / 2,
        height: this.props.node.height - this.props.node.titleHeight,
        className: "node-ip-bg-" + this.props.side + " " + hideIP
      }), R.text(textAttrs, this.props.ip), R.rect({
        width: this.props.node.width / 2,
        height: ipClickHeight,
        className: "node-ip-click",
        onClick: this.handleIPClick.bind(this, 'up')
      }), R.rect({
        width: this.props.node.width / 2,
        height: ipClickHeight,
        y: ipClickHeight,
        className: "node-ip-click",
        onClick: this.handleIPClick.bind(this, 'dn')
      })
    ]);
  }
});


},{}],33:[function(require,module,exports){
var R, cx, gameValDisplay, scoreSide, shEntry, upperFirst;

R = React.DOM;

cx = React.addons.classSet;

gameValDisplay = require('../libs/gameValDisplay');

upperFirst = require('../libs/upperFirst');

scoreSide = function(score) {
  if (score < 0) {
    return 'ussr';
  }
  if (score > 0) {
    return 'usa';
  }
  return '';
};

shEntry = function(sh) {
  var country, ctrlUSA, ctrlUSSR, disp, ipUSA, ipUSSR, newSide, oldSide, round, roundSide, roundTitle, shSide, side, turn, turnRound, _ref;
  roundSide = sh.state.game.round % 2 === 0 ? 'usa' : 'ussr';
  if (sh.state.game.round === 0) {
    roundSide = '';
  }
  if (sh.state.game.turn > 0) {
    turn = "T" + (gameValDisplay('turn', sh.state.game.turn)) + "-";
    if (sh.state.game.round !== 0) {
      round = "R" + (gameValDisplay('round', sh.state.game.round));
    } else {
      round = "H";
    }
  } else {
    turn = "SETUP";
    round = '';
  }
  turnRound = R.span({
    className: 'turnRound'
  }, [
    turn, R.span({
      className: roundSide
    }, round)
  ]);
  shSide = sh.meta.side;
  switch (sh.meta.type) {
    case 'ip':
      _ref = sh.meta.ips, ipUSA = _ref[0], ipUSSR = _ref[1];
      country = sh.meta.country;
      ctrlUSA = (ipUSA - ipUSSR) >= country.stab ? 'control' : '';
      ctrlUSSR = (ipUSSR - ipUSA) >= country.stab ? 'control' : '';
      return [
        turnRound, R.span({
          className: "" + sh.meta.side + " ip"
        }, sh.meta.delta), " in " + sh.meta.country.shortname + " (", R.span({
          className: "usa " + ctrlUSA
        }, sh.meta.ips[0]), "/", R.span({
          className: "ussr " + ctrlUSSR
        }, sh.meta.ips[1]), ")"
      ];
    case 'val':
      oldSide = newSide = sh.meta.side;
      if (sh.meta.id === 'score') {
        oldSide = scoreSide(sh.meta.old);
        newSide = scoreSide(sh.meta["new"]);
      }
      return R.span({}, [
        turnRound, "" + (upperFirst(sh.meta.id)) + " ", R.strong({
          className: oldSide
        }, "" + (gameValDisplay(sh.meta.id, sh.meta.old, 'long')) + " "), R.span({
          className: 'arrow'
        }, '➔ '), R.strong({
          className: newSide
        }, "" + (gameValDisplay(sh.meta.id, sh.meta["new"], 'long')))
      ]);
    case 'round':
      side = roundSide;
      roundTitle = sh.state.game.round === 0 ? "Headline Phase" : "" + (side.toUpperCase()) + " Action Round " + (gameValDisplay(sh.meta.id, sh.meta["new"], 'long'));
      return R.span({}, [
        turnRound, R.span({
          className: side
        }, roundTitle)
      ]);
    case 'turn':
      disp = "" + (gameValDisplay(sh.meta.id, sh.meta["new"], 'long'));
      if (sh.state.game.turn !== 0) {
        disp = "Turn " + disp;
      }
      return R.span({}, [turnRound, disp]);
    default:
      return sh.meta.msg;
  }
};

module.exports = React.createClass({
  getInitialState: function() {
    return {
      r: 0
    };
  },
  componentDidMount: function() {
    return this.props.stateHistory.on('update', this.forceUpdate.bind(this));
  },
  render: function() {
    var divAttrs, stateComponents;
    stateComponents = this.props.stateHistory.states.map((function(_this) {
      return function(sh, index) {
        var attrs;
        attrs = {
          className: cx({
            'StateHistory-latest': _this.props.stateHistory.latest === index,
            'StateHistory-current': _this.props.stateHistory.current === index
          })
        };
        return R.li(attrs, shEntry(sh));
      };
    })(this));
    divAttrs = {
      className: cx({
        'StateHistory': true,
        'in': this.props.stateHistory.show
      })
    };
    return R.div(divAttrs, [
      R.h3({}, "Action History"), R.ul({
        className: 'list-unstyled'
      }, stateComponents.reverse())
    ]);
  }
});


},{"../libs/gameValDisplay":9,"../libs/upperFirst":17}],34:[function(require,module,exports){
var BoardStatusValue, Die, R, cx;

R = React.DOM;

cx = React.addons.classSet;

BoardStatusValue = require('./BoardStatusValue');

Die = require('./Die');

module.exports = React.createClass({
  displayName: 'BoardStatus',
  handleBothClick: function() {
    return _.each(this.refs, function(ref) {
      return ref.rollDie();
    });
  },
  render: function() {
    var round, roundSide, scoreSide, statusValue, turn;
    scoreSide = '';
    if (this.props.score !== 0) {
      scoreSide = this.props.score < 0 ? 'ussr' : 'usa';
    }
    round = this.props.round === 0 ? 'H' : Math.ceil(this.props.round / 2);
    roundSide = '';
    if (this.props.round !== 0) {
      roundSide = this.props.round % 2 === 1 ? 'ussr' : 'usa';
    }
    turn = (function() {
      switch (this.props.turn) {
        case 0:
          return 'S';
        case 11:
          return 'E';
        default:
          return this.props.turn;
      }
    }).call(this);
    statusValue = (function(_this) {
      return function(id, title, val, side) {
        if (id == null) {
          id = '';
        }
        if (title == null) {
          title = '';
        }
        if (val == null) {
          val = '';
        }
        if (side == null) {
          side = '';
        }
        return BoardStatusValue(_.assign({
          id: id,
          title: title,
          val: val,
          side: side
        }, {
          handleValClick: _this.props.handleValClick
        }));
      };
    })(this);
    return R.div({
      className: 'BoardStatus'
    }, [
      R.dl({
        className: 'col'
      }, [statusValue('score', 'Score', Math.abs(this.props.score), scoreSide), statusValue('defcon', 'Defcon', this.props.defcon), statusValue('milops', 'MilOps', this.props.milops[0], 'usa'), statusValue('milops', 'MilOps', this.props.milops[1], 'ussr')]), R.dl({
        className: 'col'
      }, [statusValue('turn', 'Turn', turn), statusValue('round', 'Round', round, roundSide), statusValue('space', 'Space', this.props.space[0], 'usa'), statusValue('space', 'Space', this.props.space[1], 'ussr')]), R.div({
        className: 'dice'
      }, [
        Die({
          ref: 'die-usa',
          side: 'usa'
        }), R.div({
          className: 'roll-both',
          onClick: this.handleBothClick
        }, 'Roll dice'), Die({
          ref: 'die-ussr',
          side: 'ussr'
        })
      ])
    ]);
  }
});


},{"./BoardStatusValue":35,"./Die":38}],35:[function(require,module,exports){
var R, cx;

R = React.DOM;

cx = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'BoardStatusValue',
  render: function() {
    var decAttrs, incAttrs, sideClass;
    sideClass = (function() {
      switch (this.props.side) {
        case 'usa':
        case 'ussr':
          return this.props.side;
        default:
          return '';
      }
    }).call(this);
    decAttrs = {
      className: 'dec',
      onClick: this.props.handleValClick.bind(null, this.props.id, 'dec', this.props.side)
    };
    incAttrs = {
      className: 'inc',
      onClick: this.props.handleValClick.bind(null, this.props.id, 'inc', this.props.side)
    };
    return R.div({}, [
      R.dt({}, this.props.title), R.dd({
        className: "StatusValue " + sideClass
      }, [
        R.span(decAttrs, '◀'), R.span({
          className: 'val'
        }, this.props.val), R.span(incAttrs, '▶')
      ])
    ]);
  }
});


},{}],36:[function(require,module,exports){
var R, cardClassName, cardStages, cx;

R = React.DOM;

cx = React.addons.classSet;

cardStages = {
  1: 'EARLY',
  2: 'MID',
  3: 'LATE'
};

cardClassName = function(props) {
  var classes, ownerClass;
  ownerClass = "owner-" + props.owner;
  classes = cx({
    'asiaScoring': props.title === 'Asia Scoring',
    'europeScoring': props.title === 'Europe Scoring',
    'middleEastScoring': props.title === 'Middle East Scoring',
    'centralAmericaScoring': props.title === 'Central America Scoring',
    'southeastAsiaScoring': props.title === 'Southeast Asia Scoring*',
    'africaScoring': props.title === 'Africa Scoring',
    'southAmericaScoring': props.title === 'South America Scoring',
    'ongoing': props.ongoing
  });
  return ownerClass + ' ' + classes;
};

module.exports = React.createClass({
  displayName: 'Card',
  render: function() {
    return R.div({
      className: cardClassName(this.props) + ' card'
    }, [
      R.a({
        className: 'card-title-holder',
        href: "#/card/" + this.props.id
      }, [
        R.span({
          className: 'card-stage'
        }, cardStages[this.props.stage]), R.h4({
          className: 'card-ops'
        }, this.props.ops < 1 ? "S" : this.props.ops), R.h4({
          className: 'card-title'
        }, [
          "" + this.props.title + " ", R.span({
            className: 'card-id'
          }, "#" + this.props.id)
        ])
      ]), R.p({
        className: 'card-text'
      }, this.props.text)
    ]);
  }
});


},{}],37:[function(require,module,exports){
var Card, R, cx;

R = React.DOM;

cx = React.addons.classSet;

Card = require('./Card');

module.exports = React.createClass({
  displayName: 'CardList',
  render: function() {
    var className;
    className = cx({
      'cardList': true,
      'cardListFull': this.props.fullText
    });
    return R.div({
      className: className
    }, this.props.cards.map((function(_this) {
      return function(el) {
        return Card(_.merge(el, {
          showFullText: _this.props.fullText
        }));
      };
    })(this)));
  }
});


},{"./Card":36}],38:[function(require,module,exports){
var R;

R = React.DOM;

module.exports = React.createClass({
  displayName: 'Die',
  getDefaultProps: function() {
    return {
      rolls: 30
    };
  },
  getInitialState: function() {
    return {
      val: 1,
      rolling: false,
      rolls: this.props.rolls
    };
  },
  clickDie: function() {
    return this.rollDie();
  },
  rollDie: function() {
    if (this.state.rolling) {
      return;
    }
    return this.iterateRoll();
  },
  iterateRoll: function() {
    var time;
    if (!this.state.rolling) {
      this.setState({
        rolling: true,
        rolls: this.props.rolls
      });
    }
    if (this.state.rolls === 0) {
      return this.setState({
        rolling: false,
        rolls: this.props.rolls
      });
    } else {
      time = (10 - this.state.rolls) * 18 + 50;
      if (this.state.rolls > 10) {
        time = 50;
      }
      this.setState({
        val: _.random(1, 6),
        rolls: this.state.rolls - 1
      });
      return setTimeout(this.iterateRoll.bind(this), time);
    }
  },
  render: function() {
    var rolling;
    rolling = this.state.rolling && this.state.rolls > 0 ? 'rolling' : '';
    return R.div({
      onClick: this.clickDie,
      className: "die die-" + this.props.side + " " + rolling
    }, this.state.val);
  }
});


},{}],39:[function(require,module,exports){
var R, cx;

R = React.DOM;

cx = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'NavView',
  getDefaultProps: function() {
    return {
      active: ''
    };
  },
  render: function() {
    var li;
    li = (function(_this) {
      return function(menuKey, href, title) {
        return R.li({
          className: cx({
            'active': _this.props.active === menuKey
          })
        }, R.a({
          'data-before': '★',
          'data-after': '★',
          href: href
        }, title));
      };
    })(this);
    return R.nav({
      className: "navbar ",
      role: "navigation"
    }, R.div({
      className: "container"
    }, [
      R.div({
        className: "navbar-header"
      }, R.a({
        className: "navbar-brand",
        href: '#/'
      }, [
        R.span({
          className: "twi"
        }, "Twi"), R.span({
          className: "strug"
        }, "Strug")
      ])), R.ul({
        className: "nav navbar-nav"
      }, [li('cards', '#/cards', 'Cards'), li('board', '#/board', 'Board'), li('about', '#/about', 'About')])
    ]));
  }
});


},{}],40:[function(require,module,exports){
module.exports = (function () {var f = require("/Users/jjt/Sites/twistrug/src/views/index.coffee");f["Board"]=require("/Users/jjt/Sites/twistrug/src/views/Board.coffee");f["BoardLink"]=require("/Users/jjt/Sites/twistrug/src/views/BoardLink.coffee");f["BoardNode"]=require("/Users/jjt/Sites/twistrug/src/views/BoardNode.coffee");f["BoardNodeIP"]=require("/Users/jjt/Sites/twistrug/src/views/BoardNodeIP.coffee");f["BoardStateHistory"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStateHistory.coffee");f["BoardStatus"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStatus.coffee");f["BoardStatusValue"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStatusValue.coffee");f["Card"]=require("/Users/jjt/Sites/twistrug/src/views/Card.coffee");f["CardList"]=require("/Users/jjt/Sites/twistrug/src/views/CardList.coffee");f["Die"]=require("/Users/jjt/Sites/twistrug/src/views/Die.coffee");f["Nav"]=require("/Users/jjt/Sites/twistrug/src/views/Nav.coffee");f["index"]=require("/Users/jjt/Sites/twistrug/src/views/index.coffee");return f;})();


},{"/Users/jjt/Sites/twistrug/src/views/Board.coffee":29,"/Users/jjt/Sites/twistrug/src/views/BoardLink.coffee":30,"/Users/jjt/Sites/twistrug/src/views/BoardNode.coffee":31,"/Users/jjt/Sites/twistrug/src/views/BoardNodeIP.coffee":32,"/Users/jjt/Sites/twistrug/src/views/BoardStateHistory.coffee":33,"/Users/jjt/Sites/twistrug/src/views/BoardStatus.coffee":34,"/Users/jjt/Sites/twistrug/src/views/BoardStatusValue.coffee":35,"/Users/jjt/Sites/twistrug/src/views/Card.coffee":36,"/Users/jjt/Sites/twistrug/src/views/CardList.coffee":37,"/Users/jjt/Sites/twistrug/src/views/Die.coffee":38,"/Users/jjt/Sites/twistrug/src/views/Nav.coffee":39,"/Users/jjt/Sites/twistrug/src/views/index.coffee":40}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL1R3aXN0cnVnLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvTWljcm9FdmVudENsYXNzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvU3RhdGVIaXN0b3J5LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvY2FyZENsYXNzTmFtZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2ZpbHRlclRydXRoeS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2ZpbHRlclVuaXF1ZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2ZpbHRlclZhbGlkQ2FyZElkcy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2dhbWVWYWwuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9nYW1lVmFsRGlzcGxheS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2luZGV4LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvcXMuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9yYW5nZWRHYW1lVmFsLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvc2V0UGFnZVRpdGxlLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvc2lnbkZyb21EaXIuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9zaWduU3RyaW5nLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvc29ydE51bWVyaWNhbC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3VwcGVyRmlyc3QuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy92aWV3cy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3plcm9QYWQuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvQWJvdXQuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvQm9hcmQuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvQm9hcmRQaWMuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvQ2FyZC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9wYWdlcy9DYXJkcy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9wYWdlcy9Db3VudHJpZXMuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvSG9tZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9wYWdlcy9XaG9vcHMuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvaW5kZXguY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmQuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmRMaW5rLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkTm9kZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9Cb2FyZE5vZGVJUC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9Cb2FyZFN0YXRlSGlzdG9yeS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9Cb2FyZFN0YXR1cy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9Cb2FyZFN0YXR1c1ZhbHVlLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0NhcmQuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQ2FyZExpc3QuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvRGllLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL05hdi5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9pbmRleC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBLG9FQUFBOztBQUFBLENBQUEsR0FBSSxLQUFLLENBQUMsR0FBVixDQUFBOztBQUFBLE1BQ0EsR0FBUyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BRHRCLENBQUE7O0FBQUEsRUFFQSxHQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFGbEIsQ0FBQTs7QUFBQSxDQUdBLEdBQUksS0FISixDQUFBOztBQUFBLENBT0MsQ0FBQyxTQUFGLEdBQWMsU0FBQyxHQUFELEVBQU0sSUFBTixHQUFBO0FBQ1osTUFBQSxNQUFBO0FBQUEsRUFBQSxNQUFBLEdBQVMsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVCxDQUFBO0FBQUEsRUFDQSxNQUFNLENBQUMsS0FBUCxHQUFlLE9BRGYsQ0FBQTtBQUFBLEVBRUEsTUFBTSxDQUFDLEdBQVAsR0FBYSxHQUZiLENBQUE7QUFHQSxFQUFBLElBQUcs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QixDQUZnQyxFQUdoQyxFQUFBLENBQUcsT0FBSCxFQUFZLFNBQVosRUFBdUIsT0FBdkIsQ0FIZ0MsQ0FBbEMsQ0FSNEI7S0FBOUIsQ0FERixFQU5NO0VBQUEsQ0FKUjtDQURlLENBSGpCLENBQUE7Ozs7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixPQUFBLENBQVEsY0FBUixDQUFBLENBQXdCLFNBQXhCLEVBQW1DLENBQUMsVUFBRCxDQUFuQyxDQUFqQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlIgPSBSZWFjdC5ET01cbnVwZGF0ZSA9IFJlYWN0LmFkZG9ucy51cGRhdGVcbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG4kID0gWmVwdG9cblxuXG4jIEFkZCBmdW5jdGlvbiB0byBaZXB0b1xuJC5nZXRTY3JpcHQgPSAoc3JjLCBmdW5jKSAtPlxuICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICBzY3JpcHQuYXN5bmMgPSBcImFzeW5jXCJcbiAgc2NyaXB0LnNyYyA9IHNyY1xuICBpZiBmdW5jXG4gICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmNcblxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQgc2NyaXB0XG5cblxubGlicyA9IHJlcXVpcmUgJy4vbGlicydcbnBhZ2VzID0gcmVxdWlyZSAnLi9wYWdlcydcbnZpZXdzID0gcmVxdWlyZSAnLi92aWV3cydcblxuTmF2VmlldyA9IHJlcXVpcmUgJy4vdmlld3MvTmF2J1xuXG5Ud2lTdHJ1ZyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGNvbXBvbmVudFdpbGxNb3VudDogKCktPlxuICAgICQoJyNwbGFjZWhvbGRlcicpLmhpZGUoKVxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICBtZW51QWN0aXZlOm51bGxcblxuICAjIFRha2VzIGEgdmlldyBuYW1lIGFuZCBhc3NvY2lhdGVkIGRhdGFcbiAgc2V0VmlldzogKG5hbWUsIHBhZ2VUaXRsZSwgbWVudUFjdGl2ZT0nJywgZGF0YT17fSkgLT5cbiAgICBpZiBwYWdlVGl0bGU/IHRoZW4gbGlicy5zZXRQYWdlVGl0bGUgcGFnZVRpdGxlXG4gICAgQHNldFN0YXRlXG4gICAgICB2aWV3OiB7bmFtZSwgZGF0YX1cbiAgICAgIG1lbnVBY3RpdmU6IG1lbnVBY3RpdmVcblxuICBjb21wb25lbnREaWRNb3VudDogLT5cbiAgICBzdGF0ZVJvdXRlID0gKG5hbWUsIHBhZ2VUaXRsZSwgbWVudUFjdGl2ZSwgYXJncyktPlxuICAgICAgc3RhdGUgPSBsaWJzLnFzLnRvT2JqIGFyZ3NcbiAgICAgICMgQ29udmVydCBmaWx0ZXIgaWRzIGZyb20gc3RyIC0+IG51bWJlclxuICAgICAgaWYgc3RhdGU/LmZpbHRlcj9cbiAgICAgICAgc3RhdGUuZmlsdGVyID0gc3RhdGUuZmlsdGVyLm1hcCAoZWwpLT5cbiAgICAgICAgICBwYXJzZUludCBlbCwgMTBcbiAgICAgIEBzZXRWaWV3IG5hbWUsIHBhZ2VUaXRsZSwgbWVudUFjdGl2ZSxcbiAgICAgICAgc3RhdGU6IHN0YXRlXG5cbiAgICByb3V0ZXIgPSBuZXcgUm91dGVyXG4gICAgICAjJy9ib2FyZCc6IEBzZXRWaWV3LmJpbmQgdGhpcywgJ2JvYXJkJywgJ0JvYXJkJ1xuICAgICAgJy8nOiBAc2V0Vmlldy5iaW5kIHRoaXMsICdob21lJywgJ0hvbWUnXG5cblxuICAgICAgJy9jYXJkLzppZCc6IChpZCk9PlxuICAgICAgICBpZCA9IHBhcnNlSW50IGlkLCAxMFxuICAgICAgICBuZXh0SWQgPSBpZiBpZCA9PSAxMTAgdGhlbiAxIGVsc2UgaWQgKyAxXG4gICAgICAgIHByZXZJZCA9IGlmIGlkID09IDEgdGhlbiAxMTAgZWxzZSBpZCAtIDFcbiAgICAgICAgY2FyZCA9IF8uZmluZCBAcHJvcHMuY2FyZHMsIGlkOiBpZFxuICAgICAgICBuZXh0Q2FyZCA9IF8uZmluZCBAcHJvcHMuY2FyZHMsIGlkOiBuZXh0SWRcbiAgICAgICAgcHJldkNhcmQgPSAgXy5maW5kIEBwcm9wcy5jYXJkcywgaWQ6IHByZXZJZFxuICAgICAgICBwYWdlVGl0bGUgPSBcIiN7Y2FyZC50aXRsZX0gKCMje2NhcmQuaWR9KVwiXG4gICAgICAgIEBzZXRWaWV3ICdjYXJkJywgcGFnZVRpdGxlLCAnY2FyZHMnLCB7Y2FyZCwgbmV4dENhcmQsIHByZXZDYXJkfVxuICAgICAgXG4gICAgICAnL2NvdW50cmllcyc6IEBzZXRWaWV3LmJpbmQgdGhpcywgJ2NvdW50cmllcycsICdDb3VudHJpZXMnLCAnY291bnRyaWVzJ1xuICAgICAgXG4gICAgICAnL2Fib3V0JzogQHNldFZpZXcuYmluZCB0aGlzLCAnYWJvdXQnLCAnQWJvdXQnLCAnYWJvdXQnXG5cbiAgICByb3V0ZXIuY29uZmlndXJlXG4gICAgICBub3Rmb3VuZDogQHNldFZpZXcuYmluZCB0aGlzLCAnd2hvb3BzJywgJ1dob29wcydcblxuICAgIHJvdXRlci5vbiAvY2FyZHNcXD8/KC4qKS8sIHN0YXRlUm91dGUuYmluZCB0aGlzLCAnY2FyZHMnLCAnQ2FyZHMnLCAnY2FyZHMnXG4gICAgI3JvdXRlci5vbiAvXFw/PyguKikvLCBzdGF0ZVJvdXRlLmJpbmQgdGhpcywgJ2NhcmRzJywgJ0NhcmRzJywgJ2NhcmRzJ1xuICAgIHJvdXRlci5vbiAvYm9hcmRcXC8/KC4qKS8sIChnYW1lSWQpPT5cbiAgICAgIGlmIG5vdCBnYW1lSWQ/IG9yIGdhbWVJZCA9PSAnJ1xuICAgICAgICByZXR1cm4gcm91dGVyLnNldFJvdXRlIFwiYm9hcmQvI3tNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKX1cIlxuICAgICAgJC5nZXRKU09OICcvZGF0YS9tYXAtZGF0YS5qc29uJywgKG1hcERhdGEpID0+XG4gICAgICAgIHtjb3VudHJ5UG9zaXRpb25zLCBjb3VudHJpZXMsIGxpbmtzLCByZWdpb25JbmZvTm9kZXN9ID0gbWFwRGF0YVxuXG4gICAgICAgIGNvdW50cmllcyA9IGNvdW50cmllcy5tYXAgKG5vZGUpLT5cbiAgICAgICAgICBub2RlLnggPSBjb3VudHJ5UG9zaXRpb25zW25vZGUubmFtZV0ueFxuICAgICAgICAgIG5vZGUueSA9IGNvdW50cnlQb3NpdGlvbnNbbm9kZS5uYW1lXS55XG4gICAgICAgICAgbm9kZS5maXhlZCA9IHRydWVcbiAgICAgICAgICBub2RlXG4gICAgICAgIFxuICAgICAgICByZWdpb25JbmZvTm9kZXMgPSByZWdpb25JbmZvTm9kZXMubWFwIChub2RlKS0+XG4gICAgICAgICAgbm9kZS5yZWdpb25JbmZvID0gdHJ1ZVxuICAgICAgICAgIG5vZGUuZml4ZWQgPSB0cnVlXG4gICAgICAgICAgbm9kZVxuXG4gICAgICAgIG5vZGVzID0gXy51bmlvbihjb3VudHJpZXMsIHJlZ2lvbkluZm9Ob2RlcylcbiAgICAgICAgbm9kZXMgPSBfLnppcE9iamVjdCBfLnBsdWNrKG5vZGVzLCAnaWQnKSwgbm9kZXNcbiAgICAgICAgXG5cblxuICAgICAgICBzdGF0ZUhpc3RvcnkgPSBuZXcgbGlicy5TdGF0ZUhpc3RvcnlcbiAgICAgICAgICBpZDogZ2FtZUlkXG4gICAgICAgIHN0YXRlSGlzdG9yeS5sb2FkKClcblxuICAgICAgICBrZXkgPSBnYW1lSWRcblxuICAgICAgICBib2FyZFByb3BzID0ge2dhbWVJZCwgbWFwRGF0YSwgY291bnRyaWVzLCByZWdpb25JbmZvTm9kZXMsIGxpbmtzLCBub2Rlcywgc3RhdGVIaXN0b3J5LCBrZXl9XG5cbiAgICAgICAgQHNldFZpZXcgJ2JvYXJkJywgJ0JvYXJkJywgJ2JvYXJkJywgYm9hcmRQcm9wc1xuXG5cbiAgICByb3V0ZXIuaW5pdCgnLycpXG4gICAgcmV0dXJuXG5cbiAgcmVuZGVyOiAtPlxuICAgICMgSWYgdGhlIHJvdXRlciBoYXNuJ3Qga2lja2VkIGluLCBkbyBub3RoaW5nXG4gICAgaWYgbm90IEBzdGF0ZT8udmlld1xuICAgICAgbWFpblZpZXcgPSBSLnAgY2xhc3NOYW1lOiAnbGVhZCcsICdUd2lTdHJ1ZyBpcyBsb2FkaW5nLi4uJ1xuICAgIGVsc2VcbiAgICAgIG1haW5WaWV3ID0gc3dpdGNoIEBzdGF0ZS52aWV3Lm5hbWVcbiAgICAgICAgd2hlbiAnaG9tZScgdGhlbiBwYWdlcy5Ib21lXG4gICAgICAgICAgY2FyZHM6IEBwcm9wcy5jYXJkc1xuICAgICAgICAgIHN0YXRlOiBAc3RhdGUudmlldy5kYXRhLnN0YXRlXG4gICAgICAgIHdoZW4gJ2NhcmQnIHRoZW4gcGFnZXMuQ2FyZCBAc3RhdGUudmlldy5kYXRhXG4gICAgICAgIHdoZW4gJ2NhcmRzJyB0aGVuIHBhZ2VzLkNhcmRzXG4gICAgICAgICAgY2FyZHM6IEBwcm9wcy5jYXJkc1xuICAgICAgICAgIHN0YXRlOiBAc3RhdGUudmlldy5kYXRhLnN0YXRlXG4gICAgICAgIHdoZW4gJ2NvdW50cmllcycgdGhlbiBwYWdlcy5Db3VudHJpZXMoKVxuICAgICAgICAjd2hlbiAnYm9hcmQnIHRoZW4gcmV0dXJuIEJvYXJkUGljVmlldygpXG4gICAgICAgIHdoZW4gJ2JvYXJkJyB0aGVuIHBhZ2VzLkJvYXJkIEBzdGF0ZS52aWV3LmRhdGFcbiAgICAgICAgd2hlbiAnYWJvdXQnIHRoZW4gcGFnZXMuQWJvdXQoKVxuICAgICAgICB3aGVuICd3aG9vcHMnIHRoZW4gcGFnZXMuV2hvb3BzKClcblxuICAgICAgaWYgQHN0YXRlLnZpZXcubmFtZSA9PSAnYm9hcmQnXG4gICAgICAgIGJvYXJkU3RhdGVIaXN0b3J5ID0gdmlld3MuQm9hcmRTdGF0ZUhpc3Rvcnkgc3RhdGVIaXN0b3J5OiBAc3RhdGUudmlldy5kYXRhLnN0YXRlSGlzdG9yeSwga2V5Ok1hdGgucmFuZG9tKClcblxuXG4gICAgUi5kaXYge30sIFtcbiAgICAgIE5hdlZpZXcgYWN0aXZlOiBAc3RhdGUubWVudUFjdGl2ZVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29udGFpbmVyJywgbWFpblZpZXdcbiAgICAgIGJvYXJkU3RhdGVIaXN0b3J5XG4gICAgXVxuICAgIFxuXG4jIEFkZCBrZXlzIHRvIGNhcmRzXG5hZGRSZWFjdEtleSA9IChlbCktPlxuICBlbC5rZXkgPSBcInJrLSN7ZWwuaWR9XCJcbiAgZWxcblxuUmVhY3QucmVuZGVyQ29tcG9uZW50IFR3aVN0cnVnKHtjYXJkczogY2FyZHNEYXRhLm1hcChhZGRSZWFjdEtleSl9KSxcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJ2FwcCdcbiIsImNsYXNzIE1pY3JvRXZlbnRDbGFzc1xuICBfaW5pdDotPiBAX2xpc3RuIG9yIEBfbGlzdG4gPSB7fVxuICBfY3JlYXRlOihlKS0+IEBfaW5pdCgpW2VdIG9yICBAX2luaXQoKVtlXSA9IFtdXG4gIG9uOihlLCBmKS0+IChAX2NyZWF0ZSBlKS5wdXNoIGZcbiAgb2ZmOihlLCBmKS0+ICh0LnNwbGljZSAodC5pbmRleE9mIGYpLCAxKSBpZiAodCA9IEBfaW5pdCgpW2VdKT9cbiAgb25jZTooZSwgZiktPiBAb24gZSwgKHQgPSA9PiAoQG9mZiBlLCB0KSAmJiBmLmFwcGx5IEAsIGFyZ3VtZW50cylcbiAgZW1pdDooZSwgci4uLiktPiBsLmFwcGx5IEAsIHIgZm9yIGwgaW4gdCBpZiAodCA9IEBfaW5pdCgpW2VdKT87IDBcbiAgQG1peGluPSh0KS0+IHQ6OltwXSA9IEA6OltwXSBmb3IgcCBvZiBAOjo7IDBcblxuXG5tb2R1bGUuZXhwb3J0cyA9IE1pY3JvRXZlbnRDbGFzc1xuIiwiTWljcm9FdmVudENsYXNzID0gcmVxdWlyZSAnLi9NaWNyb0V2ZW50Q2xhc3MnXG5cbmNsYXNzIFN0YXRlSGlzdG9yeSBleHRlbmRzIE1pY3JvRXZlbnRDbGFzc1xuICAjIEBpZCBpcyB1c2VkIGZvciBwZXJzaXN0YW5jZVxuICBjb25zdHJ1Y3RvcjogKG9wdHMpLT5cbiAgICAjXy5hc3NpZ24gdGhpcywgTWljcm9FdmVudFxuICAgIEBzdGF0ZXMgPSBbXVxuICAgIEBsYXRlc3QgPSBudWxsXG4gICAgQGN1cnJlbnQgPSBudWxsXG4gICAgQHNob3cgPSBmYWxzZVxuICAgIEBpZCA9IG9wdHMuaWRcbiAgICBAc3RhdGVzVG9TYXZlID0gNTBcbiAgXG4gIHNhdmU6IC0+XG4gICAgc3RhdGVzID0gQHN0YXRlcy5zbGljZSAwLCBAc3RhdGVzVG9TYXZlXG4gICAganNvbiA9IEpTT04uc3RyaW5naWZ5IHN0YXRlc1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtIEBpZCwganNvblxuXG4gIGxvYWQ6IC0+XG4gICAgc3RhdGVzID0gSlNPTi5wYXJzZSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShAaWQpXG4gICAgaWYgc3RhdGVzIGFuZCBfLmlzQXJyYXkgc3RhdGVzXG4gICAgICBAc3RhdGVzID0gc3RhdGVzXG4gICAgICBAY3VycmVudCA9IHN0YXRlcy5sZW5ndGggLSAxXG4gICAgICBAbGF0ZXN0ID0gQGN1cnJlbnRcblxuICAgICAgQGVtaXQgJ2xvYWQnXG4gICAgICBAZW1pdCAndXBkYXRlJ1xuICAgICAgcmV0dXJuIHN0YXRlc1xuXG4gIGFkZDogKHN0YXRlLCBtZXRhPXt9KS0+XG4gICAgaWYgQGxhdGVzdCAhPSBAY3VycmVudFxuICAgICAgQHN0YXRlcyA9IEBzdGF0ZXMuc2xpY2UoMCxAY3VycmVudCsxKVxuXG4gICAgaWYgbm90IEBjdXJyZW50P1xuICAgICAgQGN1cnJlbnQgPSAwXG4gICAgZWxzZVxuICAgICAgQGN1cnJlbnQrK1xuXG4gICAgQGxhdGVzdCA9IEBjdXJyZW50XG5cbiAgICBuZXdTdGF0ZSA9XG4gICAgICBzdGF0ZTogXy5jbG9uZURlZXAgc3RhdGVcbiAgICAgIG1ldGE6IF8uY2xvbmVEZWVwIG1ldGFcblxuICAgIEBzdGF0ZXNbQGN1cnJlbnRdID0gbmV3U3RhdGVcblxuICAgIEBzYXZlKClcblxuICAgIEBlbWl0ICdhZGQnLCBuZXdTdGF0ZSwgJ2EnLCAnYicsICdjJ1xuICAgIEBlbWl0ICd1cGRhdGUnXG4gIFxuICB1bmRvOiAoKS0+XG4gICAgaWYgQGN1cnJlbnQgPiAwXG4gICAgICBAY3VycmVudC0tXG4gICAgQGVtaXQgJ3VuZG8nXG4gICAgQGVtaXQgJ3VwZGF0ZSdcbiAgICBAc2hvd1RoZW5IaWRlKClcbiAgICBzdGF0ZSA9IEBnZXRDdXJyZW50KClcbiAgICBzdGF0ZVxuICBcbiAgcmVkbzogKCktPlxuICAgIGlmIEBjdXJyZW50IDwgQGxhdGVzdFxuICAgICAgQGN1cnJlbnQrK1xuICAgIEBlbWl0ICdyZWRvJ1xuICAgIEBlbWl0ICd1cGRhdGUnXG4gICAgQHNob3dUaGVuSGlkZSgpXG4gICAgc3RhdGUgPSBAZ2V0Q3VycmVudCgpXG4gICAgc3RhdGVcblxuICBnZXQ6IChpbmRleCktPlxuICAgIF8uY2xvbmVEZWVwIEBzdGF0ZXNbaW5kZXhdXG5cbiAgZ2V0Q3VycmVudDogKCktPlxuICAgIEBnZXQoQGN1cnJlbnQpXG5cbiAgdG9nZ2xlVmlzaWJsZTogKGZvcmNlLCBzaG93VGVtcD1mYWxzZSktPlxuICAgIGNsZWFyVGltZW91dCBAc2hvd1RoZW5IaWRlVGltZW91dFxuICAgIEBzaG93VGVtcCA9IHNob3dUZW1wXG4gICAgQHNob3cgPSBpZiBmb3JjZT8gdGhlbiBmb3JjZSBlbHNlICFAc2hvd1xuICAgIEBlbWl0ICd0b2dnbGVWaXNpYmxlJywgQHNob3dcbiAgICBAZW1pdCAndXBkYXRlJ1xuXG4gIHNob3dUaGVuSGlkZTogKHRpbWUgPSAxMDAwKS0+XG4gICAgY2xlYXJUaW1lb3V0IEBzaG93VGhlbkhpZGVUaW1lb3V0XG4gICAgaWYgbm90IEBzaG93XG4gICAgICBAdG9nZ2xlVmlzaWJsZSB0cnVlLCB0cnVlXG4gICAgaWYgQHNob3dUZW1wXG4gICAgICBAc2hvd1RoZW5IaWRlVGltZW91dCA9IHNldFRpbWVvdXQgQHRvZ2dsZVZpc2libGUuYmluZCh0aGlzLCBmYWxzZSksIHRpbWVcblxubW9kdWxlLmV4cG9ydHMgPSBTdGF0ZUhpc3RvcnlcbiIsImN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbm1vZHVsZS5leHBvcnRzID0gKHByb3BzKSAtPlxuICBvd25lckNsYXNzID0gXCJvd25lci0je3Byb3BzLm93bmVyfVwiXG4gIGNsYXNzZXMgPSBjeFxuICAgICdhc2lhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdBc2lhIFNjb3JpbmcnXG4gICAgJ2V1cm9wZVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnRXVyb3BlIFNjb3JpbmcnXG4gICAgJ21pZGRsZUVhc3RTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ01pZGRsZSBFYXN0IFNjb3JpbmcnXG4gICAgJ2NlbnRyYWxBbWVyaWNhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdDZW50cmFsIEFtZXJpY2EgU2NvcmluZydcbiAgICAnc291dGhlYXN0QXNpYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnU291dGhlYXN0IEFzaWEgU2NvcmluZyonXG4gICAgJ2FmcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQWZyaWNhIFNjb3JpbmcnXG4gICAgJ3NvdXRoQW1lcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnU291dGggQW1lcmljYSBTY29yaW5nJ1xuICAgICdvbmdvaW5nJzogcHJvcHMub25nb2luZ1xuXG4gIG93bmVyQ2xhc3MgKyAnICcgKyBjbGFzc2VzXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gKGVsKS0+IGVsIGlmIGVsXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChlbCxpLGFyciktPiBhcnIuaW5kZXhPZihlbCkgPT0gaVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZWwpLT4gMSA8PSBlbCA8PSAxMTBcbiIsIm1vZHVsZS5leHBvcnRzID1cbiAgdHVybjogKHZhbCktPlxuICAgIHN3aXRjaCB2YWxcbiAgICAgIHdoZW4gMCB0aGVuICdTJ1xuICAgICAgd2hlbiAxMSB0aGVuICdFJ1xuICAgICAgZWxzZSB2YWxcbiAgcm91bmQ6ICh2YWwpLT5cbiAgICBpZiB2YWwgPT0gMCB0aGVuICdIJyBlbHNlIE1hdGguY2VpbCh2YWwgLyAyKVxuICBcbiIsIm1vZHVsZS5leHBvcnRzID0gKGlkLCB2YWwsIG9wdCktPlxuICBzd2l0Y2ggaWRcbiAgICB3aGVuICd0dXJuJ1xuICAgICAgc3RhcnQgPSAnUydcbiAgICAgIGVuZCA9ICdFJ1xuICAgICAgaWYgb3B0ID09ICdsb25nJ1xuICAgICAgICBzdGFydCA9ICdOZXcgR2FtZSdcbiAgICAgICAgZW5kID0gJ0dhbWUgRW5kJ1xuICAgICAgc3dpdGNoIHZhbFxuICAgICAgICB3aGVuIDAgdGhlbiBzdGFydFxuICAgICAgICB3aGVuIDExIHRoZW4gZW5kXG4gICAgICAgIGVsc2UgdmFsXG4gICAgd2hlbiAncm91bmQnXG4gICAgICBoID0gaWYgb3B0ID09ICdsb25nJyB0aGVuICdIZWFkbGluZScgZWxzZSAnSCdcbiAgICAgIGlmIHZhbCA9PSAwIHRoZW4gaCBlbHNlIE1hdGguY2VpbCh2YWwgLyAyKVxuICAgIHdoZW4gJ3Njb3JlJ1xuICAgICAgTWF0aC5hYnMgdmFsXG4gICAgZWxzZVxuICAgICAgdmFsXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpKF9fZGlybmFtZSwgWycqLmNvZmZlZSddKVxuIiwiIyBIYXNoZWQgcXNcbiMgSGFuZGxlcyBzdHJpbmdzIGFuZCBhcnJheXNcbiMgQW55dGhpbmcgd2l0aCBhIGNvbW1hIHdpbGwgYmUgcGFyc2VkIGFzIGFuIGFycmF5XG5tb2R1bGUuZXhwb3J0cyA9XG4gIG1lcmdlOiAob2JqKS0+XG5cbiAgZ2V0OiAoZmllbGQpLT5cbiAgXG4gIHNldDogKGZpZWxkLCB2YWwpLT5cbiAgICBxc09iaiA9IEB0b09iaigpIHx8IHt9XG4gICAgcXNPYmpbZmllbGRdID0gdmFsXG4gICAgQHNldFFTIEB0b1FTKHFzT2JqKVxuXG4gIGRlbGV0ZTogKGZpZWxkKS0+XG4gICAgcXNPYmogPSBAdG9PYmooKSB8fCB7fVxuICAgIHJldHVybiBpZiBub3QgcXNPYmo/XG4gICAgZGVsZXRlIHFzT2JqW2ZpZWxkXVxuICAgIEBzZXRRUyBAdG9RUyBxc09ialxuXG4gIGVuY29kZUNoYXJzSW46IFsnPScsJyYnXVxuXG4gIGVuY29kZUNoYXJzT3V0OlsnJTNEJywnJTI2J11cblxuICBlbmNvZGU6IChvYmopLT5cbiAgICBpZiBfLmlzQXJyYXkgb2JqXG4gICAgICBvYmogPSBvYmouam9pbignLCcpXG4gICAgb2JqLnJlcGxhY2UoQGVuY29kZUNoYXJzSW4sIEBlbmNvZGVDaGFyc091dClcblxuICBkZWNvZGU6IChzdHIpLT5cbiAgICBzdHIgPSBzdHIucmVwbGFjZShAZW5jb2RlQ2hhcnNPdXQsIEBlbmNvZGVDaGFyc0luKVxuICAgIGlmIHN0ci5pbmRleE9mKCcsJykgIT0gLTFcbiAgICAgIHN0ciA9IHN0ci5zcGxpdCgnLCcpXG4gICAgc3RyXG5cblxuICB0b09iajogKHFzID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKT9bMV0pLT5cbiAgICBpZiBub3QgcXNcbiAgICAgIHJldHVyblxuICAgIG91dCA9IHt9XG4gICAgcGFpcnMgPSBxcy5zcGxpdCgnJicpXG4gICAgcGFpcnM/LmZvckVhY2ggKHBhaXIpPT5cbiAgICAgIGt2QXJyID0gcGFpci5zcGxpdCgnPScpXG4gICAgICBvdXRbQGRlY29kZShrdkFyclswXSldID0gQGRlY29kZShrdkFyclsxXSlcbiAgICBvdXRcblxuICB0b1FTOiAob2JqKS0+XG4gICAgcGFpcnMgPSBbXVxuICAgIGZvciBvd24gayx2IG9mIG9ialxuICAgICAgcGFpcnMucHVzaCBcIiN7QGVuY29kZShrKX09I3tAZW5jb2RlKHYpfVwiXG4gICAgcGFpcnMuam9pbignJicpXG4gICAgICAgXG4gIHNldFFTOiAocXMpLT5cbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMF0gKyAnPycgKyBxc1xuIFxuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gKGlkLCB2YWwpLT5cbiAgcmFuZ2VzID1cbiAgICBzY29yZTogWy0yMCwgMjBdXG4gICAgdHVybjogWzAsIDExXVxuICAgIHJvdW5kOiBbMCwgMTZdXG4gICAgZGVmY29uOiBbMSwgNV1cbiAgICBtaWxvcHM6IFswLCA1XVxuICAgIHNwYWNlOiBbMCwgOF1cblxuICByYW5nZSA9IHJhbmdlc1tpZF1cblxuICBpZiB2YWwgPCByYW5nZVswXVxuICAgIHJldHVybiByYW5nZVsxXVxuICBpZiB2YWwgPiByYW5nZVsxXVxuICAgIHJldHVybiByYW5nZVswXVxuICB2YWxcblxuIiwibW9kdWxlLmV4cG9ydHMgPSAoYXJncy4uLiktPlxuICBkb2N1bWVudC50aXRsZSA9IGFyZ3Muam9pbignIHwgJykgKyAnIC0gVHdpU3RydWcnXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChkaXIpLT4gaWYgZGlyID09ICd1cCcgdGhlbiAnKycgZWxzZSAnLSdcblxuIiwibW9kdWxlLmV4cG9ydHMgPSAobnVtKS0+XG4gIGlmIG51bSA+IDBcbiAgICByZXR1cm4gJysnXG4gIGlmIG51bSA8IDBcbiAgICByZXR1cm4gJy0nXG4gIHJldHVybiAnJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoYSxiKS0+IGEtYlxuIiwibW9kdWxlLmV4cG9ydHMgPSAoc3RyKS0+IHN0ci5zbGljZSgwLDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbiIsIm1vZHVsZS5leHBvcnRzID0gKHN0ciwgbGVuPTMpLT4gKCcwMDAnICsgc3RyKS5zdWJzdHIoLWxlbixsZW4pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChzdHIsIGxlbj0zKS0+ICgnMDAwJyArIHN0cikuc3Vic3RyKC1sZW4sbGVuKVxuIiwiUiA9IFJlYWN0LkRPTVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQWJvdXRWaWV3J1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnYWJvdXRWaWV3JywgW1xuICAgICAgUi5oMiB7fSwgXCJBYm91dCBUd2lTdHJ1Z1wiXG4gICAgICBSLmltZyBjbGFzc05hbWU6ICdpbWdSaWdodCcsIHNyYzogXCIvaW1hZ2VzL3RzYm94LmpwZ1wiXG4gICAgICBSLnAge30sIFtcbiAgICAgICAgXCJUd2lTdHJ1ZyB3YXMgY3JlYXRlZCBmb3IgcGVvcGxlIHdobyB3YW50IHRvIHJlZmVyZW5jZSBvciBsZWFybiBhYm91dCB0aGVcbiAgICAgICAgY2FyZHMgb2YgXCJcbiAgICAgICAgUi5hIGhyZWY6XCJodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1R3aWxpZ2h0X1N0cnVnZ2xlXCIsXG4gICAgICAgICAgXCJUd2lsaWdodCBTdHJ1Z2dsZVwiXG4gICAgICAgIFwiLiBJdCBoYXMgc2luY2UgZXhwYW5kZWQgdG8gaW5jbHVkZSBhIHBsYXlhYmxlIHZlcnNpb24gb2YgdGhlIGJvYXJkIGZvclxuICAgICAgICBsb2NhbCBnYW1lcyB3aXRob3V0IHRha2luZyB1cCBhcyBtdWNoIHRhYmxlIHNwYWNlLlwiXG4gICAgICBdXG4gICAgICBSLnAge30sIFtcbiAgICAgICAgXCJGb3IgbW9yZSBpbi1kZXB0aCBzdHJhdGVneSwgZ28gdG8gdGhlIGV4Y2VsbGVudCBcIlxuICAgICAgICBSLmEgaHJlZjogXCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb21cIiwgXCJUd2lsaWdodCBTdHJhdGVneVwiXG4gICAgICAgIFwiIHNpdGUuIEl0IGhhcyB0b25zIG9mIGdyZWF0IGNvbnRlbnQgYW5kXG4gICAgICAgIGFuYWx5c2lzIGF2YWlsYWJsZSwgaW5jbHVkaW5nIGRpc2N1c3Npb25zIGFib3V0IG5lYXJseSBldmVyeSBjYXJkLlxuICAgICAgICBQbGVhc2Ugc3VwcG9ydCBUd2lsaWdodCBTdHJhdGVneSBhbmQgaXRzIGF1dGhvciwgXCJcbiAgICAgICAgUi5lbSB7fSwgXCJ0aGVvcnlcIlxuICAgICAgICBcIiwgYnkgcHVyY2hhc2luZyBUd2lsaWdodCBTdHJ1Z2dsZSBmcm9tIEFtYXpvbiBvbiB0aGUgc2lkZWJhciBvZiBoaXNcbiAgICAgICAgc2l0ZSwgb3IgYnkgcGF5aW5nIHNvbWUgbW9uZXkgZm9yIHRoZSBhc3NvY2lhdGVkXCJcbiAgICAgICAgUi5hIGhyZWY6IFwiaHR0cHM6Ly9sZWFucHViLmNvbS90d2lsaWdodHN0cmF0ZWd5XCIsIFwiZS1ib29rXCJcbiAgICAgICAgXCIuIEl0J3MgVHdpbGlnaHQgU3RyYXRlZ3kgaW4gYm9vayBmb3JtIGFuZCBkZXNlcnZlcyB5b3VyIG1vbmV5LlwiXG4gICAgICBdXG4gICAgICBSLnAge30sIFtcbiAgICAgICAgXCJUd2lTdHJ1ZyB3YXMgbWFkZSBieSBcIlxuICAgICAgICBSLmEgaHJlZjogXCJodHRwOi8vamp0LmlvL1wiLCBcIkphc29uIFRyaWxsXCJcbiAgICAgICAgXCIuIFNvdXJjZSBhdmFpbGFibGUgb24gXCJcbiAgICAgICAgUi5hIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pqdC90d2lzdHJ1Z1wiLCBcIkdpdGh1YlwiXG4gICAgICAgIFwiLlwiXG4gICAgICBdXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcbkJvYXJkID0gcmVxdWlyZSAnLi4vdmlld3MvQm9hcmQnXG5cbkJvYXJkSW5mbyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiB7fSwgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLWxnLTYnLCBbXG4gICAgICAgIFIuaDMge30sICdGdWxseSBwbGF5YWJsZSBUd2lsaWdodCBTdHJ1Z2dsZSBib2FyZCdcbiAgICAgICAgUi5wIHt9LCBcIlRoaXMgaXMgYSBmdWxseSBwbGF5YWJsZSBib2FyZCB3aXRoIGEgbW9yZVxuICAgICAgICAgIGNvbXBhY3QgbGF5b3V0IHRvIGZpdCBvbiBzbWFsbGVyIHNjcmVlbnMsIGxpa2UgYSBDaHJvbWVib29rIG9yIGlQYWQuIEp1c3QgYWRkIGNhcmRzXG4gICAgICAgICAgYW5kIHlvdSdsbCBiZSBhYmxlIHRvIHBsYXkgYW55d2hlcmUuIFRoZSBib2FyZCBpc24ndCBhd2FyZSBvZiB0aGUgcnVsZXMsIG5vciB3aWxsXG4gICAgICAgICAgaXQgZG8gYW55dGhpbmcgYXV0b21hdGljYWxseS4gVXNlIGl0IGFzIHlvdSB3b3VsZCBhIHBoeXNpY2FsIGNvcHkgb2YgdGhlIGdhbWUuXCJcbiAgICAgICAgUi5oMyB7fSwgXCJVcGNvbWluZyBhbmQgcG90ZW50aWFsIGZlYXR1cmVzXCJcbiAgICAgICAgUi51bCB7fSwgW1xuICAgICAgICAgIFIubGkge30sIFwiUmVtaW5kZXIgY2hpdHMgZm9yIE5BVE8sIFJlZCBTY2FyZS9QdXJnZSwgZXRjIChQb3NzaWJseSlcIlxuICAgICAgICAgIFIubGkge30sIFwiS2V5Ym9hcmQgc2hvcnRjdXRzIGZvciBnYW1lIHN0YXR1cyBhbmQgYWRqdXN0aW5nIElQIChQb3NzaWJseSlcIlxuICAgICAgICAgIFIubGkge30sIFwiVmlydHVhbCBjYXJkcyAoc2h1ZmZsaW5nLCBoYW5kcywgZXRjKSBtZWFuaW5nIFR3aVN0cnVnIGlzIHNlbGYtY29udGFpbmVkIGFzIGEgd2ViIGFwcGxpY2F0aW9uIGluc3RlYWQgb2YgcmVxdWlyaW5nIHRoZSBwaHlzaWNhbCBjYXJkcyAoTWF5eXl5YmUpXCJcbiAgICAgICAgICBSLmxpIHt9LCBcIlJlbW90ZSBnYW1lcyAoVW5saWtlbHkgYnV0IHBvc3NpYmxlKVwiXG4gICAgICAgICAgUi5saSB7fSwgXCJDb21wbGV0ZSBnYW1lIGEgbGEgV2FyZ2FtZXJvb20gYW5kIFZhc3NhbCAoVW5saWtlbHkgYnV0IHBvc3NpYmxlKVwiXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1sZy02JywgW1xuICAgICAgICBSLmgzIHt9LCBcIkluc3RydWN0aW9uc1wiXG4gICAgICAgIFIucCB7fSwgXCJUbyBhZGQvcmVtb3ZlIGluZmx1bmNlIGluIGEgY291bnRyeSwgY2xpY2sgaW4gdGhlIHRvcC9ib3R0b20gb2YgdGhlIGluZmx1ZW5jZSBzcGFjZSBvbiB0aGUgZGVzaXJlZCBzaWRlIChVU0Egb24gbGVmdCwgVVNTUiBvbiByaWdodCkuXCJcbiAgICAgICAgUi5wIHt9LCBcIlRvIHVuZG8vcmVkbyBvbmUgb3IgbW9yZSBhY3Rpb25zLCBwcmVzcyBaL1kgb25lIG9yIG1vcmUgdGltZXMuXCJcbiAgICAgICAgUi5wIHt9LCBcIlRoZSBkaWNlIGNhbiBiZSByb2xsZWQgaW5kaXZpZHVhbGx5IGJ5IGNsaWNraW5nIG9uIHRoZW0sIG9yIGFzIGEgcGFpciBieSBjbGlja2luZyBvbiBcXFwiUk9MTCBESUNFXFxcIi5cIlxuICAgICAgICBSLnAge30sIFwiRWFjaCBzdXBlcnBvd2VyIGJveCAoVVNBLCBVU1NSKSBzaG93cyB0aGUgbnVtYmVyIG9mIGNvbnRyb2xsZWQgYmF0dGxlZ3JvdW5kIGNvdW50cmllcyBvbiB0b3AuIE9uIHRoZSBib3R0b20gaXQgc2hvd3MgdGhlIG51bWJlciBvZiByZWdpb25zIGluIHdoaWNoIHRoZSBwb3dlciBoYXMgcHJlc2VuY2UsIGRvbWluYXRpb24gYW5kIGNvbnRyb2wuIEZvciBleGFtcGxlLCBpZiB0aGUgVVNTUiBoYWQgXFxcIjQgMiAxXFxcIiwgaXQgd291bGQgbWVhbiB0aGF0IHRoZXkgaGF2ZSBwcmVzZW5jZSBpbiA0IHJlZ2lvbnMsIGRvbWluYXRlIDIsIGFuZCBjb250cm9sIDEuXCJcbiAgICAgICAgUi5oMyB7fSwgXCJLZXlib2FyZCBTaG9ydGN1dHNcIlxuICAgICAgICBSLnAge30sIFtcbiAgICAgICAgICBSLnN0cm9uZyB7fSwgXCJIOiBcIlxuICAgICAgICAgIFIuc3BhbiB7fSwgXCJTaG93L2hpZGUgYWN0aW9uIGhpc3RvcnlcIlxuICAgICAgICAgIFIuYnIge31cbiAgICAgICAgICBSLnN0cm9uZyB7fSwgXCJaOiBcIlxuICAgICAgICAgIFIuc3BhbiB7fSwgXCJVbmRvIGFjdGlvblwiXG4gICAgICAgICAgUi5iciB7fVxuICAgICAgICAgIFIuc3Ryb25nIHt9LCBcIlk6IFwiXG4gICAgICAgICAgUi5zcGFuIHt9LCBcIlJlZG8gYWN0aW9uXCJcbiAgICAgICAgICBSLmJyIHt9XG4gICAgICAgICAgUi5lbSB7fSwgXCJNb3JlIGNvbWluZyBzb29uLi4uXCJcbiAgICAgICAgXVxuICAgICAgXVxuICAgIF1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZFZpZXcnXG4gIFxuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgd2lkdGg6IDExNDBcbiAgICBoZWlnaHQ6IDczMFxuICAgIG5vZGU6XG4gICAgICB3aWR0aDogNjZcbiAgICAgIGhlaWdodDogNTBcbiAgICAgIGd1dHRlcjogMTRcbiAgICAgIHRpdGxlSGVpZ2h0OiAxNlxuICAgICAgdGl0bGVGb250U2l6ZTogMTJcblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgZGVidWdPYmo6IHt9XG5cbiAgZHJhZ2VuZDogKGVsKS0+XG4gICAgY29vcmRzID0gQHN0YXRlLmNvb3Jkc1xuICAgIGNvb3Jkc1tlbC5uYW1lXSA9XG4gICAgICB4OiBNYXRoLnJvdW5kKGVsLngpXG4gICAgICB5OiBNYXRoLnJvdW5kKGVsLnkpXG4gICAgZWwuZml4ZWQgPSB0cnVlXG4gICAgQHNldFN0YXRlIHtjb29yZHN9XG5cbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ0JvYXJkVmlldycsIFtcbiAgICAgIEJvYXJkIEBwcm9wc1xuICAgICAgQm9hcmRJbmZvKClcbiAgICAgIFIudGV4dGFyZWFcbiAgICAgICAgY2xhc3NOYW1lOiAnbWFwLXBvc2l0aW9uLWRlYnVnJ1xuICAgICAgICByZWY6J2RlYnVnJ1xuICAgICAgICB2YWx1ZTogSlNPTi5zdHJpbmdpZnkoQHN0YXRlLmNvb3JkcywgbnVsbCwgJyAnKVxuICAgICAgICBzdHlsZTpcbiAgICAgICAgICB3aWR0aDonMTAwJSdcbiAgICAgICAgICBoZWlnaHQ6JzYwcmVtJ1xuICAgIF1cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkUGljVmlldydcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2JvYXJkVmlldycsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3BhZ2UtaGVhZGVyJyxcbiAgICAgICAgUi5oMiB7fSwgJ0JvYXJkJ1xuICAgICAgUi5hIGhyZWY6Jy9pbWFnZXMvdHNib2FyZC5qcGcnLFxuICAgICAgICBSLmltZyBjbGFzc05hbWU6ICdmbHVpZCcsIHNyYzonL2ltYWdlcy90c2JvYXJkLmpwZydcbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cbmxpYnMgPSByZXF1aXJlICcuLi9saWJzJ1xuXG5tb2R1bGUuZXhwb3J0cyAgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0NhcmRWaWV3J1xuICBjb21wb25lbnREaWRNb3VudDogLT5cbiAgICAkKHdpbmRvdykub24gJ3Njcm9sbCcsIEBmbG9hdGluZ0NhcmRcbiAgICAkKHdpbmRvdykub24gJ3Jlc2l6ZScsIEBmbG9hdGluZ0NhcmRcbiAgICAkKGRvY3VtZW50KS5vbiAna2V5cHJlc3MnLCBAaGFuZGxlS2V5UHJlc3NcbiAgICBAZ2V0U3RyYXRlZ3koKVxuICAgIEBzZXRXaW5kb3dLZXlwcmVzc0hhbmRsZXIoKVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiAtPlxuICAgIHdpbmRvdy5vbmtleXByZXNzID0gbnVsbFxuICAgICQod2luZG93KS5vZmYgJ3Njcm9sbCcsIEBmbG9hdGluZ0NhcmRcbiAgICAkKHdpbmRvdykub2ZmICdyZXNpemUnLCBAZmxvYXRpbmdDYXJkXG4gICAgJChkb2N1bWVudCkub2ZmICdrZXlwcmVzcycsIEBoYW5kbGVLZXlQcmVzc1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogLT5cbiAgICBAZ2V0U3RyYXRlZ3koKVxuICAgICNAc2V0V2luZG93S2V5cHJlc3NIYW5kbGVyKClcblxuICBmbG9hdGluZ0NhcmQ6IC0+XG4gICAgJGhlYWRlciA9ICQgQHJlZnMuaGVhZGVyLmdldERPTU5vZGUoKVxuICAgICRpbWcgPSAkIEByZWZzLmNhcmRJbWcuZ2V0RE9NTm9kZSgpXG4gICAgJHdpbiA9ICQgd2luZG93XG4gICAgaG8gPSAkaGVhZGVyLm9mZnNldCgpXG4gICAgaXNTY3JvbGxpbmcgPSAkd2luLnNjcm9sbFRvcCgpID4gaG8udG9wICsgaG8uaGVpZ2h0XG4gICAgY29uc29sZS5sb2cgaG9cbiAgICAkaW1nLnRvZ2dsZUNsYXNzICdjYXJkLWltZy1zY3JvbGwnLCBpc1Njcm9sbGluZ1xuICAgICRpbWcuY3NzICdyaWdodCcsIFwiI3soJHdpbi53aWR0aCgpIC0gaG8ud2lkdGggLSAxNSkgLyAyfXB4XCJcblxuICBoYW5kbGVLZXlQcmVzczogKGV2KSAtPlxuICAgICAga0MgPSBldi5rZXlDb2RlXG4gICAgICBpZiBrQyA9PSAxMDQgb3Iga0MgPT0gNzJcbiAgICAgICAgaWQgPSBAcHJvcHMucHJldkNhcmQuaWRcbiAgICAgIGlmIGtDID09IDEwOCBvciBrQyA9PSA3NlxuICAgICAgICBpZCA9IEBwcm9wcy5uZXh0Q2FyZC5pZFxuICAgICAgaWYgaWQ/XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiIy9jYXJkLyN7aWR9XCJcblxuICBnZXRTdHJhdGVneTogLT5cbiAgICBAcmVmcy5jYXJkU3RyYXRlZ3kuZ2V0RE9NTm9kZSgpLmlubmVySFRNTCA9ICc8cD5Mb2FkaW5nIGRhdGEuLi48L3A+J1xuICAgICQuZ2V0IFwiL2RhdGEvY2FyZFN0cmF0ZWd5TGlua2VkLyN7bGlicy56ZXJvUGFkKEBwcm9wcy5jYXJkLmlkKX0uaHRtbFwiLCAoZGF0YSk9PlxuICAgICAgQHJlZnMuY2FyZFN0cmF0ZWd5LmdldERPTU5vZGUoKS5pbm5lckhUTUwgPSBkYXRhXG5cbiAgcmVuZGVyOiAtPlxuICAgIGNhcmQgPSBAcHJvcHMuY2FyZFxuICAgIGltYWdlVXJsID0gXCIvaW1hZ2VzL2NhcmRzLyN7bGlicy56ZXJvUGFkKGNhcmQuaWQpfS5qcGdcIlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NhcmRWaWV3JywgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncGFnZS1oZWFkZXIgY2xlYXJmaXgnLCByZWY6ICdoZWFkZXInLFxuICAgICAgICBSLmgyIGNsYXNzTmFtZTogbGlicy5jYXJkQ2xhc3NOYW1lKGNhcmQpLCBbXG4gICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonY2FyZC1vcHMnLCBpZiBjYXJkLm9wcyA8IDEgdGhlbiBcIlNcIiBlbHNlIGNhcmQub3BzXG4gICAgICAgICAgXCIje2NhcmQudGl0bGV9IFwiXG4gICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonY2FyZC1pZCcsIFwiIyN7Y2FyZC5pZH1cIlxuICAgICAgICBdXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NhcmQtbmF2JywgW1xuICAgICAgICAgIFIuYSB7aHJlZjpcIiMvY2FyZC8je0Bwcm9wcy5wcmV2Q2FyZC5pZH1cIiwgY2xhc3NOYW1lOidjYXJkLW5hdi1wcmV2J30sIFtcbiAgICAgICAgICAgIFwiI3tAcHJvcHMucHJldkNhcmQudGl0bGV9XCJcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdjYXJkLW5hdi1sYWJlbCcsIFtcbiAgICAgICAgICAgICAgUi5zbWFsbCB7fSwgJ+KXgCdcbiAgICAgICAgICAgICAgJyBwcmV2IChIKSdcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgICAgUi5hIHtocmVmOlwiIy9jYXJkLyN7QHByb3BzLm5leHRDYXJkLmlkfVwiLCBjbGFzc05hbWU6J2NhcmQtbmF2LW5leHQnfSwgW1xuICAgICAgICAgICAgXCIje0Bwcm9wcy5uZXh0Q2FyZC50aXRsZX1cIlxuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2NhcmQtbmF2LWxhYmVsJywgW1xuICAgICAgICAgICAgICAnbmV4dCAoTCkgJ1xuICAgICAgICAgICAgICBSLnNtYWxsIHt9LCAn4pa2J1xuICAgICAgICAgICAgXVxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgUi5wIHtjbGFzc05hbWU6ICdwdWxsLWxlZnQnfSwgY2FyZC50ZXh0XG4gICAgICBSLmltZyBzcmM6IGltYWdlVXJsLCBjbGFzc05hbWU6ICdpbWdSaWdodCcsIHJlZjonY2FyZEltZydcbiAgICAgIFIuZGl2IHtjbGFzc05hbWU6ICdjYXJkLXN0cmF0ZWd5JywgaWQ6ICdjYXJkLXN0cmF0ZWd5J30sIFtcbiAgICAgICAgUi5oMyB7fSwgW1xuICAgICAgICAgICdTdHJhdGVnaWMgTm90ZXMgZnJvbSdcbiAgICAgICAgICAnICdcbiAgICAgICAgICBSLmEgaHJlZjpjYXJkLnVybCwgJ1R3aWxpZ2h0U3RyYXRlZ3kuY29tJ1xuICAgICAgICBdXG4gICAgICAgIFIuZGl2IHJlZjonY2FyZFN0cmF0ZWd5JyxcbiAgICAgICAgICBSLnAge30sICdMb2FkaW5nIGRhdGEnXG4gICAgICBdXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcbmxpYnMgPSByZXF1aXJlICcuLi9saWJzJ1xuXG5DYXJkTGlzdCA9IHJlcXVpcmUgJy4uL3ZpZXdzL0NhcmRMaXN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ2FyZHNWaWV3J1xuICBkZWZhdWx0U3RhdGU6IChwcm9wcyktPlxuICAgIGZpbHRlciA9IHByb3BzPy5zdGF0ZT8uZmlsdGVyXG4gICAgZnVsbFRleHQ6IGlmIGZpbHRlciB0aGVuIHRydWUgZWxzZSBmYWxzZVxuICAgIGNhcmRGaWx0ZXJJbnB1dDogaWYgZmlsdGVyIHRoZW4gZmlsdGVyLmpvaW4oJyAnKSBlbHNlICcnXG4gICAgc29ydDogJ3N0YWdlJ1xuICAgIGZpbHRlcjogbnVsbFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IChuZXh0UHJvcHMpIC0+XG4gICAgaWYgbmV4dFByb3BzLnN0YXRlP1xuICAgICAgQHNldFN0YXRlIG5leHRQcm9wcy5zdGF0ZVxuICAgIGVsc2VcbiAgICAgIEBzZXRTdGF0ZSBAZGVmYXVsdFN0YXRlKClcblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgXy5tZXJnZSBAZGVmYXVsdFN0YXRlKEBwcm9wcyksIEBwcm9wcy5zdGF0ZVxuXG4gIGdldEZpbHRlcklkczogKCkgLT5cblxuICAgIGlmIEBzdGF0ZT8uZmlsdGVyP1xuICAgICAgZmlsdGVySWRzID0gQHN0YXRlLmZpbHRlci5zb3J0KGxpYnMuc29ydE51bWVyaWNhbClcbiAgICAgICAgLmZpbHRlcihsaWJzLmZpbHRlclRydXRoeSlcbiAgICAgICAgLmZpbHRlcihsaWJzLmZpbHRlclVuaXF1ZSlcbiAgICBpZiBub3QgZmlsdGVySWRzPyB0aGVuIGZpbHRlcklkcyA9IFtdXG4gICAgcmV0dXJuIGZpbHRlcklkc1xuXG4gICMgSnVzdCBmaWx0ZXJpbmcgYnkgaWQgcmlnaHQgbm93XG4gIGdldEZpbHRlcmVkQ2FyZHM6IC0+XG4gICAgaWYgQHN0YXRlLmZpbHRlcj9cbiAgICAgIHJldHVybiBAcHJvcHMuY2FyZHMuZmlsdGVyIChlbCkgPT5cbiAgICAgICAgaWYgZWwuaWQgaW4gQHN0YXRlLmZpbHRlclxuICAgICAgICAgIHJldHVybiBlbFxuICAgIEBwcm9wcy5jYXJkc1xuICAgICAgICBcblxuICBmaWx0ZXJBbmRTb3J0Q2FyZHM6IC0+XG4gICAgY2FyZHMgPSBAZ2V0RmlsdGVyZWRDYXJkcygpXG4gICAgW3NvcnQsIG9yZGVyXSA9IEBzdGF0ZS5zb3J0LnNwbGl0ICctJ1xuXG4gICAgc29ydFBhcmFtID0gc3dpdGNoIHNvcnRcbiAgICAgIHdoZW4gJ3RleHRsZW4nIHRoZW4gKGVsKSAtPiBlbC50ZXh0Lmxlbmd0aFxuICAgICAgd2hlbiAnc2lkZScgdGhlbiBbJ293bmVyJywnc3RhZ2UnLCdpZCddXG4gICAgICB3aGVuICdvcHMnIHRoZW4gJ29wcydcbiAgICAgIHdoZW4gJ3RpdGxlbGVuJyB0aGVuIChlbCkgLT4gZWwudGl0bGUubGVuZ3RoXG4gICAgICBlbHNlIFsnc3RhZ2UnLCAnaWQnXVxuICAgIGNhcmRzID0gXy5zb3J0QnkgY2FyZHMsIHNvcnRQYXJhbVxuXG4gICAgaWYgb3JkZXIgPT0gJ3JldidcbiAgICAgIGNhcmRzLnJldmVyc2UoKVxuXG4gICAgY2FyZHNcblxuXG4gIGhhbmRsZUZ1bGxUZXh0OiAtPlxuICAgIEBzZXRTdGF0ZVxuICAgICAgZnVsbFRleHQ6IEByZWZzLmZ1bGxUZXh0LmdldERPTU5vZGUoKS5jaGVja2VkXG5cbiAgaGFuZGxlQ2FyZEZpbHRlckNoYW5nZTogLT5cbiAgICB2YWx1ZSA9IEByZWZzLmNhcmRGaWx0ZXIuZ2V0RE9NTm9kZSgpLnZhbHVlXG4gICAgIyBXR1IgYWRkcyBcIk9wcyAzOiAuLi5cIiwgc28gZG9uJ3QgcGljayB0aG9zZSB1cFxuICAgIGlkcyA9IHZhbHVlLm1hdGNoKC9cXGQrW146XXxcXGQrJC9nKT8ubWFwIChlbCktPiBwYXJzZUludCBlbCwgMTBcbiAgICBpZiB2YWx1ZSA9PSAnJyBvciBub3QgaWRzP1xuICAgICAgc3RhdGUgPVxuICAgICAgICBjYXJkRmlsdGVySW5wdXQ6IHZhbHVlXG4gICAgICAgIGZpbHRlcjogbnVsbFxuICAgIGVsc2VcbiAgICAgIHN0YXRlID1cbiAgICAgICAgY2FyZEZpbHRlcklucHV0OiB2YWx1ZVxuICAgICAgICBmdWxsVGV4dDogdHJ1ZVxuICAgICAgICBmaWx0ZXI6IGlkcy5zb3J0KGxpYnMuc29ydE51bWVyaWNhbCkuZmlsdGVyKGxpYnMuZmlsdGVyVmFsaWRDYXJkSWRzKVxuXG4gICAgQHNldFN0YXRlIHN0YXRlXG5cbiAgaGFuZGxlQ2FyZEZpbHRlckJsdXI6IC0+XG4gICAgZmlsdGVySWRzID0gQGdldEZpbHRlcklkcygpXG5cbiAgICBAc2V0U3RhdGVcbiAgICAgIGNhcmRGaWx0ZXJJbnB1dDogZmlsdGVySWRzLmpvaW4gJyAnXG5cbiAgICBpZiBmaWx0ZXJJZHM/IGFuZCBmaWx0ZXJJZHMubGVuZ3RoID4gMFxuICAgICAgbGlicy5xcy5zZXQgJ2ZpbHRlcicsIGZpbHRlcklkc1xuICAgIGVsc2VcbiAgICAgIGxpYnMucXMuZGVsZXRlICdmaWx0ZXInXG5cbiAgaGFuZGxlQ2FyZEZpbHRlckNsZWFyOiAoKS0+XG4gICAgQHJlZnMuY2FyZEZpbHRlci5nZXRET01Ob2RlKCkudmFsdWUgPSAnJ1xuICAgIEBzZXRTdGF0ZVxuICAgICAgZmlsdGVyOm51bGxcbiAgICAgIGNhcmRGaWx0ZXJJbnB1dDogJydcblxuICAgIGxpYnMucXMuZGVsZXRlICdmaWx0ZXInXG5cblxuXG4gIHJlbmRlcjogLT5cbiAgICBzb3J0TGluayA9IChzb3J0LCBkaXNwbGF5KSA9PlxuICAgICAgY2xhc3NOYW1lID0gY3ggYWN0aXZlOiBAc3RhdGUuc29ydCA9PSBzb3J0XG4gICAgICByZWYgPSBcIiN7c29ydH1Tb3J0XCJcbiAgICAgIG9uQ2xpY2sgPSAoKS0+XG4gICAgICAgIGxpYnMucXMuc2V0ICdzb3J0Jywgc29ydFxuICAgICAgUi5hIHtvbkNsaWNrLCByZWYsIGNsYXNzTmFtZX0sIGRpc3BsYXlcblxuXG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZHNWaWV3JyAsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3BhZ2UtaGVhZGVyIHJvdycsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLW1kLTYnLCBbXG4gICAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZENvbnRyb2xzJywgW1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2xhYmVsJywgJ1NvcnQgYnk6J1xuICAgICAgICAgICAgc29ydExpbmsgJ3N0YWdlJywgJ1N0YWdlJ1xuICAgICAgICAgICAgc29ydExpbmsgJ29wcycsICdPcHMnXG4gICAgICAgICAgICBzb3J0TGluayAnc2lkZScsICdTaWRlJ1xuICAgICAgICAgIF1cbiAgICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkQ29udHJvbHMnLCBbXG4gICAgICAgICAgICBSLmlucHV0XG4gICAgICAgICAgICAgIG5hbWU6ICdmdWxsVGV4dCdcbiAgICAgICAgICAgICAgaWQ6ICdmdWxsVGV4dCdcbiAgICAgICAgICAgICAgdHlwZTonY2hlY2tib3gnXG4gICAgICAgICAgICAgIHJlZjonZnVsbFRleHQnXG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiBAaGFuZGxlRnVsbFRleHRcbiAgICAgICAgICAgICAgY2hlY2tlZDogQHN0YXRlLmZ1bGxUZXh0XG4gICAgICAgICAgICBcIiBcIlxuICAgICAgICAgICAgUi5sYWJlbCB7aHRtbEZvcjonZnVsbFRleHQnLCBjbGFzc05hbWU6J2NhcmQtc2hvdy10ZXh0LWxhYmVsJ30sICdTaG93IGNhcmQgdGV4dCdcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZHMtZmlsdGVyLWJ5LWlkIGNvbC1tZC02JywgW1xuICAgICAgICAgIFIubGFiZWwge2h0bWxGb3I6J2NhcmRGaWx0ZXInfSwgW1xuICAgICAgICAgICAgXCJGaWx0ZXIgY2FyZHMgYnkgaWRzIFwiXG4gICAgICAgICAgXVxuICAgICAgICAgIFIuaW5wdXRcbiAgICAgICAgICAgIG5hbWU6ICdjYXJkRmlsdGVyJ1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgICAgICByZWY6ICdjYXJkRmlsdGVyJ1xuICAgICAgICAgICAgb25DaGFuZ2U6IEBoYW5kbGVDYXJkRmlsdGVyQ2hhbmdlXG4gICAgICAgICAgICBvbkJsdXI6IEBoYW5kbGVDYXJkRmlsdGVyQmx1clxuICAgICAgICAgICAgdmFsdWU6IEBzdGF0ZS5jYXJkRmlsdGVySW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUGFzdGUgZnJvbSBXYXJnYW1lcm9vbSBvciBlbnRlciBpZHMnXG4gICAgICAgICAgUi5hIHtjbGFzc05hbWU6J2NhcmRzLWZpbHRlci1ieS1pZC1jbGVhcicsIG9uQ2xpY2s6QGhhbmRsZUNhcmRGaWx0ZXJDbGVhcn0sICdjbGVhcidcbiAgICAgICAgXVxuICAgICAgXVxuICAgICAgQ2FyZExpc3RcbiAgICAgICAgY2FyZHM6IEBmaWx0ZXJBbmRTb3J0Q2FyZHMoKVxuICAgICAgICBmdWxsVGV4dDogQHN0YXRlLmZ1bGxUZXh0XG4gICAgXVxuIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0NvdW50cmllc1ZpZXcgJ1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnY291bnRyaWVzVmlldycsIFtcbiAgICAgIFIuaDIge30sICdDb3VudHJpZXMnXG4gICAgXVxuXG5cbiIsIlIgPSBSZWFjdC5ET01cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0hvbWVWaWV3J1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnSG9tZVZpZXcnLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdyb3cnLCBbXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC14cy0xMicsIFtcbiAgICAgICAgICBSLmgxIGNsYXNzTmFtZTogJ3RleHQtY2VudGVyJywgW1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJ0d2kgb3duZXItdXNcIiwgXCJUd2lcIlxuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJzdHJ1ZyBvd25lci11c3NyXCIsIFwiU3RydWdcIlxuICAgICAgICAgIF1cbiAgICAgICAgICBSLnAgY2xhc3NOYW1lOidsZWFkIGJsdXJiJywgW1xuICAgICAgICAgICAgXCJUd2lTdHJ1ZyBpcyBhIGNvbXBhbmlvbiBhcHBsaWNhdGlvbiBmb3IgXCJcbiAgICAgICAgICAgIFIuYSBocmVmOlwiaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Ud2lsaWdodF9TdHJ1Z2dsZVwiLCBcIlR3aWxpZ2h0IFN0cnVnZ2xlXCJcbiAgICAgICAgICAgIFwiLiBJdCB3b3VsZCBub3QgZXhpc3Qgd2l0aG91dCBcIlxuICAgICAgICAgICAgUi5hIGhyZWY6IFwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tXCIsIFwiVHdpbGlnaHQgU3RyYXRlZ3lcIlxuICAgICAgICAgICAgXCIuXCJcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLW1kLTYnLCBbXG4gICAgICAgICAgUi5hIGNsYXNzTmFtZTogJ2hvbWUtbGluaycsIGhyZWY6ICcjL2JvYXJkJywgW1xuICAgICAgICAgICAgUi5oMyB7fSwgJ1BsYXlhYmxlIEJvYXJkJ1xuICAgICAgICAgICAgUi5pbWcgY2xhc3NOYW1lOiAnaW1nLXJlc3BvbnNpdmUnLCBzcmM6ICcvaW1hZ2VzL2hvbWUtYm9hcmQuanBnJ1xuICAgICAgICAgICAgUi5wIHt9LCAnRnVsbHkgcGxheWFibGUgYm9hcmQgLSBqdXN0IGFkZCBjYXJkcydcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLW1kLTYnLCBbXG4gICAgICAgICAgUi5hIGNsYXNzTmFtZTogJ2hvbWUtbGluayBob21lLWxpbmstY2FyZHMnLCBocmVmOiAnIy9jYXJkcycsIFtcbiAgICAgICAgICAgIFIuaDMge30sICdWaWV3IENhcmRzJ1xuICAgICAgICAgICAgUi5pbWcgY2xhc3NOYW1lOiAnaW1nLXJlc3BvbnNpdmUnLCBzcmM6ICcvaW1hZ2VzL2hvbWUtY2FyZHMuanBnJ1xuICAgICAgICAgICAgUi5wIHt9LCAnRXhwbG9yZSB0aGUgY2FyZHMgb2YgVHdpbGlnaHQgU3RydWdnbGUnXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICBdXG4gICAgXVxuXG4iLCJSID0gUmVhY3QuRE9NXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdXaG9vcHNWaWV3J1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYge30sIFtcbiAgICAgIFIuaDIge30sIFwiREVGQ09OIDFcIlxuICAgICAgUi5wIGNsYXNzTmFtZTonbGVhZCcsIFtcbiAgICAgICAgXCJMb29rcyBsaWtlIFR3aVN0cnVnIHRyaWdnZXJlZCBudWNsZWFyIHdhci4gV0hPT1BTSUUgREFJU1khXCJcbiAgICAgICAgUi5iciB7fVxuICAgICAgICBSLmEgaHJlZjpcIiMvY2FyZHNcIiwgXCJIb3cgYWJvdXQgbG9va2luZyBvdmVyIHRoZSBjYXJkcz9cIlxuICAgICAgXVxuICAgIF1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJykoX19kaXJuYW1lLCBbJyouY29mZmVlJ10pXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxubGlicyA9IHJlcXVpcmUgJy4uL2xpYnMnXG5cbkJvYXJkTm9kZSA9IHJlcXVpcmUgJy4vQm9hcmROb2RlJ1xuQm9hcmRTdGF0dXMgPSByZXF1aXJlICcuL0JvYXJkU3RhdHVzJ1xuQm9hcmRMaW5rID0gcmVxdWlyZSAnLi9Cb2FyZExpbmsnXG5cblxuc3VwZXJwb3dlclRvSW5kZXggPSAoc3RyKS0+IGlmIHN0ciA9PSAndXNhJyB0aGVuIDAgZWxzZSAxXG5cblxuZ2V0SXBTdGF0cyA9IChpcHMsIGNvdW50cmllcyktPlxuICBhY2N1bXVsYXRvciA9IC0+XG4gICAgYnRsOiAwXG4gICAgbm9uOiAwXG4gICAgdG90YWw6IDBcbiAgICBldTogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBhczogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBtZTogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBhZjogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBzYTogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBjYTogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcblxuICBmbiA9IChhY2N1bSwgaXBzLCBjb3VudHJ5SWQpLT5cbiAgICBjb3VudHJ5ID0gXy5maW5kIGNvdW50cmllcywgaWQ6IHBhcnNlSW50KGNvdW50cnlJZCwgMTApXG4gICAgaWYgaXBzWzBdIC0gaXBzWzFdID49IGNvdW50cnkuc3RhYlxuICAgICAgYWNjdW1bY291bnRyeS5jb250aW5lbnRdLnRvdGFsKytcbiAgICAgIGFjY3VtLnRvdGFsKytcbiAgICAgIGlmIGNvdW50cnkuYnRsXG4gICAgICAgIGFjY3VtW2NvdW50cnkuY29udGluZW50XS5idGwrK1xuICAgICAgICBhY2N1bS5idGwrK1xuICAgICAgZWxzZVxuICAgICAgICBhY2N1bVtjb3VudHJ5LmNvbnRpbmVudF0ubm9uKytcbiAgICAgICAgYWNjdW0ubm9uKytcbiAgICBhY2N1bVxuXG4gICMgRmxpcHBlZCB0byBoYXZlIFVTU1IgaXBzIGZpcnN0XG4gIGlwc1JldiA9IF8ubWFwIGlwcywgKGlwcyktPiBfLmNsb25lRGVlcChpcHMpLnJldmVyc2UoKVxuXG4gIHVzYSA9IF8ucmVkdWNlIGlwcywgZm4sIGFjY3VtdWxhdG9yKClcbiAgdXNzciA9IF8ucmVkdWNlIGlwc1JldiwgZm4sIGFjY3VtdWxhdG9yKClcblxuICB7dXNhLCB1c3NyfVxuXG5zdW1SZWdpb24gPSAobWV0cmljLCBzdW0sIHJlZ2lvbiktPiBzdW0gKyByZWdpb25bbWV0cmljXVxuXG5nZXRSZWdpb25TdGF0cyA9IChpcFN0YXRzLCByZWdpb25zKS0+XG4gIHN0YXRzID0gXy5tYXBWYWx1ZXMgaXBTdGF0cywgKGhlcm8sIHBvd2VyLCBwb3dlcnMpLT5cbiAgICB2aWxsYWluID0gaWYgcG93ZXIgPT0gJ3VzYScgdGhlbiBwb3dlcnMudXNzciBlbHNlIHBvd2Vycy51c2FcbiAgICByZWdpb25TdGF0cyA9IHJlZ2lvbnMubWFwIChyZWdpb24pLT5cbiAgICAgIGhSZWdpb24gPSBoZXJvW3JlZ2lvbi5pZF1cbiAgICAgIHZSZWdpb24gPSB2aWxsYWluW3JlZ2lvbi5pZF1cbiAgICAgIG91dCA9XG4gICAgICAgIHByZXNlbmNlOiBoUmVnaW9uLnRvdGFsID4gMFxuICAgICAgICBkb21pbmF0aW9uOiBoUmVnaW9uLm5vbiA+IDAgYW5kIGhSZWdpb24uYnRsID4gdlJlZ2lvbi5idGwgYW5kIGhSZWdpb24udG90YWwgPiB2UmVnaW9uLnRvdGFsXG4gICAgICAgIGNvbnRyb2w6IGhSZWdpb24uYnRsID09IHJlZ2lvbi5udW1CdGwgYW5kIGhSZWdpb24udG90YWwgPiB2UmVnaW9uLnRvdGFsXG5cbiAgICByZWdpb25TdGF0cyA9IF8uemlwT2JqZWN0IF8ucGx1Y2socmVnaW9ucywgJ2lkJyksIHJlZ2lvblN0YXRzXG4gICAgcmVnaW9uU3RhdHMgPSBfLmFzc2lnbiByZWdpb25TdGF0cyxcbiAgICAgIHByZXNlbmNlOiBfLnJlZHVjZSByZWdpb25TdGF0cywgc3VtUmVnaW9uLmJpbmQobnVsbCwgJ3ByZXNlbmNlJyksIDBcbiAgICAgIGRvbWluYXRpb246IF8ucmVkdWNlIHJlZ2lvblN0YXRzLCBzdW1SZWdpb24uYmluZChudWxsLCAnZG9taW5hdGlvbicpLCAwXG4gICAgICBjb250cm9sOiBfLnJlZHVjZSByZWdpb25TdGF0cywgc3VtUmVnaW9uLmJpbmQobnVsbCwgJ2NvbnRyb2wnKSwgMFxuICBcbiAgc3RhdHNcblxuXG4jIFJldHVybnMgYSBzaW1wbGUge3VzYTogJ3ByZXNlbmNlJywgdXNzcjogJ2RvbWluYXRpb24nfVxuZ2V0UmVnaW9uU3RhdHVzID0gKHN0YXRzKS0+XG4gIF8ubWFwVmFsdWVzIHN0YXRzLCAoc3RhdCktPlxuICAgIHJldHVybiAnY29udHJvbCcgaWYgc3RhdC5jb250cm9sXG4gICAgcmV0dXJuICdkb21pbmF0aW9uJyBpZiBzdGF0LmRvbWluYXRpb25cbiAgICByZXR1cm4gJ3ByZXNlbmNlJyBpZiBzdGF0LnByZXNlbmNlXG4gICAgcmV0dXJuIGZhbHNlXG5cblxuXG5zdXBlclN0YXRzID0gKGlwcywgY291bnRyeUFyciwgcmVnaW9uQXJyKS0+XG4gIGNvdW50cmllcyA9IGdldElwU3RhdHMoaXBzLCBjb3VudHJ5QXJyKVxuICByZWdpb25zID0gZ2V0UmVnaW9uU3RhdHMoY291bnRyaWVzLCByZWdpb25BcnIpXG4gIHtjb3VudHJpZXMsIHJlZ2lvbnN9XG5cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkJ1xuXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogLT5cbiAgICBzdGF0ZSA9IEBnZXRJbml0aWFsU3RhdGUoKVxuICAgIEBzZXRTdGF0ZSBzdGF0ZVxuICAgIGlmIEBwcm9wcy5zdGF0ZUhpc3Rvcnkuc3RhdGVzLmxlbmd0aCA8IDFcbiAgICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkuYWRkIHN0YXRlLCBtc2c6ICdTZXR1cCdcblxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICBnYW1lU3RhdGUgPVxuICAgICAgZ2FtZTpcbiAgICAgICAgc2NvcmU6IDBcbiAgICAgICAgdHVybjogMFxuICAgICAgICByb3VuZDogMFxuICAgICAgICBkZWZjb246IDVcbiAgICAgICAgbWlsb3BzOiBbMCwwXVxuICAgICAgICBzcGFjZTogWzAsMF1cbiAgICAgIGlwczogXy5tYXBWYWx1ZXMgQHByb3BzLmNvdW50cmllcywgKGMpLT4gW2MudXNhLCBjLnVzc3JdXG5cbiAgICBpZiBAcHJvcHMuc3RhdGVIaXN0b3J5LnN0YXRlcy5sZW5ndGggPiAwXG4gICAgICBnYW1lU3RhdGUgPSBAcHJvcHMuc3RhdGVIaXN0b3J5LmdldEN1cnJlbnQoKS5zdGF0ZVxuICAgIGVsc2VcbiAgICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkuYWRkIGdhbWVTdGF0ZSwgbXNnOiAnU2V0dXAnXG5cbiAgICBnYW1lU3RhdGVcblxuXG4gIGhhbmRsZVZhbENsaWNrOiAoaWQsIGRpciwgc2lkZSktPlxuICAgIHN0YXRlID0gdGhpcy5zdGF0ZVxuICAgIGRlbHRhID0gaWYgZGlyID09ICdpbmMnIHRoZW4gMSBlbHNlIC0xXG4gICAgaWYgaWQgaW4gWydtaWxvcHMnLCAnc3BhY2UnXVxuICAgICAgaW5kZXggPSBpZiBzaWRlID09ICd1c2EnIHRoZW4gMCBlbHNlIDFcbiAgICAgIG9sZFZhbCA9IHN0YXRlLmdhbWVbaWRdW2luZGV4XVxuICAgICAgbmV3VmFsID0gbGlicy5yYW5nZWRHYW1lVmFsKGlkLCBzdGF0ZS5nYW1lW2lkXVtpbmRleF0gKyBkZWx0YSlcbiAgICAgIHN0YXRlLmdhbWVbaWRdW2luZGV4XSA9IG5ld1ZhbFxuICAgIGVsc2VcbiAgICAgIG9sZFZhbCA9IHN0YXRlLmdhbWVbaWRdXG4gICAgICBuZXdWYWwgPSBsaWJzLnJhbmdlZEdhbWVWYWwoaWQsIHN0YXRlLmdhbWVbaWRdICsgZGVsdGEpXG4gICAgICBzdGF0ZS5nYW1lW2lkXSA9IG5ld1ZhbFxuXG4gICAgbWV0YSA9XG4gICAgICB0eXBlOiAndmFsJ1xuICAgICAgc2lkZTogaWYgc2lkZT8gdGhlbiBzaWRlIGVsc2UgJydcbiAgICAgIGlkOiBpZFxuICAgICAgb2xkOiBvbGRWYWxcbiAgICAgIG5ldzogbmV3VmFsXG5cbiAgICBpZiBpZCA9PSAndHVybicgb3IgaWQgPT0gJ3JvdW5kJ1xuICAgICAgbWV0YS50eXBlID0gaWRcblxuICAgIEBzZXRTdGF0ZUhpc3Rvcnkgc3RhdGUsIG1ldGFcblxuXG4gICMgQWRkcyB0aGUgc3RhdGUgdG8gdGhlIGhpc3RvcnlcbiAgIyBUaGlzIGlzIHRvIGF2b2lkIGhhdmluZyB0byBkZWVwLWNoZWNrIHRoZSBzdGF0ZSBpbiBjb21wb25lbnRXaWxsVXBkYXRlXG4gIHNldFN0YXRlSGlzdG9yeTogKHN0YXRlLCBtZXRhKS0+XG4gICAgQHByb3BzLnN0YXRlSGlzdG9yeS5hZGQgc3RhdGUsIG1ldGFcbiAgICBAc2V0U3RhdGUgc3RhdGVcblxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogLT5cbiAgICAkKGRvY3VtZW50KS5vbiAna2V5cHJlc3MnLCBAa2V5cHJlc3NIYW5kbGVyXG5cblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogLT5cbiAgICAkKGRvY3VtZW50KS5vZmYgJ2tleXByZXNzJywgQGtleXByZXNzSGFuZGxlclxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IC0+XG5cbiAga2V5cHJlc3NIYW5kbGVyOiAoZXYpLT5cbiAgICBrQyA9IGV2LmtleUNvZGVcbiAgICAjIChaKSBVbmRvXG4gICAgaWYga0MgPT0gMTIyIG9yIGtDID09IDkwXG4gICAgICBwcmV2ID0gQHByb3BzLnN0YXRlSGlzdG9yeS51bmRvKClcbiAgICAgIEBzZXRTdGF0ZSBwcmV2LnN0YXRlXG4gICAgIyAoWSkgUmVkb1xuICAgIGlmIGtDID09IDEyMSBvciBrQyA9PSA4OVxuICAgICAgbmV4dCA9IEBwcm9wcy5zdGF0ZUhpc3RvcnkucmVkbygpXG4gICAgICBAc2V0U3RhdGUgbmV4dC5zdGF0ZVxuICAgICMgKEgpIEhpc3Rvcnkgc2hvdy9oaWRlXG4gICAgaWYga0MgPT0gMTA0IG9yIGtDID09IDcyXG4gICAgICAjIENvZGUgc21lbGwgLSBzdGF0ZUhpc3Rvcnkgc2hvdWxkbid0IGJlIGF3YXJlIG9mIGl0cyB2aXNpYmlsdHlcbiAgICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkudG9nZ2xlVmlzaWJsZSgpXG5cblxuICBoYW5kbGVJUENsaWNrOiAobm9kZUlkLCBzaWRlLCBkaXIpLT5cbiAgICBub2RlID0gXy5maW5kIEBwcm9wcy5ub2Rlcywge2lkOiBub2RlSWR9XG4gICAgIyBEb24ndCBsZXQgdGhlIG5vbi1jb3VudHJ5IG5vZGVzIGdldCB1cGRhdGVkIFxuICAgIGlmIG5vZGUucG9pbnRzIG9yIG5vZGUuc3VwZXJwb3dlciB0aGVuIHJldHVyblxuXG4gICAgc3RhdGUgPSBAc3RhdGVcblxuICAgIGluZGV4ID0gc3VwZXJwb3dlclRvSW5kZXggc2lkZVxuICAgIGlwID0gc3RhdGUuaXBzW25vZGVJZF1baW5kZXhdXG4gICAgZGVsdGEgPSBpZiBkaXIgPT0gJ3VwJyB0aGVuIDEgZWxzZSAtMVxuICAgIGlwICs9IGRlbHRhXG4gICAgaWYgaXAgPCAwIHRoZW4gcmV0dXJuXG5cbiAgICBzaWduID0gaWYgZGlyID09ICd1cCcgdGhlbiAnKycgZWxzZSAnLSdcbiAgICBzdGF0ZS5pcHNbbm9kZUlkXVtpbmRleF0gPSBpcFxuXG4gICAgQHNldFN0YXRlSGlzdG9yeSBzdGF0ZSxcbiAgICAgIHR5cGU6ICdpcCdcbiAgICAgIHNpZGU6IHNpZGVcbiAgICAgIGNvdW50cnk6IG5vZGVcbiAgICAgIGlwczogc3RhdGUuaXBzW25vZGVJZF1cbiAgICAgIGRlbHRhOlwiI3tzaWdufSN7TWF0aC5hYnMgZGVsdGF9XCJcblxuXG4gIHJlbmRlcjogLT5cbiAgICBub2RlUHJvcHMgPSBAcHJvcHMubm9kZVxuXG4gICAgc3VwZXJwb3dlclN0YXRzID0gc3VwZXJTdGF0cyBAc3RhdGUuaXBzLCBAcHJvcHMuY291bnRyaWVzLCBAcHJvcHMucmVnaW9uSW5mb05vZGVzXG5cbiAgICBsaW5rcyA9IEBwcm9wcy5saW5rcy5tYXAgKGxpbmtEYXRhKT0+XG4gICAgICBzb3VyY2UgPSBfLmZpbmQgQHByb3BzLmNvdW50cmllcywgaWQ6IGxpbmtEYXRhLnNvdXJjZVxuICAgICAgdGFyZ2V0ID0gXy5maW5kIEBwcm9wcy5jb3VudHJpZXMsIGlkOiBsaW5rRGF0YS50YXJnZXRcbiAgICAgIG5vZGVzID0ge3NvdXJjZSwgdGFyZ2V0fVxuXG4gICAgICBqVVNBID0gKGxpbmssIHRhcmcpPT5cbiAgICAgICAgamFwYW5VU0FCdW1wID0gMThcbiAgICAgICAgaWYgXy5jb250YWlucyhsaW5rLm5vZGVzLCAnVVNBJykgYW5kIF8uY29udGFpbnMobGluay5ub2RlcywgJ0phcGFuJylcbiAgICAgICAgICByZXR1cm4gbm9kZXNbdGFyZ10ueSAtIGphcGFuVVNBQnVtcFxuICAgICAgICBub2Rlc1t0YXJnXS55XG5cbiAgICAgIGxpbmtQcm9wcyA9XG4gICAgICAgIGtleTogXCJCb2FyZExpbmstI3tsaW5rRGF0YS5zb3VyY2V9LSN7bGlua0RhdGEudGFyZ2V0fVwiXG4gICAgICAgIHgxOiBzb3VyY2UueFxuICAgICAgICB5MTogalVTQShsaW5rRGF0YSwgJ3NvdXJjZScpXG4gICAgICAgIHgyOiB0YXJnZXQueFxuICAgICAgICB5MjogalVTQShsaW5rRGF0YSwgJ3RhcmdldCcpXG4gICAgICAgIGNsYXNzTmFtZTogY3hcbiAgICAgICAgICBcImxpbmtcIjogdHJ1ZVxuICAgICAgICAgIFwibGluay1jcm9zc1wiOiBsaW5rRGF0YS5jcm9zc0NvbnRpbmVudFxuICAgICAgICAgIFwibGluay11c2FcIjogXy5jb250YWlucyBsaW5rRGF0YS5ub2RlcywgJ1VTQSdcbiAgICAgICAgICBcImxpbmstdXNzclwiOiBfLmNvbnRhaW5zIGxpbmtEYXRhLm5vZGVzLCAnVVNTUidcblxuICAgICAgQm9hcmRMaW5rIGxpbmtQcm9wc1xuXG4gICAgbm9kZXMgPSBfLm1hcCBAcHJvcHMubm9kZXMsIChjb3VudHJ5RGF0YSk9PlxuICAgICAgcHJvcHMgPVxuICAgICAgICBub2RlOiBub2RlUHJvcHNcbiAgICAgICAga2V5OiBcIkJvYXJkTm9kZS0je2NvdW50cnlEYXRhLmlkfVwiXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoI3tjb3VudHJ5RGF0YS54fSwgI3tjb3VudHJ5RGF0YS55fSlcIlxuICAgICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMubm9kZS5oZWlnaHRcbiAgICAgICAgZ3V0dGVyOiBAcHJvcHMubm9kZS5ndXR0ZXJcbiAgICAgICAgdGl0bGVIZWlnaHQ6IEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0XG4gICAgICAgIHRpdGxlRm9udFNpemU6IEBwcm9wcy5ub2RlLnRpdGxlRm9udFNpemVcbiAgICAgICAgaGFuZGxlSVBDbGljazogQGhhbmRsZUlQQ2xpY2tcblxuICAgICAgXy5hc3NpZ24gcHJvcHMsIGNvdW50cnlEYXRhXG5cbiAgICAgIGlmKHByb3BzLnN1cGVycG93ZXIpXG4gICAgICAgIHByb3BzLnN0YXRzID1cbiAgICAgICAgICBjb3VudHJpZXM6IF8ucGljayBzdXBlcnBvd2VyU3RhdHMuY291bnRyaWVzW3Byb3BzLm5hbWUudG9Mb3dlckNhc2UoKV0sIFsnYnRsJywgJ25vbicsICd0b3RhbCddXG4gICAgICAgICAgcmVnaW9uczogXy5waWNrIHN1cGVycG93ZXJTdGF0cy5yZWdpb25zW3Byb3BzLm5hbWUudG9Mb3dlckNhc2UoKV0sIFsncHJlc2VuY2UnLCAnZG9taW5hdGlvbicsICdjb250cm9sJ11cblxuICAgICAgaWYocHJvcHMucG9pbnRzKVxuICAgICAgICBwcm9wcy5zdGF0cyA9IGdldFJlZ2lvblN0YXR1c1xuICAgICAgICAgIHVzYTogc3VwZXJwb3dlclN0YXRzLnJlZ2lvbnMudXNhW3Byb3BzLmlkXVxuICAgICAgICAgIHVzc3I6IHN1cGVycG93ZXJTdGF0cy5yZWdpb25zLnVzc3JbcHJvcHMuaWRdXG4gICAgICBcbiAgICAgIGNvdW50cnlJZCA9IGNvdW50cnlEYXRhLmlkXG4gICAgICBpZiBjb3VudHJ5SWQgb2YgQHN0YXRlLmlwc1xuICAgICAgICBwcm9wcy51c2EgPSBAc3RhdGUuaXBzW2NvdW50cnlJZF1bMF1cbiAgICAgICAgcHJvcHMudXNzciA9IEBzdGF0ZS5pcHNbY291bnRyeUlkXVsxXVxuXG4gICAgICBCb2FyZE5vZGUgcHJvcHNcblxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ0JvYXJkJywgW1xuICAgICAgUi5zdmcgd2lkdGg6QHByb3BzLndpZHRoLCBoZWlnaHQ6QHByb3BzLmhlaWdodCwgcmVmOiAnc3ZnJywgW1xuICAgICAgICBsaW5rc1xuICAgICAgICBub2Rlc1xuICAgICAgXVxuICAgICAgQm9hcmRTdGF0dXMgXy5hc3NpZ24ge2hhbmRsZVZhbENsaWNrOiBAaGFuZGxlVmFsQ2xpY2t9LCBAc3RhdGUuZ2FtZVxuICAgIF1cbiIsIlIgPSBSZWFjdC5ET01cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZExpbmsnXG4gIHJlbmRlcjogLT5cbiAgICBSLmxpbmUgQHByb3BzXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbkJvYXJkTm9kZUlQID0gcmVxdWlyZSAnLi9Cb2FyZE5vZGVJUCdcbiBcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZE5vZGUnXG5cbiAgaGFuZGxlSVBDbGljazogKHNpZGUsIGRpciktPlxuICAgIEBwcm9wcy5oYW5kbGVJUENsaWNrIEBwcm9wcy5pZCwgc2lkZSwgZGlyXG5cbiAgcmVuZGVyOiAtPlxuICAgIGNvbnRyb2xVU0EgPSAoQHByb3BzLnVzYSAtIEBwcm9wcy51c3NyKSA+PSBAcHJvcHMuc3RhYlxuICAgIGNvbnRyb2xVU1NSID0gKEBwcm9wcy51c3NyIC0gQHByb3BzLnVzYSkgPj0gQHByb3BzLnN0YWJcblxuICAgIGdBdHRycyA9XG4gICAgICB0cmFuc2Zvcm06IEBwcm9wcy50cmFuc2Zvcm1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlLSN7QHByb3BzLmdyb3VwfSBcIiArIGN4XG4gICAgICAgICdub2RlJzogdHJ1ZVxuICAgICAgICAnbm9kZS1idGwnOiBAcHJvcHMuYnRsID09IDFcbiAgICAgICAgJ25vZGUtbm9uYnRsJzogQHByb3BzLmJ0bCAhPSAxXG4gICAgICAgICdub2RlLXJlZ2lvbi1pbmZvJzogQHByb3BzLnJlZ2lvbkluZm9cbiAgICAgICAgJ25vZGUtdXNhLWNvbnRyb2wnOiBjb250cm9sVVNBXG4gICAgICAgICdub2RlLXVzc3ItY29udHJvbCc6IGNvbnRyb2xVU1NSXG4gICAgICAgICdub2RlLXJlZ2lvbi1pbmZvJzogQHByb3BzLnJlZ2lvbkluZm9cblxuICAgIHBvbHlDbGFzc05hbWUgPVxuICAgICAgICBpZiBAcHJvcHMucmVnaW9uSW5mb1xuICAgICAgICAgICdoaWRlJ1xuICAgICAgICBlbHNlIHN3aXRjaCBAcHJvcHMuZ3JvdXBcbiAgICAgICAgICB3aGVuICdldScgdGhlbiAnbm9kZS1iZy1ldSdcbiAgICAgICAgICB3aGVuICdzZWEnIHRoZW4gJ25vZGUtYmctc2VhJ1xuICAgICAgICAgIGVsc2UgJ2hpZGUnXG5cbiAgICB0aXRsZVRleHRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IFwibm9kZS10aXRsZS10ZXh0XCJcbiAgICAgIHg6IGlmIEBwcm9wcy5yZWdpb25JbmZvIG9yIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICAgICAgICAwXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgLUBwcm9wcy5ub2RlLndpZHRoLzIgKyAyXG4gICAgICB5OiBpZiBAcHJvcHMucmVnaW9uSW5mb1xuICAgICAgICAgICAgLTZcbiAgICAgICAgICBlbHNlIGlmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICAgICAgICA2XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgLShAcHJvcHMubm9kZS5oZWlnaHQvMikgKyBAcHJvcHMubm9kZS50aXRsZUZvbnRTaXplXG5cbiAgICBzdGFiVGV4dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlLXN0YWJcIlxuICAgICAgeDogKEBwcm9wcy5ub2RlLndpZHRoLzIpIC0gMTBcbiAgICAgIHk6IC0oQHByb3BzLm5vZGUuaGVpZ2h0LzIpICsgQHByb3BzLm5vZGUudGl0bGVGb250U2l6ZSArIDFcbiAgICBzdGFiVGV4dCA9IEBwcm9wcy5zdGFiXG4gICAgaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgIHN0YWJUZXh0ID0gW1xuICAgICAgICBSLnRzcGFuIHt9LCBcIkJhdHRsZTogXCJcbiAgICAgICAgUi50c3BhbiBjbGFzc05hbWU6J251bUJ0bCcsIEBwcm9wcy5zdGF0cy5jb3VudHJpZXMuYnRsXG4gICAgICBdXG4gICAgICBzdGFiVGV4dEF0dHJzLnggPSAwXG4gICAgICBzdGFiVGV4dEF0dHJzLnkgKz0gMVxuXG5cblxuICAgIHJlZ2lvblRleHRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IGlmIEBwcm9wcy5wb2ludHMgb3IgQHByb3BzLnN1cGVycG93ZXIgdGhlbiAnbm9kZS10ZXh0JyBlbHNlICdoaWRlJ1xuICAgICAgeDogMFxuICAgICAgeTogMTBcbiAgICAgIHdpZHRoOiBAcHJvcHMubm9kZS53aWR0aFxuXG5cbiAgICByZWdpb25UZXh0ID0gJydcbiAgICBpZiBAcHJvcHMucG9pbnRzXG4gICAgICByZWdpb25DeCA9IChrZXkpPT5cbiAgICAgICAgb2JqID1cbiAgICAgICAgICB1c2E6IEBwcm9wcy5zdGF0cy51c2EgPT0ga2V5XG4gICAgICAgICAgdXNzcjogQHByb3BzLnN0YXRzLnVzc3IgPT0ga2V5XG4gICAgICAgICAgYm90aDogQHByb3BzLnN0YXRzLnVzc3IgPT0ga2V5IGFuZCBAcHJvcHMuc3RhdHMudXNhID09IGtleVxuICAgICAgICBvYmpba2V5XSA9IHRydWVcbiAgICAgICAgY3ggb2JqXG4gICAgICAgIFxuICAgICAgY0NOID0gcmVnaW9uQ3ggJ2NvbnRyb2wnXG4gICAgICBkQ04gPSByZWdpb25DeCAnZG9taW5hdGlvbidcbiAgICAgIHBDTiA9IHJlZ2lvbkN4ICdwcmVzZW5jZSdcblxuICAgICAgcmVnaW9uVGV4dCA9IFtcbiAgICAgICAgUi50c3BhbiBjbGFzc05hbWU6cENOLCBAcHJvcHMucG9pbnRzWzBdXG4gICAgICAgIFIudHNwYW4gY2xhc3NOYW1lOidibGFuaycsIFwiIFwiXG4gICAgICAgIFIudHNwYW4gY2xhc3NOYW1lOmRDTiwgQHByb3BzLnBvaW50c1sxXVxuICAgICAgICBSLnRzcGFuIGNsYXNzTmFtZTonYmxhbmsnLCBcIiBcIlxuICAgICAgICBSLnRzcGFuIGNsYXNzTmFtZTpjQ04sIEBwcm9wcy5wb2ludHNbMl1cbiAgICAgIF1cblxuICAgIGlmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICBwc3IgPSBAcHJvcHMuc3RhdHMucmVnaW9uc1xuICAgICAgcmVnaW9uVGV4dCA9IFtwc3IucHJlc2VuY2UsIHBzci5kb21pbmF0aW9uLCBwc3IuY29udHJvbF0uam9pbiAnICdcbiAgICAgIHJlZ2lvblRleHRBdHRycy55ID0gMjBcblxuICAgIFIuZyBnQXR0cnMsIFtcbiAgICAgICMgTm9kZSBiZ1xuICAgICAgUi5yZWN0XG4gICAgICAgIGNsYXNzTmFtZTogJ25vZGUtYmcnXG4gICAgICAgIHdpZHRoOiBAcHJvcHMud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMuaGVpZ2h0XG4gICAgICAgIHRpdGxlOiBNYXRoLnJhbmRvbSgpXG4gICAgICAgIHg6IC1AcHJvcHMud2lkdGgvMlxuICAgICAgICB5OiAtQHByb3BzLmhlaWdodC8yXG5cbiAgICAgIFIucG9seWdvblxuICAgICAgICAgIGNsYXNzTmFtZTogcG9seUNsYXNzTmFtZVxuICAgICAgICAgIHBvaW50czogW1xuICAgICAgICAgICAgICBcIiN7LUBwcm9wcy53aWR0aC8yfSwje0Bwcm9wcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgICBcIiN7QHByb3BzLndpZHRoLzJ9LCN7QHByb3BzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICAgIFwiI3tAcHJvcHMud2lkdGgvMn0sI3stQHByb3BzLmhlaWdodC8yICsgQHByb3BzLnRpdGxlSGVpZ2h0fVwiXG4gICAgICAgICAgICBdLmpvaW4gJyAnXG4gICAgICAgICAgICAgXG4gICAgICBSLnJlY3RcbiAgICAgICAgY2xhc3NOYW1lOiAnbm9kZS10aXRsZS1iZydcbiAgICAgICAgd2lkdGg6IEBwcm9wcy53aWR0aFxuICAgICAgICBoZWlnaHQ6IEBwcm9wcy50aXRsZUhlaWdodFxuICAgICAgICB4OiAtQHByb3BzLndpZHRoLzJcbiAgICAgICAgeTogLUBwcm9wcy5oZWlnaHQvMlxuXG4gICAgICBSLmxpbmVcbiAgICAgICAgY2xhc3NOYW1lOiAnbm9kZS1saW5lJ1xuICAgICAgICB3aWR0aDogQHByb3BzLndpZHRoXG4gICAgICAgIHgxOiAtQHByb3BzLndpZHRoLzJcbiAgICAgICAgeTE6IC1AcHJvcHMuaGVpZ2h0LzIgKyBAcHJvcHMubm9kZS50aXRsZUhlaWdodFxuICAgICAgICB4MjogQHByb3BzLndpZHRoLzJcbiAgICAgICAgeTI6IC1AcHJvcHMuaGVpZ2h0LzIgKyBAcHJvcHMubm9kZS50aXRsZUhlaWdodFxuXG4gICAgICBSLnRleHQgdGl0bGVUZXh0QXR0cnMsIEBwcm9wcy5zaG9ydG5hbWVcbiAgICAgIFIudGV4dCBzdGFiVGV4dEF0dHJzLCBzdGFiVGV4dFxuICAgICAgUi50ZXh0IHJlZ2lvblRleHRBdHRycywgcmVnaW9uVGV4dFxuXG4gICAgICBCb2FyZE5vZGVJUCBub2RlOiBAcHJvcHMubm9kZSwgc2lkZTogJ3VzYScsIGlwOiBAcHJvcHMudXNhLCBjdHJsOiBjb250cm9sVVNBLCBoYW5kbGVJUENsaWNrOiBAaGFuZGxlSVBDbGljaywgcmVmOiAnaXB1c2EnXG4gICAgICBCb2FyZE5vZGVJUCBub2RlOiBAcHJvcHMubm9kZSwgc2lkZTogJ3Vzc3InLCBpcDogQHByb3BzLnVzc3IsIGN0cmw6IGNvbnRyb2xVU1NSLCBoYW5kbGVJUENsaWNrOiBAaGFuZGxlSVBDbGljaywgcmVmOiAnaXB1c3NyJ1xuICAgIF1cblxuXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZE5vZGVJUCdcblxuICBoYW5kbGVJUENsaWNrOiAoZGlyLCBldiktPlxuICAgIEBwcm9wcy5oYW5kbGVJUENsaWNrIEBwcm9wcy5zaWRlLCBkaXJcblxuICByZW5kZXI6IC0+XG4gICAgcG9zaXRpb24gPSBpZiBAcHJvcHMuc2lkZSA9PSAndXNhJyB0aGVuIDEgZWxzZSAwXG5cbiAgICBoaWRlSVAgPSBpZiBAcHJvcHMuaXAgPT0gMCB0aGVuICdoaWRlJyBlbHNlICcnXG5cbiAgICBnQXR0cnMgPVxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgjey1AcHJvcHMubm9kZS53aWR0aC8yICogcG9zaXRpb259LCAjey1AcHJvcHMubm9kZS50aXRsZUhlaWdodC8yIC0gMX0pXCJcbiAgICAgIHdpZHRoOiBAcHJvcHMubm9kZS53aWR0aC8yXG4gICAgICBoZWlnaHQ6IEBwcm9wcy5ub2RlLmhlaWdodCAtIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0XG4gICAgICBjbGFzc05hbWU6IFwibm9kZS1pcC0je0Bwcm9wcy5zaWRlfVwiXG5cbiAgICB0ZXh0QXR0cnMgPVxuICAgICAgeDogQHByb3BzLm5vZGUud2lkdGgvNFxuICAgICAgeTogQHByb3BzLm5vZGUuaGVpZ2h0LzIgLSAxXG4gICAgICBjbGFzc05hbWU6IGhpZGVJUFxuXG4gICAgaXBDbGlja0hlaWdodCA9IChAcHJvcHMubm9kZS5oZWlnaHQgLSBAcHJvcHMubm9kZS50aXRsZUhlaWdodCkgLyAyXG5cbiAgICBSLmcgZ0F0dHJzLCBbXG4gICAgICBSLnJlY3RcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMubm9kZS5oZWlnaHQgLSBAcHJvcHMubm9kZS50aXRsZUhlaWdodFxuICAgICAgICBjbGFzc05hbWU6IFwibm9kZS1pcC1iZy0je0Bwcm9wcy5zaWRlfSAje2hpZGVJUH1cIlxuICAgICAgUi50ZXh0IHRleHRBdHRycywgQHByb3BzLmlwXG4gICAgICBSLnJlY3RcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgICAgaGVpZ2h0OiBpcENsaWNrSGVpZ2h0XG4gICAgICAgIGNsYXNzTmFtZTogXCJub2RlLWlwLWNsaWNrXCJcbiAgICAgICAgb25DbGljazogQGhhbmRsZUlQQ2xpY2suYmluZCB0aGlzLCAndXAnXG4gICAgICBSLnJlY3RcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgICAgaGVpZ2h0OiBpcENsaWNrSGVpZ2h0XG4gICAgICAgIHk6IGlwQ2xpY2tIZWlnaHRcbiAgICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtaXAtY2xpY2tcIlxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlSVBDbGljay5iaW5kIHRoaXMsICdkbidcbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5nYW1lVmFsRGlzcGxheSA9IHJlcXVpcmUgJy4uL2xpYnMvZ2FtZVZhbERpc3BsYXknXG51cHBlckZpcnN0ID0gcmVxdWlyZSAnLi4vbGlicy91cHBlckZpcnN0J1xuXG5cbnNjb3JlU2lkZSA9IChzY29yZSktPlxuICBpZiBzY29yZSA8IDBcbiAgICByZXR1cm4gJ3Vzc3InXG4gIGlmIHNjb3JlID4gMFxuICAgIHJldHVybiAndXNhJ1xuICAnJ1xuXG5zaEVudHJ5ID0gKHNoKS0+XG4gIHJvdW5kU2lkZSA9IGlmIHNoLnN0YXRlLmdhbWUucm91bmQgJSAyID09IDAgdGhlbiAndXNhJyBlbHNlICd1c3NyJ1xuICBpZiBzaC5zdGF0ZS5nYW1lLnJvdW5kID09IDBcbiAgICByb3VuZFNpZGUgPSAnJ1xuXG4gIGlmIHNoLnN0YXRlLmdhbWUudHVybiA+IDBcbiAgICB0dXJuID0gXCJUI3tnYW1lVmFsRGlzcGxheSgndHVybicsIHNoLnN0YXRlLmdhbWUudHVybil9LVwiXG4gICAgaWYgc2guc3RhdGUuZ2FtZS5yb3VuZCAhPSAwXG4gICAgICByb3VuZCA9IFwiUiN7Z2FtZVZhbERpc3BsYXkoJ3JvdW5kJywgc2guc3RhdGUuZ2FtZS5yb3VuZCl9XCJcbiAgICBlbHNlXG4gICAgICByb3VuZCA9IFwiSFwiXG4gIGVsc2VcbiAgICB0dXJuID0gXCJTRVRVUFwiXG4gICAgcm91bmQgPSAnJ1xuXG4gIHR1cm5Sb3VuZCA9XG4gICAgUi5zcGFuIGNsYXNzTmFtZTogJ3R1cm5Sb3VuZCcsIFtcbiAgICAgIHR1cm5cbiAgICAgIFIuc3BhbiBjbGFzc05hbWU6IHJvdW5kU2lkZSwgcm91bmRcbiAgICBdXG4gIFxuXG4gIHNoU2lkZSA9IHNoLm1ldGEuc2lkZVxuXG4gIHN3aXRjaCBzaC5tZXRhLnR5cGVcbiAgICB3aGVuICdpcCdcbiAgICAgIFtpcFVTQSwgaXBVU1NSXSA9IHNoLm1ldGEuaXBzXG4gICAgICBjb3VudHJ5ID0gc2gubWV0YS5jb3VudHJ5XG4gICAgICBjdHJsVVNBID0gaWYgKGlwVVNBIC0gaXBVU1NSKSA+PSBjb3VudHJ5LnN0YWIgdGhlbiAnY29udHJvbCcgZWxzZSAnJ1xuICAgICAgY3RybFVTU1IgPSBpZiAoaXBVU1NSIC0gaXBVU0EpID49IGNvdW50cnkuc3RhYiB0aGVuICdjb250cm9sJyBlbHNlICcnXG4gICAgICBbXG4gICAgICAgIHR1cm5Sb3VuZFxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcIiN7c2gubWV0YS5zaWRlfSBpcFwiLCBzaC5tZXRhLmRlbHRhXG4gICAgICAgIFwiIGluICN7c2gubWV0YS5jb3VudHJ5LnNob3J0bmFtZX0gKFwiXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwidXNhICN7Y3RybFVTQX1cIiwgc2gubWV0YS5pcHNbMF1cbiAgICAgICAgXCIvXCJcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJ1c3NyICN7Y3RybFVTU1J9XCIsIHNoLm1ldGEuaXBzWzFdXG4gICAgICAgIFwiKVwiXG4gICAgICBdXG4gICAgd2hlbiAndmFsJ1xuICAgICAgb2xkU2lkZSA9IG5ld1NpZGUgPSBzaC5tZXRhLnNpZGVcblxuICAgICAgaWYgc2gubWV0YS5pZCA9PSAnc2NvcmUnXG4gICAgICAgIG9sZFNpZGUgPSBzY29yZVNpZGUgc2gubWV0YS5vbGRcbiAgICAgICAgbmV3U2lkZSA9IHNjb3JlU2lkZSBzaC5tZXRhLm5ld1xuXG4gICAgICBSLnNwYW4ge30sIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIFwiI3t1cHBlckZpcnN0KHNoLm1ldGEuaWQpfSBcIlxuICAgICAgICBSLnN0cm9uZyBjbGFzc05hbWU6IG9sZFNpZGUsIFwiI3tnYW1lVmFsRGlzcGxheShzaC5tZXRhLmlkLCBzaC5tZXRhLm9sZCwgJ2xvbmcnKX0gXCJcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2Fycm93JywgJ+KelCAnXG4gICAgICAgIFIuc3Ryb25nIGNsYXNzTmFtZTogbmV3U2lkZSwgXCIje2dhbWVWYWxEaXNwbGF5KHNoLm1ldGEuaWQsIHNoLm1ldGEubmV3LCAnbG9uZycpfVwiXG4gICAgICBdXG4gICAgd2hlbiAncm91bmQnXG4gICAgICBzaWRlID0gcm91bmRTaWRlXG4gICAgICByb3VuZFRpdGxlID0gaWYgc2guc3RhdGUuZ2FtZS5yb3VuZCA9PSAwXG4gICAgICAgICAgXCJIZWFkbGluZSBQaGFzZVwiXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBcIiN7c2lkZS50b1VwcGVyQ2FzZSgpfSBBY3Rpb24gUm91bmQgI3tnYW1lVmFsRGlzcGxheShzaC5tZXRhLmlkLCBzaC5tZXRhLm5ldywgJ2xvbmcnKX1cIlxuICAgICAgICAgIFxuICAgICAgI3NpZGUgPSBbJ3Vzc3InLCAndXNhJ11bKHNoLnN0YXRlLmdhbWUucm91bmQgKyAxKSAlIDJdXG4gICAgICBSLnNwYW4ge30sIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IHNpZGUsIHJvdW5kVGl0bGVcbiAgICAgIF1cbiAgICB3aGVuICd0dXJuJ1xuICAgICAgZGlzcCA9IFwiI3tnYW1lVmFsRGlzcGxheShzaC5tZXRhLmlkLCBzaC5tZXRhLm5ldywgJ2xvbmcnKX1cIlxuICAgICAgaWYgc2guc3RhdGUuZ2FtZS50dXJuICE9IDBcbiAgICAgICAgZGlzcCA9IFwiVHVybiAje2Rpc3B9XCJcbiAgICAgIFIuc3BhbiB7fSwgW1xuICAgICAgICB0dXJuUm91bmRcbiAgICAgICAgZGlzcFxuICAgICAgXVxuICAgIGVsc2VcbiAgICAgIHNoLm1ldGEubXNnXG5cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgcjogMFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiAtPlxuICAgIEBwcm9wcy5zdGF0ZUhpc3Rvcnkub24gJ3VwZGF0ZScsIEBmb3JjZVVwZGF0ZS5iaW5kIHRoaXNcblxuICAgICNmbiA9ICgpPT5cbiAgICAgICNAc2V0U3RhdGUgcjogTWF0aC5yYW5kb20oKVxuICAgICAgI3NldFRpbWVvdXQgZm4sIDIwMDBcbiAgICAjZm4oKVxuICAgIFxuICByZW5kZXI6IC0+XG4gICAgc3RhdGVDb21wb25lbnRzID0gQHByb3BzLnN0YXRlSGlzdG9yeS5zdGF0ZXMubWFwIChzaCwgaW5kZXgpPT5cbiAgICAgIGF0dHJzID1cbiAgICAgICAgY2xhc3NOYW1lOiBjeFxuICAgICAgICAgICdTdGF0ZUhpc3RvcnktbGF0ZXN0JzogQHByb3BzLnN0YXRlSGlzdG9yeS5sYXRlc3QgPT0gaW5kZXhcbiAgICAgICAgICAnU3RhdGVIaXN0b3J5LWN1cnJlbnQnOiBAcHJvcHMuc3RhdGVIaXN0b3J5LmN1cnJlbnQgPT0gaW5kZXhcbiAgICAgIFIubGkgYXR0cnMsIHNoRW50cnkoc2gpXG5cblxuICAgIGRpdkF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogY3hcbiAgICAgICAgJ1N0YXRlSGlzdG9yeSc6IHRydWVcbiAgICAgICAgJ2luJzogQHByb3BzLnN0YXRlSGlzdG9yeS5zaG93XG5cbiAgICBSLmRpdiBkaXZBdHRycywgW1xuICAgICAgUi5oMyB7fSwgXCJBY3Rpb24gSGlzdG9yeVwiXG4gICAgICBSLnVsIGNsYXNzTmFtZTogJ2xpc3QtdW5zdHlsZWQnLCBzdGF0ZUNvbXBvbmVudHMucmV2ZXJzZSgpXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuQm9hcmRTdGF0dXNWYWx1ZSA9IHJlcXVpcmUgJy4vQm9hcmRTdGF0dXNWYWx1ZSdcbkRpZSA9IHJlcXVpcmUgJy4vRGllJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRTdGF0dXMnXG4gIGhhbmRsZUJvdGhDbGljazogLT5cbiAgICBfLmVhY2ggQHJlZnMsIChyZWYpLT4gcmVmLnJvbGxEaWUoKVxuICByZW5kZXI6IC0+XG4gIFxuICAgIHNjb3JlU2lkZSA9ICcnXG4gICAgaWYgQHByb3BzLnNjb3JlICE9IDBcbiAgICAgIHNjb3JlU2lkZSA9IGlmIEBwcm9wcy5zY29yZSA8IDAgdGhlbiAndXNzcicgZWxzZSAndXNhJ1xuXG4gICAgIyBSb3VuZDogMCBpcyBoZWFkbGluZSwgb2RkcyBhcmUgVVNTUiwgZXZlbnMgYXJlIFVTQVxuICAgIHJvdW5kID0gaWYgQHByb3BzLnJvdW5kID09IDAgdGhlbiAnSCcgZWxzZSBNYXRoLmNlaWwoQHByb3BzLnJvdW5kIC8gMilcbiAgICByb3VuZFNpZGUgPSAnJ1xuICAgIGlmIEBwcm9wcy5yb3VuZCAhPSAwXG4gICAgICByb3VuZFNpZGUgPSBpZiBAcHJvcHMucm91bmQgJSAyID09IDEgdGhlbiAndXNzcicgZWxzZSAndXNhJ1xuXG4gICAgdHVybiA9IHN3aXRjaCBAcHJvcHMudHVyblxuICAgICAgd2hlbiAwIHRoZW4gJ1MnXG4gICAgICB3aGVuIDExIHRoZW4gJ0UnXG4gICAgICBlbHNlIEBwcm9wcy50dXJuXG5cbiAgICAjIFNob3J0aGFuZCBmb3IgdGhlIGNvbXBvbmVudHNcbiAgICBzdGF0dXNWYWx1ZSA9IChpZD0nJywgdGl0bGU9JycsIHZhbD0nJywgc2lkZT0nJyk9PlxuICAgICAgQm9hcmRTdGF0dXNWYWx1ZSBfLmFzc2lnbiB7aWQsIHRpdGxlLCB2YWwsIHNpZGV9LCBoYW5kbGVWYWxDbGljazogQHByb3BzLmhhbmRsZVZhbENsaWNrXG5cblxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ0JvYXJkU3RhdHVzJywgW1xuICAgICAgUi5kbCBjbGFzc05hbWU6ICdjb2wnLCBbXG4gICAgICAgIHN0YXR1c1ZhbHVlICdzY29yZScsICdTY29yZScsIE1hdGguYWJzKEBwcm9wcy5zY29yZSksIHNjb3JlU2lkZVxuICAgICAgICBzdGF0dXNWYWx1ZSAnZGVmY29uJywgJ0RlZmNvbicsIEBwcm9wcy5kZWZjb25cbiAgICAgICAgc3RhdHVzVmFsdWUgJ21pbG9wcycsICdNaWxPcHMnLCBAcHJvcHMubWlsb3BzWzBdLCAndXNhJ1xuICAgICAgICBzdGF0dXNWYWx1ZSAnbWlsb3BzJywgJ01pbE9wcycsIEBwcm9wcy5taWxvcHNbMV0sICd1c3NyJ1xuICAgICAgXVxuICAgICAgUi5kbCBjbGFzc05hbWU6ICdjb2wnLCBbXG4gICAgICAgIHN0YXR1c1ZhbHVlICd0dXJuJywgJ1R1cm4nLCB0dXJuXG4gICAgICAgIHN0YXR1c1ZhbHVlICdyb3VuZCcsICdSb3VuZCcsIHJvdW5kLCByb3VuZFNpZGVcbiAgICAgICAgc3RhdHVzVmFsdWUgJ3NwYWNlJywgJ1NwYWNlJywgQHByb3BzLnNwYWNlWzBdLCAndXNhJ1xuICAgICAgICBzdGF0dXNWYWx1ZSAnc3BhY2UnLCAnU3BhY2UnLCBAcHJvcHMuc3BhY2VbMV0sICd1c3NyJ1xuICAgICAgXVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnZGljZScsIFtcbiAgICAgICAgRGllIHJlZjogJ2RpZS11c2EnLCBzaWRlOiAndXNhJ1xuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdyb2xsLWJvdGgnLCBvbkNsaWNrOiBAaGFuZGxlQm90aENsaWNrLCAnUm9sbCBkaWNlJ1xuICAgICAgICBEaWUgcmVmOiAnZGllLXVzc3InLCBzaWRlOiAndXNzcidcbiAgICAgIF1cbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRTdGF0dXNWYWx1ZSdcbiAgcmVuZGVyOiAtPlxuICAgIHNpZGVDbGFzcyA9IHN3aXRjaCBAcHJvcHMuc2lkZVxuICAgICAgd2hlbiAndXNhJywgJ3Vzc3InIHRoZW4gQHByb3BzLnNpZGVcbiAgICAgIGVsc2UgJydcblxuICAgIGRlY0F0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogJ2RlYydcbiAgICAgIG9uQ2xpY2s6IEBwcm9wcy5oYW5kbGVWYWxDbGljay5iaW5kKG51bGwsIEBwcm9wcy5pZCwgJ2RlYycsIEBwcm9wcy5zaWRlKVxuICAgIGluY0F0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogJ2luYycsXG4gICAgICBvbkNsaWNrOiBAcHJvcHMuaGFuZGxlVmFsQ2xpY2suYmluZChudWxsLCBAcHJvcHMuaWQsICdpbmMnLCBAcHJvcHMuc2lkZSlcblxuICAgIFIuZGl2IHt9LCBbXG4gICAgICBSLmR0IHt9LCBAcHJvcHMudGl0bGVcbiAgICAgIFIuZGQgY2xhc3NOYW1lOiBcIlN0YXR1c1ZhbHVlICN7c2lkZUNsYXNzfVwiLCBbXG4gICAgICAgIFIuc3BhbiBkZWNBdHRycywgJ+KXgCdcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3ZhbCcsIEBwcm9wcy52YWxcbiAgICAgICAgUi5zcGFuIGluY0F0dHJzLCAn4pa2J1xuICAgICAgXVxuICAgIF1cblxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuY2FyZFN0YWdlcyA9IDE6J0VBUkxZJywgMjonTUlEJywgMzonTEFURSdcblxuY2FyZENsYXNzTmFtZSA9IChwcm9wcykgLT5cbiAgb3duZXJDbGFzcyA9IFwib3duZXItI3twcm9wcy5vd25lcn1cIlxuICBjbGFzc2VzID0gY3hcbiAgICAnYXNpYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQXNpYSBTY29yaW5nJ1xuICAgICdldXJvcGVTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0V1cm9wZSBTY29yaW5nJ1xuICAgICdtaWRkbGVFYXN0U2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdNaWRkbGUgRWFzdCBTY29yaW5nJ1xuICAgICdjZW50cmFsQW1lcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQ2VudHJhbCBBbWVyaWNhIFNjb3JpbmcnXG4gICAgJ3NvdXRoZWFzdEFzaWFTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ1NvdXRoZWFzdCBBc2lhIFNjb3JpbmcqJ1xuICAgICdhZnJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0FmcmljYSBTY29yaW5nJ1xuICAgICdzb3V0aEFtZXJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ1NvdXRoIEFtZXJpY2EgU2NvcmluZydcbiAgICAnb25nb2luZyc6IHByb3BzLm9uZ29pbmdcblxuICBvd25lckNsYXNzICsgJyAnICsgY2xhc3Nlc1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ2FyZCdcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogY2FyZENsYXNzTmFtZShAcHJvcHMpICsgJyBjYXJkJywgW1xuICAgICAgUi5hIHtjbGFzc05hbWU6ICdjYXJkLXRpdGxlLWhvbGRlcicsIGhyZWY6IFwiIy9jYXJkLyN7QHByb3BzLmlkfVwifSwgW1xuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnY2FyZC1zdGFnZScsIGNhcmRTdGFnZXNbQHByb3BzLnN0YWdlXVxuICAgICAgICBSLmg0IGNsYXNzTmFtZTogJ2NhcmQtb3BzJywgaWYgQHByb3BzLm9wcyA8IDEgdGhlbiBcIlNcIiBlbHNlIEBwcm9wcy5vcHNcbiAgICAgICAgUi5oNCBjbGFzc05hbWU6ICdjYXJkLXRpdGxlJywgW1xuICAgICAgICAgIFwiI3tAcHJvcHMudGl0bGV9IFwiXG4gICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2NhcmQtaWQnLCBcIiMje0Bwcm9wcy5pZH1cIlxuICAgICAgICBdXG4gICAgICBdXG4gICAgICBSLnAgY2xhc3NOYW1lOiAnY2FyZC10ZXh0JywgQHByb3BzLnRleHRcbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbkNhcmQgPSByZXF1aXJlICcuL0NhcmQnXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdDYXJkTGlzdCdcbiAgcmVuZGVyOiAtPlxuICAgIGNsYXNzTmFtZSA9IGN4XG4gICAgICAnY2FyZExpc3QnOiB0cnVlXG4gICAgICAnY2FyZExpc3RGdWxsJzogQHByb3BzLmZ1bGxUZXh0XG4gICAgUi5kaXYge2NsYXNzTmFtZX0sIEBwcm9wcy5jYXJkcy5tYXAgKGVsKSA9PlxuICAgICAgQ2FyZCBfLm1lcmdlIGVsLCBzaG93RnVsbFRleHQ6IEBwcm9wcy5mdWxsVGV4dFxuIiwiUiA9IFJlYWN0LkRPTVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnRGllJ1xuXG4gIGdldERlZmF1bHRQcm9wczogLT5cbiAgICByb2xsczogMzBcblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgdmFsOiAxXG4gICAgcm9sbGluZzogZmFsc2VcbiAgICByb2xsczogQHByb3BzLnJvbGxzXG5cbiAgY2xpY2tEaWU6IC0+XG4gICAgQHJvbGxEaWUoKVxuXG4gIHJvbGxEaWU6IC0+XG4gICAgcmV0dXJuIGlmIEBzdGF0ZS5yb2xsaW5nXG4gICAgQGl0ZXJhdGVSb2xsKClcblxuICBpdGVyYXRlUm9sbDogLT5cbiAgICBpZiBub3QgQHN0YXRlLnJvbGxpbmdcbiAgICAgIEBzZXRTdGF0ZSByb2xsaW5nOiB0cnVlLCByb2xsczogQHByb3BzLnJvbGxzXG5cbiAgICBpZiBAc3RhdGUucm9sbHMgPT0gMFxuICAgICAgQHNldFN0YXRlIHJvbGxpbmc6IGZhbHNlLCByb2xsczogQHByb3BzLnJvbGxzXG4gICAgZWxzZVxuICAgICAgdGltZSA9ICgxMCAtIEBzdGF0ZS5yb2xscykgKiAxOCArIDUwXG4gICAgICBpZiBAc3RhdGUucm9sbHMgPiAxMFxuICAgICAgICB0aW1lID0gNTBcblxuICAgICAgQHNldFN0YXRlXG4gICAgICAgIHZhbDogXy5yYW5kb20oMSw2KVxuICAgICAgICByb2xsczogQHN0YXRlLnJvbGxzIC0gMVxuICAgICAgc2V0VGltZW91dCBAaXRlcmF0ZVJvbGwuYmluZCh0aGlzKSwgdGltZVxuXG4gIHJlbmRlcjogLT5cbiAgICByb2xsaW5nID0gaWYgQHN0YXRlLnJvbGxpbmcgYW5kIEBzdGF0ZS5yb2xscyA+IDAgdGhlbiAncm9sbGluZycgZWxzZSAnJ1xuICAgIFIuZGl2IG9uQ2xpY2s6IEBjbGlja0RpZSwgY2xhc3NOYW1lOiBcImRpZSBkaWUtI3tAcHJvcHMuc2lkZX0gI3tyb2xsaW5nfVwiLCBAc3RhdGUudmFsXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdOYXZWaWV3J1xuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgYWN0aXZlOiAnJ1xuXG4gIHJlbmRlcjogLT5cblxuICAgIGxpID0gKG1lbnVLZXksIGhyZWYsIHRpdGxlKT0+XG4gICAgICBSLmxpIGNsYXNzTmFtZTogY3goJ2FjdGl2ZSc6IEBwcm9wcy5hY3RpdmUgPT0gbWVudUtleSksXG4gICAgICAgIFIuYSAnZGF0YS1iZWZvcmUnOiAn4piFJywgJ2RhdGEtYWZ0ZXInOiAn4piFJywgaHJlZjogaHJlZiwgdGl0bGVcblxuICAgIFIubmF2IGNsYXNzTmFtZTogXCJuYXZiYXIgXCIsIHJvbGU6IFwibmF2aWdhdGlvblwiLFxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiLCBbXG5cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiBcIm5hdmJhci1oZWFkZXJcIixcbiAgICAgICAgICBSLmEgY2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiLCBocmVmOiAnIy8nLCBbXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInR3aVwiLCBcIlR3aVwiXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInN0cnVnXCIsIFwiU3RydWdcIlxuICAgICAgICAgIF1cblxuICAgICAgICBSLnVsIGNsYXNzTmFtZTogXCJuYXYgbmF2YmFyLW5hdlwiLCBbXG4gICAgICAgICAgbGkgJ2NhcmRzJywgJyMvY2FyZHMnLCAnQ2FyZHMnXG4gICAgICAgICAgbGkgJ2JvYXJkJywgJyMvYm9hcmQnLCAnQm9hcmQnXG4gICAgICAgICAgbGkgJ2Fib3V0JywgJyMvYWJvdXQnLCAnQWJvdXQnXG4gICAgICAgIF1cblxuICAgICAgXVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKShfX2Rpcm5hbWUsIFsnKi5jb2ZmZWUnXSlcbiJdfQ==
