(function() {
  var $app, Card, CardList, CardsView, R, TwiStrug, cx, router, routes, showCard, showCards, showMap;

  R = React.DOM;

  cx = React.addons.classSet;

  $app = document.getElementById('app');

  Card = React.createClass({
    render: function() {
      var classes;
      console.log(this.props);
      classes = cx({
        'card': true,
        'owner-us': this.props.owner === 'us',
        'owner-ussr': this.props.owner === 'ussr'
      });
      return R.div({
        className: classes
      }, [
        R.h5({}, this.props.title), R.h1({
          className: 'card-ops'
        }, this.props.ops)
      ]);
    }
  });

  CardList = React.createClass({
    render: function() {
      console.log(this.props);
      return R.div({
        className: 'cardList'
      }, this.props.cards.map(function(el) {
        return Card(el);
      }));
    }
  });

  CardsView = React.createClass({
    render: function() {
      console.log(this.props.cards);
      return R.div({}, [
        R.h2({}, 'Cards'), CardList({
          cards: this.props.cards
        })
      ]);
    }
  });

  TwiStrug = React.createClass({
    render: function() {
      return R.div({}, [R.h2({}, 'TWISTRUG')]);
    }
  });

  showCards = function(filter) {
    if (filter == null) {
      filter = 'none';
    }
    console.log('showCards');
    return $.getJSON('/data/cards.json').done(function(cards) {
      return React.renderComponent(CardsView({
        cards: cards
      }), $app);
    });
  };

  showCard = function(id) {};

  showMap = function() {
    return console.log('showMap');
  };

  routes = {
    '/': showCards,
    '/cards': showCards,
    '/cards/:filter': showCards,
    '/card/:id': showCard,
    '/map': showMap
  };

  router = Router(routes);

  router.init();

}).call(this);
