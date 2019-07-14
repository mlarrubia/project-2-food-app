const express = require('express');
const router = express.Router();
const User = require('../models/Recipe');




// I need to create the /profile to be a compelation of recipes the user has favorited AKA their cookbook


// ----------------------   Category Route   ------------------------------

router.get('/category', (req, res, next) =>{
  res.render('recipe-views/category');
})



// ---------------------   Card Route   ------------------------------------
router.get('/card', (req, res, next) =>{
  res.render('recipe-views/card');
})















module.exports = router;