'use strict';

var gulp = require('gulp');

// Gulp 4.0 recipe
var HubRegistry = require('gulp-hub');
var hub = new HubRegistry(['tasks/*.js']);
gulp.registry(hub);

// Gulp 3.X recipe
// var requireDir = require('require-dir');
// var dir = requireDir('./tasks');

// Contents of default.js task
gulp.task('default', gulp.series('clean', 'scripts'));
