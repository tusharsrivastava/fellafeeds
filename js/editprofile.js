app.controller('fellaController', function($scope, $http) {
    // $http.get("http://54.156.18.72/feedbacker/userprofile")
    // .then(function(response) {
    //     $scope.profileData = response.data;
    //     console.log($scope.profileData);
    // });

    $scope.profileData = {
        "dob": "2018-01-10",
        "phone": "7999999999",
        "name": "nishant",
        "anni": "2018-01-10",
        "email": "demoemail@demodomain.com"
    }

    console.log($scope.profileData);
});