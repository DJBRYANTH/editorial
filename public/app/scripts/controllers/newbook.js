'use strict';

angular.module('publicApp')
.controller('NewbookCtrl',
  function ($scope, $modalInstance, books, tableContents) {

  $scope.tableContent = [];
  $scope.level = 0;
  $scope.key = 0;
  $scope.book = {};
  $scope.book.title = null;
  $scope.order = 1;
  $scope.contentLevel = 1;
  var nivel = 0;

  $scope.addContent = function(){
    $scope.level += 1;
    $scope.order += 1;
    $scope.tableContent.push({
      'numeration': $scope.level,
      'content': '',
      'level': $scope.contentLevel,
      'order': $scope.order
    }); 
  }


  $scope.addLevel = function(key){
    var levels = '';
    if ($scope.tableContent[key].numeration.length > 1 ) {
      levels = $scope.tableContent[key].numeration.split('.');
    }

    var numerationFinal = '';

    if (levels.length > 0) {
      levels[levels.length - 1] = parseInt(levels[levels.length - 1]) +1;
      
      for (var i = 0; i<= levels.length -1; i++){
          numerationFinal += '.'+ levels[i];
      }
      numerationFinal = numerationFinal.substr(1, numerationFinal.length);
      $scope.tableContent[key].numeration =  numerationFinal;

    } else {
      $scope.tableContent[key].numeration += 1;
      $scope.level = $scope.tableContent[key].numeration;
    } 

    
  }

  $scope.downLevel = function(key){

    var nivelComparador = ($scope.tableContent[key-1]) ? $scope.tableContent[key-1].numeration: 1; 
    var levels = '';

    if ($scope.tableContent[key].numeration.length > 1 ) {
      levels = $scope.tableContent[key].numeration.split('.');
    }

    
    var numerationFinal = '';

    if (levels.length > 0) {

      if ( levels[levels.length - 1] != 0 ) {

        levels[levels.length - 1] = parseInt(levels[levels.length - 1]) - 1;
      }  
      
      for (var i = 0; i<= levels.length -1; i++){
          numerationFinal += '.'+ levels[i];
      }
      numerationFinal = numerationFinal.substr(1, numerationFinal.length);
      $scope.tableContent[key].numeration =  numerationFinal;

    } else {

      if($scope.tableContent[key].numeration != nivelComparador){
        $scope.tableContent[key].numeration -= 1;
      }
      $scope.level = $scope.tableContent[key].numeration;
    }  
       
  }

  $scope.leftLevel = function(key){

    var levels = $scope.tableContent[key].numeration.split('.');
    var numerationFinal = '';
    var size = levels.length - 1;

    if (levels.length > 1) {
      
      for (var i = 0; i<= size - 1; i++){
          numerationFinal += '.'+ levels[i];
      }

      numerationFinal = numerationFinal.substr(1, numerationFinal.length);

      $scope.tableContent[key].numeration =  numerationFinal;
      $scope.tableContent[key].level -= 1;

    }
    
  }

  $scope.rightLevel = function(key){
    console.log('right');
    var numerationAnterior = $scope.tableContent[key].numeration.toString();
    console.log($scope.tableContent[key].numeration);
    $scope.tableContent[key].numeration = numerationAnterior + '.1';
    console.log($scope.tableContent[key].level);
    $scope.tableContent[key].level += 1;
    
  }

  $scope.guardar = function(){
    books.saveBook($scope.book.title).success(function(response){
      $scope.book.id = response;
      _($scope.tableContent).each(function(value, key){
        value.id_book = $scope.book.id;
      });
      tableContents.save($scope.tableContent).success(function(response){
        $modalInstance.dismiss('cancel');
      })

    });

  }

});
