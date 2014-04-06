(function() {
  var $, $app, AboutView, Card, CardList, CardView, CardsView, CountriesView, MapView, R, TwiStrug, WhoopsView, cardClassName, cardStage, cx, zeroPad;

  R = React.DOM;

  cx = React.addons.classSet;

  $ = Zepto;

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
    componentWillReceiveProps: function(nextProps) {
      return this.setState(this.propsToState(nextProps));
    },
    propsToState: function(props) {
      if (props == null) {
        props = this.props;
      }
      return {
        filter: props.filter != null ? props.filter : false,
        sort: props.sort != null ? props.sort : 'stage'
      };
    },
    getInitialState: function() {
      return _.merge(this.propsToState(this.props), {
        fullText: false
      });
    },
    handleFullText: function() {
      return this.setState({
        fullText: this.refs.fullText.getDOMNode().checked
      });
    },
    sortAndFilterCards: function() {
      var cards, order, sort, sortParam, _ref;
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
          default:
            return ['stage', 'id'];
        }
      })();
      if (sort === 'ops') {
        order = order === 'rev' ? false : 'rev';
      }
      cards = _.sortBy(this.props.cards, sortParam);
      if (order === 'rev') {
        cards.reverse();
      }
      return cards;
    },
    render: function() {
      var sortLink;
      sortLink = (function(_this) {
        return function(sort, display) {
          var className, href, ref;
          className = cx({
            active: _this.state.sort === sort
          });
          href = "#/cards/sort/" + sort;
          ref = "" + sort + "Sort";
          return R.a({
            href: href,
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
          }, 'Show card text')
        ]), CardList({
          cards: this.sortAndFilterCards(),
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
          "TwiStrug is for people who want to learn more about the cards of Twilight Struggle in a zippy web application. For more in-depth strategy, go to the excellent", " ", R.a({
            href: "http://twilightstrategy.com"
          }, "Twilight Strategy"), " ", "site. It has tons of great content and analysis available, including discussions about nearly every card. Please support Twilight Strategy and its author,", " ", R.em({}, "theory"), ", ", "by purchasing Twilight Strugle from Amazon on the sidebar of the site."
        ])
      ]);
    }
  });

  CardView = React.createClass({
    componentDidMount: function() {
      return $.get("/data/cardStrategy/" + (zeroPad(this.props.id)) + ".html", (function(_this) {
        return function(data) {
          return _this.refs.cardStrategy.getDOMNode().innerHTML = data;
        };
      })(this));
    },
    render: function() {
      var imageUrl;
      imageUrl = "/images/cards/" + (zeroPad(this.props.id)) + ".jpg";
      return R.div({
        className: 'cardView'
      }, [
        R.div({
          className: 'page-header'
        }, R.h2({
          className: cardClassName(this.props)
        }, [
          R.span({
            className: 'card-ops'
          }, this.props.ops < 1 ? "S" : this.props.ops), this.props.title
        ])), R.img({
          src: imageUrl,
          className: 'imgRight'
        }), R.p({}, this.props.text), R.div({
          className: 'card-strategy',
          id: 'card-strategy'
        }, [
          R.h3({}, [
            'Strategic Notes from', ' ', R.a({
              href: this.props.url
            }, 'TwilightStrategy.com')
          ]), R.div({
            ref: 'cardStrategy'
          })
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

  MapView = React.createClass({
    render: function() {
      return R.div({
        className: 'mapView'
      }, [
        R.div({
          className: 'page-header'
        }, R.h2({}, 'Map')), R.a({
          href: '/images/tsmap.jpg'
        }, R.img({
          className: 'fluid',
          src: '/images/tsmap.jpg'
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
      router = Router({
        '/cards': {
          '': this.setView.bind(this, 'cards'),
          '/sort/:sort': (function(_this) {
            return function(sort) {
              return _this.setView('cards', {
                sort: sort
              });
            };
          })(this)
        },
        '/map': this.setView.bind(this, 'map'),
        '/card/:id': (function(_this) {
          return function(id) {
            return _this.setView('card', {
              card: _.find(_this.props.cards, {
                id: +id
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
        case 'card':
          return CardView(this.state.view.data.card);
        case 'cards':
          return CardsView({
            cards: this.props.cards,
            sort: this.state.view.data.sort
          });
        case 'countries':
          return CountriesView();
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

  $.getJSON('/data/cards.json', function(cards) {
    cards = _.sortBy(cards, ['stage', 'id']);
    return React.renderComponent(TwiStrug({
      cards: cards
    }), $app);
  });

}).call(this);
