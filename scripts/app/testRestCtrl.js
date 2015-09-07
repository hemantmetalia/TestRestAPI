angular.module('restTestAPP').controller('testRestCtrl', function ($scope, $http) {
    //to hold the rest call type default GET would be selected
    $scope.method = {};
    $scope.method.type = 'GET';
    //to store parameters
    $scope.params = [];
    //to store response data
    $scope.response = {};
    //function to create input string to send data to http
    var data;
    //function to set parameters to data object in request
    function setParameters() {
        data = {};
        angular.forEach($scope.params, function (param, index) {
            if (param.name !== undefined)
                data[param.name] = param.value;
        });        
    }
    //function to be called at time of http call
    $scope.testRest = function () {
        //clear response on each new request
        $scope.response = {};
        setParameters();
//        request object to pass in http service
        var req = {
            method: $scope.method.type,
            url: $scope.restUrl,
            data: data
        };
        $http(req)
                .success(function (data, status, headers, config) {          
                    $scope.response.data = data;
                    $scope.response.status = status;
                    $scope.response.header = headers;
                    $scope.response.config = config;
                    $scope.response.bgcolor = 'lightgreen';
                })
                .error(function (error, status, headers, config) {
                    if (error !== null) {
                        $scope.response.data = "Error " + error.message;
                    }
                    $scope.response.status = status;
                    $scope.response.header = headers;
                    $scope.response.config = config;
                    $scope.response.bgcolor = '#D86969';
                });
    };
    //to add more parameters on ui screen
    $scope.AddNewParameter = function () {
        var param = {};
        $scope.params.push(param);
    };
    //to remove last parameter
    $scope.DeleteLastParameter = function () {
        $scope.params.splice($scope.params.length - 1, 1);
    };
});
