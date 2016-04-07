// This is the controller which will have full CRUD routes which will be used in my routes file with apiRouter

var User = require('../models/User.js')
var jwt = require('jsonwebtoken')
var express = require('express')
// var app = express()
var config = require('../config.js')

module.exports = {

  //Show All Users
  index: function(req, res){
    User.find({}, function(err, users){
      if(err) return console.log(err)
      res.json(users)
    })
  },

  //Create User
  create: function(req, res){
    User.create(req.body, function(err, user){
      if(err) return console.log(err)
      res.json({success: true, message: "A new user has been created and added to database", user: user})
    })
  },

  //Show User
  show: function(req, res){
    User.findOne({_id: req.params.id}, 'email name', function(err, user){
      if(err) return console.log(err)
      res.json(user)
    })
  },

  //Update User STILL NEEDS TEST
  update: function(req, res){
    User.fineOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, user){
      if(err) return console.log(err)
      res.json({success: true, message: "User Has Been Updated!!", user: user })
    })
  },

  //Delete User STILL NEEDS TEST
  delete: function(req, res){
    User.findOneAndRemove({_id: req.params.id}, function(err){
      if(err) return console.log(err)
      res.json({success: true, message: "User Has Been Deleted and Removed From Database"})
    })
  },

  //GET Authenticate User & Verify Token
  checkToken: function(req, res, next){
    // check header or url parameters or post parameters for a token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token){
    res.json({
      success: false,
      message: 'Token Missing'});
  } else {
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err){
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        // everything is good with the token, then save it to the req in other routes
        req.decoded = decoded;
        console.log(decoded)
        next(); // next stand for whatever you were trying to access after token has been validated!!!
      }
    }); // ask phillipe and berry about the 403 status err thing in an ele statement around here!! !!!!CHECK
  }
},

  //Post & Authenticate User
  authenticate: function(req, res){ // THIS IS A POST METHOD
    console.log(req.body)
    User.findOne({email: req.body.email}, function(err, user){ //Sign in with email and password
      if(err) return console.log(err)
      // User not found
      if (!user){
        res.json({success: false, message: 'User not found'});
      } else if (user) {
        // password doesn't match
        if (user.password != req.body.password){
          res.json({success: false, message: 'Wrong password'});
        } else {
          // Else We Have Found The User And The Passwords Match

          var sendUser = {
            email: user.email,
            name: user.name,
            events: user.events
          }

          var token = jwt.sign(sendUser, config.secret, {
            expiresIn: 1440*60 //24 hours 1440 mins multiplyed by 60 seconds
          });

          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });

        }
      }
    });
  }
}

// Need to add jwt and possibly bcrypt params here
