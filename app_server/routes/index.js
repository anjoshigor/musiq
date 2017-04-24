var express = require('express');
var router = express.Router();
var LocationsController = require('../controllers/locations');
var OthersController = require('../controllers/others');

/*Controllers*/
var ctrlLocations = new LocationsController();
var ctrlOthers = new OthersController();

/* GET home page. */
router.get('/', ctrlLocations.homeList);

/* GET location info page. */
router.get('/event', ctrlLocations.eventInfo);

/* GET location info page. */
router.get('/event/comment/new', ctrlLocations.newReview);


/* GET about page. */
router.get('/about', ctrlOthers.about);

module.exports = router;
