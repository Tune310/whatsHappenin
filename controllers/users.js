// This is the controller which will have full CRUD routes which will be used in my routes file with apiRouter

var User = require('../models/User.js')

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
  }

}

// create a user when finished
