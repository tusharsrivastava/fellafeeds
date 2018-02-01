app.controller('fellaController', function($scope, $http, $window) {

    $http.get("http://54.156.18.72/feedbacker/getredeemstore")
    .then(function(response) {
        $scope.storeDetails = response.data;
        console.log($scope.storeDetails);
    });

    $http.get("http://54.156.18.72/feedbacker/gettransaction")
    .then(function(response) {
        $scope.transactions = response.data;
        console.log($scope.transactions);
    });

    // $scope.storeDetails = [
    //     {
    //         "storepoints": [
    //             {
    //                 "id" : 1,
    //                 "store" : "Ravi Bar and Bistro 1",
    //                 "point" : 960
    //             },
    //             {
    //                 "id" : 3,
    //                 "store" : "Ravi Bistro 3",
    //                 "point" : 1000
    //             }
    //         ],
    //         "totalpoint" : 960
    //     }
    // ];

    // $scope.transactions = [
    //     {
    //         "id": 3,
    //         "created" : "2018-01-23T07:54:44.2283321Z",
    //         "modified": "",
    //         "points": 100,
    //         "typ": "credit",
    //         "description": "nishant kumar gave feedback at sRavi Bar and Bistro store",
    //         "status": true,
    //         "feedbacker": 9278
    //     },
    //     {
    //         "id": 1,
    //         "created" : "2018-01-23T07:54:44.2283321Z",
    //         "modified": "",
    //         "points": 180,
    //         "typ": "credit",
    //         "description": "feedback at sRavi Bar and Bistro store",
    //         "status": true,
    //         "feedbacker": 9278
    //     }
    // ];

    $scope.transactions.forEach(trans => {
        if(trans.typ=="credit") {
            trans.symbol = "+";
        } else {
            trans.symbol = "-";
        }
    });

    $scope.transactions.forEach(trans => {
        $scope.storeDetails[0].storepoints.forEach(element => {
            if(element.id==trans.id) {
                trans.storeName = element.store;
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