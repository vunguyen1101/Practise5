'use strict';

var
    gulp        = require( 'gulp' ),
    babel       = require( 'gulp-babel' ),

    autoLoad    = require( 'gulp-load-plugins' )(),
    del         = require( 'del' ),
    
    browserSync = require( 'browser-sync' ),
    runSequence = require( 'run-sequence' ),
    
    sass        = require( 'gulp-sass' ),
    sourcemaps  = require( 'gulp-sourcemaps' ),
    globbing    = require( 'gulp-css-globbing' );

/*SASS: `compressed` `expanded` `compact` `nested`*/

gulp.task('sass', function() {
    return gulp.src('scss/style.scss')   /*.src('scss/*.scss') */
        .pipe( globbing({
            extensions: ['.scss']
        }))
        .pipe( sourcemaps.init())
        .pipe( sass( { outputStyle: 'expanded' } ).on( 'error', sass.logError ) )
        .pipe( sourcemaps.write( '.' ) )
        .pipe( gulp.dest( 'css' ) );

});





/*BROSWER SYNC*/
gulp.task( 'browser-sync', () =>
    browserSync({
        files: ['css/*.css', 'scss/*.scss'],
        server: {
           baseDir: "./"
       },

    })
);


/*CLEAN*/
gulp.task( 'clean', del.bind( null, ['build'] ) );

/*WATCH*/
gulp.task( 'watch', ['browser-sync'], () => {
   gulp.watch( 'scss/**/*.scss', ['sass'] );
   gulp.watch( 'scss/*.scss', ['sass'] );
   gulp.watch("pages/*.html").on('change', browserSync.reload);
   gulp.watch("./*.html").on('change', browserSync.reload);
   gulp.watch("./js/**/*.js").on('change', browserSync.reload);

});


/*DEFAULT TASK*/
gulp.task( 'default', ['watch'] );