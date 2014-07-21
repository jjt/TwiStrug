'use strict';
// Generated on 2014-04-02 using generator-gulp-webapp 0.0.5

var domain = 'http://twistrug.loc';

var gulp = require('gulp');
var open = require('open');
var wiredep = require('wiredep').stream;
var runSequence = require('run-sequence');
var mapStream = require('map-stream');
var through = require('through2');

// Load plugins
var $ = require('gulp-load-plugins')();
var browserify = require('browserify');


var logErr = function(err) {
  console.log('ERR', err);
  this.emit('end')
}


// Styles
gulp.task('styles', function () {
    return gulp.src('app/styles/main.scss')
        .pipe($.sass({
          includePaths: [
            'app/bower_components',
            'app/bower_components/bourbon/app/assets/stylesheets',
            'app/bower_components/bootstrap-sass/vendor/assets/stylesheets'
          ],
          errLogToConsole: true
        }))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('app/styles'))
        .pipe($.size());
});

// Scripts
gulp.task('scripts', function () {
    //return gulp.src('app/scripts/**/*.js')
        //.pipe($.jshint('.jshintrc'))
        //.pipe($.jshint.reporter('default'))
        //.pipe($.size());
});


// CoffeeScript
gulp.task('coffee', function() {
  return gulp.src('coffee/**/*.coffee')
    .pipe($.coffee())
    .on('error', logErr)
    .pipe(gulp.dest(''));
});

gulp.task('browserify', function () {
  return browserify({
      entries: ['./src/Twistrug.coffee'],
      extensions:['.coffee'] 
    })
    .on('error', logErr)
    .bundle({debug:true})
    .on('error', logErr)
    .pipe(require('vinyl-source-stream')('app-bundle.js'))
    .pipe(gulp.dest('./app/scripts/'));
});


// HTML
gulp.task('html', ['styles', 'scripts'], function () {
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');

    return gulp.src('app/*.html')
        .pipe($.useref.assets())
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe($.rev())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe($.rev())
        .pipe(cssFilter.restore())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});

// Images
gulp.task('images', function () {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe($.size());
});

// Clean
gulp.task('clean', function () {
    return gulp.src(['dist/data',
      'dist/styles',
      'dist/scripts',
      'dist/images',
      'dist/fontello',
      'dist/bower_components'
      ],
      { read: false }
    ).pipe($.clean());
});

// Bower components
gulp.task('libs', function(){
  return gulp.src('app/scripts/lib/**/*')
    .pipe(gulp.dest('dist/scripts/lib'))
});


gulp.task('data', function() {
  var jsFilter = $.filter('**/*.json');
  return gulp.src('app/data/**/*')
    .pipe(jsFilter)
    .pipe($.jsonminify())
    .pipe(jsFilter.restore())
    .pipe(gulp.dest('dist/data'));
});


// Build lodash
// DOES NOT WORK
gulp.task('lodash', function(){
  return gulp.src('src/**/*.coffee')
    .pipe(function(opts) {

      var stream = through.obj(function(file, enc, cb){
        var contents = file.contents.toString();
        var re = /_\.(\w*)/g;
        var matches = contents.match(re);
        this.push(file);
        cb();
      });

      return stream;
    })
    .pipe(function(file, cb){
      console.log(arguments);
    });
});


gulp.task('fontello', function(){
  return gulp.src('app/fontello/**/*').pipe(gulp.dest('dist/fontello'));
});


// Build
gulp.task('build', function() {
  return runSequence('clean',
    ['styles', 'coffee', 'html', 'images', 'data', 'fontello'],
    'libs'
  );

});


// Connect
gulp.task('connect', $.connect.server({
    root: ['app'],
    port: 9000,
    livereload: true
}));

// Open
gulp.task('serve', ['connect', 'styles'], function() {
});

// Inject Bower components
gulp.task('wiredep', function () {
    gulp.src('app/styles/*.scss')
        .pipe(wiredep({
            directory: 'app/bower_components',
            ignorePath: 'app/bower_components/'
        }))
        .pipe(gulp.dest('app/styles'));

    gulp.src('app/*.html')
        .pipe(wiredep({
            directory: 'app/bower_components',
            ignorePath: 'app/'
        }))
        .pipe(gulp.dest('app'));
});

// Watch
gulp.task('watch', ['serve'], function () {
    // Watch for changes in `app` folder
    gulp.watch([
        'app/*.html',
        'app/styles/**/*.css',
        'app/scripts/**/*.js',
        'app/images/**/*'
    ], function (event) {
        return gulp.src(event.path)
            .pipe($.connect.reload());
    });

    // Watch .scss files
    gulp.watch('app/styles/**/*.scss', ['styles']);

    // Watch image files
    gulp.watch('app/images/**/*', ['images']);

    // Watch bower files
    //gulp.watch('bower.json', ['wiredep']);

    gulp.watch('coffee/**/*.coffee', ['coffee']);

    gulp.watch('src/**/*.coffee', ['browserify']);
});



// Default task
gulp.task('default', ['watch'], function () {
});
