// eslint validated

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var parkSchema = new Schema({
    parkName: { type: String },
    parkAddress: { type: String },
    parkCrowdness: { type: String },
    parkDistance: { type: Number },
    parkType: { type: String },
    parkCost: { type: String },
    parkHour: { type: String },
    parkNote: { type: String },
    parkHeight: { type: Number },
    x_coordinate: { type: String },
    y_coordinate: { type: String }
}, { collection: 'carParks' });

parkSchema.set('collection', 'carParks');
mongoose.model('carParks', parkSchema);