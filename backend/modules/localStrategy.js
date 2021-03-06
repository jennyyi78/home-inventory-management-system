const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

const User = require('../models/user');

module.exports = new LocalStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) { 
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }
        bcrypt.compareSync(password, user.password, (err, res) => {
            if (res) {
              // passwords match! log user in
              return done(null, user);
            } else {
              // passwords do not match!
              return done(null, false, { msg: "Incorrect password" });
            }
          });
        return done(null, user);
      });
    })
 

