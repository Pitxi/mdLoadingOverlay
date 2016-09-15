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
