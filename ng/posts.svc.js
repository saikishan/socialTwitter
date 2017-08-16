angular.module('app').service('PostsSvc',function($http){
    this.fetch = function(){
        return $http.get('/api/posts')
    }
    this.create = function(post){
        console.log("thepost is about to0 crate at  fe");
        return $http.post('/api/posts',post);
    }
});