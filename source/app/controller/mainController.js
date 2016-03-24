 myApp.controller('mainController',['$rootScope','$scope','$location','$mdSidenav','$mdDialog','Session','AuthService',
 										 function($rootScope,$scope,$location,$mdSidenav,$mdDialog,Session,AuthService) {

  $scope.currentUser={
		  	'userID':Session.userID,
		  	'userName':Session.userName,
		  	'userRole':Session.userRole
		  };
  $scope.loading=0;
  $scope.logout=function(){
  	$scope.loading++;
  	$rootScope.isLogin=AuthService.logout().then(function (data) {
		$rootScope.isLogin=data;
		$scope.loading--;
		$scope.showMessage("","Logged Out Successfully!!");
  		//$rootScope.$broadcast('user:loggedOut',Session);
  		$location.path("/");
  	});
  };
  $scope.toggleS=function (){
  	$mdSidenav('left').toggle();
  };
  $scope.openMenu = function($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };
   $scope.showMessage=function(ev,message){
   		$mdDialog.show(
      $mdDialog.alert()
        //.parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Message:')
        .textContent(message)
        .ariaLabel('Alert Message')
        .ok('OK')
        .targetEvent(ev)
    );
   };
  /*
  $rootScope.$on('user:loggedOut', function(event,data) {
     $location.path("/");
   });
  */

}]);


myApp.controller('sidenavController',['$scope','$http',function($scope,$http){
	$scope.sidebars={};
	$scope.selectedLink="";
	  $scope.selectLink= function (link) {
	  	$scope.selectedLink=link;
	  }
		$http({
		        method : "GET",
		        dataType: 'jsonp',
		        url : "api/getSidenav"
		    }).then(function mySucces(response) {
		        $scope.sidebars = response.data;
		        console.log($scope.sidebars);
		    }, function myError(response) {
		        $scope.sidebars = response.statusText;
	    });
	$scope.selectedGroup ="";   
	 $scope.selectGroup = function (group) { 
	    $scope.selectedGroup = $scope.selectedGroup!=group?group:""; 
	    //console.log($scope.selectedGroup);
	 };
  	$scope.isGroupSelected = function (group) {
  	    return $scope.selectedGroup === group;  
  	}; 
}]);


myApp.controller('TimeController',['$scope','$timeout',function($scope,$timeout){
	$scope.clock =  Date.now(); // initialise the time variable
    $scope.tickInterval = 1000 //ms

    var tick = function() {
        $scope.clock = Date.now() // get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

    // Start the timer
    $timeout(tick, $scope.tickInterval);
}]);