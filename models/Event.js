//Have a title, description date and time, where, and etc for thngs that are what for the events model
var mongoose = require('mongoose')
var Schema = mongoose.Schema

// Here i'm creating my schema for the events which will be integrated with user

var eventSchema = new Schema ({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title: String,
  description: String,
  date: { type: Date, default: Date.now}
  // time goes here?
  // how am I going to tie this in with the users??
})

var Event = mongoose.model('Event', eventSchema)

module.exports = Event
