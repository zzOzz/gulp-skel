import gulp from 'gulp';

import rimraf from 'rimraf';
import gulp_rimraf from 'gulp-rimraf';
import { dest } from './config';
import debug from 'gulp-debug';

gulp.task('clean', done => {
  gulp.src(dest + '**-rev-manifest.json', {read: false})
  .pipe(debug({title: 'rimraf:'}))
  .pipe(gulp_rimraf({ force: true }));
  rimraf(dest, done);
});

gulp.task('clean:build', done => {
  rimraf(dest, done);
});
