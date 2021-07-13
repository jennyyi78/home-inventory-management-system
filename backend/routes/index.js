var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
//     res.redirect('/login');
//   });

router.get('/api/login', function(req, res) {
    res.send("Log In")
  });

// router.get('/', function(req, res) {
//     res.redirect('/catalog');
//   });

module.exports = router;
