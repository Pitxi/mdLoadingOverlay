/**
 * Project: mdLoadingOverlay
 * Authors: Javier Campón Pichardo
 * Date: 14/09/2016
 * Copyright: Copyright (c) 2016 Javier Campón Pichardo
 * distributed under The MIT License.
 *
 * mdLoadingOverlay component.
 */
(function ()
{
	'use strict';

	angular.module('mdLoadingOverlay', [ 'ngMaterial' ])
	.component('mdLoadingOverlay', {
		templateUrl: '/templates/mdLoadingOverlay.html',
		controller: 'mdLoadingOverlayCtrl',
		bindings: {
			options: '<'
		}
	})
	.controller('mdLoadingOverlayCtrl', mdLoadingOverlayCtrl);

	function mdLoadingOverlayCtrl()
	{
		this.$onInit = function() {
			if (!this.options) {
				this.options = {}
			}

			if (!this.options.message) {
				this.options.message = 'Esperando\u2026'
			}

			if (!this.options.spinner || !this.options.spinner.diameter) {
				this.options.spinner = { diameter: 100 }
			}
		};
	}
})();

angular.module('mdLoadingOverlay').run(['$templateCache', function($templateCache) {$templateCache.put('/templates/mdLoadingOverlay.html','<!--\n\tProject: mdLoadingOverlay\n\tAuthors: Javier Camp\xF3n Pichardo\n\tDate: 14/09/2016\n\tCopyright: Copyright (c) 2016 Javier Camp\xF3n Pichardo\n\tdistributed under The MIT License.\n\n\tmdLoadingOverlay component template.\n!-->\n<style scoped>\n\t.overlay-panel {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tz-index: 1000;\n\t\tbackground-color: rgba(0, 0, 0, 0.5);\n\t}\n\n\t.overlay-panel .progress-title {\n\t\tfont-size: 24px;\n\t\tfont-weight: bold;\n\t\ttext-shadow: 1px 1px rgba(0, 0, 0, 0.5);\n\t\tmargin-top: 1rem;\n\t}\n</style>\n\n<div\n\tclass="overlay-panel fade"\n\tng-class="$ctrl.options.class"\n\tlayout="column"\n\tlayout-align="center center"\n\tlayout-fill\n\tflex\n\tng-style="$ctrl.options.style">\n\t<md-progress-circular\n\t\tng-class="$ctrl.options.spinner.class"\n\t\tmd-mode="indeterminate"\n\t\tng-attr-md-diameter="{{ $ctrl.options.spinner.diameter }}"\n\t\tlayout="row"\n\t\tlayout-align="center center">\n\t</md-progress-circular>\n\t<div\n\t\tclass="progress-title"\n\t\tng-class="$ctrl.options.message.class"\n\t\tng-style="$ctrl.options.message.style">\n\t\t{{ $ctrl.options.message.text || $ctrl.options.message }}\n\t</div>\n</div>\n');}]);