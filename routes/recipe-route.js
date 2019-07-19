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

router.post('/new', uploadMagic.single("image"), (req, res, next) => {
  console.log("-------------------------------INSIDE THE POST ")
  console.log("--------------------------", req.file);
  const theMeal = req.body.meal;
  const theCuisineType = req.body.cuisineType;
  const theName = req.body.name;
  const theIngredients = req.body.ingredients.split(',');
  const theSteps = req.body.steps.split(',');
  const theVideo = req.body.video;
  // if(req.file){
    const theImage = req.file.url;
  // }

  Recipe.create({
    author: req.user,
    meal: theMeal,
    cuisineType: theCuisineType,
    name: theName,
    ingredients: theIngredients,
    steps: theSteps,
    video: theVideo,
    image: theImage

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
    // const test = await Recipe.find();
    const bRecipes = await Recipe.find({cuisine: req.params.cuisine, meal: "Breakfast"});
    const lRecipes = await Recipe.find({cuisine: req.params.cuisine, meal: "Lunch"});
    const dRecipes = await Recipe.find({cuisine: req.params.cuisine, meal: "Dinner"});
    const desRecipes = await Recipe.find({cuisine: req.params.cuisine, meal: "Dessert"});
    // console.log('===============================',test);
    console.log('-------------==============----------------========',bRecipes);
    res.render('recipe-views/category', {breakfast: bRecipes, lunch: lRecipes, dinner: dRecipes, dessert: desRecipes});
  } catch (error) {
      next(error);   
  }});





  //  -----------------   recipies/card/:id   --------------------------------
  router.get('/card/:id', (req, res, next) =>{  
    let theID = req.params.id;
    Recipe.findById(theID)
    .then((oneSingleRecipe)=>{
      if(req.user && oneSingleRecipe.author && oneSingleRecipe.author.toString() === req.user._id.toString()){
        oneSingleRecipe.owner = true;
      }
      oneSingleRecipe.ingredientsLength = oneSingleRecipe.ingredients.length;
      res.render('recipe-views/card', {recipeForCard: oneSingleRecipe});  
    })
    .catch((err)=>{
      next(err);
    })     
  }); 




  // -------------------   Update Recipe   ----------------------------------

  router.get("/update/:id", (req, res, next) =>{
    Recipe.findById(req.params.id)
    .then((oneSingleRecipe) =>{
      res.render('recipe-views/update-recipe', {recipeForCard: oneSingleRecipe});
    })
  })


  
router.post('/update/:id', uploadMagic.single("image"), (req, res, next) => {
  console.log("-------------------------------INSIDE THE POST ")
  console.log("--------------------------", req.file);
  const theMeal = req.body.meal;
  const theCuisineType = req.body.cuisineType;
  const theName = req.body.name;
  const theIngredients = req.body.ingredients;
  const theSteps = req.body.steps;
  const theVideo = req.body.video;
  if(req.file){
    const theImage = req.file.url;
  }

  Recipe.findByIdAndUpdate(req.params.id,{
    meal: theMeal,
    cuisineType: theCuisineType,
    name: theName,
    ingredients: theIngredients,
    steps: theSteps,
    video: theVideo,
    if(theImage){
      image: theImage
    }

  })
    .then((newRecipe) => {
      console.log('yay', newRecipe);
      res.redirect('/user/cookbook')
    })
    .catch((err) => {
      next(err);
    })
})



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