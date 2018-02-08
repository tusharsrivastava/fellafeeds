app.controller('fellaController', function($scope, $http, $window) {
    token = localStorage.getItem("token");
    var apiEndpoint = "http://fellafeeds.com/";

    function getDate(data) {
        var date = new Date(data);
        var day = date.getDate(); //Date of the month: 2 in our example
        var month = date.getMonth() + 1; //Month of the Year: 0-based index, so 1 in our example
        var year = date.getFullYear();
        if (month < 10) {
            month = "0" + month;
        }
        return day + "/" + month + "/" + year;
    }

    function returnTime(a) {

        let date = new Date(a);
        if (date.toLocaleTimeString() == "Invalid Date") {
            return "";
        }
        return date.toLocaleTimeString();

    }
    $http.get(apiEndpoint + "feedbacker/getredeemstore/", {
            //                withCredentials: true,
            headers: {
                'Authorization': 'Token ' + token,
                'Content-Type': 'application/json'
            }
        })
        .then(function(response) {
            $scope.storeDetails = response.data;
            console.log($scope.storeDetails);
            $http.get(apiEndpoint + "feedbacker/gettransaction/", {
                    //                withCredentials: true,
                    headers: {
                        'Authorization': 'Token ' + token,
                        'Content-Type': 'application/json'
                    }
                })
                .then(function(response) {
                    $scope.transactions = response.data;
                    console.log($scope.transactions);
                    $scope.transactions.forEach(trans => {
                        $scope.storeDetails[0].storepoints.forEach(element => {
                            if (element.id == trans.id) {
                                trans.storeName = element.store;
                                console.log("store: ", element.store);
                            }
                        });
                    });
                    $scope.transactions.forEach(trans => {
                        if (trans.typ == "credit") {
                            trans.symbol = "+";
                        } else {
                            trans.symbol = "-";
                        }
                    });

                    $scope.transactions.forEach((trans) => {
                        trans.created = getDate(trans.created) + ", " + returnTime(trans.created);
                    })

                });
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




    $scope.showHistory = function() {
        $window.location.href = 'history.html';
    }

    $scope.showCoupons = function() {
        $window.location.href = 'coupons.html';
    }

    $scope.showHome = function() {
        $window.location.href = 'index.html';
    }

});