'use strict';

conquiztadorApp.factory('testData', function ($http) {

    return {
        getData: function (name, success) {
            $http({method: 'GET', url: 'https://api.github.com/users/' + name})
                .success(function(data,status,headers,config){
                    success(data);
                })
                .error(function(data, status, headers, config){

                });
        }
    }
});