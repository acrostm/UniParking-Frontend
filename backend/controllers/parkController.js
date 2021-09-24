// ESLint validated

var mongoose = require('mongoose');
var parks = mongoose.model('carParks');
var parkingLocations = mongoose.model('parkingLocation');



const fetchAllParks = async (req, res) => {
    try {
        const allParks = await parks.find();
        res.json(allParks);
    } catch (err) {
        res.status(400);
        return res.send("No data fetched, something went wrong");
    }
};


const fetchAllNotes = async (req, res) => {

    try {

        var allNotes = null;
        if (req.headers.thisemail === "admin@NBO.com") {
            allNotes = await parkingLocations.find();
        } else {
            allNotes = await parkingLocations.find({ parkingEmail: req.headers.thisemail });
        }
        res.json(allNotes);
    } catch (err) {
        res.status(400);
        return res.send("No data fetched, something went wrong");
    }
};


const updateCrowdness = async (req, res) => {

    const carparkIn = req.body;

    try {
        const currentParks = await parks.find({ parkName: carparkIn.parkName });
        if (!currentParks) {
            res.status(400);

            return res.send("currentPark not found");
        }

        const currentPark = currentParks[0];
        currentPark["parkCrowdness"] = carparkIn["parkCrowdness"];
        currentPark["sdads"] = carparkIn["parkCrowdness"];
        // return res.send(currentPark);

        return res.send(await currentPark.save());
    } catch (err) {
        res.status(400);
        return res.send("Database query failed");
    }
};







var getAllParks = function (req, res) {
    parks.find().lean().then(function (item) {
        res.render('registeredParks', { itemCarParks: item });
    });
};

var locationConfirmation = function (req, res) {
    parkingLocations.remove().exec();
    parkingLocations.find().lean().then(function (item) {
        res.render('locationConfirmationPage', { itemLocation: item });
    });
};

var statusConfirmation = function (req, res) {

    res.render('locationConfirmationPage');
};

var createNewPark = async (req, res) => {
    var newPark = {
        parkName: req.body.parkName,
        parkAddress: req.body.parkAddress,
        parkDistance: req.body.parkDistance,
        parkCrowdness: "NA",
        parkType: req.body.parkType,
        parkCost: req.body.parkCost,
        parkHour: req.body.parkHour,
        parkNote: req.body.parkNote,
        parkHeight: req.body.parkHeight,
        x_coordinate: req.body.x_coordinate,
        y_coordinate: req.body.y_coordinate
    };

    var dataCarPark = new parks(newPark);
    await dataCarPark.save();
    res.redirect('/');
};


var createNewNote = async (req, res) => {


    var newNote = {
        parkingDate: req.body.noteDate,
        parkName: req.body.noteLocation,
        parkingNote: req.body.noteNotes,
        parkingEmail: req.headers.thisemail
    };
    var dataNote = new parkingLocations(newNote);
    await dataNote.save();
    res.redirect('/');
};

var recordPark = function (req, res) {
    var newLocation = {
        parkLevel: req.body.parkLevel,
        parkNumber: req.body.parkNumber,
        parkingNote: req.body.parkingNote,
        parkName: req.body.parkName
    };
    var dataParkingLocation = new parkingLocations(newLocation);
    dataParkingLocation.save();
    res.redirect('/parks/locationConfirmation');
};




var uploadStatusForm = function (req, res) {
    res.render('statusFormPage');
};

var uploadStatus = function (req, res) {
    res.render('statusConfirmationPage');
};


var updateCarPark = function (req, res) {
    res.render('updateParkForm');
};


var noteLocation = function (req, res) {
    res.render('parkLocationForm');
};


module.exports.updateCrowdness = updateCrowdness;
module.exports.fetchAllParks = fetchAllParks;
module.exports.fetchAllNotes = fetchAllNotes;
// module.exports.postPark = postPark;
module.exports.getAllParks = getAllParks;
module.exports.createNewPark = createNewPark;
module.exports.createNewNote = createNewNote;
module.exports.updateCarPark = updateCarPark;
module.exports.noteLocation = noteLocation;
module.exports.recordPark = recordPark;
module.exports.locationConfirmation = locationConfirmation;
module.exports.statusConfirmation = statusConfirmation;
module.exports.uploadStatusForm = uploadStatusForm;
module.exports.uploadStatus = uploadStatus;