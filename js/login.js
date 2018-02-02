app.controller('loginController', function($scope, $http, $window) {
    var url = 'http://54.156.18.72/rest-auth/login/';
    $scope.data = {
        username:'',
        password:''
    };
    $scope.submitform = ()=>{
        console.log($scope.data);  
        $http.post(url,$scope.data,{
            headers : {
                'Content-Type':'application/json'
            }
        }).then((data)=>{
           console.log(data);
            localStorage.setItem("token",data.data.key);
            $window.location.href = 'home.html';
        },(err)=>{
            console.log(err);
        })
    }
    
});
