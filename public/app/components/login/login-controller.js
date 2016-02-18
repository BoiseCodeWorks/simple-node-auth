app.controller('LoginController', function($scope, $http){
   
   $scope.login = function(){
       $http.post('login', $scope.user)
            .success(function(res){
                if(res.error){
                    $scope.error = res.error;
                }else {
                    $scope.message = "Welcome back " + res.email;
                }
            })
            .error(function(res){
                debugger;
            })
   } 
   
   $scope.register = function(){
         $http.post('register', $scope.user)
            .success(function(res){
                if(res.error){
                    $scope.error = res.error;
                }else {
                    $scope.message = res.message;
                }
            })
            .error(function(res){
                debugger;
            })
   }
    
});