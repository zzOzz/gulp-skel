import gulp from 'gulp';
import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin';
import rev from 'gulp-rev';

import { join } from 'path';
import browserSync from './connect';
import { src, dest } from './config';

gulp.task('images', () => {
  gulp.src(join(src,'public', 'img', '**/*'))
    .pipe(changed(join(dest,'public', 'img')))
    .pipe(gulp.dest(join(dest,'public', 'img')))
    .pipe(browserSync.stream());
});

gulp.task('images:build', () => {
  return gulp.src(join(src,'public', 'img', '**/*'))
    .pipe(imagemin())
    .pipe(rev())
    .pipe(gulp.dest(join(dest,'public', 'img')))
    .pipe(rev.manifest('img-rev-manifest.json',{ merge: true }))
    .pipe(gulp.dest(join(dest)));
});
