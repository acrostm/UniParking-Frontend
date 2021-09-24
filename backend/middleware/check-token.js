const jwt = require('jsonwebtoken');

// A handler function that checks if a user is allowed to use this route
module.exports = (req, res, next) => {

    try {
        // the token should be in header

        const token = req.headers.token;
        // const token = 0;

        // decode the token and extract the user information
        const decoded = jwt.verify(token, "a_secret_private_key");
        // store the extracted user data to a variable named userData for future access
        req.userData = decoded;
        next();
    } catch (error) {
        // res.send("nothing");
        return res.status(401).json({
            message: 'Authentification failed'
        });
    }
};
// To use this handler in other files, first import with "const checkToken = require('../middleware/check-token');
// then in the route, add the handler. For example: router.get("/notes", checkToken, otherHandlers, userController.getNotes);
