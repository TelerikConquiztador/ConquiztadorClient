'use strict';

conquiztadorApp.factory('usersData', function ($http, $window, baseUrl) {

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
            return $http.post(baseUrl + 'Account/Register',
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
            var user = jQuery.parseJSON($window.sessionStorage.getItem('user'));
            console.log(user);
            var sessionKey = user.access_token;
            var username = user.userName;

            console.log(sessionKey);

            console.log(score);


            // { headers: authorization.getAuthorizationHeader() }
            return $http.post(baseUrl + 'UpdateScore',
                {
                    username: username,
                    score: score
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
            /*
             return $http({
             method: 'PUT',
             url: 'http://localhost:34320/api/Players/Update?score=' + score,
             beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'bearer ' + sessionKey)},
             contentType:"application/x-www-form-urlencoded"
             }).success(function() {
             console.log("POST Json object worked!");
             }).error(function(){
             console.log("POST Json object failed!");
             });*/

//            return $http.post('http://localhost:34320/api/Account/Register', user);
        }
    }
});