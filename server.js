// Starting Project
var
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  path = require('path'),
  bodyParser = require('body-parser')

  //connect mongoose here

  app.use(bodyParser.urlencoded({extended:false}))
  app.use(bodyParser.json())
  app.use(express.static(path.join(__dirname, 'public')))

  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public/index.html'))
  })

  //use apiRoutes here

  app.listen('3000', function(){
    console.log('Server is firing on port 3000')
  })
