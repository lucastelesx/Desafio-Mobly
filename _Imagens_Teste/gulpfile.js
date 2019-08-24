var gulp = require('gulp'),
    autoprefixer    = require('gulp-autoprefixer'),
    sass = require('gulp-sass');
    
var paths = {
  styleSrcMain: {
    src: 'scss/main/global.scss',
    dest: 'css'
  },
  watchMain:{
    globSrc:'scss/**/*.scss'
  }
};

function styleGlobal() {
  return gulp.src(paths.styleSrcMain.src, {
      sourcemaps: true
    })
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(gulp.dest(paths.styleSrcMain.dest));
}

function watch() {
  gulp.watch([paths.styleSrcMain.src, paths.watchMain.globSrc ], styleGlobal);
}

var build = gulp.parallel(styleGlobal, watch);
gulp.task(build);
gulp.task('default', build);