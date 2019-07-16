const mongoose     = require('mongoose');
const Recipe         = require('../models/Recipe'); 


mongoose
  .connect('mongodb://localhost/project-food-app2', { useNewUrlParser: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });


let recipeArray = [
  {
    meal: "Lunch",
    cuisineType: "Mexican",
    name: "Sheet Tray Taco Night Recipe by Tasty",
    ingredients: "extra virgin olive oil, green bell pepper",
    steps: `"2 teaspoons kosher salt" 
            ,"1 teaspoon ground black pepper"  
            ,"1 teaspoon ground cumin"  
            ,"1 teaspoon garlic powder"`,
    video: "https://vid.tasty.co/output/105979/landscape_720/1534803703",
    image: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/902865ccf964427bb9a8fdf2af7c0aeb/BFV46558EasyWeeknightMealstoMakeWithYourKidsFBV2.jpg",
  },
  {
    meal: "Lunch",
    cuisineType: "Mexican",
    name: "Sheet Tray Taco Night Recipe by Tasty",
    ingredients: "extra virgin olive oil, green bell pepper",
    steps: `"2 teaspoons kosher salt" 
            ,"1 teaspoon ground black pepper"  
            ,"1 teaspoon ground cumin"  
            ,"1 teaspoon garlic powder"`,
    video: "https://vid.tasty.co/output/105979/landscape_720/1534803703",
    image: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/902865ccf964427bb9a8fdf2af7c0aeb/BFV46558EasyWeeknightMealstoMakeWithYourKidsFBV2.jpg",
  },
  {
    meal: "Lunch",
    cuisineType: "Mexican",
    name: "Sheet Tray Taco Night Recipe by Tasty",
    ingredients: "extra virgin olive oil, green bell pepper",
    steps: `"2 teaspoons kosher salt" 
            ,"1 teaspoon ground black pepper"  
            ,"1 teaspoon ground cumin"  
            ,"1 teaspoon garlic powder"`,
    video: "https://vid.tasty.co/output/105979/landscape_720/1534803703",
    image: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/902865ccf964427bb9a8fdf2af7c0aeb/BFV46558EasyWeeknightMealstoMakeWithYourKidsFBV2.jpg",
  }  

];


Recipe.create(recipeArray)
.then(()=>{
    console.log('yay')
    mongoose.connection.close();
})
.catch((err)=>{
  console.log(err)
    console.log('nooo')
})