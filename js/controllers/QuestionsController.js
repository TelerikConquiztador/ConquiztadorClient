'use strict';

conquiztadorApp.controller('QuestionsController',
    function ($scope, $http, $routeParams, $location, $window, questionsData, usersData){

    $scope.openQuestionActive = false;
    $scope.closedQuestionActive = false;
    $scope.closedQeustionAnswer = 'AnswerA';
    $scope.currentRightAnswers = 0;
    $scope.totalQuestionsAsked = 0;
    $scope.gameInProgress = false;


    $scope.startGame = function(){
        $scope.gameInProgress = true;
    };

    $scope.getOpenQuestion = function () {
        questionsData.getOpenQuestion(Math.random() * 20, function (question) {
            $scope.openQuestion = question;
        });

        $scope.openQuestionActive = true;
        console.log($scope.openQuestionActive);
    };

    $scope.getClosedQuestion = function () {
        var randomId = Math.floor(Math.random() * 18);
        questionsData.getClosedQuestion(randomId, function (question) {
            $scope.closedQuestion = question;
        });

        $scope.closedQuestionActive = true;
    };

    $scope.solveOpen = function () {
        alert($('#openQuestion').val());
        $scope.openQuestionActive = false;
    };

    $scope.solveClosed = function (data) {
        console.log(data);
        if (data == $scope.closedQuestion.CorrectAnswer){
            alert('Correct!');
            $scope.currentRightAnswers++;
        }

        $scope.totalQuestionsAsked += 1;
        if ($scope.totalQuestionsAsked == 18)
        {
            alert('End of game');
            $scope.gameInProgress = false;
            var user = $window.sessionStorage.getItem('user');

            var result = $scope.currentRightAnswers;
            $window.sessionStorage.setItem('user',user);

            usersData.update(result);


            $scope.currentRightAnswers = 0;
            $scope.totalQuestionsAsked = 0;
        }

        $scope.closedQuestionActive = false;
    }
});