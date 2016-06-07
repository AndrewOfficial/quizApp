app.controller('makeQuizCtrl', function ($scope, quizFactory, $location){

  $scope.quiz = quizFactory.makeQuizObject.get();
  $scope.questionQuantity = $scope.quiz.questions.length;

  $scope.changeQuestionQuantity = function (){
    if ($scope.questionQuantity > $scope.quiz.questions.length){
      for (var i = $scope.quiz.questions.length; i < $scope.questionQuantity; i++){
        quizFactory.addQuestion(i);
      }
    } else {
      for (var i = $scope.quiz.questions.length; i > $scope.questionQuantity; i--){
        quizFactory.removeQuestion(i);
      }
    }
  };

  $scope.addAnswer = function (index){
    quizFactory.addAnswer(index);
  };

  $scope.removeAnswer = function (index){
    quizFactory.removeAnswer(index);
  };

  $scope.saveQuiz = function (){
    quizFactory.saveQuiz();
    $location.path('/quizzes');
  };

});