var mongoose = require('mongoose');

var quizSchema = new mongoose.Schema({
  title: {type: String, required: true},
  questions: {type: Array, required: true},
  questionsRemoved:{type: Array}
});

module.exports = mongoose.model('Quiz', quizSchema);