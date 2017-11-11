'use strict';

angular.module('example').config([
  '$stateProvider',
  function (
    $stateProvider
  ) {
    $stateProvider
      .state('home', {
        controller: 'HomeController',
        controllerAs: 'homeCtrl',
        url: '/',
        template: require('../../views/home.jade')()
      })
      // Hook up the "Configure me" link to go to http://localhost:6060/#!/configure
      .state('configure', {
        controller: 'ConfigureController',
        controllerAs: 'configureCtrl',
        url: '/configure',
        template: require('../../views/configure.jade')()
      });
  }
]);
