var express = require('express');
var router = express.Router();
var MainController = require('../controllers/main');

var control = new MainController();

/* GET home page. */
router.get('/', control.index);

module.exports = router;
