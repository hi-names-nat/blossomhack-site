var gulp = require("gulp");
var deploy = require("gulp-gh-pages");

/**
 * Push build to gh-pages
 */
gulp.task("deploy", ["build"], function() {
  return gulp.src("./build/**/*").pipe(deploy());
});

gulp.task("build", function() {
  return run("npm run build").exec();
});
