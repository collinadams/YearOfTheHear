angular.module('numberFacts.facts', [])

.controller('FactsController', function($scope, Facts){
  $scope.data = {};
  $scope.getFact = function(){
    Facts.retrieveFact()
      .then(function (fact){
        $scope.data.fact = fact;
      })
      .catch(function (error){
        console.error(error);
      })
  }
})