/*global angular*/
//ui-router configuration
angular.module('confusionApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
    
        'use strict';
    
        $stateProvider
            // route for the home page
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        template : 'views/header.html'
                    },
                    'content': {
                        template : '<h1>To be Completed</h1>',
                        controller  : 'IndexController'
                    },
                    'footer': {
                        template : 'views/footer.html'
                    }
                }
            })
                    // route for the aboutus page
            .state('app.aboutus', {
                url: 'aboutus',
                views: {
                    'content@': {
                        template: '<h1>To be Completed</h1>'
                    }
                }
            })
                    // route for the contactus page
            .state('app.contactus', {
                url: 'contactus',
                views: {
                    'content@': {
                        template : 'views/contactus.html',
                        controller  : 'ContactController'
                    }
                }
            })

            // route for the menu page
            .state('app.menu', {
                url: 'menu',
                views: {
                    'content@': {
                        template : 'views/menu.html',
                        controller  : 'MenuController'
                    }
                }
            })

            // route for the dishdetail page
            .state('app.dishdetails', {
                url: 'menu/:id',
                views: {
                    'content@': {
                        template : 'views/dishdetail.html',
                        controller  : 'DishDetailController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    });
    


// ngRoute configuration
/*angular.module('confusionApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            // route for the contactus page
            .when('/contactus', {
                templateUrl : 'contactus.html',
                controller  : 'ContactController'
            })
            // route for the menu page
            .when('/menu', {
                templateUrl : 'menu.html',
                controller  : 'MenuController'
            })
            // route for the dish details page
            .when('/menu/:id', {
                templateUrl : 'dishdetail.html',
                controller  : 'DishDetailController'
            })
            .otherwise('/contactus');
    })*/