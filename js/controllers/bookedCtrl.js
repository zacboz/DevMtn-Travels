angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams){

  // Use the ng-style directive to change the background to the image link on the data object we are getting from the controller.
  // You will need to write a function that checks the url params and then loops over the data object in the service and then returns
  // the object the matches the id being passed in the url params. Do this in your controller

  $scope.location = mainSrv.getCity($stateParams);


  $scope.cityObjectStyle = {
    'background-image' : 'url(' + $scope.location.image + ')'
  }

});
