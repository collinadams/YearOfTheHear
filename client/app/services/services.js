angular.module('numberFacts.services', [])

.factory('Facts', function($http){
  var retrieveFact = function(year){
    return $http({
      method: 'GET',
      url: 'https://numbersapi.p.mashape.com/' + year + '/year?json=true'
      X-Mashape-Key: 'fO6LEPSj1Ymsha2VU0tZiKZoubJmp1SKQP1jsnSrLLFLQBFA6n',
      Accept: 'application/json'
    })
  };

  return {
    retrieveFact: retrieveFact
  };
});