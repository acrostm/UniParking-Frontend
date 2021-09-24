// middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}

module.exports = {
    isLoggedIn
};

// To use this handler in other files, first import with "const checkLogin = require('../middleware/utilities');
// then in the route, add the handler. For example in routes/notes.js: router.get("/", checkLogin, otherHandlers, userController.getNotes);
