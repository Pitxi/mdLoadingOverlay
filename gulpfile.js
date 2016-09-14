/**
 * Dependencias
 */
(function() {
	'use strinct';

	var gulp      = require('gulp'),
	merge         = require('merge-stream'),
	templateCache = require('gulp-angular-templatecache'),
	concat        = require('gulp-concat'),
	clean         = require('gulp-clean');

	gulp.task('build', function() {
		return merge(
			gulp.src('src/js/**/*.js'),
			gulp.src('src/templates/**/*.html')
				.pipe(templateCache('templatesCache.js', {
					root  : '/templates/',
					module: 'mdLoadingOverlay'
				})))
		.pipe(concat('mdLoadingOverlay.js'))
		.pipe(gulp.dest('dist'));
	});

})();