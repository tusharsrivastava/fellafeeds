app.controller('fellaController', function($scope, $http, $window) {

    $scope.storeId = 1;
    token = localStorage.getItem("token");
    $http.get("http://54.156.18.72/feedbacker/getredeemstore/",{
//                withCredentials: true,
                headers: {
                    'Authorization': 'Token ' + token,
                    'Content-Type': 'application/json'
                }
    })
    .then(function(response) {
        $scope.storeDetails = response.data;
        console.log($scope.storeDetails);
        $scope.storeDetails[0].storepoints.forEach(element => {
        if(element.id==$scope.storeId) {
            $scope.storeName = element.store;
            console.log($scope.storeName);
        }
    });
    });

    $http.get("http://54.156.18.72/feedbacker/storesproducts/"+$scope.storeId+"/",{
//                withCredentials: true,
                headers: {
                    'Authorization': 'Token ' + token,
                    'Content-Type': 'application/json'
                }
    })
    .then(function(response) {
        $scope.products = response.data;
        console.log($scope.products);
        $scope.products[0].data.forEach(element => {
        $scope.buy[element.product_id] = false;
        $scope.quantity[element.product_id] = 0;
    });
    });

    var url = "http://54.156.18.72/feedbacker/storesproducts/"+$scope.storeId+"/";
    $scope.data = [
        {
            product_id:1,
            quantity:9
        }
    ];
    $scope.submitCheckout = ()=>{
        console.log($scope.data);  
        $http.post(url,$scope.data,{
            headers : {
                'Content-Type':'application/json'
            }
        }).then((data)=>{
        //    console.log(data);
        },(err)=>{
            console.log(err);
        })
    }

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

    

    $scope.quantity = 0;

    $scope.buy = [];
    $scope.quantity = [];
    

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