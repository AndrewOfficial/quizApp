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
        {
          answer: '',
          bool: false
        }
      ]
    })
  };

  quizFactory.removeQuestion = function(i){
    var x = quizTemplate.questions.pop();
    quizTemplate.questionsRemoved.push(x);
  };
  return quizFactory;
}]);