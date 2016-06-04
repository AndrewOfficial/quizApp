app.controller('quizzesCtrl', [ '$scope','quizFactory','$location', function ($scope, quizFactory, $location){
  $scope.quizzes = [];
  quizFactory.getAllQuizes().then(function(docs){
    $scope.quizzes = docs;
  });

  $scope.takeQuiz = function(i){
    $location.path('/take-quiz')
  }
}]);