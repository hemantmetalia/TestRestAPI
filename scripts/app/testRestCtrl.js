angular.module('restTestAPP').controller('testRestCtrl', function ($scope, $http) {
    //to hold the rest call type default GET would be selected
     $scope.method = {};
    $scope.method.type = 'GET';
    //function to be called at time of http call
    $scope.testRest = function () {
//        request object to pass in http service
        var req = {
            method: $scope.method.type,
            url: $scope.restUrl
        };
        console.log(req);
        $http(req)
                .success(function (response) {
                    $scope.response = response;                    
                })
                .error(function (error) {
                    $scope.error = error;
                });

    };
});
