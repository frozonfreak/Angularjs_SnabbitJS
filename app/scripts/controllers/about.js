'use strict';

/**
 * @ngdoc function
 * @name snabbitjsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the snabbitjsApp
 */
angular.module('snabbitjsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
