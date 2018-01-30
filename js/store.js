app.controller('fellaController', function($scope, $http) {
    $http.get("http://54.156.18.72/feedbacker/storesproducts/1")
    .then(function(response) {
        $scope.storeDetails = response.data;
        console.log($scope.storeDetails);
    });

    $scope.active = "active";

});