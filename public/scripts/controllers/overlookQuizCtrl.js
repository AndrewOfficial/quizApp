app.controller('overlookQuizCtrl', [ '$scope','quizFactory','$location', function ($scope, quizFactory, $location){
  $scope.quiz = quizFactory.getMyQuiz();
  $scope.gradedPaper = $scope.quiz.submissions[$scope.quiz.submissions.length - 1];
  console.log($scope.gradedPaper);

}]);