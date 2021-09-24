// eslint validated

var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');
const passport = require('passport');


// Collection of passport related methods to help with authentication
require('../config/passport')(passport);


router.get('/signUpForm', userController.newUserSignUp);
router.post('/checkUser', userController.checkExistingUser);
router.post('/insertUser', userController.createNewUser);
router.post('/insertUserFE', userController.createNewUserFE);
router.post('/userLoginFE', userController.userLoginFE);
router.post('/signup', passport.authenticate('local-signup',
    {
        successRedirect: '/',
        failureRedirect: '/signup', // redirect back to the signup page
        failureFlash: true // allow flash messages
    }
));
router.get('/getUsers', userController.getAllUsers);
router.post('/login', passport.authenticate('local-login',
    {
        successRedirect: '/',
        failureRedirect: '/login', // redirect back to  the login page
        failureFlash: true // allow flash messages
    }
));
router.get('/fetchUsers', userController.fetchAllUsers);

router.delete('/:id', userController.deleteThisUser);


router.get('/', function (req, res) {
    res.send('This is the router for users');
});

module.exports = router;
