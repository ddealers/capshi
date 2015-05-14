var gulp = require('gulp');
var gls = require('gulp-live-server');
var stylus = require('gulp-stylus');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
gulp.task('compile:js', function(){
	gulp.src('_coffee/**/*.coffee')
	.pipe(coffee({bare: true}).on('error', gutil.log))
	.pipe(gulp.dest('public/js/'))
})
gulp.task('compile:css', function(){
	gulp.src('_stylus/**/*.styl')
	.pipe(stylus({compress: true}))
	.pipe(gulp.dest('public/css/'));
});
gulp.task('watch', function(){
	gulp.watch('_stylus/**/*.styl', ['compile:css']);
	gulp.watch('_coffee/**/*.coffee', ['compile:js']);
});
gulp.task('serve', function(){
	var server = gls.static('public');
	server.start();
	gulp.watch(['public/**/*.js', 'public/**/*.css', 'public/**/*.html'], server.notify);
});
gulp.task('default', ['watch', 'serve']);