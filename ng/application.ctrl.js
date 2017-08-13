angular.module('app')
.controller('ApplicationCtrl',function($scope,UserSvc){
    $scope.$on('login',function(_,user){
     alert("got the user data"+user);
        $scope.currentUser = user;
    })
    $scope.logout = function(){
     //   alert("inlogout");
        $scope.currentUser=null;
        UserSvc.logout();
    }
})