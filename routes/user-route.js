const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Recipe = require('../models/Recipe');
const bcrypt = require('bcryptjs');
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");
var unirest = require('unirest');



// ----------------------   Sign up   ----------------------------
router.get('/signup', (req, res, next) => {
  res.render('user-views/signup', { "message": req.flash("error") });
})

// Signup Post
router.post('/profile', (req, res, next) => {
  console.log("--------------------------", req.user);
  const thePassword = req.body.thePassword;
  const theUsername = req.body.theUsername;
  const email = req.body.theEmail

  if (theUsername === "" || thePassword === "" || email === "") {
    res.redirect("/signup", { message: "Indicate username and password" });
    return;
  }

  const salt = bcrypt.genSaltSync(12);
  const hashedPassWord = bcrypt.hashSync(thePassword, salt);

  User.create({
    username: theUsername,
    password: hashedPassWord,
    email: email
  })
    .then(() => {
      console.log('yay');
      res.redirect('/user/login')
    })
    .catch((err) => {
      next(err);
    })
})


// Only if the user is login 
router.get('/cookbook', async (req, res, next) => {
  try {
    const bRecipes = await Recipe.find({ author: req.user._id, meal: "Breakfast" });
    const lRecipes = await Recipe.find({ author: req.user._id, meal: "Lunch" });
    const dRecipes = await Recipe.find({ author: req.user._id, meal: "Dinner" });
    const desRecipes = await Recipe.find({ author: req.user._id, meal: "Dessert" });
    console.log(lRecipes);
    res.render('user-views/cookbook', { breakfast: bRecipes, lunch: lRecipes, dinner: dRecipes, dessert: desRecipes });
  } catch (error) {
    next(error);
  }
})


// -----------------------   Login Route   --------------------------------

router.get('/login', (req, res, next) => {
  res.render('user-views/login', { "message": req.flash("error") });
})

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/user/login",
  failureFlash: true,
  passReqToCallback: true
}));




// Cant get the logout to redirect
router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect("/user/login");
})





// Does this work?

// ----------------------   Create Recipe   ----------------------------
router.get('/create-recipe', (req, res, next) => {
  if (!req.user) {
    res.redirect('/user/login')
  }
  else {
    res.render('user-views/create-recipe', { "message": req.flash("error") });

  }
});




// ----------------------  Cookbook   --------------------------------------

router.get('/cookbook/:cuisine', (req, res, next) => {
  console.log(req.params);
  Recipe.find({ cuisineType: req.params.cuisine })
    .then((recipesFromDb) => {
      res.render('recipe-views/category', { allrecipes: recipesFromDb })
    })
    .catch((err) =>
      next(err))
})







module.exports = router;
