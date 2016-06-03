app.factory('quizFactory',[function(){
  var quizFactory = {};
  var quizTemplate = {
    title:'',
    questions: [
    ],
    questionsRemoved: []
  };

  quizFactory.makeQuizObject = {
    set: function (title, questions){
      quizTemplate.title = title;
      console.log(title, questions);
      for (var i = 0; i < questions; i++){
        quizFactory.addQuestion(i);
      }
    },
    get: function (){
      return quizTemplate;
    }
  };

  quizFactory.addQuestion = function(i){
    quizTemplate.questions.push({
      number: i,
      inQuery: '',
      options: [
      ]
    });
    for (var j = 0; j<4 ; j++){
      quizFactory.addAnswer(i);
    }
  };

  quizFactory.removeQuestion = function(i){
    var x = quizTemplate.questions.pop();
    quizTemplate.questionsRemoved.push(x);
  };

  quizFactory.addAnswer = function(i){
    quizTemplate.questions[i].options.push(
      {
        answer: '',
        isCorrect: false
      }
    );
  };

  quizFactory.removeAnswer = function(i){
    var x = quizTemplate.questions[i].options.pop();
  };
  return quizFactory;
}]);