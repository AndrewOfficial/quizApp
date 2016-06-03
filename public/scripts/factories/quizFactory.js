app.factory('quizFactory',[function(){
  var quizFactory = {};
  var quizTemplate = {
    title:'',
    questions: [
    ]
  };

  quizFactory.makeQuizObject = {
    set: function (title, questions){
      quizTemplate.title = title;
      console.log(title, questions);
      for (var i in questions){
        quizTemplate.questions.push({
          question: '',
          answer:0,
          options: [

          ]
        })
      }
    },
    get: function (){

    }
  };

  return quizFactory;
}]);