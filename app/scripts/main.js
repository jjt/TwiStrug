(function() {
  var $, $app, AboutView, BoardView, Card, CardList, CardView, CardsView, CountriesView, HomeView, R, TwiStrug, WhoopsView, cardClassName, cardStage, cx, qs, sortNumerical, zeroPad,
    __hasProp = {}.hasOwnProperty,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  R = React.DOM;

  cx = React.addons.classSet;

  $ = Zepto;

  qs = {
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

  $app = document.getElementById('app');

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

  cardStage = function(stage) {
    if (stage === 1) {
      return 'EARLY';
    }
    if (stage === 2) {
      return 'MID';
    }
    return 'LATE';
  };

  zeroPad = function(str, len) {
    if (len == null) {
      len = 3;
    }
    return ('000' + str).substr(-len, len);
  };

  sortNumerical = function(a, b) {
    return a - b;
  };

  Card = React.createClass({
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
          }, cardStage(this.props.stage)), R.h4({
            className: 'card-ops'
          }, this.props.ops < 1 ? "S" : this.props.ops), R.h4({
            className: 'card-title'
          }, this.props.title)
        ]), R.p({
          className: 'card-text'
        }, this.props.text)
      ]);
    }
  });

  CardList = React.createClass({
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

  CardsView = React.createClass({
    defaultState: function(props) {
      var _ref;
      return {
        fullText: (props != null ? (_ref = props.state) != null ? _ref.filter : void 0 : void 0) ? true : false,
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
      var _ref;
      if (((_ref = this.state) != null ? _ref.filter : void 0) != null) {
        return this.state.filter.sort(sortNumerical);
      }
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
      var ids, value, _ref;
      value = this.refs.cardFilter.getDOMNode().value;
      ids = (_ref = value.match(/\d+[^:]|\d+$/g)) != null ? _ref.map(function(el) {
        return parseInt(el, 10);
      }) : void 0;
      if (value === '' || (ids == null)) {
        this.setState({
          filter: null,
          cardFilterInput: ''
        });
        return;
      }
      return this.setState({
        cardFilterInput: value,
        fullText: true,
        filter: ids.sort(sortNumerical)
      });
    },
    handleCardFilterBlur: function() {
      var filterIds;
      filterIds = this.getFilterIds();
      this.setState({
        cardFilterInput: filterIds
      });
      if (filterIds != null) {
        return qs.set('filter', filterIds);
      } else {
        return qs["delete"]('filter');
      }
    },
    handleCardFilterClear: function() {
      this.refs.cardFilter.getDOMNode().value = '';
      this.setState({
        filter: null,
        cardFilterInput: ''
      });
      return qs["delete"]('filter');
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
            return qs.set('sort', sort);
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
          className: 'page-header'
        }, [
          R.h2({}, 'Cards'), " ", R.div({
            className: 'cardControls sortBy pull-left'
          }, [R.strong({}, 'Sort by:'), sortLink('stage', 'Stage'), sortLink('ops', 'Ops'), sortLink('side', 'Side')]), R.input({
            name: 'fullText',
            id: 'fullText',
            type: 'checkbox',
            ref: 'fullText',
            onChange: this.handleFullText,
            checked: this.state.fullText
          }), " ", R.label({
            htmlFor: 'fullText'
          }, 'Show card text'), R.div({
            className: 'cards-filter-by-id'
          }, [
            R.label({
              htmlFor: 'cardFilter'
            }, [
              "Filter cards by ids ", R.a({
                className: 'cards-filter-by-id-clear',
                onClick: this.handleCardFilterClear
              }, 'clear')
            ]), R.input({
              name: 'cardFilter',
              type: 'text',
              ref: 'cardFilter',
              onChange: this.handleCardFilterChange,
              onBlur: this.handleCardFilterBlur,
              value: this.state.cardFilterInput,
              placeholder: 'Paste from WarGameRoom or enter ids'
            })
          ])
        ]), CardList({
          cards: this.filterAndSortCards(),
          fullText: this.state.fullText
        })
      ]);
    }
  });

  AboutView = React.createClass({
    render: function() {
      return R.div({
        className: 'aboutView'
      }, [
        R.div({
          className: 'page-header'
        }, R.h2({}, "About TwiStrug")), R.img({
          className: 'imgRight',
          src: "/images/tsbox.jpg"
        }), R.p({}, [
          "TwiStrug is for people who want to learn more about the cards of ", R.a({
            href: "http://en.wikipedia.org/wiki/Twilight_Struggle"
          }, "Twilight Struggle"), " in a zippy web app."
        ]), R.p({}, [
          "For more in-depth strategy, go to the excellent ", R.a({
            href: "http://twilightstrategy.com"
          }, "Twilight Strategy"), " site. It has tons of great content and analysis available, including discussions about nearly every card. Please support Twilight Strategy and its author, ", R.em({}, "theory"), ", by purchasing Twilight Strugle from Amazon on the sidebar of the site."
        ])
      ]);
    }
  });

  CardView = React.createClass({
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
      return $.get("/data/cardStrategyLinked/" + (zeroPad(this.props.card.id)) + ".html", (function(_this) {
        return function(data) {
          return _this.refs.cardStrategy.getDOMNode().innerHTML = data;
        };
      })(this));
    },
    render: function() {
      var card, imageUrl;
      card = this.props.card;
      imageUrl = "/images/cards/" + (zeroPad(card.id)) + ".jpg";
      return R.div({
        className: 'cardView'
      }, [
        R.div({
          className: 'page-header clearfix'
        }, R.h2({
          className: cardClassName(card)
        }, [
          R.span({
            className: 'card-ops'
          }, card.ops < 1 ? "S" : card.ops), card.title
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
        ])), R.img({
          src: imageUrl,
          className: 'imgRight'
        }), R.p({}, card.text), R.div({
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

  CountriesView = React.createClass({
    render: function() {
      return R.div({
        className: 'countriesView'
      }, [R.h2({}, 'Countries')]);
    }
  });

  BoardView = React.createClass({
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

  WhoopsView = React.createClass({
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

  HomeView = React.createClass({
    render: function() {
      return R.div({}, [
        R.p({
          className: 'lead'
        }, [
          "TwiStrug is a companion application for ", R.a({
            href: "http://en.wikipedia.org/wiki/Twilight_Struggle"
          }, "Twilight Struggle"), ". It would not exist without ", R.a({
            href: "http://twilightstrategy.com"
          }, "Twilight Strategy"), "."
        ]), CardsView({
          cards: this.props.cards
        })
      ]);
    }
  });

  TwiStrug = React.createClass({
    setView: function(name, data) {
      if (data == null) {
        data = {};
      }
      return this.setState({
        view: {
          name: name,
          data: data
        }
      });
    },
    componentDidMount: function() {
      var router;
      router = new Router({
        '/board': this.setView.bind(this, 'board'),
        '/card/:id': (function(_this) {
          return function(id) {
            var nextId, prevId;
            id = +id;
            nextId = id === 110 ? 1 : id + 1;
            prevId = id === 1 ? 110 : id - 1;
            return _this.setView('card', {
              card: _.find(_this.props.cards, {
                id: id
              }),
              nextCard: _.find(_this.props.cards, {
                id: nextId
              }),
              prevCard: _.find(_this.props.cards, {
                id: prevId
              })
            });
          };
        })(this),
        '/countries': this.setView.bind(this, 'countries'),
        '/about': this.setView.bind(this, 'about')
      });
      router.configure({
        notfound: this.setView.bind(this, 'whoops')
      });
      router.on(/cards\??(.*)/, (function(_this) {
        return function(args) {
          var state;
          state = qs.toObj(args);
          if ((state != null ? state.filter : void 0) != null) {
            state.filter = state.filter.map(function(el) {
              return parseInt(el, 10);
            });
          }
          return _this.setView('cards', {
            state: state
          });
        };
      })(this));
      router.init('/cards');
    },
    render: function() {
      var _ref;
      if (!((_ref = this.state) != null ? _ref.view : void 0)) {
        return R.p({
          className: 'lead'
        }, 'TwiStrug is loading');
      }
      switch (this.state.view.name) {
        case 'home':
          return HomeView({
            cards: this.props.cards
          });
        case 'card':
          return CardView(this.state.view.data);
        case 'cards':
          return CardsView({
            cards: this.props.cards,
            state: this.state.view.data.state
          });
        case 'countries':
          return CountriesView();
        case 'board':
          return BoardView();
        case 'about':
          return AboutView();
        case 'whoops':
          return WhoopsView();
      }
      return WhoopsView();
    }
  });

  $.getJSON('/data/cards.json', function(cards) {
    cards = _.sortBy(cards, ['stage', 'id']).map(function(el) {
      el.key = el.id;
      return el;
    });
    return React.renderComponent(TwiStrug({
      cards: cards
    }), $app);
  });

}).call(this);
