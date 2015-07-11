// Include Gulp
var gulp = require('gulp');

// Include Plug-ins
var imagemin = require('gulp-imagemin'),
    minifyCSS = require('gulp-minify-css'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch');

// Minify new images
gulp.task('imagemin', function() {
  var imgSrc = 'images/**/*',
      imgDst = 'images/';
  gulp.src(imgSrc)
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

// Gulp Sass Task 
gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')    
    .pipe(sourcemaps.init()) // Initializes sourcemaps
    .pipe(sass())
    .pipe(prefix('last 2 versions', '> 1%', 'ie 8'))
    .pipe(sourcemaps.write()) // Writes sourcemaps into the CSS file
    .pipe(gulp.dest('css'));
})

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass'])
})

gulp.task('default', ['sass', 'watch']);