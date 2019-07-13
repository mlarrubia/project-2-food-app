const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt  = require('bcryptjs');
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");




// ----------------------   Sign up   ----------------------------
router.get('/signup', (req, res, next) =>{
  res.render('user-views/signup', { "message": req.flash("error") });
})

// Signup Post
router.post('/profile', (req, res, next)=>{
  console.log("--------------------------",req.body);
  const thePassword = req.body.thePassword;
  const theUsername = req.body.theUsername;
  const email       = req.body.theEmail

  if (theUsername === "" || thePassword === "" || email === "") {
    res.render("/signup", { message: "Indicate username and password" });
    return;
  }

  const salt = bcrypt.genSaltSync(12);
  const hashedPassWord =  bcrypt.hashSync(thePassword, salt);

  User.create({
      username: theUsername,
      password: hashedPassWord,
      email: email
  })
  .then(()=>{
      console.log('yay');      
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


router.post("/profile", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/signup",
  failureFlash: true,
  passReqToCallback: true
}));

// router.get('/logout', (req, res, next) =>{
//   res.redirect('/login');
// })

// Cant get the logout to redirect
router.get('/logout', (req, res, next)=>{
  req.logout();
  res.redirect("/user/login");
})





// -----------------------   Login Route   --------------------------------

router.get('/login', (req, res, next) =>{
  res.render('user-views/login', { "message": req.flash("error") });
})




// ----------------------   Category Route   ------------------------------

router.get('/category', (req, res, next) =>{
  res.render('user-views/category');
})



module.exports = router;
