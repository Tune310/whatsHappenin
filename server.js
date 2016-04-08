// Starting Project
var
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  path = require('path'),
  bodyParser = require('body-parser'),
  SC= require('node-soundcloud'),
  apiRoutes = require('./routes/api.js'),
  jwt = require('jsonwebtoken'), // double check with phillipe to make sure if I need to require this in my routes file
  config = require('./config.js') // config file for jwt
  // add bcrypt
  // create a config file

  mongoose.connect(config.database, function(err){
    if(err) return console.log('Error something is going wrong in the mongodb')
    console.log('Mongodb is now connected and firing')
  })


  app.set('superSecret', config.secret)

  app.use(bodyParser.urlencoded({extended:false}))
  app.use(bodyParser.json())
  app.use(express.static(path.join(__dirname, 'public')))

  SC.init({
    id: '030341538cff3ba796885fa35911cb51',
    secret: '030341538cff3ba796885fa35911cb51',
   })

  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public/index.html'))
  })

  app.get('/test/:artist', function(req, res){
    //Soundcloud requests tracks under this artist
    SC.get('/tracks', {q: req.params.artist}, function(err, track) {
  if ( err ) {
    throw err;
  } else {
    // if the input is true json will set us data under the input
    res.json('track retrieved:', track);
    }
  });
  })

 // using this for test at the moment
  app.use('/api', apiRoutes)

  app.listen('3000', function(){
    console.log('Server is firing on port 3000')
  })

// why did philipe do a .ignore and put node_modules inside of it
