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

        var elementToChangeId = '';
        if ($scope.totalQuestionsAsked < 10){
            elementToChangeId = '0';
        }
        elementToChangeId += $scope.totalQuestionsAsked;

        if (data == $scope.closedQuestion.CorrectAnswer){
            alert('Correct!');
            $scope.currentRightAnswers++;

            $('#free' + elementToChangeId).hide();
            $('#red' + elementToChangeId).hide();
            $('#green' + elementToChangeId).show();
        }
        else {
            $('#free' + elementToChangeId).hide();
            $('#green' + elementToChangeId).hide();
            $('#red' + elementToChangeId).show();
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

    function changeColor(elementId) {
        //alert(elementId.slice(2));
        if (elementId.charAt(0) === 'r') {
            //alert(elementId);
            $('#' + elementId).hide();
            $('#green' + elementId.substr(elementId.length - 2)).show();
        }
        else if (elementId.charAt(0) === 'g') {
            //alert(elementId);
            $('#' + elementId).hide();
            $('#free' + elementId.substr(elementId.length - 2)).show();
        }
        else if (elementId.charAt(0) === 'f') {
            //alert(elementId);
            $('#' + elementId).hide();
            $('#red' + elementId.substr(elementId.length - 2)).show();
        }
    }
});