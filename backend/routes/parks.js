// eslint validated

var express = require('express');
var router = express.Router();
var parkController = require('../controllers/parkController.js');

var tokenChecker = require('../middleware/check-token');


router.post('/updateCrowdness', parkController.updateCrowdness);
router.post('/newNote', parkController.createNewNote);
router.get('/getParks', parkController.getAllParks);
router.get('/getNotes', tokenChecker, parkController.fetchAllNotes);



router.get('/locationForm', parkController.noteLocation);
router.get('/locationConfirmation', parkController.locationConfirmation);
router.get('/updateParkForm', parkController.updateCarPark);
router.get('/statusForm', parkController.uploadStatusForm);
router.post('/insertCarPark', parkController.createNewPark);
router.post('/recordLocation', parkController.recordPark);
router.post('/updateStatus', parkController.uploadStatus);
router.get('/fetchParks', parkController.fetchAllParks);
// router.get('/postNewPark', parkController.postPark);



router.get('/', function (req, res) {
    res.send('This is the router for parks');
});

module.exports = router;
