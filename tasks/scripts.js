var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task(scripts);

function scripts() {
  return gulp.src('src/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/'));
}