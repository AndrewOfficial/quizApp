'use strict';

var async = require('async');
var router = require('express').Router();
var Quiz = require('../../models/quiz');

router.get('/quiz/getQuiz/:id', function (req, res, next) {
  Quiz.findOne({_id:req.params.id}).then(function(doc){
    res.status(200).send(doc);
  })
});

router.get('/quiz', function (req, res, next) {
  Quiz.find({}).then(function(docs){
    res.status(200).send(docs);
  })
});

router.post('/quiz', function (req, res, next) {
  res.sendStatus(200);
  Quiz.create(req.body, function(err, doc){
    if (err){
      console.log(err);
    }else {
      console.log("DOC",doc);
    }
  })
});

router.put('/quiz', function (req, res, next) {
  Quiz.update({_id: req.body._id},{submissions: req.body.submissions},function(doc){
    res.status(200).send(doc);
  });
});

router.delete('/', function (req, res, next) {

});

module.exports = router;