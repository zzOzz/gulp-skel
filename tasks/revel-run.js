import gulp from 'gulp';
import run from 'gulp-run';
import { join } from 'path';

var revel_project = join(process.cwd().replace(join(process.env.GOPATH,'src'),'').substr(1),'revel');

gulp.task('revel-run', () => {
  // run('revel run');
   run('revel run '+revel_project).exec();
});

gulp.task('revel-build', () => {
  // run('revel run');
   run('revel build '+revel_project +' dist').exec();
});
