(function() {
  var $, AboutView, BoardView, Card, CardList, CardView, CardsView, CountriesView, HomeView, MapView, R, TwiStrug, WhoopsView, addReactKey, cardClassName, cardStages, cx, filterTruthy, filterUnique, filterValidCardIds, nodeGutter, nodeHeight, nodeTitleFontSize, nodeTitleHeight, nodeWidth, qs, setPageTitle, snapToGrid, sortNumerical, zeroPad,
    __hasProp = {}.hasOwnProperty,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  R = React.DOM;

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
      var _ref;
      if (((_ref = this.state) != null ? _ref.filter : void 0) != null) {
        return this.state.filter.sort(sortNumerical).filter(filterTruthy).filter(filterUnique);
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
            className: 'cardControls'
          }, [R.strong({}, 'Sort by:'), sortLink('stage', 'Stage'), sortLink('ops', 'Ops'), sortLink('side', 'Side')]), R.div({
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
          ]), R.div({
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
              placeholder: 'Paste from Wargameroom or enter ids'
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

  nodeWidth = 66;

  nodeHeight = 50;

  nodeGutter = 14;

  nodeTitleHeight = 16;

  nodeTitleFontSize = 12;

  snapToGrid = function(obj) {
    var gridX, gridY;
    gridX = Math.round((nodeWidth + nodeGutter) / 2);
    gridY = Math.round((nodeHeight + nodeGutter) / 2);
    obj.x = Math.round(obj.x / gridX) * gridX;
    obj.y = Math.round(obj.y / gridY) * gridY;
    if (obj.px) {
      obj.px = obj.x;
    }
    if (obj.py) {
      obj.py = obj.y;
    }
    return obj;
  };

  MapView = React.createClass({
    getInitialState: function() {
      return {
        debugObj: {}
      };
    },
    getDefaultProps: function() {
      return {
        width: 1140,
        height: 700
      };
    },
    dragend: function(el) {
      var coords;
      coords = this.state.coords;
      coords[el.name] = {
        x: Math.round(el.x),
        y: Math.round(el.y)
      };
      console.log(el.name, coords[el.name]);
      el.fixed = true;
      return this.setState({
        coords: coords
      });
    },
    componentDidMount: function() {
      return $.getScript('/bower_components/d3/d3.js', (function(_this) {
        return function() {
          var color, drag, force, svg;
          color = d3.scale.category20();
          force = d3.layout.force().linkDistance(10).size([_this.props.width, _this.props.height]).gravity(0.2);
          drag = force.drag();
          drag.on('dragend', function(el) {
            console.log('dragend', el);
            el = snapToGrid(el);
            return _this.dragend(el);
          });
          svg = d3.select(_this.refs.svg.getDOMNode());
          return d3.json('/data/map-positions-grid-v5.json', function(err, positions) {
            console.log(positions);
            return d3.json('/data/countries-for-graph.json', function(err, graph) {
              var coordsReduce, link, node;
              console.log(graph);
              coordsReduce = function(obj, el) {
                if (obj == null) {
                  obj = {};
                }
                obj[el.name] = [];
                return obj;
              };
              positions = _.mapValues(positions, function(position) {
                position = snapToGrid(position);
                return position;
              });
              _this.setState({
                coords: positions
              });
              graph.nodes = graph.nodes.map(function(node) {
                console.log(node.name);
                node.px = positions[node.name].x;
                node.py = positions[node.name].y;
                node.fixed = true;
                return node;
              });
              force.nodes(graph.nodes).links(graph.links).start();
              link = svg.selectAll('.link').data(graph.links).enter().append('line').attr('class', function(d) {
                var crossContinent;
                crossContinent = d.crossContinent ? 'link-cross' : '';
                return "link " + crossContinent;
              });
              node = svg.selectAll('.node').data(graph.nodes).enter().append('g').call(drag);
              node.attr('class', function(d) {
                var btl;
                btl = d.btl === 1 ? 'node-btl' : '';
                return "node node-" + d.group + " " + btl;
              });
              node.append('rect').attr('width', nodeWidth).attr('height', nodeHeight).attr('x', -(nodeWidth / 2)).attr('y', -(nodeHeight / 2)).attr('class', "node-bg");
              node.append('rect').attr('class', 'node-title').attr('width', nodeWidth).attr('height', nodeTitleHeight).attr('x', -(nodeWidth / 2)).attr('y', -(nodeHeight / 2));
              node.append('text').attr('class', "node-label").attr('dx', -(nodeWidth / 2) + 2).attr('dy', -(nodeHeight / 2) + nodeTitleFontSize).text(function(d) {
                return d.shortname;
              });
              node.append('text').attr('class', "node-stab").attr('dx', (nodeWidth / 2) - 10).attr('dy', -(nodeHeight / 2) + nodeTitleFontSize + 1).text(function(d) {
                return d.stab;
              });
              return force.on('tick', function(e) {
                link.attr('x1', function(d) {
                  return d.source.x;
                }).attr('y1', function(d) {
                  return d.source.y;
                }).attr('x2', function(d) {
                  return d.target.x;
                }).attr('y2', function(d) {
                  return d.target.y;
                });
                return node.attr('transform', function(d) {
                  return "translate (" + d.x + "," + d.y + ")";
                });
              });
            });
          });
        };
      })(this));
    },
    render: function() {
      return R.div({
        className: 'mapView'
      }, [
        R.div({
          className: 'page-header'
        }, [R.h2({}, "Map")]), R.svg({
          className: 'map',
          width: this.props.width,
          height: this.props.height,
          ref: 'svg'
        }), R.textarea({
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

  TwiStrug = React.createClass({
    componentWillMount: function() {
      return $('#placeholder').hide();
    },
    setView: function(name, pageTitle, data) {
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
        }
      });
    },
    componentDidMount: function() {
      var router, stateRoute;
      stateRoute = function(name, pageTitle, args) {
        var state;
        state = qs.toObj(args);
        if ((state != null ? state.filter : void 0) != null) {
          state.filter = state.filter.map(function(el) {
            return parseInt(el, 10);
          });
        }
        return this.setView(name, pageTitle, {
          state: state
        });
      };
      router = new Router({
        '/board': this.setView.bind(this, 'board', 'Board'),
        '/map': this.setView.bind(this, 'map', 'Map'),
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
            return _this.setView('card', pageTitle, {
              card: card,
              nextCard: nextCard,
              prevCard: prevCard
            });
          };
        })(this),
        '/countries': this.setView.bind(this, 'countries', 'Countries'),
        '/about': this.setView.bind(this, 'about', 'About')
      });
      router.configure({
        notfound: this.setView.bind(this, 'whoops', 'Whoops')
      });
      router.on(/cards\??(.*)/, stateRoute.bind(this, 'cards', 'Cards'));
      router.on(/\??(.*)/, stateRoute.bind(this, 'cards', 'Cards'));
      router.init('/');
    },
    render: function() {
      var _ref;
      if (!((_ref = this.state) != null ? _ref.view : void 0)) {
        return R.p({
          className: 'lead'
        }, 'TwiStrug is loading...');
      }
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
          return BoardView();
        case 'map':
          return MapView();
        case 'about':
          return AboutView();
        case 'whoops':
          return WhoopsView();
      }
      return WhoopsView();
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
