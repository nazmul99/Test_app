 var myApp=angular.module('myApp', ['myService','myFactory','ngRoute','ngMaterial','ngAnimate']);
 
 /*** Theme Configuration ***/
 myApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .warnPalette('deep-orange')
    .accentPalette('deep-purple');
});
 /*** Theme Configuration ***/

 /*** Routing Configuration ***/
 myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'source/partials/authentication.htm',
        controller: 'authenticationController'
      }).
      when('/Home/Dashboard', {
        templateUrl: 'source/partials/Home/dashboard.htm',
        controller: 'dashboardController'
      }).
      when('/Profile', {
        templateUrl: 'source/partials/Home/profile.htm',
        controller: 'dashboardController'
      }).otherwise({
        redirectTo: '/Home/Dashboard'
      });
  }]);
 /*** Routing Configuration ***/

 /*** Run Block ***/
 myApp.run( function($rootScope, $location,AuthService) {
 	
    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
    	AuthService.isAuthenticated().then(function (data) {
			$rootScope.isLogin=data;
		  	if(!$rootScope.isLogin){
		  		if ( next.templateUrl != "source/partials/authentication.htm" ) {
		  			$location.path( "/" );
		  		}
		  	} 
		  	else{
		  		if ( next.templateUrl == "source/partials/authentication.htm" ) {
		  			$location.path( "/Home/Dashboard" );
		  		}
		  	}      
  		});      
    });
    
 });
/*** Run Block ***/