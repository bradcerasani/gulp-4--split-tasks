'use strict';

var gulp = require('gulp');

// Gulp 4.0 recipe
var HubRegistry = require('gulp-hub');
var hub = new HubRegistry(['tasks/*.js']);
gulp.registry(hub);

// Contents of default.js task - delete the default.js task file, uncomment the line below, and the default gulp task should work

// gulp.task('default', gulp.series('clean', 'scripts'));
