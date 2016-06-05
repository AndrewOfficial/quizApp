'use strict';

var async = require('async');
var router = require('express').Router();
var Users = require('../../models/user');

router.get('/users', function (req, res, next) {

});

router.post('/users/register', function (req, res, next) {
  Users.Create(req.body, function (err, user) {
    if (err) {
      res.status(400).send(err.message);
    } else {
      res.status(200).send("succesful registration");
    }
  });
});

router.post('/users/login', function (req, res, next) {
  Users.getAuthenticated(req.body, function (err, token) {
    if (err) {
      console.log(err.message);
      res.status(400).send(err.message);
    } else {
      console.log("successfully logged in");
      res.send(token);
    }
  });
});

router.put('/users', function (req, res, next) {

});

router.delete('/users', function (req, res, next) {

});

module.exports = router;