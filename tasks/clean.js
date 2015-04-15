var gulp = require('gulp');
var del = require('del');

gulp.task(clean);

function clean(done) {
  del(['build'], done);
}