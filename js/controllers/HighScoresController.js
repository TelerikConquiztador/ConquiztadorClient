'use strict';

conquiztadorApp.controller('HighScoresController',
    function ($scope, scoreData) {

        scoreData.getData(function (data){
            $scope.scores = data;
        });
    }
);