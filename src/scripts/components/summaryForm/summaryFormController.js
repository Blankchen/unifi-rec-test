'use strict';

function SummaryFormController ($scope) {
  var vm = this;
  vm.summary = null;

  $scope.$on('responseEvent', function(e, data){
    vm.summary = data;
  });

}

SummaryFormController.$inject = ['$scope'];

angular.module('example').controller('SummaryFormController', SummaryFormController);
