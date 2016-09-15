/**
 * Dependencias
 */
(function() {
	'use strinct';

	var moduleName = 'mdLoadingOverlay';
	var gulp      = require('gulp'),
	merge         = require('merge-stream'),
	templateCache = require('gulp-angular-templatecache'),
	rename        = require('gulp-rename'),
	concat        = require('gulp-concat'),
	sourcemaps    = require('gulp-sourcemaps'),
	uglify        = require('gulp-uglify'),
	del           = require('del');

	gulp.task('clean:dist', function() {
		return del('dist');
	});

	gulp.task('clean:temp', function() {
		return del('temp');
	});

	gulp.task('clean', [ 'clean:dist', 'clean:temp' ]);

	gulp.task('build:templates', [ 'clean:temp' ], function() {
		return gulp.src('src/templates/' + moduleName + '.html')
			.pipe(templateCache('templatesCache.js', { root  : '/templates/', module: moduleName }))
			.pipe(gulp.dest('temp'));
	});

	gulp.task('concat:templates', [ 'build:templates' ], function() {
		return gulp.src(['src/js/' + moduleName + '.js', 'temp/templatesCache.js'])
			.pipe(concat(moduleName + '.js'))
			.pipe(gulp.dest('dist'));
	});

	gulp.task('build', [ 'concat:templates' ], function() {
		del('temp');

		return gulp.src('dist/' + moduleName + '.js')
			.pipe(sourcemaps.init())
				.pipe(uglify({ preserveComments: 'license' }))
				.pipe(rename({ extname: '.min.js' }))
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest('dist'))
	});

})();