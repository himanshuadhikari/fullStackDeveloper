var app = angular.module("myApp", ["ngRoute"]);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $httpProvider.interceptors.push('sessionInjector');

    $routeProvider.when('/', {
            "templateUrl": "views/home.html"
        })
        .when('/services', {
            "templateUrl": "views/services.html",
            "controller": "servicesCtrl"
        })
        .when('/services/:productName', {
            "templateUrl": "views/product.html",
            "controller": "productCtrl"
        })
        .when('/contactus', {
            "templateUrl": "views/contactus.html"
        })
        .when('/aboutus', {
            "templateUrl": "views/aboutus.html"
        })
}]);



app.run(["$rootScope", function($rootScope) {
    $rootScope.user = {
        firstName: "test user"
    }
}]);

app.filter("reverse", function() {
    return function(input) {
        var reverse = "";

        for (var i = input.length - 1; i >= 0; i--) {
            reverse += input[i];
        }
        return reverse;
    }
});

app.factory('sessionInjector', [function() {
    var sessionInjector = {
        request: function(config) {
            console.log(config);
            return config;
        }
    }

    return sessionInjector;
}])
