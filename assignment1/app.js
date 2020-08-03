(function () {
'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.textbox = "";
    $scope.message = "";
    // $scope.fontStyle = {}; - можно не вводить, тк оно инициализируется прям в коде
    // $scope.boxStyle = {};
        
    $scope.counteWords = function () {
      if ($scope.textbox !== false) {
        var arr = $scope.textbox.split(',');
        var count = 0;
        for(var i = 0; i< arr.length; i++){
          if (arr[i].trim() !=='')
            count++;
        }
            if (count > 0) {
              if (count <= 3) {
                $scope.message = 'Enjoy!';
              }
              else if (count > 3) {
                $scope.message = 'Too much!'
              }
              $scope.fullBox();
            }
            else {
              $scope.emptyBox();
            }
        }
        else {
          $scope.emptyBox();
        }
      }
      $scope.emptyBox = function() {
        $scope.message = 'Please enter data first';
          $scope.fontStyle = {
            "color":"red"
          };
          $scope.boxStyle = {
            "border-color":"red"
          };
      };

      $scope.fullBox = function() {
          $scope.fontStyle = {
            "color":"green"
          };
          $scope.boxStyle = {
            "border-color":"green"
          };
      };

  } // 13 $scope.counteWords = function () 

})();