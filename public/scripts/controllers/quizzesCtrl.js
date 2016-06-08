app.controller('quizzesCtrl', [ '$scope','quizFactory','$location', function ($scope, quizFactory, $location){
  $scope.height = window.innerHeight;
  $scope.quizzes = [];
  quizFactory.getAllQuizzes().then(function(docs){
    $scope.quizzes = docs;
  });

  $scope.takeQuiz = function(i){
    $location.path('/take-quiz/'+ $scope.quizzes[i]._id)
  }
}]);