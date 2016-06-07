app.controller('loginCtrl', ['$scope', '$https', 'authService', '$location',
  function ($scope, $https, authService, $location) {
    $scope.submit = function () {
      $https.post('/api/users/login', $scope.form)
        .then(function (response) {

          // save json web token in session storage
          authService.saveToken(response.data);

          // redirect to projects page
          $location.path('/bridge/' + $scope.form.username);
        }, function () {
          // wipe out the stored token
          authService.logout();
        })
    };
  }]);