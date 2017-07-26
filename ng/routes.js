angular.module('app').config(function($routeProvider,$locationProvider){
    
    $routeProvider.when('/',{controller:'PostsCtrl',templateUrl:'posts.html'});
    $routeProvider.when('/register',{controller:'RegisterCtrl',templateUrl:'register.html'});
    $routeProvider.when('/login',{controller:'LoginCtrl',templateUrl:'login.html'});
    $locationProvider.html5Mode(true);
})
