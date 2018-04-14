// mustb undestand what here
app.controller('PostController',['$scope',function($scope)
{
   $scope.sendPost = function() {
       
        $http.post("/echo/json/", data).success(function(data, status) {
            $scope.hello = data;
        })
    };
    console.log('you press me')     
}]);


