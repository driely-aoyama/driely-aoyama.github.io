var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
    $routeProvider
    .when('/', {
      templateUrl : 'app/views/home.html',
      controller     : 'homeController',
    })
    .when('/blog/web/javascript/angular/spa', {
      templateUrl : 'app/views/blog/angularSPA.html',
      controller     : 'blogSPAController',
    })
    .otherwise ({ redirectTo: '/' });
});