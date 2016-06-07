app.controller('registerCtrl', ['$scope', '$https', '$location', function ($scope, $https, $location) {
  $scope.submit = function () {
    $https.post('/api/users/register', $scope.form)
      .then(function (response) {
        console.log(response);
        $location.path('/login')
      });
  }
}]);