app.controller('takeQuizCtrl', [ '$scope','quizFactory','$location', function ($scope, quizFactory, $location){
  $scope.quiz = quizFactory.getMyQuiz();
  $scope.quizPaper = quizFactory.newQuizPaper();

  $scope.submitQuiz = function(){
    quizFactory.submitQuiz($scope.quizPaper);
    $location.path('/overlook-quiz');
  }
}]);