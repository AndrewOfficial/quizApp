var mongoose = require('mongoose');

var quizSchema = new mongoose.Schema({
  creator: {type:String},
  title: {type: String, required: true},
  questions: {type: Array, required: true},
  questionsRemoved:{type: Array},
  submissions:{type: Array}
});

module.exports = mongoose.model('Quiz', quizSchema);