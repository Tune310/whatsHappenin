var
  express = require('express'),
  apiRouter = express.Router(),
  userCtrl = require('../controllers/users.js'),
  eventCtrl = require('../controllers/events.js')

//get route to the get all users and create user
apiRouter.route('/users')
  .get(userCtrl.index)
  .post(userCtrl.create)

//Do a CRUD action a specific user
apiRouter.route('/user/:id')
  .get(userCtrl.show)
  .patch(userCtrl.update)
  .delete(userCtrl.delete)

// WAY TO GET EVERY EVENT FROM EVERY USER LATER ON!!!!!!!!!!!!
// apiRouter.route('/events')
//   .get(eventCtrl.index)


// CRUD
apiRouter.route('/user/:id/events') // should I add the /:id after event????
  .get(eventCtrl.index)
  .post(eventCtrl.create)

module.exports = apiRouter

// add router for events here
