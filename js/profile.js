app.controller('fellaController', function($scope, $http, $window) {
    token = localStorage.getItem("token");
    var apiEndpoint = "http://fellafeeds.com/";

    $http.get(apiEndpoint + "feedbacker/userprofile/", {
            //                withCredentials: true,
            headers: {
                'Authorization': 'Token ' + token,
                'Content-Type': 'application/json'
            }
        })
        .then(function(response) {
            $scope.profileData = response.data[0];
            console.log($scope.profileData);
        });

    // $scope.profileData = {
    //     "dob": "2018-01-10",
    //     "phone": "7999999999",
    //     "name": "nishant",
    //     "anni": "2018-01-10",
    //     "email": ""
    // }

    $scope.showEditProfile = function() {
        $window.location.href = 'editprofile.html';
    }
});