import gulp from 'gulp';
import { join } from 'path';
import { src, dest } from './config';

gulp.task('go-revel', () => {
  gulp.src([join(src, '**/*.go'),
            join(src, '**/*.conf'),
            join(src, '**/routes')
          ])
    .pipe(gulp.dest(join(dest)));
});
