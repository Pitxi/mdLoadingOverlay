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

	angular.module('mdLoadingOverlay')
	.component('mdLoadingOverlay', {
		templateUrl: '/templates/mdLoadingOverlay.html',
		controller: 'mdLoadingOverlayCtrl',
		bindings: {
			diameter: '<',
			show: '<',
			message: '@'
		}
	})
	.controller('mdLoadingOverlayCtrl', mdLoadingOverlayCtrl);

	function mdLoadingOverlayCtrl()
	{
		this.$onInit = function() {
			if (!this.message) {
				this.message = 'Esperando\u2026'
			}
		};
	}
})();

angular.module('mdLoadingOverlay').run(['$templateCache', function($templateCache) {$templateCache.put('/templates/mdLoadingOverlay.html','<!--\n\tProject: mdLoadingOverlay\n\tAuthors: Javier Camp\xF3n Pichardo\n\tDate: 14/09/2016\n\tCopyright: Copyright (c) 2016 Javier Camp\xF3n Pichardo\n\tdistributed under The MIT License.\n\n\tmdLoadingOverlay component template.\n!-->\n<style scoped>\n\t.overlay-panel {\n\t\t/*position: fixed;*/\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tz-index: 1000;\n\t\tbackground-color: rgba(0, 0, 0, 0.5);\n\t}\n\n\t.overlay-panel .progress-title\n\t{\n\t\tfont-size: 24px;\n\t\tfont-weight: bold;\n\t\tcolor: red;\n\t\ttext-shadow: 1px 1px rgba(0, 0, 0, 0.75);\n\t}\n</style>\n\n<div\n\tclass="overlay-panel fade"\n\tng-if="$ctrl.show"\n\tlayout-fill>\n\t<md-progress-circular\n\t\tmd-mode="indeterminate"\n\t\tmd-diameter="{{ $ctrl.diameter }}">\n\t</md-progress-circular>\n\t<div class="progress-title">{{ $ctrl.message }}</div>\n</div>\n');}]);