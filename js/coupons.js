app.controller('fellaController', function($scope, $http, $window) {
    token = token = localStorage.getItem("token");
    
    function getDate(data){
      var date = new Date(data);
      var day = date.getDate(); //Date of the month: 2 in our example
      var month = date.getMonth()+1; //Month of the Year: 0-based index, so 1 in our example
      var year = date.getFullYear();
      if(month<10){
        month = "0"+month;
      }
      return day+"/"+month+"/"+year;
    }
     function returnTime(a){

    let date = new Date(a);
    if(date.toLocaleTimeString() == "Invalid Date"){
        return "";
    }
    return date.toLocaleTimeString();

} 
    
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
        $http.get("http://54.156.18.72/feedbacker/gettransaction/",{
//                withCredentials: true,
                headers: {
                    'Authorization': 'Token ' + token,
                    'Content-Type': 'application/json'
                }
    })
    .then(function(response) {
        $scope.couponData = response.data;
        console.log($scope.couponData);
            $scope.couponData.forEach(coupon => {
       coupon.created = getDate(coupon.created) + ', '+returnTime(coupon.created);
    });
         

    $scope.couponData.forEach(coupon => {
        $scope.storeDetails[0].storepoints.forEach(element => {
            if(element.id==coupon.id) {
                coupon.storeName = element.store;
                console.log("store: ", element.store);
            }
        });
    });
    });

    });

    
    

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
