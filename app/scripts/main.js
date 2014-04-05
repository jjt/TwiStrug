(function() {
  var $app, Card, CardList, CardView, CardsView, CountriesView, MapView, R, TwiStrug, WhoopsView, cardClassName, cardStage, cx, zeroPad;

  R = React.DOM;

  cx = React.addons.classSet;

  $app = document.getElementById('app');

  cardClassName = function(props) {
    var classes, ownerClass;
    ownerClass = "owner-" + props.owner;
    classes = cx({
      'card': true,
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
        className: cardClassName(this.props)
      }, [
        R.span({
          className: 'card-stage'
        }, cardStage(this.props.stage)), R.a({
          className: 'card-title-holder',
          href: "#/card/" + this.props.id
        }, [
          R.h4({
            className: 'card-ops'
          }, this.props.ops < 1 ? "S" : this.props.ops), R.h4({
            className: 'card-title'
          }, this.props.title)
        ]), R.div({
          className: 'card-text'
        }, this.props.text)
      ]);
    }
  });

  CardList = React.createClass({
    getInitialState: function(props) {
      return _.merge({
        fullText: false
      }, this.propsToState(this.props));
    },
    propsToState: function(props) {
      if (props == null) {
        props = this.props;
      }
      return {
        filter: props.filter != null ? props.filter : false,
        sort: props.sort != null ? props.sort : 'default'
      };
    },
    componentWillReceiveProps: function(nextProps) {
      return this.setState(this.propsToState(nextProps));
    },
    sortAndFilterCards: function() {
      var cards, order, sort, _ref;
      _ref = this.state.sort.split('-'), sort = _ref[0], order = _ref[1];
      if (sort === 'default') {
        sort = ['stage', 'id'];
      }
      if (sort === 'textlen') {
        sort = function(el) {
          return el.text.length;
        };
      }
      cards = _.sortBy(this.props.cards, sort);
      if (order === 'rev') {
        cards.reverse();
      }
      return cards;
    },
    render: function() {
      var className;
      console.log(this.props.fullText);
      className = cx({
        'cardList': true,
        'cardListFull': this.props.fullText
      });
      return R.div({
        className: className
      }, this.sortAndFilterCards().map((function(_this) {
        return function(el) {
          return Card(_.merge(el, {
            showFullText: _this.props.fullText
          }));
        };
      })(this)));
    }
  });

  CardsView = React.createClass({
    getInitialState: function() {
      return {
        fullText: false
      };
    },
    handleFullText: function() {
      return this.setState({
        fullText: this.refs.fullText.getDOMNode().checked
      });
    },
    render: function() {
      console.log('CardsView', this.state);
      return R.div({
        className: 'cardsView'
      }, [
        R.div({
          className: 'header'
        }, [
          R.div({
            className: 'pull-right'
          }, [
            R.input({
              name: 'fullText',
              id: 'fullText',
              type: 'checkbox',
              ref: 'fullText',
              onChange: this.handleFullText,
              checked: this.state.fullText
            }), " ", R.label({
              htmlFor: 'fullText'
            }, 'Show card descriptions')
          ]), R.h2({}, 'Cards')
        ]), CardList({
          cards: this.props.cards,
          sort: this.props.sort,
          fullText: this.state.fullText
        })
      ]);
    }
  });

  CardView = React.createClass({
    componentDidMount: function() {
      return $.get("/data/cardStrategy/" + (zeroPad(this.props.id)) + ".html").done((function(_this) {
        return function(data) {
          return _this.refs.cardStrategy.getDOMNode().innerHTML = data;
        };
      })(this));
    },
    render: function() {
      var imageUrl;
      imageUrl = "/images/cards/" + (zeroPad(this.props.id)) + ".jpg";
      return R.div({
        className: 'cardView ' + cardClassName(this.props)
      }, [
        R.h2({}, [
          R.span({
            className: 'card-ops'
          }, this.props.ops < 1 ? "S" : this.props.ops), this.props.title
        ]), R.img({
          className: 'pull-right',
          src: imageUrl
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
        R.h2({}, 'Map'), R.img({
          className: 'fluid',
          src: '/images/tsmap.jpg'
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
        '/countries': this.setView.bind(this, 'countries')
      });
      router.configure({
        notfound: this.setView.bind(this, 'whoops')
      });
      router.init();
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
            sort: this.state.view.data.sort,
            sortReverse: this.state.view.data.sortReverse
          });
        case 'countries':
          return CountriesView();
        case 'map':
          return MapView();
        case 'whoops':
          return WhoopsView();
      }
      return WhoopsView();
    }
  });

  $.getJSON('/data/cards.json').done(function(cards) {
    cards = _.sortBy(cards, ['stage', 'id']);
    return React.renderComponent(TwiStrug({
      cards: cards
    }), $app);
  });

}).call(this);
