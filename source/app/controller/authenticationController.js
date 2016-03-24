myApp.controller('authenticationController',['$rootScope','$scope','$http','$location','AuthService','Session', function($rootScope,$scope,$http,$location,AuthService,Session) {
	$scope.loginMessage="";
	$scope.login=function(user){
    $scope.$parent.loading++;
  	AuthService.login(user).then(function (data) {
		$rootScope.isLogin=data.loginStatus;
		$scope.loginMessage=data.message;
    $scope.$parent.loading--;
		$scope.showMessage("",data.message);
      
     $scope.$parent.currentUser={
      'userID':Session.userID,
      'userName':Session.userName,
      'userRole':Session.userRole
    };
      $location.path('Home/Dashboard');
  	});
  };
}]);