import gulp from 'gulp';
import sequence from 'run-sequence';

gulp.task('build', ['clean:build'], () => {
  sequence('go-revel','images:build', 'styles:build', 'scripts:build', 'fonts', 'markup','revel-build');
});
