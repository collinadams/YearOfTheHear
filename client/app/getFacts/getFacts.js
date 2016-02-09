angular.module('numberFacts.getFacts', [])

.controller('GetFactsController', function($scope, $location, Facts){
  $scope.year = {};
  $scope.fact = {};
  $scope.showFact = false;
  $scope.getFact = function(){
    $scope.showFact = false;
    console.log('clicked');
    Facts.retrieveFact($scope.year)
      .then(function(resp){
        console.log('get from numbers api', resp.data)
        $scope.fact = resp.data.text;
        $scope.showFact = true;
        console.log('should have just played');
        responsiveVoice.speak($scope.fact, 'Spanish Female');
      })
      .catch(function(error){
        console.log(error);
      });
  };
});