// Starting Project
var
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  path = require('path'),
  bodyParser = require('body-parser'),
  apiRoutes = require('./routes/api.js')
  // add bcrypt
  // add jwt
  // create a config file

  mongoose.connect('mongodb://localhost/whatsHappenin', function(err){
    if(err) return console.log('Error something is going wrong in the mongodb')
    console.log('Mongodb is now connected and firing')
  })

  app.use(bodyParser.urlencoded({extended:false}))
  app.use(bodyParser.json())
  app.use(express.static(path.join(__dirname, 'public')))

  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public/index.html'))
  })

 // using this for test at the moment
  app.use('/api', apiRoutes)

  app.listen('3000', function(){
    console.log('Server is firing on port 3000')
  })

// why did philipe do a .ignore and put node_modules inside of it
