'use strict';

function ConfigureController (
  translateResolver
) {
  translateResolver.resolve('example');
}

ConfigureController.$inject = [
  'translateResolver'
];

angular.module('example').controller('ConfigureController', ConfigureController);

