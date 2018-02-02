app.controller('fellaController', function($scope, $http,  $window) {
    token =localStorage.getItem("token");
    $http.get("http://54.156.18.72/feedbacker/getredeemstore/",{
//                withCredentials: true,
                headers: {
                    'Authorization': 'Token ' + token,
                    'Content-Type': 'application/json'
                }
    }).then((response)=> {
        
        console.log(response);  
        $scope.storeDetails = response.data;
        console.log($scope.storeDetails[0]);
        $scope.storeDetails[0].storepoints.forEach(element => {
        console.log(element.store);
    });
    },(err)=>{
        console.log(err);
    });

    $scope.viewStore = function(storeid) {
        $window.location.href = 'store.html?id='+storeid;
    }

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
