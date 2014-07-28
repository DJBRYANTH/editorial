'use strict';

angular.module('publicApp')
  .controller('TablecontentCtrl', function ($scope, $modalInstance, book, tableContents) {

    var tablaContenidoFinal = [];
    tableContents.getByBookId(book.id).success(function(tablaContenido){
     
      var num = 0;
      var index = 0;
      var numeracion = 1;
      var nivelAnterior = 1;
      $scope.tableContent = [];

      tablaContenidoFinal[0] = [];
      

      _(tablaContenido).each(function(value, key){
        if (num == 16) {
          index++;
          numeracion = getNumration(nivelAnterior, numeracion , value.level);
          tablaContenidoFinal[index] = [];
          tablaContenidoFinal[index].push({
            'numeration': numeracion,
            'content': value.content
          });
        } else {

          if(num == 0){

            tablaContenidoFinal[0].push({
              'numeration' : 1,
              'content': tablaContenido[0].content
            })

          } else {

            numeracion = getNumration(nivelAnterior, numeracion , value.level);

            tablaContenidoFinal[index].push({
              'numeration': numeracion,
              'content': value.content
            }); 
          }
        }

        nivelAnterior = value.level;
        num++;
      });

       $scope.tableContent = tablaContenidoFinal;
    });

    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    var getNumration = function(nivelAnterior, numeracionAnterior, nivelActual){
      var numerationFinal  = '';
      var diferencia = nivelActual - nivelAnterior;

      if (diferencia == 1) {
        numerationFinal = numeracionAnterior + '.' + diferencia;
      } else if (diferencia == 0) {
        var ultimoNumero = 1;
        if (numeracionAnterior.length > 1) {
          ultimoNumero = numeracionAnterior.split('.');
          numerationFinal = ultimoNumero[0]+'.' + (parseInt(ultimoNumero[1]) + 1);
        } else {
          ultimoNumero = parseInt(numeracionAnterior) + 1;
          numerationFinal = ultimoNumero
        }

        
      } else if (diferencia < 0) {
        diferencia = nivelActual - 1;
        var ultimoNum = numeracionAnterior.split('.');

        for (var i = 0; i<= diferencia; i++){
          numerationFinal += '.'+ ultimoNum[i];
        }

        var splitNumeration = numerationFinal.split('.');
        
        if (splitNumeration.length > 2) {
          numerationFinal = splitNumeration[1] + '.' + (parseInt(splitNumeration[2]) + 1);
        } else {
          numerationFinal = parseInt(splitNumeration[1]) + 1;
        }
      }

      return numerationFinal;

    };


  });
