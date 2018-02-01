app.controller('fellaController', function($scope, $http,  $window) {
    // $http.get("http://54.156.18.72/feedbacker/getredeemstore")
    // .then(function(response) {
    //     $scope.storeDetails = response.data;
    //     console.log($scope.storeDetails);
    // });

    $scope.storeDetails = [
        {
            "storepoints": [
                {
                    "id" : 1,
                    "store" : "Ravi Bar and Bistro",
                    "point" : 960
                },
                {
                    "id" : 3,
                    "store" : "Infinity Shark",
                    "point" : 1000
                }
            ],
            "totalpoint" : 960
        }
    ];

    $scope.storeDetails[0].storepoints.forEach(element => {
        console.log(element.store);
    });

    $scope.viewStore = function(storeid) {
        $window.location.href = '/store.html?id='+storeid;
    }

    $scope.showHistory = function() {
        $window.location.href = '/history.html';
    }

    $scope.showCoupons = function() {
        $window.location.href = '/coupons.html';
    }

    $scope.showHome = function() {
        $window.location.href = '/index.html';
    }
});