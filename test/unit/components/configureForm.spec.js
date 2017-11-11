'use strict';

describe('Directive: unifiConfigureForm', function () {
  var suite = {};

  beforeEach(angular.mock.module('example'));

  beforeEach(inject(function ($injector) {
    suite.$compile = $injector.get('$compile');
    suite.$rootScope = $injector.get('$rootScope');
    suite.scope = suite.$rootScope.$new();
  }));

  describe('default', function () {
    beforeEach(function () {
      var template = '<unifi-configure-form />';

      suite.element = suite.$compile(template)(suite.scope);
      suite.scope.$apply();
      suite.controller = suite.element.controller('unifiConfigureForm');
      // reference: https://coderwall.com/p/u720zq/angular-unit-testing-with-jasmine
      spyOn(suite.$rootScope, '$broadcast').and.callThrough();
      // spyOn(suite.$rootScope, '$on').and.callThrough();
    });

    afterEach(function () {
      suite.element.remove();
      suite.scope.$destroy();
      suite = {};
    });

    it('form should work', function () {
      expect(suite.element.find('form').length).toBe(1);
      expect(suite.controller.favoriteColors).toEqual(['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'PURPLE', 'BLACK']);
      expect(suite.controller.favoriteCities).toEqual(['CHICAGO', 'SEATTLE', 'LOS_ANGELES']);
    });

    it('toggleFavoriteColors should work', function () {
      expect(suite.controller.toggleFavoriteColors).toBeDefined();
      suite.controller.configuration.favoriteColors = [];
      suite.controller.toggleFavoriteColors('Red');
      expect(suite.controller.configuration.favoriteColors.length).toBe(1);
      suite.controller.toggleFavoriteColors('Black');
      expect(suite.controller.configuration.favoriteColors.length).toBe(2);
      suite.controller.toggleFavoriteColors('Red');
      expect(suite.controller.configuration.favoriteColors.length).toBe(1);
    });

    it('applyForm should work', function () {
      // avoid calling $broadcast implementation
      suite.$rootScope.$broadcast.and.stub();
      expect(suite.controller.applyForm).toBeDefined();
      suite.controller.applyForm({});
      expect(suite.$rootScope.$broadcast).toHaveBeenCalled();
      expect(suite.$rootScope.$broadcast).toHaveBeenCalledWith('responseEvent', {});
    });

    it('resetForm should work', function () {
      // avoid calling $broadcast implementation
      suite.$rootScope.$broadcast.and.stub();
      expect(suite.controller.resetForm).toBeDefined();
      suite.controller.resetForm();
      expect(suite.controller.configuration).toEqual({
        favoriteColors: [],
        verified: true
      });
      expect(suite.$rootScope.$broadcast).toHaveBeenCalled();
      expect(suite.$rootScope.$broadcast).toHaveBeenCalledWith('responseEvent', null);
    });

  });
});
