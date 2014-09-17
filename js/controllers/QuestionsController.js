'use strict';

conquiztadorApp.controller('QuestionsController',
    function ($scope, $http, $routeParams, $location, questionsData){

    $scope.openQuestionActive = false;
    $scope.closedQuestionActive = false;

    $scope.getOpenQuestion = function () {
        questionsData.getOpenQuestion(Math.random() * 20, function (question) {
            $scope.openQuestion = question;
        });

        $scope.openQuestionActive = true;
        console.log($scope.openQuestionActive);
    };

    $scope.getClosedQuestion = function () {
        questionsData.getClosedQuestion(Math.random() * 20, function (questions) {
            $scope.closedQuestions = questions;
        });

        var question = {
            "Question": "Koi e nomer 13?",
            "AnswerA": "1",
            "AnswerB": "2",
            "AnswerC": "13",
            "AnswerD": "4",
            "CorrectAnswer": "13"
        };

//        questionsData.postClosedQuestion(JSON.stringify(question)).success(alert('question added check DB!'));
        $scope.closedQuestionActive = true;
    };
});