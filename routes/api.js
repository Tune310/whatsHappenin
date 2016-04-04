var
  express = require('express'),
  apiRouter = express.Router(),
  apiCtrl = require('../controllers/api.js')

//get route to the get all users and create user
apiRouter.route('/users')
  .get(apiCtrl.index)
  .post(apiCtrl.create)

//Do a CRUD action a specific user
apiRouter.route('/users/:id')
  .get(apiCtrl.show)
  //update here
  //delete here

module.exports = apiRouter
