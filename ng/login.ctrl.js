angular.module('app')
.controller('LoginCtrl',function($scope,UserSvc,$location){
    $scope.login = function(username,password){
        console.log("its loginfunction");
        UserSvc.login(username,password)
        .then(function(response){
   //         console.log(response);
            $scope.$emit('login',response.data)
        })
    }
})
