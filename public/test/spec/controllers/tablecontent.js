'use strict';

describe('Controller: TablecontentCtrl', function () {

  // load the controller's module
  beforeEach(module('publicApp'));

  var TablecontentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TablecontentCtrl = $controller('TablecontentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
