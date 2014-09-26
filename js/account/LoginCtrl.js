'use strict';

conquiztadorApp.controller('LoginCtrl',
    function ($scope, $rootScope, $location, $window, identity, usersData, notifier) {

        $scope.identity = identity;

        $scope.login = function (user) {
            usersData.login(user)
                .success(function (data) {
                    // authentication OK
                    $rootScope.user = data;
                    $rootScope.$emit('userChanged');
                    $location.url('/');
                    $window.sessionStorage.setItem("user", JSON.stringify(data));
                    $scope.user = data;
                    notifier.success("Welcome !");
                })
                .error(function (error) {
                    notifier.error("Check you input! Couldn't log in");
                })
        };

        $scope.logout = function () {
            $scope.logged = false;
            $window.sessionStorage.clear();
        };

    });