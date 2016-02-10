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
        responsiveVoice.speak($scope.fact, 'US English Female', {volume: 0.01}, {rate: 0})
          .then(function(){
            responsiveVoice.speak($scope.fact, 'Macedonian Male', {volume: 0.01}, {rate: 0});
          });
      })
      .catch(function(error){
        console.log(error);
      });
  };
});