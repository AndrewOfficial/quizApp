app.factory('quizFactory',['$http', '$routeParams', function($http,$routeParams){
  var quizFactory = {};
  var myQuiz;
  var gradedPaper;
  var allQuizzes = [];
  var quizTemplate;
  function newQuiz (){
    return {
    creator:'',
    title:'',
    questions: [],
    questionsRemoved: [],
    submissions: []
    }
  };

  quizFactory.makeQuizObject = {
    set: function (){
      quizTemplate = new newQuiz();
      quizTemplate.title = '';
      for (var i = 0; i < 2; i++){
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
    quizTemplate.questions = fixAnswerSheet(quizTemplate.questions);

    $http.post('/api/quiz', quizTemplate);
  };

  quizFactory.getAllQuizzes = function(){
    return $http.get('/api/quiz').then(function(response){
      allQuizzes = response.data;
      return response.data;
    })
  };

  quizFactory.getMyQuiz = function(){
    return $http.get('/api/quiz/getQuiz/' + $routeParams.quizID).then(function(response){
      myQuiz = response.data;
      return response.data;
    })
  };

  quizFactory.newQuizPaper = function(){
    var answers = JSON.parse(JSON.stringify(myQuiz.questions));
    for (var i = 0 ; i < answers.length; i++){
      for (var j = 0; j < answers[i].options.length; j++){
        answers[i].options[j].isCorrect = false;
      }
    }
    var quizPaper = {quizzer: '', answers: answers, score: 0};
    return quizPaper;
  };

  quizFactory.submitQuiz = function (quizPaper){
    var quizPaperCopy = fixAnswerSheet(JSON.parse(JSON.stringify(quizPaper)));
    quizPaperCopy.answers = fixAnswerSheet(quizPaperCopy.answers);
    myQuiz.submissions.push(gradePaper(quizPaperCopy, myQuiz.questions));
    return $http.put('/api/quiz',myQuiz).then(function(response){
      return response.data;
    })
  };

  function gradePaper (quizPaper, answerSheet){
    console.log(quizPaper);
    for (var i = 0; i < answerSheet.length; i++){
      var x = -1;
      var y = -1;
      for (var j = 0; j < quizPaper.answers[i].options.length; j++){
        if (quizPaper.answers[i].options[j].isCorrect === true){
          x = j;
        }
      }
      for (var j = 0; j < answerSheet[i].options.length; j++){
        if (answerSheet[i].options[j].isCorrect === true){
          y = j;
        }
      }

      console.log(x, y);
      if (x === y){
        quizPaper.answers[i].success = true;
        quizPaper.score +=1;
      } else {
        quizPaper.answers[i].success = false;
      }
    }
    gradedPaper = quizPaper;
    return quizPaper
  }

  function fixAnswerSheet(answerSheet){
    for(var i = 0; i<answerSheet.length; i++){
      for(var j = 0; j< answerSheet[i].options.length; j++){
        if (answerSheet[i].options[j].isCorrect !== false){
          answerSheet[i].options[j].isCorrect = true;
        }
      }
    }
    return answerSheet
  }
  return quizFactory;
}]);