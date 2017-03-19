var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BaseJump'});
});

router.get('/:id', function(req, res, next) {
  var data = req.params.id;
  var dateFormattingOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  if(isNaN(data)) {
    var naturalDate = new Date(data);
    naturalDate = naturalDate.toDateString("en-us", dateFormattingOptions);
    var unixDate = new Date(data).getTime()/1000;
  } else {
    var unixDate = data;
    var naturalDate = new Date(data*1000);
    naturalDate = naturalDate.toDateString("en-us", dateFormattingOptions);
  }
  res.json({unix: unixDate, natural: naturalDate});
});

module.exports = router;
