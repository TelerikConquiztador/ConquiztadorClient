'use strict';

conquiztadorApp.controller('TestServicesController',
    function TestServicesController($scope, $http, $routeParams, $location, testData){

        testData.getData('Plamen5kov', getSomething);

        function getSomething(data) {
            $scope.test = data;
        };
});