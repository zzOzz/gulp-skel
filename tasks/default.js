import gulp from 'gulp';
import { src } from './config';
import { join } from 'path';
import sequence from 'run-sequence';

gulp.task('default', ['clean'], () => {
  sequence(
    'clean',
    ['go-revel','scripts', 'fonts', 'images', 'markup', 'styles'],'revel-run',
    'server'
  );

  gulp.watch(join(src,'public', 'img', '**/*'), ['images']);
  gulp.watch(join(src, 'app','views', '**/*.html'), ['markup']);
  gulp.watch(join(src, 'public', 'css','**/*.{scss,sass}'), ['styles']);
});
