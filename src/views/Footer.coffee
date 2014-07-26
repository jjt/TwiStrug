R = React.DOM
module.exports = React.createClass
  render: ->
    R.div className: 'footer', [
      R.p {}, [
        "TwiStrug was made by "
        R.a href:'http://jjt.io', 'Jason Trill'
        ' with help from '
        R.a href:'http://coffeescript.org/', 'CoffeeScript'
        ', '
        R.a href:'http://facebook.github.io/react/', 'React'
        ', '
        R.a href:'http://browserify.org/', 'Browserify'
        ', '
        R.a href:'http://lodash.com/', 'Lo-Dash'
        ', '
        R.a href:'http://getbootstrap.com/', 'Bootstrap'
        ', '
        R.a href:'http://zeptojs.com', 'Zepto'
        ', and '
        R.a href:'http://gulpjs.com', 'Gulp'
        '.'
        R.br()
        'It owes its existence to '
        R.a href:'http://twilightstrategy.com', 'Twilight Strategy'
        '. Comments, suggestions, and bug reports can be aimed at '
        R.a href:'http://github.com/jjt/twistrug/issues', 'Github'
        ' or '
        R.a href:'http://twitter.com/jasontrill', '@jasontrill'
        '.'
      ]
    ]
