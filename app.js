
var app = angular.module('pcRepair', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
    
    //Home State and Views 
    
    .state('home', {
        url: '/home',
        templateUrl: '/views/home.html',
        // controller: 'mainCtrl'
    })
    
    .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        // controller: 'mainCtrl'
    })    

    .state('services', {
        url: '/services',
        templateUrl: 'views/services.html',
        // controller: 'mainCtrl'
    })    
    
    .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        // controller: 'mainCtrl'
    })    
    

    
    
//end    
}]);