app.controller('homeCtrl', ['$scope', 'quizFactory', '$location', function ($scope, quizFactory, $location){
  $scope.showQuizModal = false;
  $scope.title = '';
  $scope.questions = 0;
  $scope.toggleQuizModal = function () {
    if ($scope.showQuizModal){
      $scope.showQuizModal = false;
    } else {
      $scope.showQuizModal = true;
    }
  };

  $scope.makeQuiz = function(){
    quizFactory.makeQuizObject.set($scope.title, $scope.questions);
    $location.path('/make-quiz')
  }
}]);