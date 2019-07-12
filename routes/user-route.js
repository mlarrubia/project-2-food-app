const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt  = require('bcryptjs');


// Get Home Page
router.get('/signuplogin', (req, res, next) =>{
  res.render('user-views/signuplogin');
})

// Signup Post
router.post('/profile', (req, res, next)=>{
  console.log("--------------------------",req);
  const thePassword = req.body.thePassword;
  const theUsername = req.body.theUsername;
  const email       = req.body.theEmail

  const salt = bcrypt.genSaltSync(12);
  const hashedPassWord =  bcrypt.hashSync(thePassword, salt);

  User.create({
      username: theUsername,
      password: hashedPassWord,
      email: email
  })
  .then(()=>{
      console.log('yay');
      // Ask why does it do something completely different with a "/profile" vs "profile"
      res.redirect('/user/profile')
  })
  .catch((err)=>{
      next(err);
  })
})


// Only if the user is login 
router.get('/', (req, res, next) =>{
  res.render('user-views/profile');
})

// huh????? Get this checked.
router.get('/profile', (req, res, next) =>{
  res.render('user-views/profile');
})


module.exports = router;
