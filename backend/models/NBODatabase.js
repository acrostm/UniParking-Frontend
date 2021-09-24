// eslint validated

require('dotenv').config();
const mongoose = require('mongoose');

var CONNECTION_STRING = "mongodb+srv://NBO:<password>@cluster0-pcgaz.mongodb.net/NBO?retryWrites=true&w=majority";

const MONGO_URL = CONNECTION_STRING.replace("<password>", process.env.MONGO_PASSWORD);
// Info-30005
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    function (err) {
        if (!err) {
            console.log('Connected to mongo.');
        } else {
            console.log('Failed to connect to mongo!', err);
        }
    });

require('./users.js');
require('./carParks.js');
require('./parkingLocation.js');
