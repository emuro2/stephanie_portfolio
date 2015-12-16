var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'portfolioAppControllers', 'ui.bootstrap']);


portfolioApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/paintings', {
        templateUrl: 'partials/paintings.html',
        controller: 'portfolioAppCtrl'
      }).
      when('/portfolio', {
        templateUrl: 'partials/portfolio.html',
        controller: 'portfolioAppCtrl'
      }).
      when('/photography', {
        templateUrl: 'partials/photography.html',
        controller: 'portfolioAppCtrl'
      }).
      when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'portfolioAppCtrl'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'portfolioAppCtrl'
      }).
      otherwise({
        redirectTo: '/contact'
      });
  }]);
