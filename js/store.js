app.controller('fellaController', function($scope, $http) {
    // $http.get("http://54.156.18.72/feedbacker/storesproducts/1")
    // .then(function(response) {
    //     $scope.products = response.data;
    //     console.log($scope.products);
    // });

    $scope.products = [
        {
            "data": [
                {
                    "max_quantity": 29,
                    "product_point": 100,
                    "product_id": 4,
                    "quantity": 0,
                    "product_name": "lit"
                },
                {
                    "max_quantity": 13,
                    "product_point": 40,
                    "product_id": 3,
                    "quantity": 0,
                    "product_name": "pizza"
                }
            ]
        }
    ];

});