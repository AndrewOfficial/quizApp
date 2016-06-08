app.controller('homeCtrl', ['$scope', 'quizFactory', '$location', function ($scope, quizFactory, $location, $window){
  $scope.showQuizModal = false;
  $scope.title = '';
  $scope.questions = 5;

  $scope.height = window.innerHeight;

  $scope.makeQuiz = function(){
    $location.path('/make-quiz')
  };

  $scope.takeQuiz = function(){
    $location.path('/quizzes')
  }
}]);