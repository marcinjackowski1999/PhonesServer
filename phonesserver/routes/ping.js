var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Phone = require('../models/Phone.js');

router.put('/:id', function(req, res, next) {
  Phone.findById(req.params.id, function (err, post) {
    if (err) return next(err);

    var agent = require('../apn/header.js')
    var device = post.deviceToken
    var alert = "test"

    agent.createMessage()
      .device(device)
      .sound('bingbong.aiff')
      .alert(alert)
      .send();

    res.json(post);
  });
});

module.exports = router;
