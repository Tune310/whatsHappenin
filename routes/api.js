var
  express = require('express'),
  apiRouter = express.Router(),
  userCtrl = require('../controllers/users.js')

//get route to the get all users and create user
apiRouter.route('/users')
  .get(userCtrl.index)
  .post(userCtrl.create)

//Do a CRUD action a specific user
apiRouter.route('/users/:id')
  .get(userCtrl.show)
  .patch(userCtrl.update)
  .delete(userCtrl.delete)

module.exports = apiRouter
