const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task(
  "sass-default",
  gulp.series(function () {
    return gulp
      .src("scss/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest("assets/css"));
  })
);

gulp.task(
  "sass-imports",
  gulp.series(function () {
    return gulp
      .src("import-method/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest("assets/css"));
  })
);

gulp.task(
  "sass-use-and-forward",
  gulp.series(function () {
    return gulp
      .src("use-and-forward/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest("assets/css"));
  })
);

gulp.task(
  "sass:watch",
  gulp.series(function () {
    gulp.watch("**/*.scss", gulp.series("sass"));
  })
);

gulp.task(
  "sass",
  gulp.series(
    "sass-default",
    "sass-imports",
    "sass-use-and-forward",
    "sass:watch"
  )
);
