app.controller('takeQuizCtrl', [ '$scope','quizFactory','$location', function ($scope, quizFactory, $location){
  $scope.quiz = quizFactory.takeQuiz();
  $scope.quizPaper = quizFactory.newQuizPaper();

  $scope.submitQuiz = function(){
    var gradedPaper = quizFactory.submitQuiz($scope.quizPaper);
    alert("You Scored: " + gradedPaper.score);
  }
}]);