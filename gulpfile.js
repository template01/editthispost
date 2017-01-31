var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var php		= require('gulp-connect-php');
var babel 	= require("gulp-babel");
var sourcemaps 	= require("gulp-sourcemaps");
var concat 	= require("gulp-concat");


function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString())

  this.emit('end')
}

// Static Server + watching scss/html files
gulp.task('serve', ['sass','php'], function() {

    browserSync.init({
        proxy: "localhost:8001"
    });


    gulp.watch("style/sass/*.sass", ['sass']);
    gulp.watch("index.html").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("style/sass/*.sass")
	.on('error', swallowError)
        .pipe(sass())
	.on('error', swallowError)
        .pipe(gulp.dest("style/css"))
	.on('error', swallowError)
        .pipe(browserSync.stream());
});


//gulp.task("babelCompile", function () {
//  return gulp.src("js/*.js")
//    .pipe(sourcemaps.init())
//    .pipe(babel())
//    .pipe(concat("mainAll.js"))
//    .pipe(sourcemaps.write("."))
//    .pipe(gulp.dest("dist"));
//});


gulp.task('php', function() {
    php.server({ base: './', port: 8001, keepalive: true});
});


gulp.task('default', ['serve'] );
