import gulp from 'gulp';
import mainBowerFiles from 'main-bower-files';
import { src, dest } from './config';

// gulp.task("bower-files", function(){
//     return gulp.src(mainBowerFiles(
//     //   {
//     //   paths: {
//     //       bowerDirectory: '../bower_components',
//     //       bowerrc: '../.bowerrc',
//     //       bowerJson: '../bower.json'
//     //   }
//     // }
//   ).pipe(gulp.dest(dest+'lib.js')));
// });


gulp.task('bower-files', function() {
    return gulp.src(mainBowerFiles({filter: '**/*.js'}))
        .pipe(gulp.dest(src+'scripts/vendor'))
});
