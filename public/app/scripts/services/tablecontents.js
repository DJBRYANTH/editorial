'use strict';

angular.module('publicApp')
  .factory('tableContents', function ($http) {

    return {

      getByBookId: function (id) {
        return $http({
          method: 'GET',
          url: '/tableContents/'+id
        });
      },

      save: function (data) {
        return $http({
          method: 'POST',
          url: '/tableContents',
          data: data
        })
      }

    };
  });
