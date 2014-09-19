'use strict';

conquiztadorApp.factory('questionsData', function ($http, baseUrl) {

    return {
        getOpenQuestion: function (id, success) {
            $http({method: 'GET', url: baseUrl + 'ClosedQuestions/All'})
                .success(function(data,status,headers,config){
                    var openQuestion = {
                        question : "Who is number one?",
                        answer : 1
                    };

                    success(openQuestion);
                })
                .error(function(data, status, headers, config){

                });
        },
        getClosedQuestion: function(id, success){
            $http({method: 'GET', url: baseUrl + 'ClosedQuestions/ById/' + id})
                .success(function(data,status,headers,config){
                    console.log(data);
                    success(data);
                })
                .error(function(data, status, headers, config){

                });
        },
        postClosedQuestion: function(data){
            return $http.post('http://conquiztador.apphb.com/api/ClosedQuestions/Create', data);
        },
        postOpenQuestion: function (data) {
            return $http.post('http://conquiztador.apphb.com/api/OpenQuestions/Create', data);
        },
        answerQuestion: function (answer) {
            // TODO: CHANGE URL AND SET ANSWER
            return $http.post('http://conquiztador.apphb.com/api/OpenQuestions/Create', data);
        }
    }
});