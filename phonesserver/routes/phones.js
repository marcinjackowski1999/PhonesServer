var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Phone = require('../models/Phone.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Phone.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  Phone.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Phone.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {

  Phone.findById(req.params.id, function (err, post) {
    if (err) return next(err);

    if (post.currentBeacon.majorValue != req.body.currentBeacon.majorValue) {
      post.lastBeacon.majorValue = post.currentBeacon.majorValue
      post.lastBeacon.minorValue = post.currentBeacon.minorValue
    }

    post.currentBeacon.majorValue = req.body.currentBeacon.majorValue
    post.currentBeacon.minorValue = req.body.currentBeacon.minorValue

    Phone.findByIdAndUpdate(req.params.id, post, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Phone.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
