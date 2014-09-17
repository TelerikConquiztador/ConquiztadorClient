'use strict';

conquiztadorApp.controller('LoginCtrl',
    function ($scope, $location, identity, usersData){

        $scope.identity = identity;

        $scope.login = function(user){
            user.Password = CryptoJS.SHA1( user.Password).toString();

            usersData.login(user).success(alert('Logged as ' + user.UserName));
        };

        $scope.logout = function(){

        };

    });