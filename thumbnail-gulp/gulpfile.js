var gulp = require('gulp');
var react = require('gulp-react'); 
var concat = require('gulp-concat');

// this is what gulo will exectue whenever we run out gulpfile
// // we want to go into src directory, convert all files, concat them all, then save that new file
gulp.task('default', function(){
  // go into src directory and load every file in there,, thas what ** is
  // pipe means do this, then next step, then enxt step so on and so on
   return gulp.src('src/**') 
   //convert jsx into js
    .pipe(react()) 
  // join files together and new file will be called applicaiton.js
    .pipe(concat('application.js'))
  // save new file in this dir,,, in current working directory in this example
    .pipe(gulp.dest('./')) 
}); 
