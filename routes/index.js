var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(process.env.VITE_CLOUDINARY_API_KEY);

  console.log('Index route!');
  res.render('index', { title: 'Express' });
});

module.exports = router;
