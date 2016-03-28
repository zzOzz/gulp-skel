import gulp from 'gulp';
import { server, dest } from './config';

const browserSync = require('browser-sync').create();

gulp.task('server', () => {
  browserSync.init({
    port: server.port,
    notify: false,
    // https: true,
    // server: {
    //   baseDir: dest,
    // },
    proxy: {
      target:"http://localhost:9000"
    },
    ui: {
      port: server.port + 1,
    }
  });
});

export default browserSync;
