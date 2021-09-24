// Note: The basic skeleton was adapted from "myExpressApp" and "Lecture8 Mongoose MongoDB.zip"
var createError = require('http-errors');///A
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var logger = require('morgan');
var cors = require('cors');
const passport = require('passport');
const flash = require('connect-flash-plus');
const session = require('express-session');
// const jwt = require('jsonwebtoken');

// Collection of passport related methods to help with authentication
require('./config/passport')(passport);


// Note: Mongoose schemas must load before other files.
// db.js must be put in front of routers
require('./models/NBODatabase.js');


const homeRouter = require("./routes/homeRouter");
const usersRouter = require('./routes/users');
const parksRouter = require('./routes/parks');
var hbs = require('express-handlebars');


var app = express();
app.use(cors({
  credentials: true
}));
// Delete this to mitgate cross domain risks
// app.options('*', cors());

app.use(cookieParser('this_is_a_secret_key_for_session')); /// can be deleted

// Set up the view engine as hbs
app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//Setup and initialise a session
// setup a session store signing the contents using the secret key
app.use(session({
  secret: 'this_is_a_secret_key_for_session',
  // Forces the session to be saved back to the session store, even if the session was never modified during the request.
  // using the default has been deprecated, so must specify resave.
  // if it implements the touch method, then you can safely set resave: false
  // If it does not implement the touch method and your store sets an expiration date on stored sessions, then you likely need resave: true
  resave: true,
  // Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
  // same with above, this must be specified
  // Choosing false is useful for implementing login sessions, reducing server storage usage, or complying with laws that require permission before setting a cookie.
  // Choosing false will also help with race conditions where a client makes multiple parallel requests without a session.
  saveUninitialized: false
}));
// middleware that's required for passport to operate
app.use(passport.initialize());
// middleware to store user object
app.use(passport.session());
// use flash to store message
app.use(flash());


// Set up routers
app.use("/", homeRouter);
app.use('/users', usersRouter);
app.use('/parks', parksRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // res.header('Access-Control-Allow-Credentials', true);// can be deleted


  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
