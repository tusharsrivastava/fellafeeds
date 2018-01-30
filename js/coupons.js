app.controller('fellaController', function($scope, $http) {
    $http.get("http://54.156.18.72/feedbacker/gettransaction")
    .then(function(response) {
        $scope.profileData = response.data;
        console.log($scope.profileData);
    });
});