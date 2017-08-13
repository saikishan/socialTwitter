angular.module('app')
.service('UserSvc',function($http){
    var svc = this;
    var defaulth = $http.defaults.headers.common['X-Auth'];
    svc.getUser = function(){
        return $http.get('/api/users');
    }
    svc.login = function(username,password){
        return $http.post('/api/sessions',{
            username: username, password: password
        }).then(function(val){
            svc.token = val.data;
            $http.defaults.headers.common['X-Auth'] = val.data;
            return svc.getUser();
        })
    }
    svc.register = function(username,password){
        return $http.post('/api/users',{
            username:username,password:password
        })
    }
    svc.logout = function(){
        svc.token = null;
        $http.defaults.headers.common['X-Auth'] = defaulth;
    }
})