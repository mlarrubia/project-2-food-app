const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Recipe = require('../models/Recipe');
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
    res.redirect("/signup", { message: "Indicate username and password" });
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
      res.redirect('/user/cookbook')
  })
  .catch((err)=>{
      next(err);
  })
})


// Only if the user is login 
router.get('/cookbook', (req, res, next) =>{
  res.render('user-views/cookbook');
})



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





// ----------------------   Create Recipe   ----------------------------
router.get('/create-recipe', (req, res, next) =>{
  res.render('user-views/create-recipe', { "message": req.flash("error") });
})

// Recipe Post
router.post('/createRecipe', (req, res, next)=>{
  console.log("-------------------------------INSIDE THE POST ")
  console.log("--------------------------", req.body);
  const theCuisineType     = req.body.cuisineType;
  const theName            = req.body.name;
  const theIngredients     = req.body.ingredients
  const theSteps           = req.body.steps
  const theVideo           = req.body.video
  const theImages          = req.body.images

  // if (theUsername === "" || thePassword === "" || email === "") {
  //   res.redirect("/signup", { message: "Indicate username and password" });
  //   return;
  // }

  

  Recipe.create({
      cuisineType: theCuisineType,
      name: theName,
      ingredients: theIngredients,
      steps: theSteps,
      video: theVideo,
      images: theImages

  })
  .then(()=>{
      console.log('yay');      
      res.redirect('/user/cookbook')
    })
    .catch((err)=>{
      res.redirect('/user/cookbook')
      next(err);
  })
})


module.exports = router;
