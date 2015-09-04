angular.module('restTestAPP').controller('testRestCtrl', function ($scope, $http) {
    //to hold the rest call type default GET would be selected
    $scope.method = {};
    $scope.method.type = 'GET';
    //to store parameters
    $scope.params = [];
    //to store response data
    $scope.response={};
    //function to create input string to send data to http
    var data;
    function setParameters() {
        data = '{';
        angular.forEach($scope.params, function (param, index) {
            if (param.name !== undefined)
                data = data + "'" + param.name + "':'" + param.value + "',";
        });
        //to remove last ,
        data = data.substring(0, data.length - 1);
        data = data + '}';
        console.log(data);

    }
    //function to be called at time of http call
    $scope.testRest = function () {
        setParameters();
//        request object to pass in http service
        var req = {
            method: $scope.method.type,
            url: $scope.restUrl,
            data:data
        };
        console.log(req);
        $http(req)
                .success(function (data, status, headers, config) {
                    $scope.response.data = data;
                    $scope.response.status = status;
                    $scope.response.header = headers;
                    $scope.response.config = config;
                })
                .error(function (error, status, headers, config) {
                    
                    $scope.response.data = "Error "+error.message;
                    $scope.response.status = status;
                    $scope.response.header = headers;
                    $scope.response.config = config;

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
