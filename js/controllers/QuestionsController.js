'use strict';

conquiztadorApp.controller('QuestionsController',
    function ($scope, $http, $routeParams, $location, $window, questionsData){

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
//        questionsData.getClosedQuestion(Math.floor(Math.random() * 1), function (question) {
            questionsData.getClosedQuestion(11, function (question) {
            console.log(question);
            $scope.closedQuestion = question;
        });

        $scope.closedQuestionActive = true;
    };

    $scope.solveOpen = function () {
        alert($('#openQuestion').val());
        $scope.openQuestionActive = false;
    };

    $scope.solveClosed = function (data) {
        if (data == $scope.closedQuestion.answer){
            alert('Correct!');
            $scope.currentRightAnswers++;
        }

        $scope.totalQuestionsAsked += 1;
        if ($scope.totalQuestionsAsked == 18)
        {
            alert('End of game');
            $scope.gameInProgress = false;
            $window.sessionStorage.setItem("score", $scope.currentRightAnswers)

            $scope.currentRightAnswers = 0;
            $scope.totalQuestionsAsked = 0;
        }

        $scope.closedQuestionActive = false;
    }
});