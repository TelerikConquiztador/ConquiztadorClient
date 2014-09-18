conquiztadorApp.factory('identity', function($window){

    return {
        currentUser : $window.sessionStorage.getItem("user")
    }
});