app.controller('overlookQuizCtrl', [ '$scope','quizFactory','$location', function ($scope, quizFactory, $location){
  quizFactory.getMyQuiz().then(function(data){
    $scope.quiz = data;
    $scope.gradedPaper = $scope.quiz.submissions[$scope.quiz.submissions.length - 1];
  });
  console.log($scope.gradedPaper);
  $scope.nav = function(S){
    $location.path(S);
  };
}]);