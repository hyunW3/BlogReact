var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, title: "정인철 배고픔", date :"2019-07-08",thumbs : 0},
    {id: 2, title: "정인철 밥먹음", date :"2019-07-12",thumbs : 0}
  ]);
  //res.send('respond with a resource');
});

module.exports = router;
