const User = require('../models/user');
const bcrypt = require("bcryptjs");
const passport = require("passport")

exports.user_is_loggedin_get = function(req, res, next) {
  res.send(req.isAuthenticated())
};

exports.user_create_post = function(req, res, next) {
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        if (err) next(err);
        const user = new User({
          username: req.body.username,
          password: hashedPassword,
        }).save((err) => {
          if (err) {
            return next(err);
          }
        });
      });
};


exports.user_login_post = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.send('Login Failed');}

    req.logIn(user, function (err) {
      res.send(user);
    })


  }) (req, res, next);
}

exports.user_logged_in_get = function(req, res, next) {
  console.log(req.user);
  res.send(req.user);
};

exports.user_logout_get = function(req, res, next) {
  req.logout();
};