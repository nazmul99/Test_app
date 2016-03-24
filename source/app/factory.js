var myFactory=angular.module('myFactory', ['myService']);
myFactory.factory('AuthService', ['$rootScope','$http','Session', function ($rootScope,$http,Session) {
  var authService = {};
  authService.login = function (credentials) {
      return $http
            .post('api/auth/login', JSON.stringify(credentials))
            .then(function (res) {
              Session.create(res.data.sessionID,res.data.userID,res.data.userName,res.data.userRole);
              var message=res.data.message;
             //$rootScope.$broadcast('user:updated',Session);
              return {'loginStatus': !!Session.id,'message':message};
          });
  };
 
  authService.isAuthenticated = function () {
    return $http
      .get('api/getSession')
      .then(function (res) {
        Session.create(res.data.sessionID,res.data.userID,res.data.userName,res.data.userRole);
        return !!Session.id;
      });
  };
  authService.logout=function(){
    return $http
      .get('api/logout')
      .then(function (res) {
        Session.destroy();
        return !!Session.id;
      });
  };
  
  return authService;
}]);