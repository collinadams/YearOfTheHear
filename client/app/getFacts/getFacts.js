angular.module('numberFacts.getFacts', [])

.controller('GetFactsController', function($scope, $location, Facts){
  $scope.year = {};
  $scope.fact = {};
  $scope.showFact = false;
  $scope.getFact = function(){
    console.log('clicked');
    Facts.retrieveFact($scope.year)
      .then(function(resp){
        console.log('get from numbers api', resp.data)
        $scope.fact = resp.data;
        $scope.showFact = true;
      })
      .catch(function(error){
        console.log(error);
      });
  };
});