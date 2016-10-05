/*global angular*/
angular.module('confusionApp')
    .constant("baseURL", "http://locahost:3000/")
    // .service method
    .service('menuFactory', ['$http', 'baseURL', function ($http, baseURL) {
    
    // .factory method
    // .factory('menuFactory', function () {
    
        'use strict';
        
        this.getDishes = function () {
            return $http.get(baseURL + "dishes");
        };
        
        this.getDish = function (index) {
            return $http.get(baseURL + "dishes/" + index);
        };
        
        // How to use this app with the .factory injector
        /* var menufac = {};
    
        menufac.getDishes = function(){
            return dishes;
        };
        
        menufac.getDish = function (index) {
            return dishes[index];
        };
    
        return menufac; */
    
        //How to use this app with the .service injector
    
    }]);