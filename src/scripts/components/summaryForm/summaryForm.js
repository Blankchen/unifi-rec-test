'use strict';

angular.module('example').directive('unifiSummaryForm', [
  function () {
    return {
      controller: 'SummaryFormController',
      controllerAs: 'summaryFormCtrl',
      template: require('./summaryForm.jade')()
    };
  }
]);
