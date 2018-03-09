var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var reload      = browserSync.reload;
var plumber 	= require('gulp-plumber');

var SCSS_PATH = 'styles/*.scss'
var HTML_PATH = '*.html'
var CSS_PATH = 'styles'

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch(SCSS_PATH, ['sass']);
    gulp.watch('styles/partials/*.scss', ['sass']);
    gulp.watch(HTML_PATH).on('change', reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(SCSS_PATH)
    	.pipe(plumber(function(err){
      console.log('styles task error');
      console.log(err);
      this.emit('end');
    }))
        .pipe(sass())
        .pipe(gulp.dest(CSS_PATH))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);