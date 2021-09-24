// ESLint validated

var mongoose = require('mongoose');
require("../models/users");
var users = mongoose.model('users');
const jwt = require('jsonwebtoken'); // for user login token
const bcrypt = require('bcrypt'); // for password hashing
const saltRounds = 10;

const fetchAllUsers = async (req, res) => {
    try {

        const allUsers = await users.find();
        return res.send(allUsers);
        // res.json(allUsers);
    } catch (err) {
        return res.send(err);
        // res.status(400);
        // return res.send("No data fetched, something went wrong");
    }
};

var getAllUsers = function (req, res) {
    users.find().lean().then(function (doc) {
        res.render('registeredUsers', { itemUsers: doc });
    });
};

var checkExistingUser = async function (req, res) {

    try {
        var finderOutcome = await users.find({ username: req.body.username }).lean();
        if (finderOutcome.length > 0) {

            return res.send("Already Registered");
        } else {

            return res.send("Valid Email");
        }
    } catch (err) {

        return res.send("Already Registered");
    }

};

var newUserSignUp = function (req, res) {
    res.render('signUpForm');
};

var createNewUser = async (req, res) => {
    var newUser = {
        username: req.body.username,
        password: req.body.password
    };

    if (emailValidation(newUser.username)) {
        var data = new users(newUser);
        await data.save();
        res.status(200);
    } else {
        res.status(400);
    }


    res.redirect('/');
};

var createNewUserFE = async (req, res) => {

    const hash_password = bcrypt.hashSync(req.body.password, saltRounds);

    var newUser = {
        firstname: req.body.firstname,
        username: req.body.username,
        password: hash_password
    };

    var data = new users(newUser);
    try {
        await data.save();
        return res.send(data);
    }
    catch (err) {
        res.status(400);
        return res.send(err);
    }

};


var userLoginFE = async (req, res) => {



    //.find() will return user as an array, so later user[0] is used.
    //An alternative is to use .findOne() which would not need the [0]
    users.find({ username: req.body.username }).exec()
        // store the find users into an array called 'user'
        .then(user => {
            // if no user is found
            if (user.length < 1) {

                // return 401 not 404 to avoid brute force checking existence of username
                return res.status(401).json({
                    message: "Authentication failed"
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {

                // if password is incorrect
                if (err) {
                    res.status(400);
                    return res.send("Authentification failed");
                }

                // if password is correct
                if (result) {

                    // use jwt package to create token for the logged in user
                    const token = jwt.sign({
                        // information to include in the token
                        username: user[0].username,
                        userId: user[0]._id
                    },
                        // a private key that should actually be an environment variable
                        "a_secret_private_key",
                        {
                            expiresIn: "5h"
                        }
                    );

                    res.cookie('jwt', token, { httpOnly: false, sameSite: false });
                    return res.status(200).json({
                        message: "Authentication successful",
                        token: token,
                        firstname: user[0].firstname
                    });
                }

                // // If the password is incorrect
                res.status(400);
                return res.send("Authentification failed");

            });
        });
};



var emailValidation = function (email) {

    if (email.includes('@')) {
        return true;
    }

    return false;

};

var deleteThisUser = async function (req, res) {
    const userId = req.params.id;
    try {
        await users.findByIdAndRemove({ _id: userId });
        return res.send("Deleted successfully");
    } catch (err) {
        res.status(400);
        return res.send(err);
    }

};


module.exports.checkExistingUser = checkExistingUser;
module.exports.deleteThisUser = deleteThisUser;
module.exports.emailValidation = emailValidation;
module.exports.fetchAllUsers = fetchAllUsers;
module.exports.getAllUsers = getAllUsers;
module.exports.createNewUser = createNewUser;
module.exports.createNewUserFE = createNewUserFE;
module.exports.userLoginFE = userLoginFE;
module.exports.newUserSignUp = newUserSignUp;
