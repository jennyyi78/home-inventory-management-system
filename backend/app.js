require('dotenv').config()
const express = require('express');
const session = require("express-session");
const mongoose = require('mongoose')
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const logger = require('morgan');
const cors = require("cors");

const passport = require('passport')
const localStrategy = require('./modules/localStrategy')


const User = require('./models/user')

const apiRouter = require('./routes/api');

// Set up mongoose connection
const mongoDB = process.env.DB_URL;

mongoose.set('useFindAndModify', false);

mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const app = express();

app.use(cookieParser());

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));

passport.use(localStrategy)

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
  
});


app.use(express.urlencoded({ extended: false }));

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', apiRouter);


const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;