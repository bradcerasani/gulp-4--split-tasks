'use strict';

var gulp = require('gulp');
var HubRegistry = require('gulp-hub');

// load some files into the registry
var hub = new HubRegistry(['tasks/*.js']);

// tell gulp to use the tasks just loaded
gulp.registry(hub);

// 'clean' and 'scripts' tasks defined in tasks directory
gulp.task('default', gulp.series('clean', 'scripts'));