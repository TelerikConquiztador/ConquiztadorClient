'use strict';

conquiztadorApp.controller('SignUpCtrl',
    function ($scope, $http, $location, usersData){

        $scope.signup = function(user){
            var newUser = {
                "Email": user.Email,
                "Password": user.Password,
                "ConfirmPassword": user.Password
            };

            console.log(newUser);
            usersData.register(newUser).success(function (res) {
                console.log(res);
            });
            $scope.registered = true;
        }
    });