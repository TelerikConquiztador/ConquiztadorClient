'use strict';

conquiztadorApp.factory('usersData', function ($http, $window) {

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
        update: function (score) {
            var user = jQuery.parseJSON($window.getItem('user'));
            console.log(user);
            var sessionKey = user.access_token;
            console.log(sessionKey);

            console.log(score)

            return $http.put('http://conquiztador.apphb.com/api/Players/Update?score=' + score,
                {
                    transformRequest: function (obj) {
                        var str = [];
                        for (var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    headers: {
                        'Authorization': 'Bearer ' + sessionKey,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });

//            return $http.post('http://localhost:34320/api/Account/Register', user);
        }
    }
});