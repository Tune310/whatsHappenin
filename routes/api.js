var
  express = require('express'),
  apiRouter = express.Router(),
  userCtrl = require('../controllers/users.js'),
  eventCtrl = require('../controllers/events.js')

//get route to the get all users and create user
apiRouter.route('/users')
  .get(userCtrl.index)
  .post(userCtrl.create)

apiRouter.route('/users/authenticate')
  // .get(userCtrl.checkToken) // check if it will see if a token is not valid
  .post(userCtrl.authenticate)

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

// JWT Authenticate





  // apiRouter.post('/user/:id/authenticate', function(req, res){
  //   console.log(req.body);
  //   // Find the user
  //   User.findOne({email: req.body.email}, function(err, user){ //Sign in with email and password
  //     if(err) return console.log(err)
  //     // User not found
  //     if (!user){
  //       res.json({success: false, message: 'User not found'});
  //     } else if (user) {
  //       // password doesn't match
  //       if (user.password != req.body.password){
  //         res.json({success: false, message: 'Wrong password'});
  //       } else {
  //         // It means we found the user and the passwords match
  //         var token = jwt.sign(user, app.get('superSecret'), {
  //           expiresInMinutes: 1440 //24 hours
  //         });
  //
  //         res.json({
  //           success: true,
  //           message: 'Enjoy your token!',
  //           token: token
  //         });
  //
  //       }
  //     }
  //   });
  // });

module.exports = apiRouter

// add router for events here
