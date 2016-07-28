app.controller('myController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
    $scope.message = "hello world";
    $scope.color = "red";
    var colors = ['black', 'red', 'green', 'yellow']
    var count = 0;
    $scope.colors = [{ "name": 'black' },
        { "name": 'red' },
        { "name": 'green' },
        { "name": 'yellow' }
    ];

    $scope.changeColor = function() {
        if (count === colors.length - 1) {
            count = 0;
        } else {
            count++;
        }
        $scope.myClass = colors[count];
    }
    debugger;
    $http.get('views/aboutus.html').then(function(data) {
        console.log(data);
    }, function(error) {
        console.log(error);
    });
}])
