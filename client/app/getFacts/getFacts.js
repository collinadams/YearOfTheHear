angular.module('numberFacts.getFacts', [])

.controller('GetFactsController', function($scope, $location, Facts){
  $scope.year = {};
  $scope.getFact = function(){
    Facts.retrieveFact()($scope.year)
      .then(function(){
        $location.path('/facts.html');
      })
      .catch(function(error){
        console.log(error);
      });
  };
});