angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv, $stateParams){

$scope.locations = mainSrv.travelInfo;

});
