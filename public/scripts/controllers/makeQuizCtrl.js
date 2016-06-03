app.controller('makeQuizCtrl', function ($scope, quizFactory){

  $scope.quiz = quizFactory.makeQuizObject.get();
  $scope.questionQuantity = $scope.quiz.questions.length;
  console.log($scope.quiz);
  $scope.saveQuiz = function(){
  };

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
  }

});
