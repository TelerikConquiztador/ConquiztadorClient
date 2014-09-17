'use strict';

conquiztadorApp.controller('SignUpCtrl',
    function ($scope, $http, $location, usersData){

        $scope.signup = function(user){
            var user = {
                "Email": "asd@asd.com",
                "Password": "asdasd",
                "ConfirmPassword": "asdasd"
            };

            usersData.register(user).success(alert('Registered!'));
        }


    });