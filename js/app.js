var app = angular.module("app", ['ngRoute']);

app.constant("API", "127.0.0.1:3000");

app.config(function($routeProvider) {
    $routeProvider
    .when("/",
    {
      templateUrl   : "templates/accueil.tpl.htm",
      controller    : "mainController",
      pageName      : "Home",
    })

    .when("/1",
    {
      templateUrl   : "templates/accueil.tpl.htm",
      controller    : "mainController",
      pageName      : "Home",
    })

    .when("/2",
    {
      templateUrl   : "templates/accueil.tpl.htm",
      controller    : "mainController",
      pageName      : "Home",
    })
    .when("/3",
    {
      templateUrl   : "templates/accueil.tpl.htm",
      controller    : "mainController",
      pageName      : "Home",
    })

    .otherwise({templateUrl: 'templates/404.tpl.htm'});
});
