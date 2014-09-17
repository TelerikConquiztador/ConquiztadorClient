'use strict';

var conquiztadorApp = angular
    .module('conquiztadorApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider){

        $routeProvider
            .when('/home', {
                templateUrl: 'templates/home.html'
            })
            .when('/test', {
                templateUrl: 'templates/test.html'
            })
            .when('/test/:name', {
                templateUrl: 'templates/test.html'
            })
            .when('/questions', {
                templateUrl: 'templates/questions.html'
            })
            .when('/signup', {
                templateUrl: 'templates/signup.html'
            })
    })
    .constant('team', 'Team FIG')
    .constant('copyright', 'The team');