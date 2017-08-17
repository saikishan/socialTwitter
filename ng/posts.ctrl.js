angular.module('app').controller('PostsCtrl',function($scope,PostsSvc){
    $scope.addPost = function(){
        console.log("entered on to addpost()");
        console.log($scope.postBody);
        if($scope.postBody){
            PostsSvc.create({
                username: 'kishan',
                body: $scope.postBody
            }).success(function(post){
                $scope.postBody=null;
            });
        }
    }
    $scope.$on('ws:new_post',function(_,post){
       // console.log("in the posts ctrl");
       $scope.$apply(function(){
           $scope.posts.unshift(post);
       }) 
    });
    PostsSvc.fetch().success(function(posts){
        $scope.posts=posts;
    });
});