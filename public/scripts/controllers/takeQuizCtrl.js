app.controller('takeQuizCtrl', [ '$scope','quizFactory','$location', function ($scope, quizFactory, $location){
  quizFactory.getMyQuiz().then(function(data){
    $scope.quiz = data;
    $scope.quizPaper = quizFactory.newQuizPaper();
  });

  $scope.submitQuiz = function(){
    quizFactory.submitQuiz($scope.quizPaper);
    $location.path('/overlook-quiz');
  }
}]);