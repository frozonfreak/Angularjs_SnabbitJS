'use strict';

/**
 * @ngdoc function
 * @name snabbitjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the snabbitjsApp
 */
angular.module('snabbitjsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.button1click = function(){
    	snabbt(document.getElementById('button1'), {
    		position: [100, 0, 0],
    		  easing: 'ease'
    		}).then({
    		  fromRotation: [0, 0, -2*Math.PI],
    		  easing: 'spring',
    		  springConstant: 0.2,
    		  springDeaccelaration: 0.95,
    	});
    };

    $scope.button2click = function(){
    	snabbt(document.getElementById('button2'), {
    		position: [200, 0, 0],
    		  easing: function(value) {
    		    return Math.sin(Math.PI * value);
    		  }
    	});
    };

    $scope.button3click = function(){
    	snabbt(document.getElementById('button3'), {
    		position: [100, 0, 0],
    		  rotation: [0, 0, 2*Math.PI],
    		  easing: 'spring',
    		  springConstant: 0.3,
    		  springDeacceleration: 0.8,
    		}).then({
    		  rotation: [0, 0, 2*Math.PI],
    		  easing: 'ease'
    	});
    };

    $scope.button4click = function(){
    	snabbt(document.getElementById('button4'), {
    		position: [50, 0, 0],
    		  springConstant: 2.4,
    		  springDeacceleration: 0.9,
    	});
    };
  });
