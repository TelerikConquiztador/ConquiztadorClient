'use strict';

var conquiztadorApp = angular
    .module('conquiztadorApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider){

        $routeProvider
            .when('/home', {
                templateUrl: 'templates/home.html'
            })
            .when('/chat', {
                templateUrl: 'templates/chat.html'
            })
            .when('/questions', {
                templateUrl: 'templates/questions.html'
            })
            .when('/signup', {
                templateUrl: 'templates/signup.html'
            })
            .when('/high-scores', {
                templateUrl: 'templates/high-scores.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
    })
    .constant('toastr', toastr)
    .constant('baseUrl', 'http://conquiztador.apphb.com/api/')
    .constant('team', 'Team FIG')
    .constant('copyright', 'The team');