// used to create our strategies
const LocalStrategy = require('passport-local').Strategy;

// our user model
const User = require('../models/users');


module.exports = function (passport) {
    // these two functions are used by passport to 'store information in', and 'retrieve info from' sessions
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    // strategy to login
    passport.use('local-login', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
        function (req, username, password, done) {
            process.nextTick(function () {
                User.findOne({ 'username': username }, function (err, user) {
                    if (err) {
                        return done(err);
                    }
                    if (!user) {
                        return done(null, false, req.flash('loginMessage', 'No user found.'));
                    }
                    // method defined in models/user
                    if (!user.validPassword(password)) {
                        return done(null, false, req.flash('loginMessage', 'Oops! Wrong Password.'));
                    }
                    else {
                        req.session.username = username; // for demonstration of using express-session
                        return done(null, user, req.flash('loginMessage', 'Login successful'));
                    }
                });
            });
        }
    ));

    // for signup
    passport.use('local-signup', new LocalStrategy({
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
    },
        function (req, username, password, done) {

            process.nextTick(function () {
                User.findOne({ 'username': username }, function (err, existingUser) {
                    if (err) {
                        return done(err);
                    }
                    if (existingUser) {
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    }
                    if (req.user) {
                        var user = req.user;
                        user.username = username;
                        user.password = user.generateHash(password);
                        user.save(function (err) {
                            if (err)
                                throw err;
                            return done(null, user);
                        });
                        req.session.username = username;
                    }
                    else {
                        var newUser = new User();

                        newUser.username = username;
                        newUser.password = newUser.generateHash(password);

                        newUser.save(function (err) {
                            if (err)
                                throw err;

                            return done(null, newUser);
                        });
                        req.session.username = username;

                    }
                });
            });
        }
    ));
};
