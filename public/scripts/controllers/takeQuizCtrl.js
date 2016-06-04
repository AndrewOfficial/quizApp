app.controller('takeQuizCtrl', [ '$scope','quizFactory','$location', function ($scope, quizFactory, $location){
  $scope.quiz = quizFactory.takeQuiz();
  console.log($scope.quiz);
}]);