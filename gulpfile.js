var gulp = require("gulp");
var deploy = require("gulp-gh-pages");
var run = require("gulp-run");

/**
 * Push build to gh-pages
 */
gulp.task("deploy", function() {
  return gulp.src("./build/**/*").pipe(deploy());
});
