import express from 'express';
import passport from 'passport';
import passportConfig from '../config/passport';
import User from '../models/User';
import userController from '../controllers/userController';

const router = express.Router();

/* GET index page. */
router.get('/user', (req, res, next) => {
  User.findOne({'_id': req.user._id}).populate('hostFor').exec((err,user) => {
    if(err){console.log(err); return;}
    res.json(user);
    console.log(user)
  })
});

/* LINKEDIN LOGIN AUTH. */
router.get('/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE' }));
router.get('/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/dashboard');
});

// LOGIN
router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(error, user, info) {
        if(error) {
            console.log(error);
            return res.json({'error':'database','message': "Something went seriously wrong. Contact the dev team."});
        }
        if(!user) {
          return res.json({'error':'user','message': "Wrong password or email"})
        }
        req.logIn(user, function(err) {
            if (err) {
              console.log("Login err", "Wrong password");
              return res.json({'error':'user','message': "Wrong password"})
            }
            return res.json(user)
        });
    })(req, res, next);
});

// SIGNUP
router.post('/signup', function(req, res, next) {
    User.findOne({ email: req.body.email }, (err, existingUser) => {
      console.log("Data: ",req.body.email, req.body.password)
      if (existingUser) {
          return res.json({'error':'login','message': 'This email already exists!'});
      }
      console.log("New user");
      let user = new User();
      user.email = req.body.email;
      user.password = req.body.password;
      user.username=req.body.username;
      user.userImage=req.body.userImage;
      user.firstName=req.body.firstName;
      user.lastName=req.body.lastName;
      user.gender=req.body.gender;

      user.save((err) => {
        if (err) {
          console.log("User save error");
          return res.json({'error':'database','message': err});
        }
        req.logIn(user, (err) => {
        if (err) {
            console.log("User login error");
            return res.json({'error':'login','message': err});
        }
        console.log("User login success");
        res.json({'redirect':'/login'});
        });
      });
    });
});

// router.put ('/user/:id', userController.editProfile)

// LOGOUT
router.get('/logout',(req, res, next) => {
  req.logout();
  res.redirect('/');
  console.log('logged out successfully!');
});

router.delete('/account/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);
router.put('/account/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
router.put('/account/password', passportConfig.isAuthenticated, userController.postUpdatePassword);

export default router;
