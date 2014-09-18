'use strict';

conquiztadorApp.factory('usersData', function ($http) {

    return {
        login: function (user, success) {
            return $http.post('http://conquiztador.apphb.com/Token',  {
                    username: user.UserName,
                    password: user.Password,
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
            return $http.post('http://conquiztador.apphb.com/api/Account/Register',
                {
                    Email: user.Email,
                    Password: user.Password,
                    ConfirmPassword: user.Password
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

//            return $http.post('http://localhost:34320/api/Account/Register', user);
        },
        update: function (user) {
            return $http.post('http://conquiztador.apphb.com/api/Account/Register',
                {
                    Email: user.Email,
                    Password: user.Password,
                    ConfirmPassword: user.Password
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

//            return $http.post('http://localhost:34320/api/Account/Register', user);
        }
    }
});