# Welcome to Revel skeleton with gulp+browsersync+sass+es6 support

##usage:


revel new github.com/myaccount/myapp github.com/zzOzz/gulp-skel

cd $GOPATH/src/github.com/myaccount/myapp

install dependencies
~~~
npm install
bower install
~~~

create .babelrc file
~~~
{
  "presets": [ "es2015" ]
}
~~~

launch gulp
~~~
gulp
~~~

* sources are located in source folder
* revel app is in revel folder
* build app is in dist folder
* js source is in source/scripts/main.js
* css source is in source/public/css/main.scss
