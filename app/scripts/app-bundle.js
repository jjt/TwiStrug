(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $, NavView, R, TwiStrug, addReactKey, cx, libs, pages, update;

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
      '/board': (function(_this) {
        return function() {
          return $.getJSON('/data/map-data.json', function(mapData) {
            var countries, countryPositions, links, nodes, regionInfoNodes;
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
            return _this.setView('board', 'Board', 'board', {
              mapData: mapData,
              countries: countries,
              regionInfoNodes: regionInfoNodes,
              links: links,
              nodes: nodes
            });
          });
        };
      })(this),
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
    router.on(/\??(.*)/, stateRoute.bind(this, 'cards', 'Cards', 'cards'));
    router.init('/');
  },
  render: function() {
    var mainView, _ref;
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
    }
    return R.div({}, [
      NavView({
        active: this.state.menuActive
      }), R.div({
        className: 'container'
      }, mainView)
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


},{"./libs":6,"./pages":21,"./views/Nav":30}],2:[function(require,module,exports){
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


},{}],3:[function(require,module,exports){
module.exports = function(el) {
  if (el) {
    return el;
  }
};


},{}],4:[function(require,module,exports){
var filterUnique;

filterUnique = function(el, i, arr) {
  return arr.indexOf(el) === i;
};


},{}],5:[function(require,module,exports){
module.exports = function(el) {
  return (1 <= el && el <= 110);
};


},{}],6:[function(require,module,exports){
module.exports = (function () {var f = require("/Users/jjt/Sites/twistrug/src/libs/index.coffee");f["cardClassName"]=require("/Users/jjt/Sites/twistrug/src/libs/cardClassName.coffee");f["filterTruthy"]=require("/Users/jjt/Sites/twistrug/src/libs/filterTruthy.coffee");f["filterUnique"]=require("/Users/jjt/Sites/twistrug/src/libs/filterUnique.coffee");f["filterValidCardIds"]=require("/Users/jjt/Sites/twistrug/src/libs/filterValidCardIds.coffee");f["index"]=require("/Users/jjt/Sites/twistrug/src/libs/index.coffee");f["qs"]=require("/Users/jjt/Sites/twistrug/src/libs/qs.coffee");f["rangedGameVal"]=require("/Users/jjt/Sites/twistrug/src/libs/rangedGameVal.coffee");f["setPageTitle"]=require("/Users/jjt/Sites/twistrug/src/libs/setPageTitle.coffee");f["sortNumerical"]=require("/Users/jjt/Sites/twistrug/src/libs/sortNumerical.coffee");f["views"]=require("/Users/jjt/Sites/twistrug/src/libs/views.coffee");f["zeroPad"]=require("/Users/jjt/Sites/twistrug/src/libs/zeroPad.coffee");return f;})();


},{"/Users/jjt/Sites/twistrug/src/libs/cardClassName.coffee":2,"/Users/jjt/Sites/twistrug/src/libs/filterTruthy.coffee":3,"/Users/jjt/Sites/twistrug/src/libs/filterUnique.coffee":4,"/Users/jjt/Sites/twistrug/src/libs/filterValidCardIds.coffee":5,"/Users/jjt/Sites/twistrug/src/libs/index.coffee":6,"/Users/jjt/Sites/twistrug/src/libs/qs.coffee":7,"/Users/jjt/Sites/twistrug/src/libs/rangedGameVal.coffee":8,"/Users/jjt/Sites/twistrug/src/libs/setPageTitle.coffee":9,"/Users/jjt/Sites/twistrug/src/libs/sortNumerical.coffee":10,"/Users/jjt/Sites/twistrug/src/libs/views.coffee":11,"/Users/jjt/Sites/twistrug/src/libs/zeroPad.coffee":12}],7:[function(require,module,exports){
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


},{}],8:[function(require,module,exports){
module.exports = function(id, val) {
  var range, ranges;
  ranges = {
    score: [-20, 20],
    turn: [1, 10],
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


},{}],9:[function(require,module,exports){
var __slice = [].slice;

module.exports = function() {
  var args;
  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return document.title = args.join(' | ') + ' - TwiStrug';
};


},{}],10:[function(require,module,exports){
module.exports = function(a, b) {
  return a - b;
};


},{}],11:[function(require,module,exports){
module.exports = function(str, len) {
  if (len == null) {
    len = 3;
  }
  return ('000' + str).substr(-len, len);
};


},{}],12:[function(require,module,exports){
module.exports = function(str, len) {
  if (len == null) {
    len = 3;
  }
  return ('000' + str).substr(-len, len);
};


},{}],13:[function(require,module,exports){
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
        "TwiStrug is for people who want to reference or learn about the cards of ", R.a({
          href: "http://en.wikipedia.org/wiki/Twilight_Struggle"
        }, "Twilight Struggle"), " in a zippy web app. "
      ]), R.p({}, [
        "For more in-depth strategy, go to the excellent ", R.a({
          href: "http://twilightstrategy.com"
        }, "Twilight Strategy"), " site. It has tons of great content and analysis available, including discussions about nearly every card. Please support Twilight Strategy and its author, ", R.em({}, "theory"), ", by purchasing Twilight Struggle from Amazon on the sidebar of the site, or by paying some money for the associated", R.a({
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


},{}],14:[function(require,module,exports){
var Board, R, cx;

R = React.DOM;

cx = React.addons.classSet;

Board = require('../views/Board');

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
      Board(this.props), R.textarea({
        className: 'map-position-debug',
        ref: 'debug',
        style: {
          width: '100%',
          height: '60rem'
        },
        value: JSON.stringify(this.state.coords, null, ' ')
      })
    ]);
  }
});


},{"../views/Board":22}],15:[function(require,module,exports){
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


},{}],16:[function(require,module,exports){
var R, libs;

R = React.DOM;

libs = require('../libs');

module.exports = React.createClass({
  displayName: 'CardView',
  componentDidMount: function() {
    this.getStrategy();
    return this.setWindowKeypressHandler();
  },
  componentDidUpdate: function() {
    this.getStrategy();
    return this.setWindowKeypressHandler();
  },
  setWindowKeypressHandler: function() {
    return window.onkeypress = (function(_this) {
      return function(ev) {
        var id, kC;
        kC = ev.keyCode;
        if (kC === 104 || kC === 72) {
          id = _this.props.prevCard.id;
        }
        if (kC === 108 || kC === 76) {
          id = _this.props.nextCard.id;
        }
        if (id != null) {
          return window.location = "#/card/" + id;
        }
      };
    })(this);
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
        className: 'page-header clearfix'
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
        className: 'imgRight'
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


},{"../libs":6}],17:[function(require,module,exports){
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


},{"../libs":6,"../views/CardList":29}],18:[function(require,module,exports){
module.exports = React.createClass({
  displayName: 'CountriesView ',
  render: function() {
    return R.div({
      className: 'countriesView'
    }, [R.h2({}, 'Countries')]);
  }
});


},{}],19:[function(require,module,exports){
var R;

R = React.DOM;

module.exports = React.createClass({
  displayName: 'HomeView',
  render: function() {
    return R.div({}, [
      R.p({
        className: 'lead blurb'
      }, [
        "TwiStrug is a companion application for ", R.a({
          href: "http://en.wikipedia.org/wiki/Twilight_Struggle"
        }, "Twilight Struggle"), ". It would not exist without ", R.a({
          href: "http://twilightstrategy.com"
        }, "Twilight Strategy"), "."
      ]), CardsView({
        cards: this.props.cards,
        state: this.props.state
      })
    ]);
  }
});


},{}],20:[function(require,module,exports){
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


},{}],21:[function(require,module,exports){
module.exports = (function () {var f = require("/Users/jjt/Sites/twistrug/src/pages/index.coffee");f["About"]=require("/Users/jjt/Sites/twistrug/src/pages/About.coffee");f["Board"]=require("/Users/jjt/Sites/twistrug/src/pages/Board.coffee");f["BoardPic"]=require("/Users/jjt/Sites/twistrug/src/pages/BoardPic.coffee");f["Card"]=require("/Users/jjt/Sites/twistrug/src/pages/Card.coffee");f["Cards"]=require("/Users/jjt/Sites/twistrug/src/pages/Cards.coffee");f["Countries"]=require("/Users/jjt/Sites/twistrug/src/pages/Countries.coffee");f["Home"]=require("/Users/jjt/Sites/twistrug/src/pages/Home.coffee");f["Whoops"]=require("/Users/jjt/Sites/twistrug/src/pages/Whoops.coffee");f["index"]=require("/Users/jjt/Sites/twistrug/src/pages/index.coffee");return f;})();


},{"/Users/jjt/Sites/twistrug/src/pages/About.coffee":13,"/Users/jjt/Sites/twistrug/src/pages/Board.coffee":14,"/Users/jjt/Sites/twistrug/src/pages/BoardPic.coffee":15,"/Users/jjt/Sites/twistrug/src/pages/Card.coffee":16,"/Users/jjt/Sites/twistrug/src/pages/Cards.coffee":17,"/Users/jjt/Sites/twistrug/src/pages/Countries.coffee":18,"/Users/jjt/Sites/twistrug/src/pages/Home.coffee":19,"/Users/jjt/Sites/twistrug/src/pages/Whoops.coffee":20,"/Users/jjt/Sites/twistrug/src/pages/index.coffee":21}],22:[function(require,module,exports){
var BoardLink, BoardNode, BoardStatus, R, cx, libs;

R = React.DOM;

cx = React.addons.classSet;

libs = require('../libs');

BoardNode = require('./BoardNode');

BoardStatus = require('./BoardStatus');

BoardLink = require('./BoardLink');

module.exports = React.createClass({
  displayName: 'Board',
  getInitialState: function() {
    var gameState;
    gameState = {
      game: {
        score: 0,
        turn: 1,
        round: 0,
        defcon: 5,
        milops: [0, 0],
        space: [0, 0]
      }
    };
    return _.assign(gameState, this.props);
  },
  handleValClick: function(id, dir, side) {
    var delta, index, state;
    state = this.state;
    delta = dir === 'inc' ? 1 : -1;
    if (id !== 'milops' && id !== 'space') {
      state.game[id] = libs.rangedGameVal(id, state.game[id] + delta);
    } else {
      index = side === 'usa' ? 0 : 1;
      state.game[id][index] = libs.rangedGameVal(id, state.game[id][index] + delta);
    }
    return this.setState(state);
  },
  handleIPClick: function(nodeId, side, dir) {
    var delta, ip, node, state;
    node = _.find(this.state.nodes, {
      id: nodeId
    });
    if (node.points || node.superpower) {
      return;
    }
    state = this.state;
    ip = state.nodes[nodeId][side];
    delta = dir === 'up' ? 1 : -1;
    ip += delta;
    if (ip < 0) {
      ip = 0;
    }
    state.nodes[nodeId][side] = ip;
    return this.setState(state);
  },
  render: function() {
    var links, nodeProps, nodes;
    nodeProps = this.props.node;
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
    nodes = _.map(this.state.nodes, (function(_this) {
      return function(countryData) {
        var props;
        props = _.assign(countryData, {
          node: nodeProps,
          key: "BoardNode-" + countryData.id,
          transform: "translate(" + countryData.x + ", " + countryData.y + ")",
          width: _this.props.node.width,
          height: _this.props.node.height,
          gutter: _this.props.node.gutter,
          titleHeight: _this.props.node.titleHeight,
          titleFontSize: _this.props.node.titleFontSize,
          handleIPClick: _this.handleIPClick
        });
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


},{"../libs":6,"./BoardLink":23,"./BoardNode":24,"./BoardStatus":26}],23:[function(require,module,exports){
var R;

R = React.DOM;

module.exports = React.createClass({
  displayName: 'BoardLink',
  render: function() {
    return R.line(this.props);
  }
});


},{}],24:[function(require,module,exports){
var BoardNodeIP, R, cx;

R = React.DOM;

cx = React.addons.classSet;

BoardNodeIP = require('./BoardNodeIP');

module.exports = React.createClass({
  displayName: 'BoardNode',
  handleIPClick: function(side, dir) {
    return this.props.handleIPClick(this.props.id, side, dir);
  },
  getInitialState: function() {
    return this.componentWillReceiveProps(this.props);
  },
  componentWillReceiveProps: function(nextProps) {
    var state, usa, ussr;
    usa = nextProps.usa, ussr = nextProps.ussr;
    state = {
      usa: usa,
      ussr: ussr
    };
    this.setState(state);
    return state;
  },
  render: function() {
    var controlUSA, controlUSSR, gAttrs, polyClassName, regionText, regionTextAttrs, stabTextAttrs, titleTextAttrs;
    controlUSA = (this.state.usa - this.state.ussr) >= this.props.stab;
    controlUSSR = (this.state.ussr - this.state.usa) >= this.props.stab;
    gAttrs = {
      transform: this.props.transform,
      className: ("node-" + this.props.group + " usa" + this.state.usa + " ") + cx({
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
    regionTextAttrs = {
      className: this.props.points ? 'node-text' : 'hide',
      x: 0,
      y: 10,
      width: this.props.node.width
    };
    regionText = this.props.points ? this.props.points.join(' ') : '';
    return R.g(gAttrs, [
      R.rect({
        className: 'node-bg ' + this.state.usa,
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
      }), R.text(titleTextAttrs, this.props.shortname), R.text(stabTextAttrs, this.props.stab), R.text(regionTextAttrs, regionText), BoardNodeIP({
        node: this.props.node,
        side: 'usa',
        ip: this.state.usa,
        ctrl: controlUSA,
        handleIPClick: this.handleIPClick,
        ref: 'ipusa'
      }), BoardNodeIP({
        node: this.props.node,
        side: 'ussr',
        ip: this.state.ussr,
        ctrl: controlUSSR,
        handleIPClick: this.handleIPClick,
        ref: 'ipussr'
      })
    ]);
  }
});


},{"./BoardNodeIP":25}],25:[function(require,module,exports){
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


},{}],26:[function(require,module,exports){
var BoardStatusValue, R, cx;

R = React.DOM;

cx = React.addons.classSet;

BoardStatusValue = require('./BoardStatusValue');

module.exports = React.createClass({
  displayName: 'BoardStatus',
  render: function() {
    var round, roundSide, scoreSide, statusValue;
    scoreSide = '';
    if (this.props.score !== 0) {
      scoreSide = this.props.score < 0 ? 'ussr' : 'usa';
    }
    round = this.props.round === 0 ? 'H' : Math.ceil(this.props.round / 2);
    roundSide = '';
    if (this.props.round !== 0) {
      roundSide = this.props.round % 2 === 1 ? 'ussr' : 'usa';
    }
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
      }, [statusValue('score', 'Score', Math.abs(this.props.score), scoreSide), statusValue('defcon', 'Defcon', this.props.defcon), statusValue('milops', 'MilOps', this.props.milops[0], 'usa'), statusValue('milops', '', this.props.milops[1], 'ussr')]), R.dl({
        className: 'col'
      }, [statusValue('turn', 'Turn', this.props.turn), statusValue('round', 'Round', round, roundSide), statusValue('space', 'Space', this.props.space[0], 'usa'), statusValue('space', '', this.props.space[1], 'ussr')])
    ]);
  }
});


},{"./BoardStatusValue":27}],27:[function(require,module,exports){
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


},{}],28:[function(require,module,exports){
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


},{}],29:[function(require,module,exports){
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


},{"./Card":28}],30:[function(require,module,exports){
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


},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2FwcC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2NhcmRDbGFzc05hbWUuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9maWx0ZXJUcnV0aHkuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9maWx0ZXJVbmlxdWUuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9maWx0ZXJWYWxpZENhcmRJZHMuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9pbmRleC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3FzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvcmFuZ2VkR2FtZVZhbC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3NldFBhZ2VUaXRsZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3NvcnROdW1lcmljYWwuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy92aWV3cy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3plcm9QYWQuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvQWJvdXQuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvQm9hcmQuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvQm9hcmRQaWMuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvQ2FyZC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9wYWdlcy9DYXJkcy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9wYWdlcy9Db3VudHJpZXMuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvSG9tZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9wYWdlcy9XaG9vcHMuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvaW5kZXguY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmQuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmRMaW5rLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkTm9kZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9Cb2FyZE5vZGVJUC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9Cb2FyZFN0YXR1cy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9Cb2FyZFN0YXR1c1ZhbHVlLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0NhcmQuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQ2FyZExpc3QuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvTmF2LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUEsNkRBQUE7O0FBQUEsQ0FBQSxHQUFJLEtBQUssQ0FBQyxHQUFWLENBQUE7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Q0FBQyxJQUFGLENBQU87QUFBQSxVQUFBLFNBQUEsRUFBVyxLQUFYO1NBQVAsRUFBeUIsS0FBekIsQ0FEeUMsRUFFekMsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLFVBQUEsU0FBQSxFQUFXLE9BQVg7U0FBUCxFQUEyQixPQUEzQixDQUZ5QztPQUEzQyxDQURGLENBRjRCLEVBUTVCLENBQUMsQ0FBQyxFQUFGLENBQUs7QUFBQSxRQUFBLFNBQUEsRUFBVyxnQkFBWDtPQUFMLEVBQWtDLENBQ2hDLEVBQUEsQ0FBRyxPQUFILEVBQVksU0FBWixFQUF1QixPQUF2QixDQURnQyxFQUVoQyxFQUFBLENBQUcsT0FBSCxFQUFZLFNBQVosRUFBdUIsT0FBdkIsQ0FGZ0MsRUFHaEMsRUFBQSxDQUFHLE9BQUgsRUFBWSxTQUFaLEVBQXVCLE9BQXZCLENBSGdDLENBQWxDLENBUjRCO0tBQTlCLENBREYsRUFOTTtFQUFBLENBSlI7Q0FEZSxDQUhqQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlIgPSBSZWFjdC5ET01cbnVwZGF0ZSA9IFJlYWN0LmFkZG9ucy51cGRhdGVcbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG4kID0gWmVwdG9cblxuXG4jIEFkZCBmdW5jdGlvbiB0byBaZXB0b1xuJC5nZXRTY3JpcHQgPSAoc3JjLCBmdW5jKSAtPlxuICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICBzY3JpcHQuYXN5bmMgPSBcImFzeW5jXCJcbiAgc2NyaXB0LnNyYyA9IHNyY1xuICBpZiBmdW5jXG4gICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmNcblxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQgc2NyaXB0XG5cblxubGlicyA9IHJlcXVpcmUgJy4vbGlicydcbnBhZ2VzID0gcmVxdWlyZSAnLi9wYWdlcydcblxuTmF2VmlldyA9IHJlcXVpcmUgJy4vdmlld3MvTmF2J1xuXG5Ud2lTdHJ1ZyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGNvbXBvbmVudFdpbGxNb3VudDogKCktPlxuICAgICQoJyNwbGFjZWhvbGRlcicpLmhpZGUoKVxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICBtZW51QWN0aXZlOm51bGxcblxuICAjIFRha2VzIGEgdmlldyBuYW1lIGFuZCBhc3NvY2lhdGVkIGRhdGFcbiAgc2V0VmlldzogKG5hbWUsIHBhZ2VUaXRsZSwgbWVudUFjdGl2ZT0nJywgZGF0YT17fSkgLT5cbiAgICBpZiBwYWdlVGl0bGU/IHRoZW4gbGlicy5zZXRQYWdlVGl0bGUgcGFnZVRpdGxlXG4gICAgQHNldFN0YXRlXG4gICAgICB2aWV3OiB7bmFtZSwgZGF0YX1cbiAgICAgIG1lbnVBY3RpdmU6IG1lbnVBY3RpdmVcblxuICBjb21wb25lbnREaWRNb3VudDogLT5cbiAgICBzdGF0ZVJvdXRlID0gKG5hbWUsIHBhZ2VUaXRsZSwgbWVudUFjdGl2ZSwgYXJncyktPlxuICAgICAgc3RhdGUgPSBsaWJzLnFzLnRvT2JqIGFyZ3NcbiAgICAgICMgQ29udmVydCBmaWx0ZXIgaWRzIGZyb20gc3RyIC0+IG51bWJlclxuICAgICAgaWYgc3RhdGU/LmZpbHRlcj9cbiAgICAgICAgc3RhdGUuZmlsdGVyID0gc3RhdGUuZmlsdGVyLm1hcCAoZWwpLT5cbiAgICAgICAgICBwYXJzZUludCBlbCwgMTBcbiAgICAgIEBzZXRWaWV3IG5hbWUsIHBhZ2VUaXRsZSwgbWVudUFjdGl2ZSxcbiAgICAgICAgc3RhdGU6IHN0YXRlXG5cbiAgICByb3V0ZXIgPSBuZXcgUm91dGVyXG4gICAgICAjJy9ib2FyZCc6IEBzZXRWaWV3LmJpbmQgdGhpcywgJ2JvYXJkJywgJ0JvYXJkJ1xuXG4gICAgICAnL2JvYXJkJzogKCk9PlxuICAgICAgICAkLmdldEpTT04gJy9kYXRhL21hcC1kYXRhLmpzb24nLCAobWFwRGF0YSkgPT5cbiAgICAgICAgICB7Y291bnRyeVBvc2l0aW9ucywgY291bnRyaWVzLCBsaW5rcywgcmVnaW9uSW5mb05vZGVzfSA9IG1hcERhdGFcblxuICAgICAgICAgIGNvdW50cmllcyA9IGNvdW50cmllcy5tYXAgKG5vZGUpLT5cbiAgICAgICAgICAgIG5vZGUueCA9IGNvdW50cnlQb3NpdGlvbnNbbm9kZS5uYW1lXS54XG4gICAgICAgICAgICBub2RlLnkgPSBjb3VudHJ5UG9zaXRpb25zW25vZGUubmFtZV0ueVxuICAgICAgICAgICAgbm9kZS5maXhlZCA9IHRydWVcbiAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICBcbiAgICAgICAgICByZWdpb25JbmZvTm9kZXMgPSByZWdpb25JbmZvTm9kZXMubWFwIChub2RlKS0+XG4gICAgICAgICAgICBub2RlLnJlZ2lvbkluZm8gPSB0cnVlXG4gICAgICAgICAgICBub2RlLmZpeGVkID0gdHJ1ZVxuICAgICAgICAgICAgbm9kZVxuXG4gICAgICAgICAgbm9kZXMgPSBfLnVuaW9uKGNvdW50cmllcywgcmVnaW9uSW5mb05vZGVzKVxuICAgICAgICAgIG5vZGVzID0gXy56aXBPYmplY3QgXy5wbHVjayhub2RlcywgJ2lkJyksIG5vZGVzXG5cbiAgICAgICAgICBAc2V0VmlldyAnYm9hcmQnLCAnQm9hcmQnLCAnYm9hcmQnLCB7bWFwRGF0YSwgY291bnRyaWVzLCByZWdpb25JbmZvTm9kZXMsIGxpbmtzLCBub2Rlc31cblxuICAgICAgJy9jYXJkLzppZCc6IChpZCk9PlxuICAgICAgICBpZCA9IHBhcnNlSW50IGlkLCAxMFxuICAgICAgICBuZXh0SWQgPSBpZiBpZCA9PSAxMTAgdGhlbiAxIGVsc2UgaWQgKyAxXG4gICAgICAgIHByZXZJZCA9IGlmIGlkID09IDEgdGhlbiAxMTAgZWxzZSBpZCAtIDFcbiAgICAgICAgY2FyZCA9IF8uZmluZCBAcHJvcHMuY2FyZHMsIGlkOiBpZFxuICAgICAgICBuZXh0Q2FyZCA9IF8uZmluZCBAcHJvcHMuY2FyZHMsIGlkOiBuZXh0SWRcbiAgICAgICAgcHJldkNhcmQgPSAgXy5maW5kIEBwcm9wcy5jYXJkcywgaWQ6IHByZXZJZFxuICAgICAgICBwYWdlVGl0bGUgPSBcIiN7Y2FyZC50aXRsZX0gKCMje2NhcmQuaWR9KVwiXG4gICAgICAgIEBzZXRWaWV3ICdjYXJkJywgcGFnZVRpdGxlLCAnY2FyZHMnLCB7Y2FyZCwgbmV4dENhcmQsIHByZXZDYXJkfVxuICAgICAgXG4gICAgICAnL2NvdW50cmllcyc6IEBzZXRWaWV3LmJpbmQgdGhpcywgJ2NvdW50cmllcycsICdDb3VudHJpZXMnLCAnY291bnRyaWVzJ1xuICAgICAgXG4gICAgICAnL2Fib3V0JzogQHNldFZpZXcuYmluZCB0aGlzLCAnYWJvdXQnLCAnQWJvdXQnLCAnYWJvdXQnXG5cbiAgICByb3V0ZXIuY29uZmlndXJlXG4gICAgICBub3Rmb3VuZDogQHNldFZpZXcuYmluZCB0aGlzLCAnd2hvb3BzJywgJ1dob29wcydcblxuICAgIHJvdXRlci5vbiAvY2FyZHNcXD8/KC4qKS8sIHN0YXRlUm91dGUuYmluZCB0aGlzLCAnY2FyZHMnLCAnQ2FyZHMnLCAnY2FyZHMnXG4gICAgcm91dGVyLm9uIC9cXD8/KC4qKS8sIHN0YXRlUm91dGUuYmluZCB0aGlzLCAnY2FyZHMnLCAnQ2FyZHMnLCAnY2FyZHMnXG5cbiAgICByb3V0ZXIuaW5pdCgnLycpXG4gICAgcmV0dXJuXG5cbiAgcmVuZGVyOiAtPlxuICAgICMgSWYgdGhlIHJvdXRlciBoYXNuJ3Qga2lja2VkIGluLCBkbyBub3RoaW5nXG4gICAgaWYgbm90IEBzdGF0ZT8udmlld1xuICAgICAgbWFpblZpZXcgPSBSLnAgY2xhc3NOYW1lOiAnbGVhZCcsICdUd2lTdHJ1ZyBpcyBsb2FkaW5nLi4uJ1xuICAgIGVsc2VcbiAgICAgIG1haW5WaWV3ID0gc3dpdGNoIEBzdGF0ZS52aWV3Lm5hbWVcbiAgICAgICAgd2hlbiAnaG9tZScgdGhlbiBwYWdlcy5Ib21lXG4gICAgICAgICAgY2FyZHM6IEBwcm9wcy5jYXJkc1xuICAgICAgICAgIHN0YXRlOiBAc3RhdGUudmlldy5kYXRhLnN0YXRlXG4gICAgICAgIHdoZW4gJ2NhcmQnIHRoZW4gcGFnZXMuQ2FyZCBAc3RhdGUudmlldy5kYXRhXG4gICAgICAgIHdoZW4gJ2NhcmRzJyB0aGVuIHBhZ2VzLkNhcmRzXG4gICAgICAgICAgY2FyZHM6IEBwcm9wcy5jYXJkc1xuICAgICAgICAgIHN0YXRlOiBAc3RhdGUudmlldy5kYXRhLnN0YXRlXG4gICAgICAgIHdoZW4gJ2NvdW50cmllcycgdGhlbiBwYWdlcy5Db3VudHJpZXMoKVxuICAgICAgICAjd2hlbiAnYm9hcmQnIHRoZW4gcmV0dXJuIEJvYXJkUGljVmlldygpXG4gICAgICAgIHdoZW4gJ2JvYXJkJyB0aGVuIHBhZ2VzLkJvYXJkIEBzdGF0ZS52aWV3LmRhdGFcbiAgICAgICAgd2hlbiAnYWJvdXQnIHRoZW4gcGFnZXMuQWJvdXQoKVxuICAgICAgICB3aGVuICd3aG9vcHMnIHRoZW4gcGFnZXMuV2hvb3BzKClcblxuXG4gICAgUi5kaXYge30sIFtcbiAgICAgIE5hdlZpZXcgYWN0aXZlOiBAc3RhdGUubWVudUFjdGl2ZVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29udGFpbmVyJywgbWFpblZpZXdcbiAgICBdXG4gICAgXG5cbiMgQWRkIGtleXMgdG8gY2FyZHNcbmFkZFJlYWN0S2V5ID0gKGVsKS0+XG4gIGVsLmtleSA9IFwicmstI3tlbC5pZH1cIlxuICBlbFxuXG5SZWFjdC5yZW5kZXJDb21wb25lbnQgVHdpU3RydWcoe2NhcmRzOiBjYXJkc0RhdGEubWFwKGFkZFJlYWN0S2V5KX0pLFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAnYXBwJ1xuIiwiY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxubW9kdWxlLmV4cG9ydHMgPSAocHJvcHMpIC0+XG4gIG93bmVyQ2xhc3MgPSBcIm93bmVyLSN7cHJvcHMub3duZXJ9XCJcbiAgY2xhc3NlcyA9IGN4XG4gICAgJ2FzaWFTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0FzaWEgU2NvcmluZydcbiAgICAnZXVyb3BlU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdFdXJvcGUgU2NvcmluZydcbiAgICAnbWlkZGxlRWFzdFNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnTWlkZGxlIEVhc3QgU2NvcmluZydcbiAgICAnY2VudHJhbEFtZXJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0NlbnRyYWwgQW1lcmljYSBTY29yaW5nJ1xuICAgICdzb3V0aGVhc3RBc2lhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdTb3V0aGVhc3QgQXNpYSBTY29yaW5nKidcbiAgICAnYWZyaWNhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdBZnJpY2EgU2NvcmluZydcbiAgICAnc291dGhBbWVyaWNhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdTb3V0aCBBbWVyaWNhIFNjb3JpbmcnXG4gICAgJ29uZ29pbmcnOiBwcm9wcy5vbmdvaW5nXG5cbiAgb3duZXJDbGFzcyArICcgJyArIGNsYXNzZXNcblxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZWwpLT4gZWwgaWYgZWxcbiIsImZpbHRlclVuaXF1ZSA9IChlbCxpLGFyciktPiBhcnIuaW5kZXhPZihlbCkgPT0gaVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZWwpLT4gMSA8PSBlbCA8PSAxMTBcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJykoX19kaXJuYW1lLCBbJyouY29mZmVlJ10pXG4iLCIjIEhhc2hlZCBxc1xuIyBIYW5kbGVzIHN0cmluZ3MgYW5kIGFycmF5c1xuIyBBbnl0aGluZyB3aXRoIGEgY29tbWEgd2lsbCBiZSBwYXJzZWQgYXMgYW4gYXJyYXlcbm1vZHVsZS5leHBvcnRzID1cbiAgbWVyZ2U6IChvYmopLT5cblxuICBnZXQ6IChmaWVsZCktPlxuICBcbiAgc2V0OiAoZmllbGQsIHZhbCktPlxuICAgIHFzT2JqID0gQHRvT2JqKCkgfHwge31cbiAgICBxc09ialtmaWVsZF0gPSB2YWxcbiAgICBAc2V0UVMgQHRvUVMocXNPYmopXG5cbiAgZGVsZXRlOiAoZmllbGQpLT5cbiAgICBxc09iaiA9IEB0b09iaigpIHx8IHt9XG4gICAgcmV0dXJuIGlmIG5vdCBxc09iaj9cbiAgICBkZWxldGUgcXNPYmpbZmllbGRdXG4gICAgQHNldFFTIEB0b1FTIHFzT2JqXG5cbiAgZW5jb2RlQ2hhcnNJbjogWyc9JywnJiddXG5cbiAgZW5jb2RlQ2hhcnNPdXQ6WyclM0QnLCclMjYnXVxuXG4gIGVuY29kZTogKG9iaiktPlxuICAgIGlmIF8uaXNBcnJheSBvYmpcbiAgICAgIG9iaiA9IG9iai5qb2luKCcsJylcbiAgICBvYmoucmVwbGFjZShAZW5jb2RlQ2hhcnNJbiwgQGVuY29kZUNoYXJzT3V0KVxuXG4gIGRlY29kZTogKHN0ciktPlxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKEBlbmNvZGVDaGFyc091dCwgQGVuY29kZUNoYXJzSW4pXG4gICAgaWYgc3RyLmluZGV4T2YoJywnKSAhPSAtMVxuICAgICAgc3RyID0gc3RyLnNwbGl0KCcsJylcbiAgICBzdHJcblxuXG4gIHRvT2JqOiAocXMgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpP1sxXSktPlxuICAgIGlmIG5vdCBxc1xuICAgICAgcmV0dXJuXG4gICAgb3V0ID0ge31cbiAgICBwYWlycyA9IHFzLnNwbGl0KCcmJylcbiAgICBwYWlycz8uZm9yRWFjaCAocGFpcik9PlxuICAgICAga3ZBcnIgPSBwYWlyLnNwbGl0KCc9JylcbiAgICAgIG91dFtAZGVjb2RlKGt2QXJyWzBdKV0gPSBAZGVjb2RlKGt2QXJyWzFdKVxuICAgIG91dFxuXG4gIHRvUVM6IChvYmopLT5cbiAgICBwYWlycyA9IFtdXG4gICAgZm9yIG93biBrLHYgb2Ygb2JqXG4gICAgICBwYWlycy5wdXNoIFwiI3tAZW5jb2RlKGspfT0je0BlbmNvZGUodil9XCJcbiAgICBwYWlycy5qb2luKCcmJylcbiAgICAgICBcbiAgc2V0UVM6IChxcyktPlxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVswXSArICc/JyArIHFzXG4gXG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSAoaWQsIHZhbCktPlxuICByYW5nZXMgPVxuICAgIHNjb3JlOiBbLTIwLCAyMF1cbiAgICB0dXJuOiBbMSwgMTBdXG4gICAgcm91bmQ6IFswLCAxNl1cbiAgICBkZWZjb246IFsxLCA1XVxuICAgIG1pbG9wczogWzAsIDVdXG4gICAgc3BhY2U6IFswLCA4XVxuXG4gIHJhbmdlID0gcmFuZ2VzW2lkXVxuXG4gIGlmIHZhbCA8IHJhbmdlWzBdXG4gICAgcmV0dXJuIHJhbmdlWzFdXG4gIGlmIHZhbCA+IHJhbmdlWzFdXG4gICAgcmV0dXJuIHJhbmdlWzBdXG4gIHZhbFxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChhcmdzLi4uKS0+XG4gIGRvY3VtZW50LnRpdGxlID0gYXJncy5qb2luKCcgfCAnKSArICcgLSBUd2lTdHJ1ZydcbiIsIm1vZHVsZS5leHBvcnRzID0gKGEsYiktPiBhLWJcbiIsIm1vZHVsZS5leHBvcnRzID0gKHN0ciwgbGVuPTMpLT4gKCcwMDAnICsgc3RyKS5zdWJzdHIoLWxlbixsZW4pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChzdHIsIGxlbj0zKS0+ICgnMDAwJyArIHN0cikuc3Vic3RyKC1sZW4sbGVuKVxuIiwiUiA9IFJlYWN0LkRPTVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQWJvdXRWaWV3J1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnYWJvdXRWaWV3JywgW1xuICAgICAgUi5oMiB7fSwgXCJBYm91dCBUd2lTdHJ1Z1wiXG4gICAgICBSLmltZyBjbGFzc05hbWU6ICdpbWdSaWdodCcsIHNyYzogXCIvaW1hZ2VzL3RzYm94LmpwZ1wiXG4gICAgICBSLnAge30sIFtcbiAgICAgICAgXCJUd2lTdHJ1ZyBpcyBmb3IgcGVvcGxlIHdobyB3YW50IHRvIHJlZmVyZW5jZSBvciBsZWFybiBhYm91dCB0aGVcbiAgICAgICAgY2FyZHMgb2YgXCJcbiAgICAgICAgUi5hIGhyZWY6XCJodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1R3aWxpZ2h0X1N0cnVnZ2xlXCIsXG4gICAgICAgICAgXCJUd2lsaWdodCBTdHJ1Z2dsZVwiXG4gICAgICAgIFwiIGluIGEgemlwcHkgd2ViIGFwcC4gXCJcbiAgICAgIF1cbiAgICAgIFIucCB7fSwgW1xuICAgICAgICBcIkZvciBtb3JlIGluLWRlcHRoIHN0cmF0ZWd5LCBnbyB0byB0aGUgZXhjZWxsZW50IFwiXG4gICAgICAgIFIuYSBocmVmOiBcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbVwiLCBcIlR3aWxpZ2h0IFN0cmF0ZWd5XCJcbiAgICAgICAgXCIgc2l0ZS4gSXQgaGFzIHRvbnMgb2YgZ3JlYXQgY29udGVudCBhbmRcbiAgICAgICAgYW5hbHlzaXMgYXZhaWxhYmxlLCBpbmNsdWRpbmcgZGlzY3Vzc2lvbnMgYWJvdXQgbmVhcmx5IGV2ZXJ5IGNhcmQuXG4gICAgICAgIFBsZWFzZSBzdXBwb3J0IFR3aWxpZ2h0IFN0cmF0ZWd5IGFuZCBpdHMgYXV0aG9yLCBcIlxuICAgICAgICBSLmVtIHt9LCBcInRoZW9yeVwiXG4gICAgICAgIFwiLCBieSBwdXJjaGFzaW5nIFR3aWxpZ2h0IFN0cnVnZ2xlIGZyb20gQW1hem9uIG9uIHRoZSBzaWRlYmFyIG9mIHRoZVxuICAgICAgICBzaXRlLCBvciBieSBwYXlpbmcgc29tZSBtb25leSBmb3IgdGhlIGFzc29jaWF0ZWRcIlxuICAgICAgICBSLmEgaHJlZjogXCJodHRwczovL2xlYW5wdWIuY29tL3R3aWxpZ2h0c3RyYXRlZ3lcIiwgXCJlLWJvb2tcIlxuICAgICAgICBcIi4gSXQncyBUd2lsaWdodCBTdHJhdGVneSBpbiBib29rIGZvcm0gYW5kIGRlc2VydmVzIHlvdXIgbW9uZXkuXCJcbiAgICAgIF1cbiAgICAgIFIucCB7fSwgW1xuICAgICAgICBcIlR3aVN0cnVnIHdhcyBtYWRlIGJ5IFwiXG4gICAgICAgIFIuYSBocmVmOiBcImh0dHA6Ly9qanQuaW8vXCIsIFwiSmFzb24gVHJpbGxcIlxuICAgICAgICBcIi4gU291cmNlIGF2YWlsYWJsZSBvbiBcIlxuICAgICAgICBSLmEgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vamp0L3R3aXN0cnVnXCIsIFwiR2l0aHViXCJcbiAgICAgICAgXCIuXCJcbiAgICAgIF1cbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuQm9hcmQgPSByZXF1aXJlICcuLi92aWV3cy9Cb2FyZCdcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkVmlldydcbiAgXG4gIGdldERlZmF1bHRQcm9wczogLT5cbiAgICB3aWR0aDogMTE0MFxuICAgIGhlaWdodDogNzMwXG4gICAgbm9kZTpcbiAgICAgIHdpZHRoOiA2NlxuICAgICAgaGVpZ2h0OiA1MFxuICAgICAgZ3V0dGVyOiAxNFxuICAgICAgdGl0bGVIZWlnaHQ6IDE2XG4gICAgICB0aXRsZUZvbnRTaXplOiAxMlxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICBkZWJ1Z09iajoge31cblxuICBkcmFnZW5kOiAoZWwpLT5cbiAgICBjb29yZHMgPSBAc3RhdGUuY29vcmRzXG4gICAgY29vcmRzW2VsLm5hbWVdID1cbiAgICAgIHg6IE1hdGgucm91bmQoZWwueClcbiAgICAgIHk6IE1hdGgucm91bmQoZWwueSlcbiAgICBlbC5maXhlZCA9IHRydWVcbiAgICBAc2V0U3RhdGUge2Nvb3Jkc31cblxuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnQm9hcmRWaWV3JywgW1xuICAgICAgI1IuZGl2IGNsYXNzTmFtZTogJ3BhZ2UtaGVhZGVyJyxcbiAgICAgICAgICAjUi5oMiB7fSwgXCJCb2FyZFwiXG4gICAgICBCb2FyZCBAcHJvcHNcbiAgICAgIFIudGV4dGFyZWEgY2xhc3NOYW1lOiAnbWFwLXBvc2l0aW9uLWRlYnVnJywgcmVmOidkZWJ1ZycsIHN0eWxlOnt3aWR0aDonMTAwJScsIGhlaWdodDonNjByZW0nfSwgdmFsdWU6IEpTT04uc3RyaW5naWZ5KEBzdGF0ZS5jb29yZHMsIG51bGwsICcgJylcbiAgICBdXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZFBpY1ZpZXcnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdib2FyZFZpZXcnLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdwYWdlLWhlYWRlcicsXG4gICAgICAgIFIuaDIge30sICdCb2FyZCdcbiAgICAgIFIuYSBocmVmOicvaW1hZ2VzL3RzYm9hcmQuanBnJyxcbiAgICAgICAgUi5pbWcgY2xhc3NOYW1lOiAnZmx1aWQnLCBzcmM6Jy9pbWFnZXMvdHNib2FyZC5qcGcnXG4gICAgXVxuXG4iLCJSID0gUmVhY3QuRE9NXG5saWJzID0gcmVxdWlyZSAnLi4vbGlicydcblxubW9kdWxlLmV4cG9ydHMgID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdDYXJkVmlldydcbiAgY29tcG9uZW50RGlkTW91bnQ6IC0+XG4gICAgQGdldFN0cmF0ZWd5KClcbiAgICBAc2V0V2luZG93S2V5cHJlc3NIYW5kbGVyKClcblxuICBjb21wb25lbnREaWRVcGRhdGU6IC0+XG4gICAgQGdldFN0cmF0ZWd5KClcbiAgICBAc2V0V2luZG93S2V5cHJlc3NIYW5kbGVyKClcblxuICBzZXRXaW5kb3dLZXlwcmVzc0hhbmRsZXI6IC0+XG4gICAgd2luZG93Lm9ua2V5cHJlc3MgPSAoZXYpID0+XG4gICAgICBrQyA9IGV2LmtleUNvZGVcbiAgICAgIGlmIGtDID09IDEwNCBvciBrQyA9PSA3MlxuICAgICAgICBpZCA9IEBwcm9wcy5wcmV2Q2FyZC5pZFxuICAgICAgaWYga0MgPT0gMTA4IG9yIGtDID09IDc2XG4gICAgICAgIGlkID0gQHByb3BzLm5leHRDYXJkLmlkXG4gICAgICBpZiBpZD9cbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIjL2NhcmQvI3tpZH1cIlxuXG4gIGdldFN0cmF0ZWd5OiAtPlxuICAgIEByZWZzLmNhcmRTdHJhdGVneS5nZXRET01Ob2RlKCkuaW5uZXJIVE1MID0gJzxwPkxvYWRpbmcgZGF0YS4uLjwvcD4nXG4gICAgJC5nZXQgXCIvZGF0YS9jYXJkU3RyYXRlZ3lMaW5rZWQvI3tsaWJzLnplcm9QYWQoQHByb3BzLmNhcmQuaWQpfS5odG1sXCIsIChkYXRhKT0+XG4gICAgICBAcmVmcy5jYXJkU3RyYXRlZ3kuZ2V0RE9NTm9kZSgpLmlubmVySFRNTCA9IGRhdGFcblxuICByZW5kZXI6IC0+XG4gICAgY2FyZCA9IEBwcm9wcy5jYXJkXG4gICAgaW1hZ2VVcmwgPSBcIi9pbWFnZXMvY2FyZHMvI3tsaWJzLnplcm9QYWQoY2FyZC5pZCl9LmpwZ1wiXG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZFZpZXcnLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdwYWdlLWhlYWRlciBjbGVhcmZpeCcsXG4gICAgICAgIFIuaDIgY2xhc3NOYW1lOiBsaWJzLmNhcmRDbGFzc05hbWUoY2FyZCksIFtcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidjYXJkLW9wcycsIGlmIGNhcmQub3BzIDwgMSB0aGVuIFwiU1wiIGVsc2UgY2FyZC5vcHNcbiAgICAgICAgICBcIiN7Y2FyZC50aXRsZX0gXCJcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidjYXJkLWlkJywgXCIjI3tjYXJkLmlkfVwiXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZC1uYXYnLCBbXG4gICAgICAgICAgUi5hIHtocmVmOlwiIy9jYXJkLyN7QHByb3BzLnByZXZDYXJkLmlkfVwiLCBjbGFzc05hbWU6J2NhcmQtbmF2LXByZXYnfSwgW1xuICAgICAgICAgICAgXCIje0Bwcm9wcy5wcmV2Q2FyZC50aXRsZX1cIlxuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2NhcmQtbmF2LWxhYmVsJywgW1xuICAgICAgICAgICAgICBSLnNtYWxsIHt9LCAn4peAJ1xuICAgICAgICAgICAgICAnIHByZXYgKEgpJ1xuICAgICAgICAgICAgXVxuICAgICAgICAgIF1cbiAgICAgICAgICBSLmEge2hyZWY6XCIjL2NhcmQvI3tAcHJvcHMubmV4dENhcmQuaWR9XCIsIGNsYXNzTmFtZTonY2FyZC1uYXYtbmV4dCd9LCBbXG4gICAgICAgICAgICBcIiN7QHByb3BzLm5leHRDYXJkLnRpdGxlfVwiXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnY2FyZC1uYXYtbGFiZWwnLCBbXG4gICAgICAgICAgICAgICduZXh0IChMKSAnXG4gICAgICAgICAgICAgIFIuc21hbGwge30sICfilrYnXG4gICAgICAgICAgICBdXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICBSLnAge2NsYXNzTmFtZTogJ3B1bGwtbGVmdCd9LCBjYXJkLnRleHRcbiAgICAgIFIuaW1nIHNyYzogaW1hZ2VVcmwsIGNsYXNzTmFtZTogJ2ltZ1JpZ2h0J1xuICAgICAgUi5kaXYge2NsYXNzTmFtZTogJ2NhcmQtc3RyYXRlZ3knLCBpZDogJ2NhcmQtc3RyYXRlZ3knfSwgW1xuICAgICAgICBSLmgzIHt9LCBbXG4gICAgICAgICAgJ1N0cmF0ZWdpYyBOb3RlcyBmcm9tJ1xuICAgICAgICAgICcgJ1xuICAgICAgICAgIFIuYSBocmVmOmNhcmQudXJsLCAnVHdpbGlnaHRTdHJhdGVneS5jb20nXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgcmVmOidjYXJkU3RyYXRlZ3knLFxuICAgICAgICAgIFIucCB7fSwgJ0xvYWRpbmcgZGF0YSdcbiAgICAgIF1cbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxubGlicyA9IHJlcXVpcmUgJy4uL2xpYnMnXG5cbkNhcmRMaXN0ID0gcmVxdWlyZSAnLi4vdmlld3MvQ2FyZExpc3QnXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdDYXJkc1ZpZXcnXG4gIGRlZmF1bHRTdGF0ZTogKHByb3BzKS0+XG4gICAgZmlsdGVyID0gcHJvcHM/LnN0YXRlPy5maWx0ZXJcbiAgICBmdWxsVGV4dDogaWYgZmlsdGVyIHRoZW4gdHJ1ZSBlbHNlIGZhbHNlXG4gICAgY2FyZEZpbHRlcklucHV0OiBpZiBmaWx0ZXIgdGhlbiBmaWx0ZXIuam9pbignICcpIGVsc2UgJydcbiAgICBzb3J0OiAnc3RhZ2UnXG4gICAgZmlsdGVyOiBudWxsXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogKG5leHRQcm9wcykgLT5cbiAgICBpZiBuZXh0UHJvcHMuc3RhdGU/XG4gICAgICBAc2V0U3RhdGUgbmV4dFByb3BzLnN0YXRlXG4gICAgZWxzZVxuICAgICAgQHNldFN0YXRlIEBkZWZhdWx0U3RhdGUoKVxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICBfLm1lcmdlIEBkZWZhdWx0U3RhdGUoQHByb3BzKSwgQHByb3BzLnN0YXRlXG5cbiAgZ2V0RmlsdGVySWRzOiAoKSAtPlxuXG4gICAgaWYgQHN0YXRlPy5maWx0ZXI/XG4gICAgICBmaWx0ZXJJZHMgPSBAc3RhdGUuZmlsdGVyLnNvcnQobGlicy5zb3J0TnVtZXJpY2FsKVxuICAgICAgICAuZmlsdGVyKGxpYnMuZmlsdGVyVHJ1dGh5KVxuICAgICAgICAuZmlsdGVyKGxpYnMuZmlsdGVyVW5pcXVlKVxuICAgIGlmIG5vdCBmaWx0ZXJJZHM/IHRoZW4gZmlsdGVySWRzID0gW11cbiAgICByZXR1cm4gZmlsdGVySWRzXG5cbiAgIyBKdXN0IGZpbHRlcmluZyBieSBpZCByaWdodCBub3dcbiAgZ2V0RmlsdGVyZWRDYXJkczogLT5cbiAgICBpZiBAc3RhdGUuZmlsdGVyP1xuICAgICAgcmV0dXJuIEBwcm9wcy5jYXJkcy5maWx0ZXIgKGVsKSA9PlxuICAgICAgICBpZiBlbC5pZCBpbiBAc3RhdGUuZmlsdGVyXG4gICAgICAgICAgcmV0dXJuIGVsXG4gICAgQHByb3BzLmNhcmRzXG4gICAgICAgIFxuXG4gIGZpbHRlckFuZFNvcnRDYXJkczogLT5cbiAgICBjYXJkcyA9IEBnZXRGaWx0ZXJlZENhcmRzKClcbiAgICBbc29ydCwgb3JkZXJdID0gQHN0YXRlLnNvcnQuc3BsaXQgJy0nXG5cbiAgICBzb3J0UGFyYW0gPSBzd2l0Y2ggc29ydFxuICAgICAgd2hlbiAndGV4dGxlbicgdGhlbiAoZWwpIC0+IGVsLnRleHQubGVuZ3RoXG4gICAgICB3aGVuICdzaWRlJyB0aGVuIFsnb3duZXInLCdzdGFnZScsJ2lkJ11cbiAgICAgIHdoZW4gJ29wcycgdGhlbiAnb3BzJ1xuICAgICAgd2hlbiAndGl0bGVsZW4nIHRoZW4gKGVsKSAtPiBlbC50aXRsZS5sZW5ndGhcbiAgICAgIGVsc2UgWydzdGFnZScsICdpZCddXG4gICAgY2FyZHMgPSBfLnNvcnRCeSBjYXJkcywgc29ydFBhcmFtXG5cbiAgICBpZiBvcmRlciA9PSAncmV2J1xuICAgICAgY2FyZHMucmV2ZXJzZSgpXG5cbiAgICBjYXJkc1xuXG5cbiAgaGFuZGxlRnVsbFRleHQ6IC0+XG4gICAgQHNldFN0YXRlXG4gICAgICBmdWxsVGV4dDogQHJlZnMuZnVsbFRleHQuZ2V0RE9NTm9kZSgpLmNoZWNrZWRcblxuICBoYW5kbGVDYXJkRmlsdGVyQ2hhbmdlOiAtPlxuICAgIHZhbHVlID0gQHJlZnMuY2FyZEZpbHRlci5nZXRET01Ob2RlKCkudmFsdWVcbiAgICAjIFdHUiBhZGRzIFwiT3BzIDM6IC4uLlwiLCBzbyBkb24ndCBwaWNrIHRob3NlIHVwXG4gICAgaWRzID0gdmFsdWUubWF0Y2goL1xcZCtbXjpdfFxcZCskL2cpPy5tYXAgKGVsKS0+IHBhcnNlSW50IGVsLCAxMFxuICAgIGlmIHZhbHVlID09ICcnIG9yIG5vdCBpZHM/XG4gICAgICBzdGF0ZSA9XG4gICAgICAgIGNhcmRGaWx0ZXJJbnB1dDogdmFsdWVcbiAgICAgICAgZmlsdGVyOiBudWxsXG4gICAgZWxzZVxuICAgICAgc3RhdGUgPVxuICAgICAgICBjYXJkRmlsdGVySW5wdXQ6IHZhbHVlXG4gICAgICAgIGZ1bGxUZXh0OiB0cnVlXG4gICAgICAgIGZpbHRlcjogaWRzLnNvcnQobGlicy5zb3J0TnVtZXJpY2FsKS5maWx0ZXIobGlicy5maWx0ZXJWYWxpZENhcmRJZHMpXG5cbiAgICBAc2V0U3RhdGUgc3RhdGVcblxuICBoYW5kbGVDYXJkRmlsdGVyQmx1cjogLT5cbiAgICBmaWx0ZXJJZHMgPSBAZ2V0RmlsdGVySWRzKClcblxuICAgIEBzZXRTdGF0ZVxuICAgICAgY2FyZEZpbHRlcklucHV0OiBmaWx0ZXJJZHMuam9pbiAnICdcblxuICAgIGlmIGZpbHRlcklkcz8gYW5kIGZpbHRlcklkcy5sZW5ndGggPiAwXG4gICAgICBsaWJzLnFzLnNldCAnZmlsdGVyJywgZmlsdGVySWRzXG4gICAgZWxzZVxuICAgICAgbGlicy5xcy5kZWxldGUgJ2ZpbHRlcidcblxuICBoYW5kbGVDYXJkRmlsdGVyQ2xlYXI6ICgpLT5cbiAgICBAcmVmcy5jYXJkRmlsdGVyLmdldERPTU5vZGUoKS52YWx1ZSA9ICcnXG4gICAgQHNldFN0YXRlXG4gICAgICBmaWx0ZXI6bnVsbFxuICAgICAgY2FyZEZpbHRlcklucHV0OiAnJ1xuXG4gICAgbGlicy5xcy5kZWxldGUgJ2ZpbHRlcidcblxuXG5cbiAgcmVuZGVyOiAtPlxuICAgIHNvcnRMaW5rID0gKHNvcnQsIGRpc3BsYXkpID0+XG4gICAgICBjbGFzc05hbWUgPSBjeCBhY3RpdmU6IEBzdGF0ZS5zb3J0ID09IHNvcnRcbiAgICAgIHJlZiA9IFwiI3tzb3J0fVNvcnRcIlxuICAgICAgb25DbGljayA9ICgpLT5cbiAgICAgICAgbGlicy5xcy5zZXQgJ3NvcnQnLCBzb3J0XG4gICAgICBSLmEge29uQ2xpY2ssIHJlZiwgY2xhc3NOYW1lfSwgZGlzcGxheVxuXG5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkc1ZpZXcnICwgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncGFnZS1oZWFkZXIgcm93JywgW1xuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtNicsIFtcbiAgICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkQ29udHJvbHMnLCBbXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnbGFiZWwnLCAnU29ydCBieTonXG4gICAgICAgICAgICBzb3J0TGluayAnc3RhZ2UnLCAnU3RhZ2UnXG4gICAgICAgICAgICBzb3J0TGluayAnb3BzJywgJ09wcydcbiAgICAgICAgICAgIHNvcnRMaW5rICdzaWRlJywgJ1NpZGUnXG4gICAgICAgICAgXVxuICAgICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NhcmRDb250cm9scycsIFtcbiAgICAgICAgICAgIFIuaW5wdXRcbiAgICAgICAgICAgICAgbmFtZTogJ2Z1bGxUZXh0J1xuICAgICAgICAgICAgICBpZDogJ2Z1bGxUZXh0J1xuICAgICAgICAgICAgICB0eXBlOidjaGVja2JveCdcbiAgICAgICAgICAgICAgcmVmOidmdWxsVGV4dCdcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IEBoYW5kbGVGdWxsVGV4dFxuICAgICAgICAgICAgICBjaGVja2VkOiBAc3RhdGUuZnVsbFRleHRcbiAgICAgICAgICAgIFwiIFwiXG4gICAgICAgICAgICBSLmxhYmVsIHtodG1sRm9yOidmdWxsVGV4dCcsIGNsYXNzTmFtZTonY2FyZC1zaG93LXRleHQtbGFiZWwnfSwgJ1Nob3cgY2FyZCB0ZXh0J1xuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkcy1maWx0ZXItYnktaWQgY29sLW1kLTYnLCBbXG4gICAgICAgICAgUi5sYWJlbCB7aHRtbEZvcjonY2FyZEZpbHRlcid9LCBbXG4gICAgICAgICAgICBcIkZpbHRlciBjYXJkcyBieSBpZHMgXCJcbiAgICAgICAgICBdXG4gICAgICAgICAgUi5pbnB1dFxuICAgICAgICAgICAgbmFtZTogJ2NhcmRGaWx0ZXInXG4gICAgICAgICAgICB0eXBlOiAndGV4dCdcbiAgICAgICAgICAgIHJlZjogJ2NhcmRGaWx0ZXInXG4gICAgICAgICAgICBvbkNoYW5nZTogQGhhbmRsZUNhcmRGaWx0ZXJDaGFuZ2VcbiAgICAgICAgICAgIG9uQmx1cjogQGhhbmRsZUNhcmRGaWx0ZXJCbHVyXG4gICAgICAgICAgICB2YWx1ZTogQHN0YXRlLmNhcmRGaWx0ZXJJbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdQYXN0ZSBmcm9tIFdhcmdhbWVyb29tIG9yIGVudGVyIGlkcydcbiAgICAgICAgICBSLmEge2NsYXNzTmFtZTonY2FyZHMtZmlsdGVyLWJ5LWlkLWNsZWFyJywgb25DbGljazpAaGFuZGxlQ2FyZEZpbHRlckNsZWFyfSwgJ2NsZWFyJ1xuICAgICAgICBdXG4gICAgICBdXG4gICAgICBDYXJkTGlzdFxuICAgICAgICBjYXJkczogQGZpbHRlckFuZFNvcnRDYXJkcygpXG4gICAgICAgIGZ1bGxUZXh0OiBAc3RhdGUuZnVsbFRleHRcbiAgICBdXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ291bnRyaWVzVmlldyAnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdjb3VudHJpZXNWaWV3JywgW1xuICAgICAgUi5oMiB7fSwgJ0NvdW50cmllcydcbiAgICBdXG5cblxuIiwiUiA9IFJlYWN0LkRPTVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnSG9tZVZpZXcnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiB7fSwgW1xuICAgICAgUi5wIGNsYXNzTmFtZTonbGVhZCBibHVyYicsIFtcbiAgICAgICAgXCJUd2lTdHJ1ZyBpcyBhIGNvbXBhbmlvbiBhcHBsaWNhdGlvbiBmb3IgXCJcbiAgICAgICAgUi5hIGhyZWY6XCJodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1R3aWxpZ2h0X1N0cnVnZ2xlXCIsIFwiVHdpbGlnaHQgU3RydWdnbGVcIlxuICAgICAgICBcIi4gSXQgd291bGQgbm90IGV4aXN0IHdpdGhvdXQgXCJcbiAgICAgICAgUi5hIGhyZWY6IFwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tXCIsIFwiVHdpbGlnaHQgU3RyYXRlZ3lcIlxuICAgICAgICBcIi5cIlxuICAgICAgXVxuICAgICAgQ2FyZHNWaWV3IGNhcmRzOiBAcHJvcHMuY2FyZHMsIHN0YXRlOiBAcHJvcHMuc3RhdGVcbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdXaG9vcHNWaWV3J1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYge30sIFtcbiAgICAgIFIuaDIge30sIFwiREVGQ09OIDFcIlxuICAgICAgUi5wIGNsYXNzTmFtZTonbGVhZCcsIFtcbiAgICAgICAgXCJMb29rcyBsaWtlIFR3aVN0cnVnIHRyaWdnZXJlZCBudWNsZWFyIHdhci4gV0hPT1BTSUUgREFJU1khXCJcbiAgICAgICAgUi5iciB7fVxuICAgICAgICBSLmEgaHJlZjpcIiMvY2FyZHNcIiwgXCJIb3cgYWJvdXQgbG9va2luZyBvdmVyIHRoZSBjYXJkcz9cIlxuICAgICAgXVxuICAgIF1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJykoX19kaXJuYW1lLCBbJyouY29mZmVlJ10pXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxubGlicyA9IHJlcXVpcmUgJy4uL2xpYnMnXG5cbkJvYXJkTm9kZSA9IHJlcXVpcmUgJy4vQm9hcmROb2RlJ1xuQm9hcmRTdGF0dXMgPSByZXF1aXJlICcuL0JvYXJkU3RhdHVzJ1xuQm9hcmRMaW5rID0gcmVxdWlyZSAnLi9Cb2FyZExpbmsnXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZCdcblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgZ2FtZVN0YXRlID1cbiAgICAgIGdhbWU6XG4gICAgICAgIHNjb3JlOiAwXG4gICAgICAgIHR1cm46IDFcbiAgICAgICAgcm91bmQ6IDBcbiAgICAgICAgZGVmY29uOiA1XG4gICAgICAgIG1pbG9wczogWzAsMF1cbiAgICAgICAgc3BhY2U6IFswLDBdXG5cbiAgICBfLmFzc2lnbiBnYW1lU3RhdGUsIEBwcm9wc1xuXG4gIGhhbmRsZVZhbENsaWNrOiAoaWQsIGRpciwgc2lkZSktPlxuICAgIHN0YXRlID0gdGhpcy5zdGF0ZVxuICAgIGRlbHRhID0gaWYgZGlyID09ICdpbmMnIHRoZW4gMSBlbHNlIC0xXG4gICAgaWYgaWQgbm90IGluIFsnbWlsb3BzJywgJ3NwYWNlJ11cbiAgICAgIHN0YXRlLmdhbWVbaWRdID0gbGlicy5yYW5nZWRHYW1lVmFsKGlkLCBzdGF0ZS5nYW1lW2lkXSArIGRlbHRhKVxuICAgIGVsc2VcbiAgICAgIGluZGV4ID0gaWYgc2lkZSA9PSAndXNhJyB0aGVuIDAgZWxzZSAxXG4gICAgICBzdGF0ZS5nYW1lW2lkXVtpbmRleF0gPSBsaWJzLnJhbmdlZEdhbWVWYWwoaWQsIHN0YXRlLmdhbWVbaWRdW2luZGV4XSArIGRlbHRhKVxuXG4gICAgQHNldFN0YXRlIHN0YXRlXG5cbiAgaGFuZGxlSVBDbGljazogKG5vZGVJZCwgc2lkZSwgZGlyKS0+XG4gICAgbm9kZSA9IF8uZmluZCBAc3RhdGUubm9kZXMsIHtpZDogbm9kZUlkfVxuICAgICMgRG9uJ3QgbGV0IHRoZSBub24tY291bnRyeSBub2RlcyBnZXQgdXBkYXRlZCBcbiAgICBpZiBub2RlLnBvaW50cyBvciBub2RlLnN1cGVycG93ZXIgdGhlbiByZXR1cm5cbiAgICBzdGF0ZSA9IEBzdGF0ZVxuXG4gICAgaXAgPSBzdGF0ZS5ub2Rlc1tub2RlSWRdW3NpZGVdXG4gICAgZGVsdGEgPSBpZiBkaXIgPT0gJ3VwJyB0aGVuIDEgZWxzZSAtMVxuICAgIGlwICs9IGRlbHRhXG4gICAgaWYgaXAgPCAwIHRoZW4gaXAgPSAwXG5cbiAgICBzdGF0ZS5ub2Rlc1tub2RlSWRdW3NpZGVdID0gaXBcblxuICAgIEBzZXRTdGF0ZSBzdGF0ZVxuXG4gIHJlbmRlcjogLT5cbiAgICBub2RlUHJvcHMgPSBAcHJvcHMubm9kZVxuXG4gICAgbGlua3MgPSBAcHJvcHMubGlua3MubWFwIChsaW5rRGF0YSk9PlxuICAgICAgc291cmNlID0gXy5maW5kIEBwcm9wcy5jb3VudHJpZXMsIGlkOiBsaW5rRGF0YS5zb3VyY2VcbiAgICAgIHRhcmdldCA9IF8uZmluZCBAcHJvcHMuY291bnRyaWVzLCBpZDogbGlua0RhdGEudGFyZ2V0XG4gICAgICBub2RlcyA9IHtzb3VyY2UsIHRhcmdldH1cblxuICAgICAgalVTQSA9IChsaW5rLCB0YXJnKT0+XG4gICAgICAgIGphcGFuVVNBQnVtcCA9IDE4XG4gICAgICAgIGlmIF8uY29udGFpbnMobGluay5ub2RlcywgJ1VTQScpIGFuZCBfLmNvbnRhaW5zKGxpbmsubm9kZXMsICdKYXBhbicpXG4gICAgICAgICAgcmV0dXJuIG5vZGVzW3RhcmddLnkgLSBqYXBhblVTQUJ1bXBcbiAgICAgICAgbm9kZXNbdGFyZ10ueVxuXG4gICAgICBsaW5rUHJvcHMgPVxuICAgICAgICBrZXk6IFwiQm9hcmRMaW5rLSN7bGlua0RhdGEuc291cmNlfS0je2xpbmtEYXRhLnRhcmdldH1cIlxuICAgICAgICB4MTogc291cmNlLnhcbiAgICAgICAgeTE6IGpVU0EobGlua0RhdGEsICdzb3VyY2UnKVxuICAgICAgICB4MjogdGFyZ2V0LnhcbiAgICAgICAgeTI6IGpVU0EobGlua0RhdGEsICd0YXJnZXQnKVxuICAgICAgICBjbGFzc05hbWU6IGN4XG4gICAgICAgICAgXCJsaW5rXCI6IHRydWVcbiAgICAgICAgICBcImxpbmstY3Jvc3NcIjogbGlua0RhdGEuY3Jvc3NDb250aW5lbnRcbiAgICAgICAgICBcImxpbmstdXNhXCI6IF8uY29udGFpbnMgbGlua0RhdGEubm9kZXMsICdVU0EnXG4gICAgICAgICAgXCJsaW5rLXVzc3JcIjogXy5jb250YWlucyBsaW5rRGF0YS5ub2RlcywgJ1VTU1InXG5cbiAgICAgIEJvYXJkTGluayBsaW5rUHJvcHNcblxuICAgIG5vZGVzID0gXy5tYXAgQHN0YXRlLm5vZGVzLCAoY291bnRyeURhdGEpPT5cbiAgICAgIHByb3BzID0gXy5hc3NpZ24gY291bnRyeURhdGEsXG4gICAgICAgIG5vZGU6IG5vZGVQcm9wc1xuICAgICAgICBrZXk6IFwiQm9hcmROb2RlLSN7Y291bnRyeURhdGEuaWR9XCJcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgje2NvdW50cnlEYXRhLnh9LCAje2NvdW50cnlEYXRhLnl9KVwiXG4gICAgICAgIHdpZHRoOiBAcHJvcHMubm9kZS53aWR0aFxuICAgICAgICBoZWlnaHQ6IEBwcm9wcy5ub2RlLmhlaWdodFxuICAgICAgICBndXR0ZXI6IEBwcm9wcy5ub2RlLmd1dHRlclxuICAgICAgICB0aXRsZUhlaWdodDogQHByb3BzLm5vZGUudGl0bGVIZWlnaHRcbiAgICAgICAgdGl0bGVGb250U2l6ZTogQHByb3BzLm5vZGUudGl0bGVGb250U2l6ZVxuICAgICAgICBoYW5kbGVJUENsaWNrOiBAaGFuZGxlSVBDbGlja1xuXG4gICAgICBCb2FyZE5vZGUgcHJvcHNcblxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ0JvYXJkJywgW1xuICAgICAgUi5zdmcgd2lkdGg6QHByb3BzLndpZHRoLCBoZWlnaHQ6QHByb3BzLmhlaWdodCwgcmVmOiAnc3ZnJywgW1xuICAgICAgICBsaW5rc1xuICAgICAgICBub2Rlc1xuICAgICAgXVxuICAgICAgQm9hcmRTdGF0dXMgXy5hc3NpZ24ge2hhbmRsZVZhbENsaWNrOiBAaGFuZGxlVmFsQ2xpY2t9LCBAc3RhdGUuZ2FtZVxuICAgIF1cblxuXG5cblxuXG4iLCJSID0gUmVhY3QuRE9NXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRMaW5rJ1xuICByZW5kZXI6IC0+XG4gICAgUi5saW5lIEBwcm9wc1xuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5Cb2FyZE5vZGVJUCA9IHJlcXVpcmUgJy4vQm9hcmROb2RlSVAnXG4gXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmROb2RlJ1xuXG4gIGhhbmRsZUlQQ2xpY2s6IChzaWRlLCBkaXIpLT5cbiAgICBAcHJvcHMuaGFuZGxlSVBDbGljayBAcHJvcHMuaWQsIHNpZGUsIGRpclxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICBAY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyBAcHJvcHNcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiAobmV4dFByb3BzKS0+XG4gICAge3VzYSwgdXNzcn0gPSBuZXh0UHJvcHNcbiAgICBzdGF0ZSA9IHt1c2EsIHVzc3J9XG4gICAgQHNldFN0YXRlIHN0YXRlXG4gICAgc3RhdGVcblxuXG4gIHJlbmRlcjogLT5cbiAgICBjb250cm9sVVNBID0gKEBzdGF0ZS51c2EgLSBAc3RhdGUudXNzcikgPj0gQHByb3BzLnN0YWJcbiAgICBjb250cm9sVVNTUiA9IChAc3RhdGUudXNzciAtIEBzdGF0ZS51c2EpID49IEBwcm9wcy5zdGFiXG5cblxuICAgIGdBdHRycyA9XG4gICAgICB0cmFuc2Zvcm06IEBwcm9wcy50cmFuc2Zvcm1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlLSN7QHByb3BzLmdyb3VwfSB1c2Eje0BzdGF0ZS51c2F9IFwiICsgY3hcbiAgICAgICAgJ25vZGUnOiB0cnVlXG4gICAgICAgICdub2RlLWJ0bCc6IEBwcm9wcy5idGwgPT0gMVxuICAgICAgICAnbm9kZS1ub25idGwnOiBAcHJvcHMuYnRsICE9IDFcbiAgICAgICAgJ25vZGUtcmVnaW9uLWluZm8nOiBAcHJvcHMucmVnaW9uSW5mb1xuICAgICAgICAnbm9kZS11c2EtY29udHJvbCc6IGNvbnRyb2xVU0FcbiAgICAgICAgJ25vZGUtdXNzci1jb250cm9sJzogY29udHJvbFVTU1JcbiAgICAgICAgJ25vZGUtcmVnaW9uLWluZm8nOiBAcHJvcHMucmVnaW9uSW5mb1xuXG5cblxuICAgIHBvbHlDbGFzc05hbWUgPVxuICAgICAgICBpZiBAcHJvcHMucmVnaW9uSW5mb1xuICAgICAgICAgICdoaWRlJ1xuICAgICAgICBlbHNlIHN3aXRjaCBAcHJvcHMuZ3JvdXBcbiAgICAgICAgICB3aGVuICdldScgdGhlbiAnbm9kZS1iZy1ldSdcbiAgICAgICAgICB3aGVuICdzZWEnIHRoZW4gJ25vZGUtYmctc2VhJ1xuICAgICAgICAgIGVsc2UgJ2hpZGUnXG5cbiAgICB0aXRsZVRleHRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IFwibm9kZS10aXRsZS10ZXh0XCJcbiAgICAgIHg6IGlmIEBwcm9wcy5yZWdpb25JbmZvIG9yIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICAgICAgICAwXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgLUBwcm9wcy5ub2RlLndpZHRoLzIgKyAyXG4gICAgICB5OiBpZiBAcHJvcHMucmVnaW9uSW5mb1xuICAgICAgICAgICAgLTZcbiAgICAgICAgICBlbHNlIGlmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICAgICAgICA2XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgLShAcHJvcHMubm9kZS5oZWlnaHQvMikgKyBAcHJvcHMubm9kZS50aXRsZUZvbnRTaXplXG4gICAgICAgXG5cbiAgICBzdGFiVGV4dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlLXN0YWJcIlxuICAgICAgeDogKEBwcm9wcy5ub2RlLndpZHRoLzIpIC0gMTBcbiAgICAgIHk6IC0oQHByb3BzLm5vZGUuaGVpZ2h0LzIpICsgQHByb3BzLm5vZGUudGl0bGVGb250U2l6ZSArIDFcblxuICAgIHJlZ2lvblRleHRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IGlmIEBwcm9wcy5wb2ludHMgdGhlbiAnbm9kZS10ZXh0JyBlbHNlICdoaWRlJ1xuICAgICAgeDogMFxuICAgICAgeTogMTBcbiAgICAgIHdpZHRoOiBAcHJvcHMubm9kZS53aWR0aFxuXG4gICAgcmVnaW9uVGV4dCA9IGlmIEBwcm9wcy5wb2ludHMgdGhlbiBAcHJvcHMucG9pbnRzLmpvaW4oJyAnKSBlbHNlICcnXG5cbiAgICBSLmcgZ0F0dHJzLCBbXG4gICAgICAjIE5vZGUgYmdcbiAgICAgIFIucmVjdFxuICAgICAgICBjbGFzc05hbWU6ICdub2RlLWJnICcgKyBAc3RhdGUudXNhXG4gICAgICAgIHdpZHRoOiBAcHJvcHMud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMuaGVpZ2h0XG4gICAgICAgIHRpdGxlOiBNYXRoLnJhbmRvbSgpXG4gICAgICAgIHg6IC1AcHJvcHMud2lkdGgvMlxuICAgICAgICB5OiAtQHByb3BzLmhlaWdodC8yXG5cbiAgICAgIFIucG9seWdvblxuICAgICAgICAgIGNsYXNzTmFtZTogcG9seUNsYXNzTmFtZVxuICAgICAgICAgIHBvaW50czogW1xuICAgICAgICAgICAgICBcIiN7LUBwcm9wcy53aWR0aC8yfSwje0Bwcm9wcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgICBcIiN7QHByb3BzLndpZHRoLzJ9LCN7QHByb3BzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICAgIFwiI3tAcHJvcHMud2lkdGgvMn0sI3stQHByb3BzLmhlaWdodC8yICsgQHByb3BzLnRpdGxlSGVpZ2h0fVwiXG4gICAgICAgICAgICBdLmpvaW4gJyAnXG4gICAgICAgICAgICAgXG4gICAgICBSLnJlY3RcbiAgICAgICAgY2xhc3NOYW1lOiAnbm9kZS10aXRsZS1iZydcbiAgICAgICAgd2lkdGg6IEBwcm9wcy53aWR0aFxuICAgICAgICBoZWlnaHQ6IEBwcm9wcy50aXRsZUhlaWdodFxuICAgICAgICB4OiAtQHByb3BzLndpZHRoLzJcbiAgICAgICAgeTogLUBwcm9wcy5oZWlnaHQvMlxuXG4gICAgICBSLmxpbmVcbiAgICAgICAgY2xhc3NOYW1lOiAnbm9kZS1saW5lJ1xuICAgICAgICB3aWR0aDogQHByb3BzLndpZHRoXG4gICAgICAgIHgxOiAtQHByb3BzLndpZHRoLzJcbiAgICAgICAgeTE6IC1AcHJvcHMuaGVpZ2h0LzIgKyBAcHJvcHMubm9kZS50aXRsZUhlaWdodFxuICAgICAgICB4MjogQHByb3BzLndpZHRoLzJcbiAgICAgICAgeTI6IC1AcHJvcHMuaGVpZ2h0LzIgKyBAcHJvcHMubm9kZS50aXRsZUhlaWdodFxuXG4gICAgICBSLnRleHQgdGl0bGVUZXh0QXR0cnMsIEBwcm9wcy5zaG9ydG5hbWVcbiAgICAgIFIudGV4dCBzdGFiVGV4dEF0dHJzLCBAcHJvcHMuc3RhYlxuICAgICAgUi50ZXh0IHJlZ2lvblRleHRBdHRycywgcmVnaW9uVGV4dFxuXG4gICAgICBCb2FyZE5vZGVJUCBub2RlOiBAcHJvcHMubm9kZSwgc2lkZTogJ3VzYScsIGlwOiBAc3RhdGUudXNhLCBjdHJsOiBjb250cm9sVVNBLCBoYW5kbGVJUENsaWNrOiBAaGFuZGxlSVBDbGljaywgcmVmOiAnaXB1c2EnXG4gICAgICBCb2FyZE5vZGVJUCBub2RlOiBAcHJvcHMubm9kZSwgc2lkZTogJ3Vzc3InLCBpcDogQHN0YXRlLnVzc3IsIGN0cmw6IGNvbnRyb2xVU1NSLCBoYW5kbGVJUENsaWNrOiBAaGFuZGxlSVBDbGljaywgcmVmOiAnaXB1c3NyJ1xuICAgIF1cblxuXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZE5vZGVJUCdcblxuICBoYW5kbGVJUENsaWNrOiAoZGlyLCBldiktPlxuICAgIEBwcm9wcy5oYW5kbGVJUENsaWNrIEBwcm9wcy5zaWRlLCBkaXJcblxuICByZW5kZXI6IC0+XG4gICAgcG9zaXRpb24gPSBpZiBAcHJvcHMuc2lkZSA9PSAndXNhJyB0aGVuIDEgZWxzZSAwXG5cbiAgICBoaWRlSVAgPSBpZiBAcHJvcHMuaXAgPT0gMCB0aGVuICdoaWRlJyBlbHNlICcnXG5cbiAgICBnQXR0cnMgPVxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgjey1AcHJvcHMubm9kZS53aWR0aC8yICogcG9zaXRpb259LCAjey1AcHJvcHMubm9kZS50aXRsZUhlaWdodC8yIC0gMX0pXCJcbiAgICAgIHdpZHRoOiBAcHJvcHMubm9kZS53aWR0aC8yXG4gICAgICBoZWlnaHQ6IEBwcm9wcy5ub2RlLmhlaWdodCAtIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0XG4gICAgICBjbGFzc05hbWU6IFwibm9kZS1pcC0je0Bwcm9wcy5zaWRlfVwiXG5cbiAgICB0ZXh0QXR0cnMgPVxuICAgICAgeDogQHByb3BzLm5vZGUud2lkdGgvNFxuICAgICAgeTogQHByb3BzLm5vZGUuaGVpZ2h0LzIgLSAxXG4gICAgICBjbGFzc05hbWU6IGhpZGVJUFxuXG4gICAgaXBDbGlja0hlaWdodCA9IChAcHJvcHMubm9kZS5oZWlnaHQgLSBAcHJvcHMubm9kZS50aXRsZUhlaWdodCkgLyAyXG5cbiAgICBSLmcgZ0F0dHJzLCBbXG4gICAgICBSLnJlY3RcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMubm9kZS5oZWlnaHQgLSBAcHJvcHMubm9kZS50aXRsZUhlaWdodFxuICAgICAgICBjbGFzc05hbWU6IFwibm9kZS1pcC1iZy0je0Bwcm9wcy5zaWRlfSAje2hpZGVJUH1cIlxuICAgICAgUi50ZXh0IHRleHRBdHRycywgQHByb3BzLmlwXG4gICAgICBSLnJlY3RcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgICAgaGVpZ2h0OiBpcENsaWNrSGVpZ2h0XG4gICAgICAgIGNsYXNzTmFtZTogXCJub2RlLWlwLWNsaWNrXCJcbiAgICAgICAgb25DbGljazogQGhhbmRsZUlQQ2xpY2suYmluZCB0aGlzLCAndXAnXG4gICAgICBSLnJlY3RcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgICAgaGVpZ2h0OiBpcENsaWNrSGVpZ2h0XG4gICAgICAgIHk6IGlwQ2xpY2tIZWlnaHRcbiAgICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtaXAtY2xpY2tcIlxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlSVBDbGljay5iaW5kIHRoaXMsICdkbidcbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbkJvYXJkU3RhdHVzVmFsdWUgPSByZXF1aXJlICcuL0JvYXJkU3RhdHVzVmFsdWUnXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZFN0YXR1cydcbiAgcmVuZGVyOiAtPlxuICBcbiAgICBzY29yZVNpZGUgPSAnJ1xuICAgIGlmIEBwcm9wcy5zY29yZSAhPSAwXG4gICAgICBzY29yZVNpZGUgPSBpZiBAcHJvcHMuc2NvcmUgPCAwIHRoZW4gJ3Vzc3InIGVsc2UgJ3VzYSdcblxuICAgICMgUm91bmQ6IDAgaXMgaGVhZGxpbmUsIG9kZHMgYXJlIFVTU1IsIGV2ZW5zIGFyZSBVU0FcbiAgICByb3VuZCA9IGlmIEBwcm9wcy5yb3VuZCA9PSAwIHRoZW4gJ0gnIGVsc2UgTWF0aC5jZWlsKEBwcm9wcy5yb3VuZCAvIDIpXG4gICAgcm91bmRTaWRlID0gJydcbiAgICBpZiBAcHJvcHMucm91bmQgIT0gMFxuICAgICAgcm91bmRTaWRlID0gaWYgQHByb3BzLnJvdW5kICUgMiA9PSAxIHRoZW4gJ3Vzc3InIGVsc2UgJ3VzYSdcblxuICAgICMgU2hvcnRoYW5kIGZvciB0aGUgY29tcG9uZW50c1xuICAgIHN0YXR1c1ZhbHVlID0gKGlkPScnLCB0aXRsZT0nJywgdmFsPScnLCBzaWRlPScnKT0+XG4gICAgICBCb2FyZFN0YXR1c1ZhbHVlIF8uYXNzaWduIHtpZCwgdGl0bGUsIHZhbCwgc2lkZX0sIGhhbmRsZVZhbENsaWNrOiBAcHJvcHMuaGFuZGxlVmFsQ2xpY2tcblxuXG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnQm9hcmRTdGF0dXMnLCBbXG4gICAgICBSLmRsIGNsYXNzTmFtZTogJ2NvbCcsIFtcbiAgICAgICAgc3RhdHVzVmFsdWUgJ3Njb3JlJywgJ1Njb3JlJywgTWF0aC5hYnMoQHByb3BzLnNjb3JlKSwgc2NvcmVTaWRlXG4gICAgICAgIHN0YXR1c1ZhbHVlICdkZWZjb24nLCAnRGVmY29uJywgQHByb3BzLmRlZmNvblxuICAgICAgICBzdGF0dXNWYWx1ZSAnbWlsb3BzJywgJ01pbE9wcycsIEBwcm9wcy5taWxvcHNbMF0sICd1c2EnXG4gICAgICAgIHN0YXR1c1ZhbHVlICdtaWxvcHMnLCAnJywgQHByb3BzLm1pbG9wc1sxXSwgJ3Vzc3InXG4gICAgICBdXG4gICAgICBSLmRsIGNsYXNzTmFtZTogJ2NvbCcsIFtcbiAgICAgICAgc3RhdHVzVmFsdWUgJ3R1cm4nLCAnVHVybicsIEBwcm9wcy50dXJuXG4gICAgICAgIHN0YXR1c1ZhbHVlICdyb3VuZCcsICdSb3VuZCcsIHJvdW5kLCByb3VuZFNpZGVcbiAgICAgICAgc3RhdHVzVmFsdWUgJ3NwYWNlJywgJ1NwYWNlJywgQHByb3BzLnNwYWNlWzBdLCAndXNhJ1xuICAgICAgICBzdGF0dXNWYWx1ZSAnc3BhY2UnLCAnJywgQHByb3BzLnNwYWNlWzFdLCAndXNzcidcbiAgICAgIF1cbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZFN0YXR1c1ZhbHVlJ1xuICByZW5kZXI6IC0+XG4gICAgc2lkZUNsYXNzID0gc3dpdGNoIEBwcm9wcy5zaWRlXG4gICAgICB3aGVuICd1c2EnLCAndXNzcicgdGhlbiBAcHJvcHMuc2lkZVxuICAgICAgZWxzZSAnJ1xuXG4gICAgZGVjQXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiAnZGVjJ1xuICAgICAgb25DbGljazogQHByb3BzLmhhbmRsZVZhbENsaWNrLmJpbmQobnVsbCwgQHByb3BzLmlkLCAnZGVjJywgQHByb3BzLnNpZGUpXG4gICAgaW5jQXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiAnaW5jJyxcbiAgICAgIG9uQ2xpY2s6IEBwcm9wcy5oYW5kbGVWYWxDbGljay5iaW5kKG51bGwsIEBwcm9wcy5pZCwgJ2luYycsIEBwcm9wcy5zaWRlKVxuXG4gICAgUi5kaXYge30sIFtcbiAgICAgIFIuZHQge30sIEBwcm9wcy50aXRsZVxuICAgICAgUi5kZCBjbGFzc05hbWU6IFwiU3RhdHVzVmFsdWUgI3tzaWRlQ2xhc3N9XCIsIFtcbiAgICAgICAgUi5zcGFuIGRlY0F0dHJzLCAn4peAJ1xuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAndmFsJywgQHByb3BzLnZhbFxuICAgICAgICBSLnNwYW4gaW5jQXR0cnMsICfilrYnXG4gICAgICBdXG4gICAgXVxuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5jYXJkU3RhZ2VzID0gMTonRUFSTFknLCAyOidNSUQnLCAzOidMQVRFJ1xuXG5jYXJkQ2xhc3NOYW1lID0gKHByb3BzKSAtPlxuICBvd25lckNsYXNzID0gXCJvd25lci0je3Byb3BzLm93bmVyfVwiXG4gIGNsYXNzZXMgPSBjeFxuICAgICdhc2lhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdBc2lhIFNjb3JpbmcnXG4gICAgJ2V1cm9wZVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnRXVyb3BlIFNjb3JpbmcnXG4gICAgJ21pZGRsZUVhc3RTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ01pZGRsZSBFYXN0IFNjb3JpbmcnXG4gICAgJ2NlbnRyYWxBbWVyaWNhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdDZW50cmFsIEFtZXJpY2EgU2NvcmluZydcbiAgICAnc291dGhlYXN0QXNpYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnU291dGhlYXN0IEFzaWEgU2NvcmluZyonXG4gICAgJ2FmcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQWZyaWNhIFNjb3JpbmcnXG4gICAgJ3NvdXRoQW1lcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnU291dGggQW1lcmljYSBTY29yaW5nJ1xuICAgICdvbmdvaW5nJzogcHJvcHMub25nb2luZ1xuXG4gIG93bmVyQ2xhc3MgKyAnICcgKyBjbGFzc2VzXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdDYXJkJ1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiBjYXJkQ2xhc3NOYW1lKEBwcm9wcykgKyAnIGNhcmQnLCBbXG4gICAgICBSLmEge2NsYXNzTmFtZTogJ2NhcmQtdGl0bGUtaG9sZGVyJywgaHJlZjogXCIjL2NhcmQvI3tAcHJvcHMuaWR9XCJ9LCBbXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdjYXJkLXN0YWdlJywgY2FyZFN0YWdlc1tAcHJvcHMuc3RhZ2VdXG4gICAgICAgIFIuaDQgY2xhc3NOYW1lOiAnY2FyZC1vcHMnLCBpZiBAcHJvcHMub3BzIDwgMSB0aGVuIFwiU1wiIGVsc2UgQHByb3BzLm9wc1xuICAgICAgICBSLmg0IGNsYXNzTmFtZTogJ2NhcmQtdGl0bGUnLCBbXG4gICAgICAgICAgXCIje0Bwcm9wcy50aXRsZX0gXCJcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnY2FyZC1pZCcsIFwiIyN7QHByb3BzLmlkfVwiXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICAgIFIucCBjbGFzc05hbWU6ICdjYXJkLXRleHQnLCBAcHJvcHMudGV4dFxuICAgIF1cblxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuQ2FyZCA9IHJlcXVpcmUgJy4vQ2FyZCdcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0NhcmRMaXN0J1xuICByZW5kZXI6IC0+XG4gICAgY2xhc3NOYW1lID0gY3hcbiAgICAgICdjYXJkTGlzdCc6IHRydWVcbiAgICAgICdjYXJkTGlzdEZ1bGwnOiBAcHJvcHMuZnVsbFRleHRcbiAgICBSLmRpdiB7Y2xhc3NOYW1lfSwgQHByb3BzLmNhcmRzLm1hcCAoZWwpID0+XG4gICAgICBDYXJkIF8ubWVyZ2UgZWwsIHNob3dGdWxsVGV4dDogQHByb3BzLmZ1bGxUZXh0XG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnTmF2VmlldydcbiAgZ2V0RGVmYXVsdFByb3BzOiAtPlxuICAgIGFjdGl2ZTogJydcblxuICByZW5kZXI6IC0+XG5cbiAgICBsaSA9IChtZW51S2V5LCBocmVmLCB0aXRsZSk9PlxuICAgICAgUi5saSBjbGFzc05hbWU6IGN4KCdhY3RpdmUnOiBAcHJvcHMuYWN0aXZlID09IG1lbnVLZXkpLFxuICAgICAgICBSLmEgJ2RhdGEtYmVmb3JlJzogJ+KYhScsICdkYXRhLWFmdGVyJzogJ+KYhScsIGhyZWY6IGhyZWYsIHRpdGxlXG5cbiAgICBSLm5hdiBjbGFzc05hbWU6IFwibmF2YmFyIFwiLCByb2xlOiBcIm5hdmlnYXRpb25cIixcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiwgW1xuXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJuYXZiYXItaGVhZGVyXCIsXG4gICAgICAgICAgUi5hIGNsYXNzTmFtZTogXCJuYXZiYXItYnJhbmRcIiwgaHJlZjogJyMvJywgW1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJ0d2lcIiwgXCJUd2lcIlxuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJzdHJ1Z1wiLCBcIlN0cnVnXCJcbiAgICAgICAgICBdXG5cbiAgICAgICAgUi51bCBjbGFzc05hbWU6IFwibmF2IG5hdmJhci1uYXZcIiwgW1xuICAgICAgICAgIGxpICdjYXJkcycsICcjL2NhcmRzJywgJ0NhcmRzJ1xuICAgICAgICAgIGxpICdib2FyZCcsICcjL2JvYXJkJywgJ0JvYXJkJ1xuICAgICAgICAgIGxpICdhYm91dCcsICcjL2Fib3V0JywgJ0Fib3V0J1xuICAgICAgICBdXG5cbiAgICAgIF1cbiJdfQ==
