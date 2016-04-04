var mongoose = require('mongoose')
var Schema = mongoose.Schema

// making my schema for for the users which will be used for the sign in page

var userSchema = new Schema({
  name: String,
  email: String,
  password: String
})

var User = mongoose.model('User', userSchema)

module.exports = User
