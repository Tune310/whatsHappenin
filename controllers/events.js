// This is the Events Controller which will have Full CRUD routes and will also be utilized in my routes file

var User = require('../models/User.js')
var Event = require('../models/Event.js')

module.exports = {

  getAll: function(req, res){
    Event.find({}, function(err, events){
      if(err) return console.log(err)
      res.json(events)
    })
  },
  // Show All Events from a user with a specific id
  index: function(req, res){
    Event.find({user: req.params.id}, function(err, events){
      if(err) return console.log(err)
      res.json(events)
    })
  },

  // Create Events
  create: function(req, res){
    Event.create(req.body, function(err, event){
      if(err) return console.log(err)
      User.findOne({_id: req.params.id}, function(err, user){
        if(err) return console.log(err)
        user.events.push(event)
        user.save(function(err){
          if(err) return console.log(err)
          res.json({success: true, message: "An Event Has Been Successfully Created by a user", event: event})
        })
      })
    })
  },

  // Show A Specific Event STILL NEEDS TEST
  show: function(req, res){
    Event.findOne({_id: req.params.id}, 'title date description', function(err, event){ // Do I need to change or addanything to ({_id: req.params.id})????
      if(err) return console.log(error)
      res.json(event)
    })
  },

  //Edit or Update Event STILL NEEDS TEST
  update: function(req, res){
    Event.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, event){
      if(err) return console.log(err)
      res.json({success: true, message: "Event has been updated", event: event})
    })
  },

  //Delete An Event STILL NEEDS TEST
  delete: function(req, res){
    Event.findOneAndRemove({_id: req.params.id}, function(err){
      if(err) return console.log(err)
      res.json({success: true, message: "Event has been deleted and removed from database"})
    })
  }

}

// Add the necessary procedures to have a user own an event
//Check to make sure the user: event key value pair will work
//Add these to your routes file
