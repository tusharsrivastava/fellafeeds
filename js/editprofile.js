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
        "anni": "2018-10-10",
        "email": "demoemail@demodomain.com"
    }

    $scope.dob = $scope.profileData.dob.split("-");
    $scope.anni = $scope.profileData.anni.split("-");

    $scope.dobDay = $scope.dob[2];
    $scope.dobMonth = $scope.dob[1];
    $scope.dobYear = $scope.dob[0];

    $scope.anniDay = $scope.anni[2];
    $scope.anniMonth = $scope.anni[1];
    $scope.anniYear = $scope.anni[0];

    $scope.day = [];
    $scope.month = [1,2,3,4,5,6,7,8,9,10,11,12];
    $scope.year = [];
    $scope.jy = 0;
    for(j=1900; j<=2018; j++) {
        $scope.year[$scope.jy] = j;
        $scope.jy++;
    }

    if($scope.month[1]%2!=0){
        for(i=1; i<=31; i++) {
            $scope.day[i-1] = i;
        }
    } else {
        for(i=1; i<=30; i++) {
            $scope.day[i-1] = i;
        }
    }

});