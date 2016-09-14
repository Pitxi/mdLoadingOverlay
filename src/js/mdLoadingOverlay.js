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
