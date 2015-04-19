## Gulp 4 - Split tasks across multiple files

Gulp 4 introduces a new registry API and updated recipes for common tasks.

[Split tasks across multiple files](https://github.com/gulpjs/gulp/blob/4.0/docs/recipes/split-tasks-across-multiple-files.md) has been updated to use the new `gulp-hub` module, but with the 4.0 registry forward referencing tasks is no longer possible.

While sequencing is still being discussed in [#972](https://github.com/gulpjs/gulp/issues/972) and (prior to that) [#802](https://github.com/gulpjs/gulp/issues/802), this repo is a basic example of splitting tasks across multiple files with a slightly modified pattern.

## Description

Standalone tasks are defined in the `tasks` directory, and `gulp-hub` is used to create a new registry. Tasks that use a combination of sub-tasks are now defined in the gulpfile, after `gulp.registry`

While this will require a minor restructuring of tasks in some projects, I actually prefer defining composite tasks like `default`, `watch`, and `build` in my `gulpfile` and using the `tasks` directory strictly for standalone tasks. In larger gulpfiles composite tasks are typically short and called far more frequently than their standalone siblings, so it's easier to reference them in one place instead of [mixing them](https://github.com/greypants/gulp-starter/tree/master/gulp/tasks) with others.

**File structure (unchanged):**

```sh
gulpfile.js
tasks/
├── clean.js
└── scripts.js
```

**gulpfile.js**

```js
'use strict';

var gulp = require('gulp');
var HubRegistry = require('gulp-hub');

// load some files into the registry
var hub = new HubRegistry(['tasks/*.js']);

// tell gulp to use the tasks just loaded
gulp.registry(hub);

// define composite tasks
gulp.task('default', gulp.series('clean', 'scripts'));
```