app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider
        .state('login', {
            url: '/login',
            controller: 'LoginController',
            templateUrl: '/app/components/login/login.html'
        })
    
    
})