(function() {
  var $app, Card, CardList, CardView, CardsView, MapView, R, TwiStrug, cardClassName, cx;

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

  Card = React.createClass({
    render: function() {
      return R.a({
        href: "#/card/" + this.props.id,
        className: cardClassName(this.props)
      }, [
        R.h3({
          className: 'card-ops'
        }, this.props.ops), R.div({
          className: 'card-title-holder'
        }, [
          R.h4({
            className: 'card-title'
          }, this.props.title)
        ])
      ]);
    }
  });

  CardList = React.createClass({
    render: function() {
      return R.div({
        className: 'cardList'
      }, this.props.cards.map(function(el) {
        return Card(el);
      }));
    }
  });

  CardsView = React.createClass({
    render: function() {
      return R.div({}, [
        R.h2({}, 'Cards'), CardList({
          cards: this.props.cards
        })
      ]);
    }
  });

  CardView = React.createClass({
    render: function() {
      var imageUrl;
      imageUrl = "/images/cards/" + (('000' + this.props.id).substr(-3, 3)) + ".jpg";
      return R.div({
        className: 'cardView ' + cardClassName(this.props)
      }, [
        R.h2({}, [
          R.span({
            className: 'card-ops'
          }, this.props.ops), this.props.title
        ]), R.img({
          className: 'pull-right',
          src: imageUrl
        }), R.p({}, this.props.text)
      ]);
    }
  });

  MapView = React.createClass({
    render: function() {
      return R.img({
        className: 'fluid',
        src: '/images/tsmap.jpg'
      });
    }
  });

  TwiStrug = React.createClass({
    getInitialState: function() {
      return {
        view: 'cards'
      };
    },
    handleRoute: function() {
      return console.log(arguments);
    },
    componentDidMount: function() {
      var router;
      router = Router({
        '/cards': this.setState.bind(this, {
          view: 'cards'
        }),
        '/map': this.setState.bind(this, {
          view: 'map'
        }),
        '/card/:id': (function(_this) {
          return function() {
            var id;
            id = +arguments[0];
            console.log(id);
            return _this.setState({
              view: 'card',
              card: _.find(_this.props.cards, {
                'id': id
              })
            });
          };
        })(this)
      });
      router.init();
    },
    render: function() {
      switch (this.state.view) {
        case 'card':
          return CardView(this.state.card);
        case 'cards':
          return CardsView({
            cards: this.props.cards
          });
        case 'map':
          return MapView();
      }
    }
  });

  $.getJSON('/data/cards.json').done(function(cards) {
    cards = cards.map(function(el) {
      if (el.title.indexOf('Scoring') !== -1) {
        el.ops = 'S';
      }
      return el;
    });
    return React.renderComponent(TwiStrug({
      cards: cards
    }), $app);
  });

}).call(this);
