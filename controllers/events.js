// This is the Events Controller which will have Full CRUD routes and will also be utilized in my routes file

var User = require('../models/User.js')
var Event = require('../models/Event.js')

module.exports = {

  // Show All Events
  index: function(req, res){
    Event.find({}, function(err, events){
      if(err) return console.log(err)
      res.json(events)
    })
  },

  // Create Events
  create: function(req, res){
    Event.create(req.body, function(err, event){
      if(err) return console.log(err)
      res.json({success: true, message: "An Event Has Been Successfully Created by a user", event: event})
    })
  },

  // Show Event
  show: function(req, res){
    Event.findOne({_id: req.params.id}, 'title date description', function(err, event){
      if(err) return console.log(error)
      res.json(event)
    })
  },

  //Edit or Update Event
  update: function(req, res){
    Event.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, event){
      if(err) return console.log(err)
      res.json({success: true, message: "Event has been updated", event: event})
    })
  },

  //Delete An Event
  delete: function(req, res){
    Event.findOneAndRemove({_id: req.params.id}, function(err){
      if(err) return console.log(err)
      res.json({success: true, message: "Event has been deleted and removed from database"})
    })
  }

}

//Check to make sure the user: event key value pair will work
//Add these to your routes file