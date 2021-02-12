'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('view');
});

router.post('/', (req, res, next) => {
  console.log(req.body); // TODO コンテンツを保存する実装をする
  res.redirect('/');
});

module.exports = router;