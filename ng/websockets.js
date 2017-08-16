angular.module('app')
.run(function($rootScope,$timeout){
    (function connect() {
        var url = 'ws://localhost:3000'
        var connection = new WebSocket(url);
        connection.onopen = function(){
            console.log('websocket connected');
        }
        connection.onclose = function(){
            console.log("connection drop trying to reconnect");
            $timeout(connect,10*1000);
        }
        connection.onmessage = function(e){
            var payload = JSON.parse(e.data);
            console.log("e data is");
            console.log(e.data);
            $rootScope.$broadcast('ws:'+payload.topic,payload.data)
        }
    })()
})