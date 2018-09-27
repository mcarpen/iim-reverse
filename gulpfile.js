// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify-es').default;
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('./assets/script/src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('./assets/style/src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/style/dist/'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('./assets/script/src/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./assets/script/dist/'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/script/dist/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./assets/script/src/*.js', ['lint', 'scripts']);
    gulp.watch('./assets/style/src/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);