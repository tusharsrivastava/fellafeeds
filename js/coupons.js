app.controller('fellaController', function($scope, $http, $window) {

    $http.get("http://54.156.18.72/feedbacker/getredeemstore")
    .then(function(response) {
        $scope.storeDetails = response.data;
        console.log($scope.storeDetails);
    });

    $http.get("http://54.156.18.72/feedbacker/gettransaction")
    .then(function(response) {
        $scope.couponData = response.data;
        console.log($scope.couponData);
    });

    // $scope.storeDetails = [
    //     {
    //         "storepoints": [
    //             {
    //                 "id" : 1,
    //                 "store" : "Ravi Bar and Bistro",
    //                 "point" : 960
    //             },
    //             {
    //                 "id" : 3,
    //                 "store" : "Infinity Shark",
    //                 "point" : 1000
    //             }
    //         ],
    //         "totalpoint" : 960
    //     }
    // ];

    // $scope.couponData = [
    //     {
    //         "id": 5,
    //         "created": "2018-01-23T09:02:21.2283321Z",
    //         "modified": "",
    //         "code": "fpRMQCPw",
    //         "points": 0,
    //         "valid_upto": "2018-02-24T09:02:21.2283321Z",
    //         "redeemed": false,
    //         "feedbacker": 9278,
    //         "store": 1
    //     },
    //     {
    //         "id": 6,
    //         "created": "2018-01-23T09:02:21.2283321Z",
    //         "modified": "",
    //         "code": "lXSM8A7S",
    //         "points": 65,
    //         "valid_upto": "2018-02-24T09:02:21.2283321Z",
    //         "redeemed": true,
    //         "feedbacker": 9278,
    //         "store": 1
    //     },
    //     {
    //         "id": 7,
    //         "created": "2018-01-20T09:02:21.2283321Z",
    //         "modified": "",
    //         "code": "lXSM8A7S",
    //         "points": 155,
    //         "valid_upto": "2018-01-24T09:02:21.2283321Z",
    //         "redeemed": true,
    //         "feedbacker": 9278,
    //         "store": 1
    //     }
    // ];

    $scope.couponData.forEach(coupon => {
        console.log(coupon);
    });

    $scope.couponData.forEach(coupon => {
        $scope.storeDetails[0].storepoints.forEach(element => {
            if(element.id==coupon.id) {
                coupon.storeName = element.store;
                console.log("store: ", element.store);
            }
        });
    });

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