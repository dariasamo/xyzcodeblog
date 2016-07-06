<<<<<<< HEAD
// Assigning modules to local variables
var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');
=======
var gulp = require('gulp');
var watch = require('gulp-watch');
var shell = require('gulp-shell')

var sass = require('gulp-sass');
>>>>>>> 396b537936147700d2cb512a64ca18fae8a4ea9f


var paths = {
	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json']

<<<<<<< HEAD
};

// Default task
// Default task
gulp.task('default', ['less', 'minify-css', 'minify-js', 'copy']);

=======
,
	'style': {
		all: './public/styles/**/*.scss',
		output: './public/styles/'
	}

};


gulp.task('watch:sass', function () {
	gulp.watch(paths.style.all, ['sass']);
});

gulp.task('sass', function(){
	gulp.src(paths.style.all)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(paths.style.output));
});
>>>>>>> 396b537936147700d2cb512a64ca18fae8a4ea9f


gulp.task('runKeystone', shell.task('node keystone.js'));
gulp.task('watch', [

<<<<<<< HEAD
]);

gulp.task('default', ['watch', 'runKeystone']);

// Less Compiler
gulp.task('build-less', function(){
return gulp.src('site.less')
    .pipe(less())
    .pipe(gulp.dest('./source/css'));
});
=======
  'watch:sass',

]);

gulp.task('default', ['watch', 'runKeystone']);
>>>>>>> 396b537936147700d2cb512a64ca18fae8a4ea9f
