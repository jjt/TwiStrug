(function() {
  var $, AboutView, Board, BoardLink, BoardNode, BoardNodeIP, BoardPicView, BoardStatus, BoardView, Card, CardList, CardView, CardsView, CountriesView, HomeView, NavView, R, StatusValue, TwiStrug, WhoopsView, addReactKey, cardClassName, cardStages, cx, filterTruthy, filterUnique, filterValidCardIds, qs, rangedGameVal, setPageTitle, sortNumerical, update, zeroPad,
    __hasProp = {}.hasOwnProperty,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

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

  setPageTitle = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return document.title = args.join(' | ') + ' - TwiStrug';
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

  filterTruthy = function(el) {
    if (el) {
      return el;
    }
  };

  filterUnique = function(el, i, arr) {
    return arr.indexOf(el) === i;
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

  cardStages = {
    1: 'EARLY',
    2: 'MID',
    3: 'LATE'
  };

  filterValidCardIds = function(el) {
    return (1 <= el && el <= 110);
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
        filterIds = this.state.filter.sort(sortNumerical).filter(filterTruthy).filter(filterUnique);
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
          filter: ids.sort(sortNumerical).filter(filterValidCardIds)
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

  AboutView = React.createClass({
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

  CountriesView = React.createClass({
    render: function() {
      return R.div({
        className: 'countriesView'
      }, [R.h2({}, 'Countries')]);
    }
  });

  BoardPicView = React.createClass({
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

  BoardView = React.createClass({
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

  rangedGameVal = function(id, val) {
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

  Board = React.createClass({
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
        state.game[id] = rangedGameVal(id, state.game[id] + delta);
      } else {
        index = side === 'usa' ? 0 : 1;
        state.game[id][index] = rangedGameVal(id, state.game[id][index] + delta);
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

  StatusValue = React.createClass({
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

  BoardStatus = React.createClass({
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
          return StatusValue(_.assign({
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

  BoardLink = React.createClass({
    displayName: 'BoardLink',
    render: function() {
      return R.line(this.props);
    }
  });

  BoardNode = React.createClass({
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

  BoardNodeIP = React.createClass({
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

  NavView = React.createClass({
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

  TwiStrug = React.createClass({
    componentWillMount: function() {
      return $('#placeholder').hide();
    },
    setView: function(name, pageTitle, menuActive, data) {
      if (menuActive == null) {
        menuActive = '';
      }
      if (data == null) {
        data = {};
      }
      if (pageTitle != null) {
        setPageTitle(pageTitle);
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
        state = qs.toObj(args);
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
        return R.p({
          className: 'lead'
        }, 'TwiStrug is loading...');
      }
      mainView = (function() {
        switch (this.state.view.name) {
          case 'home':
            return HomeView({
              cards: this.props.cards,
              state: this.state.view.data.state
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
            return BoardView(this.state.view.data);
          case 'about':
            return AboutView();
          case 'whoops':
            return WhoopsView();
        }
      }).call(this);
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

}).call(this);
