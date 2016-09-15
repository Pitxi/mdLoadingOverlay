(function()
{
	'use strict';

	angular.module('test', [ 'mdLoadingOverlay' ])
	.controller('testCtrl', testCtrl);

	testCtrl.$inject = [ '$scope' ]
	function testCtrl($scope)
	{
		$scope.overlayOptions =
		{
			style: { 'background-color': 'rgba(84, 48, 26, 0.5)' },
			message: { text: 'Testing again\u2026', style: { color: 'red' } },
			spinner: { diameter: 50 }
		}
	}
})();