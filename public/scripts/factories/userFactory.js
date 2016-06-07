app.factory('userFactory',['$http', 'authService', '$window',function($http, authService, $window){
  var userFact = {};

  userFact.getUserInfo = function() {
    if (!authService.isAuthed()) {
      authService.logout();
    } else {
      $http({
        headers: {'Authorization': $window.localStorage.jwtToken},
        url: '/users/' + authService.getUser().username,
        method: 'get'
      }).then(function (response) {
        console.log(response.data);
      });
    }
  };

  return userFact;

}]);