const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const minifyImg = require('gulp-imagemin');
const minifyJS = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
});

gulp.task('css', (done) => {
    return gulp.src('src/css/main.scss')
        .pipe(sass({
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['node_modules']
        }).on('error', sass.logError))


        //.pipe(minifyCSS())  
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(browserSync.stream());
        done();
});


gulp.task('js', (done) => {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('app.min.js'))
        .pipe(minifyJS())
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(browserSync.stream());
        done();
});

gulp.task('html', (done) => {
    gulp.src('src/html/**/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
        done();
});

gulp.task('img', (done) => {
    
    gulp.src('src/assets/img/**/*')
       //.pipe(minifyImg())
        .pipe(gulp.dest('dist/assets/img'));
        done();
});

gulp.task('icons', (done) => {
    
    gulp.src('src/assets/icons/**/*')
       //.pipe(minifyImg())
        .pipe(gulp.dest('dist/assets/icons'));
        done();
});


gulp.task('delete', () => del(['dist/css', 'dist/js', 'dist/img', 'dist/**/*.html']));

gulp.task('watch', () => {
    gulp.watch("src/css/**/*.scss", gulp.task('css'));
    gulp.watch("src/js/**/*.js", gulp.task('js'));
    gulp.watch("src/assets/img/**/*.img", gulp.task('img'));
    gulp.watch("src/assets/img/**/*.svg", gulp.task('img'));
    gulp.watch("src/html/**/*.html", gulp.task('html'));
});

gulp.task('default', gulp.series('delete', gulp.parallel('html', 'css', 'js', 'img', 'icons', 'browser-sync', 'watch')));