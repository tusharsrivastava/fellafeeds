app.controller('fellaController', function($scope, $http) {
    $http.get("http://54.156.18.72/feedbacker/userprofile")
    .then(function(response) {
        $scope.storeDetails = response.data;
        console.log($scope.storeDetails);
    });
});