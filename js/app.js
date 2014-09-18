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
    })
    .constant('team', 'Team FIG')
    .constant('copyright', 'The team');