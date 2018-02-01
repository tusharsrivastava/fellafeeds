app.controller('fellaController', function($scope, $http, $window) {

    $scope.storeId = 1;

    $http.get("http://54.156.18.72/feedbacker/getredeemstore")
    .then(function(response) {
        $scope.storeDetails = response.data;
        console.log($scope.storeDetails);
    });

    $http.get("http://54.156.18.72/feedbacker/storesproducts/"+$scope.storeId+"/")
    .then(function(response) {
        $scope.products = response.data;
        console.log($scope.products);
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

    // $scope.products = [
    //     {
    //         "data": [
    //             {
    //                 "max_quantity": 29,
    //                 "product_point": 100,
    //                 "product_id": 4,
    //                 "quantity": 0,
    //                 "product_name": "lit"
    //             },
    //             {
    //                 "max_quantity": 13,
    //                 "product_point": 40,
    //                 "product_id": 3,
    //                 "quantity": 0,
    //                 "product_name": "pizza"
    //             }
    //         ]
    //     }
    // ];

    $scope.storeDetails[0].storepoints.forEach(element => {
        if(element.id==$scope.storeId) {
            $scope.storeName = element.store;
            console.log($scope.storeName);
        }
    });

    $scope.quantity = 0;

    $scope.buy = [];
    $scope.quantity = [];
    $scope.products[0].data.forEach(element => {
        $scope.buy[element.product_id] = false;
        $scope.quantity[element.product_id] = 0;
    });

    $scope.buyClicked = function(id) {
        $scope.buy[id] = true;
    }

    $scope.totalCheckoutItem = 0;
    $scope.totalCheckoutPoints = 0;

    $scope.add = function(id, cost, max) {
        if($scope.quantity[id]!=max) {
            $scope.quantity[id]++;
            $scope.totalCheckoutItem++;
            $scope.totalCheckoutPoints+=cost;
        }
    }
    $scope.remove = function(id, cost) {
        if($scope.quantity[id]!=0) {
            $scope.quantity[id]--;
            $scope.totalCheckoutItem--;
            $scope.totalCheckoutPoints-=cost;
        }
    }

    $scope.checkoutFunc = function() {
        console.log("Total Items:", $scope.totalCheckoutItem);
        console.log("Total Points: ", $scope.totalCheckoutPoints);
    }

    $scope.viewHome = function() {
        $window.location.href = '/index.html';
    }

});