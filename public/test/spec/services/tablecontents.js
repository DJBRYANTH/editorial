'use strict';

describe('Service: tableContents', function () {

  // load the service's module
  beforeEach(module('publicApp'));

  // instantiate service
  var tableContents;
  beforeEach(inject(function (_tableContents_) {
    tableContents = _tableContents_;
  }));

  it('should do something', function () {
    expect(!!tableContents).toBe(true);
  });

});
