var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, name: "Kim"},
    {id: 2, name: "Park"}
  ]);
  //res.send('respond with a resource');
});

module.exports = router;
