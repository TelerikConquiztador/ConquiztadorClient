'use strict';

conquiztadorApp.factory('usersData', function ($http) {

    return {
        login: function (user) {
            var ourserviceUrl = 'service/open-questions' + name;
            return $http.post('http://conquiztador.apphb.com/Token',  {
                    username: $scope.user.email,
                    password: $scope.user.password,
                    grant_type: "password"
                },
                {
                    transformRequest: function (obj) {
                        var str = [];
                        for (var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
        },
        register: function (user) {
            return $http.post('http://conquiztador.apphb.com/api/Account/Register', user);
        }
    }
});