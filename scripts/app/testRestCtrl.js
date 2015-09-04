angular.module('restTestAPP').controller('testRestCtrl', function ($scope, $http) {
    //function to be called at time of http call
    $scope.testRest = function () {
//        request object to pass in http service
        var req = {
            method: "GET",
            url: $scope.restUrl
        };
        console.log(req);
        $http(req)
                .success(function (response) {
                    $scope.response = response;
                    ;
                })
                .error(function (error) {
                    $scope.error = error;
                });

    };
});
