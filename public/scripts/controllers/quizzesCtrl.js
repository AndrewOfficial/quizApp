app.controller('quizzesCtrl', [ '$scope','quizFactory','$location', function ($scope, quizFactory, $location){
  $scope.quizzes = [];
  quizFactory.getAllQuizzes().then(function(docs){
    $scope.quizzes = docs;
  });

  $scope.takeQuiz = function(i){
    quizFactory.selectQuiz(i);
    $location.path('/take-quiz')
  }
}]);