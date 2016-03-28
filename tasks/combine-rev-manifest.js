import gulp from 'gulp';
import extend from 'gulp-extend';

import { join } from 'path';
import { src, dest } from './config';

gulp.task('combine-rev-manifest', function() {
  return gulp.src([join(dest,'*-rev-manifest.json')])
    .pipe(extend('combine-rev-manifest.json')) // gulp-extend
    .pipe(gulp.dest(join(dest, '..')));
});
