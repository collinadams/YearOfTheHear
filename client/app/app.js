angular.module('numberFacts', [
  'numberFacts.services',
  'numberFacts.facts',
  'numberFacts.getFacts',
  'ngRoute'
  ])
.config(function($routeProvider){
  $routeProvider
    .when('/facts', {
      templateUrl: 'app/facts/facts.html',
      controller: 'FactsController'
    })
    .when('/getFacts', {
      templateUrl: 'app/getFacts/getFacts.html',
      controller: 'GetFactsController'
    })
    .otherwise({
      redirectTo: '/facts'
  });
});
