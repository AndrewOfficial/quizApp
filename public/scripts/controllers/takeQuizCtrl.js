app.controller('takeQuizCtrl', [ '$scope','quizFactory','$location', function ($scope, quizFactory, $location){
  quizFactory.getMyQuiz().then(function(data){
    $scope.quiz = data;
    $scope.quizPaper = quizFactory.newQuizPaper();
  });

  $scope.submitQuiz = function(){
    quizFactory.submitQuiz($scope.quizPaper).then(function(data){
      console.log(data);
      $location.path('/overlook-quiz/'+$scope.quiz._id + "/" + $scope.quizPaper._id);
    });
  }
}]);