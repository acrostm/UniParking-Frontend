// eslint validated
const bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true }
}, { collection: 'Users' });

userSchema.set('collection', 'users');

// generating a hash
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

// checks if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
const User = mongoose.model('users', userSchema);
module.exports = User
