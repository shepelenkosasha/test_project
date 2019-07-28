let gulp = require('gulp');
let browserSync = require('browser-sync');
let sass = require('gulp-sass');
let concatCss = require('gulp-concat-css');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
 browserSync.init({
  server: "./src"
 });

 gulp.watch("src/scss/**/*.scss", ['sass']);
 gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
 return gulp.src("src/scss/**/*.scss")
  .pipe(sass())
  .pipe(concatCss("style.css"))
  .pipe(gulp.dest("src/css"))
  .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
