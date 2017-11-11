'use strict';

angular.module('example').directive('unifiConfigureForm', [
  function () {
    return {
      controller: 'ConfigureFormController',
      controllerAs: 'configureFormCtrl',
      template: require('./configureForm.jade')()
    };
  }
]);
