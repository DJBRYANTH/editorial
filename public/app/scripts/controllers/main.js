'use strict';

angular.module('publicApp')
  .controller('MainCtrl', function ($scope, $modal, books ) {

    books.getBooks().success(function(libros){
      $scope.books = libros;
    });

    $scope.openDetails = function (book) {

      var modalInstance = $modal.open({
        templateUrl: 'app/views/tableContent.html',
        controller: 'TablecontentCtrl',
        size: 'lg',
        resolve: {
          book: function () {
            return book;
          }
        }
      });
    };


    $scope.openNewBook= function (book) {

      var modalInstance = $modal.open({
        templateUrl: 'app/views/newbook.html',
        controller: 'NewbookCtrl',
        size: 'lg'
      });

      modalInstance.result.then(function (selectedItem) {
          books.getBooks().success(function(libros){
            $scope.books = libros;
          });
        }, function () {
          books.getBooks().success(function(libros){
            $scope.books = libros;
          });
        });
    };

  });
