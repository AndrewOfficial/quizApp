app.controller('bridgeCtrl', ['$scope', 'quizFactory', 'userFactory', '$location', '$routeParams', function ($scope, quizFactory, userFactory, $location, $routeParams){
  console.log("SLDFJKS");
  userFactory.getUserInfo().then(function(){
    console.log("gj");
  })
}]);