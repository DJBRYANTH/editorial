'use strict';

describe('Controller: NewbookCtrl', function () {

  // load the controller's module
  beforeEach(module('publicApp'));

  var NewbookCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewbookCtrl = $controller('NewbookCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
