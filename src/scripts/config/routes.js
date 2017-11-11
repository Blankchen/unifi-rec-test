'use strict';

angular.module('example').config([
  '$urlRouterProvider',
  '$locationProvider',
  function (
    $urlRouterProvider,
    $locationProvider
  ) {
    $urlRouterProvider
      .otherwise('/');

    // Get everything running and fix any build errors that come up
    $locationProvider.html5Mode(false);
  }
]);
