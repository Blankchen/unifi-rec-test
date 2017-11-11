'use strict';

function ConfigureFormController ($rootScope) {
  var vm = this;
  vm.favoriteColors = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'PURPLE', 'BLACK'];
  vm.favoriteCities = ['CHICAGO', 'SEATTLE', 'LOS_ANGELES'];
  // configuration form
  vm.configuration = {};
  vm.toggleFavoriteColors = toggleFavoriteColors;
  vm.applyForm = applyForm;
  vm.resetForm = resetForm;

  activate();
  ////////////

  function activate() {
    resetForm();
  }

  function toggleFavoriteColors(colorName) {
    var idx = vm.configuration.favoriteColors.indexOf(colorName);
    if (idx > -1) {
      vm.configuration.favoriteColors.splice(idx, 1);
    } else {
      vm.configuration.favoriteColors.push(colorName);
    }
  }

  function applyForm(configuration) {
    var formData = angular.copy(configuration);
    $rootScope.$broadcast('responseEvent', formData);
  }

  function resetForm() {
    vm.configuration = {
      favoriteColors: [],
      verified: true
    };
    $rootScope.$broadcast('responseEvent', null);
  }

}

ConfigureFormController.$inject = ['$rootScope'];

angular.module('example').controller('ConfigureFormController', ConfigureFormController);
