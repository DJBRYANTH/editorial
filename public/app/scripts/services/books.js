'use strict';

angular.module('publicApp')
  .factory('books', function ($http) {

    return {

      getBooks : function() {
        return $http({
          method: 'GET',
          url: '/books'
        });
      },

      getBookById : function(id) {
        return $http({
          method: 'GET',
          url: '/books/'.id
        });
      },

      saveBook: function(title){
        return $http({
          method: 'POST',
          url: '/books',
          data: {
            'title' : title
          }
        })
      }

    };
  });
