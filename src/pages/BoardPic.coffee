module.exports = React.createClass
  displayName: 'BoardPicView'
  render: ->
    R.div className: 'boardView', [
      R.div className: 'page-header',
        R.h2 {}, 'Board'
      R.a href:'/images/tsboard.jpg',
        R.img className: 'fluid', src:'/images/tsboard.jpg'
    ]

