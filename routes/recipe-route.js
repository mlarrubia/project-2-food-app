const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');
const uploadMagic = require('../config/cloudinary-setup');


// I need to create the /profile to be a compelation of recipes the user has favorited AKA their cookbook


// ----------------------   Category Route   ------------------------------

router.get('/categories', (req, res, next) => {
  console.log('========================', req.user);
  res.render('recipe-views/category');
})



// ---------------------   Card Route   ------------------------------------
router.get('/card', (req, res, next) => {
  res.render('recipe-views/card');
})

router.post('/new', (req, res, next) => {
  console.log("-------------------------------INSIDE THE POST ")
  console.log("--------------------------", req.body);
  const theMeal = req.body.meal;
  const theCuisineType = req.body.cuisineType;
  const theName = req.body.name;
  const theIngredients = req.body.ingredients.split(',');
  const theSteps = req.body.steps.split(',');
  const theVideo = req.body.video;
  const theImages = req.body.images;

  Recipe.create({
    author: req.user,
    meal: theMeal,
    cuisineType: theCuisineType,
    name: theName,
    ingredients: theIngredients,
    steps: theSteps,
    video: theVideo,
    images: theImages

  })
    .then((newRecipe) => {
      console.log('yay', newRecipe);
      res.redirect('/user/cookbook')
    })
    .catch((err) => {
      next(err);
    })
})




// ----------------------  recipies/categories/:id   -----------------------

router.get('/categories/:cuisine',async (req, res, next) => {
  try {
    const bRecipes = await Recipe.find({cuisineType: req.params.cuisine, meal: "breakfast"});
    const lRecipes = await Recipe.find({cuisineType: req.params.cuisine, meal: "lunch"});
    const dRecipes = await Recipe.find({cuisineType: req.params.cuisine, meal: "Dinner"});
    const desRecipes = await Recipe.find({cuisineType: req.params.cuisine, meal: "dessert"});
    console.log(lRecipes);
    res.render('recipe-views/category', {breakfast: bRecipes, lunch: lRecipes, dinner: dRecipes, dessert: desRecipes});
  } catch (error) {
      next(error);   
  }});





  //  -----------------   recipies/card/:id   --------------------------------
  router.get('/card/:id', (req, res, next) =>{  
    let theID = req.params.id;
    Recipe.findById(theID)
    .then((oneSingleRecipe)=>{
      res.render('recipe-views/card', {recipeForCard: oneSingleRecipe});  
    })
    .catch((err)=>{
      next(err);
    })     
  }); 




  // ---------------------   Delete Recipe   -----------------------------------

  router.post('/delete/:id', (req, res, next)=>{
    Recipe.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.redirect('/user/cookbook');
    })
    .catch((err)=>{
        next(err);
    })


})





module.exports = router;