app.controller('fellaController', function($scope, $http) {
    $http.get("http://54.156.18.72/feedbacker/userprofile")
    .then(function(response) {
        $scope.profileData = response.data;
        console.log($scope.profileData);
    });
});