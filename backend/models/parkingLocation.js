// eslint validated

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
    parkName: { type: String, required: true },
    parkLevel: { type: String },
    parkNumber: { type: Number },
    parkingNote: { type: String },
    parkingDate: { type: String },
    parkingEmail: { type: String }
}, { collection: 'parkingLocation' });

locationSchema.set('collection', 'parkingLocation');

mongoose.model('parkingLocation', locationSchema);