'use strict';
const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const Content = require('../models/content');

router.get('/', (req, res, next) => {
  res.render('view');
});

router.post('/', (req, res, next) => {
  const contentId = uuid.v4();
  const updatedAt = new Date();
  Content.create({
    contentId: contentId,
    contentTitle: req.body.contentTitle.slice(0, 225) || '(名称未設定)',
    contentType: req.body.contentType.slice(0, 225) || '(名称未設定)',
    contentStartDate:req.body.contentStartDate.slice(0, 225) || '(名称未設定)',
    contentEndDate: req.body.contentEndDate.slice(0, 225) || '(名称未設定)',
    updatedAt
  }).then((content) => {
    res.redirect('/');
  });
});

module.exports = router;