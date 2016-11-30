angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv, $stateParams){

  $scope.packages = mainSrv.travelInfo;


});
