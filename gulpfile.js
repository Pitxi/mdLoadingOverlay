/**
 * Dependencias
 */
(function() {
	'use strinct';

	var moduleName = 'mdButtonBar';
	var gulp      = require('gulp'),
	merge         = require('merge-stream'),
	templateCache = require('gulp-angular-templatecache'),
	rename        = require('gulp-rename'),
	concat        = require('gulp-concat'),
	sourcemaps    = require('gulp-sourcemaps'),
	uglify        = require('gulp-uglify'),
	clean         = require('gulp-clean');

	gulp.task('clean', function() {
		return gulp.src('dist', { read: false }).pipe(clean());
	});

	gulp.task('build-templates', [ 'clean' ], function() {
		return merge(
			gulp.src('src/js/' + moduleName + '.js'),
			gulp.src('src/templates/' + moduleName + '.html')
				.pipe(templateCache('templatesCache.js', {
					root  : '/templates/',
					module: moduleName
				})))
		.pipe(concat(moduleName + '.js'))
		.pipe(gulp.dest('dist'));
	});

	gulp.task('build', [ 'build-templates' ], function() {
		return gulp.src('dist/' + moduleName + '.js')
			.pipe(sourcemaps.init())
				.pipe(uglify({ preserveComments: 'license' }))
				.pipe(rename({ extname: '.min.js' }))
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest('dist'))
	});

})();