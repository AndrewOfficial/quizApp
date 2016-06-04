app.factory('quizFactory',['$http',function($http){
  var quizFactory = {};
  var quizToTake;
  var allQuizes = [];
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

  quizFactory.saveQuiz = function(){
    for(var i = 0; i<quizTemplate.questions.length; i++){
      for(var j = 0; j< quizTemplate.questions[i].options.length; j++){
        if (quizTemplate.questions[i].options[j].isCorrect != false){
          quizTemplate.questions[i].options[j].isCorrect = true;
        }
      }
    }

    $http.post('/api/quiz', quizTemplate);
  };

  quizFactory.getAllQuizes = function(){
    return $http.get('/api/quiz').then(function(response){
      allQuizes = response.data;
      return response.data;
    })
  };

  quizFactory.selectQuiz = function(i){
    console.log(allQuizes);
    quizToTake = allQuizes[i];
  };

  quizFactory.takeQuiz = function(){
    return quizToTake;
  };
  return quizFactory;
}]);