'use strict';

conquiztadorApp.controller('PageController',
    function PageController($scope, team, copyright) {
        $scope.team = team;
        $scope.copyright = copyright;
    }
);