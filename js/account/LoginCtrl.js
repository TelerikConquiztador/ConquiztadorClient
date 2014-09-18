'use strict';

conquiztadorApp.controller('LoginCtrl',
    function ($scope, $rootScope, $location, $window, identity, usersData){

        $scope.identity = identity;

        $scope.login = function(user){
            usersData.login(user)
                .success(function (data) {
                    // authentication OK
                    $rootScope.user = data;
                    $rootScope.$emit('userChanged');
                    $location.url('/');
                    $scope.logged = true;
                    $window.sessionStorage.setItem("user", JSON.stringify(data));
                    $scope.user = data;
                    console.log(data);
                })
                .error(function (error) {
                    alert(error);
                })
        };

        $scope.logout = function(){
            $scope.logged = false;
            $window.sessionStorage.clear();
        };

    });