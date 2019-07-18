const mongoose      = require('mongoose');
const Recipe = require('../models/Recipe');



mongoose
.connect("mongodb://heroku_v1gjh92s:hk4dn8sqclhf404l7gitmhejrk@ds139735.mlab.com:39735/heroku_v1gjh92s", {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});



let mexicanbreakfast = [

  {
      "@context": "http://schema.org/",
      "@type": "Recipe",
      "author": [
        {
          "@type": "Person",
          "name": "Hannah Williams"
        }
      ],
      "datePublished": "2017-07-11T22:51:04",
      "description": "Here's what you need: sausage link, egg, flour tortilla, shredded cheddar cheese",
      "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/c08ab5dacb424699a3ef8f31e50f32bb/makeaheadbreakfast-fb.jpg",
      "name": "Make-Ahead Breakfast Quesadilla Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
        }
      },
      "recipeIngredient": [
            "2 sausage links"
            ,"2 eggs, lightly beaten"
            ,"1 flour tortilla, burrito-sized"
            ,"½ cup cheddar cheese, shredded"
      ],
      "recipeInstructions": [
          {
            "@type": "HowToStep",
            "text": "In a skillet thoroughly cook the sausage and eggs."
          }
          ,{
            "@type": "HowToStep",
            "text": "Place mixture in the center of a flour tortilla. Top with cheese, and fold the edges inward to form a sealed pocket."
          }
          ,{
            "@type": "HowToStep",
            "text": "Heat on a skillet, seam-side down. Flip and cook until golden brown."
          }
          ,{
            "@type": "HowToStep",
            "text": "You can freeze up to a month."
          }
          ,{
            "@type": "HowToStep",
            "text": "Enjoy!"
          }
      ],
      "recipeYield": "12 servings",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "97",
        "ratingCount": "246",
        "bestRating": "100",
        "worstRating": "0"
      },
      "cookingMethod": "Pan Fry",
      "keywords": "breakfast, cheese, easy, eggs, healthy, meal prep, muffins, quesadilla, yogurt",
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "37 calories",
        "carbohydrateContent":  "0 grams",
        "fatContent":  "2 grams",
        "fiberContent": "0 grams",
        "proteinContent": "2 grams",
        "sugarContent": "0 grams"
      },
      "recipeCategory": "Breakfast",
      "recipeCuisine": "Fusion",
      "totalTime": "PT30M",
      "video": [{
        "contentUrl": "https://vid.tasty.co/output/26151/mp4_720x1280/1489102618",
        "description": "Here's what you need: sausage link, egg, flour tortilla, shredded cheddar cheese",
        "duration": "PT02M29S",
        "name": "Make-Ahead Breakfast Quesadilla Recipe by Tasty",
        "publisher": {
          "@type": "Organization",
          "name": "Tasty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://tasty.co/favicon.ico"
          }
        },
        "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/c08ab5dacb424699a3ef8f31e50f32bb/makeaheadbreakfast-fb.jpg",
        "uploadDate": "2017-07-11T22:51:04"
      }]
    },
  
    {
      "@context": "http://schema.org/",
      "@type": "Recipe",
      "author": [
        {
          "@type": "Person",
          "name": "Daisy Garcia"
        }
      ],
      "datePublished": "2017-04-26T19:45:52",
      "description": "Here's what you need: chorizo, egg, shredded cheddar cheese, onion, bell pepper, vegetable oil, biscuit dough, egg wash, flour",
      "image": "https://img.buzzfeed.com/video-api-prod/assets/43ec4c37221442df96d7a2a0a7cf92bf/BFV11556_BreakfastBraid-ThumbTextless1080.jpg",
      "name": "Breakfast Biscuits Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
        }
      },
      "recipeIngredient": [
            "10 ounces chorizo"
            ,"4 eggs"
            ,"1 cup cheddar cheese, shredded"
            ,"½ cup onion, diced"
            ,"1 cup bell pepper, diced"
            ,"2 tablespoons vegetable oil"
            ,"1 tube biscuit dough"
            ,"Egg wash"
            ,"Flour for dusting"
      ],
      "recipeInstructions": [
          {
            "@type": "HowToStep",
            "text": "Heat the oil in a frying pan. Add the onion and stir until translucent. Add the chorizo."
          }
          ,{
            "@type": "HowToStep",
            "text": "NOTE: You don’t need to use more salt since chorizo has enough salt."
          }
          ,{
            "@type": "HowToStep",
            "text": "Cook for about 5 minutes, stirring occasionally. Add the bell peppers and stir."
          }
          ,{
            "@type": "HowToStep",
            "text": "Beat the eggs until the yolks break and add them to the chorizo mix."
          }
          ,{
            "@type": "HowToStep",
            "text": "Stir until the eggs are just cooked."
          }
          ,{
            "@type": "HowToStep",
            "text": "Preheat oven to 375˚F (190˚C)."
          }
          ,{
            "@type": "HowToStep",
            "text": "Flour a surface and open a tube of biscuits. Place them close to each other. Roll them out with a rolling pin to create one single dough."
          }
          ,{
            "@type": "HowToStep",
            "text": "Sprinkle cheddar cheese over the rolled biscuit dough. Add the chorizo and eggs. Roll it up and pinch the edge to seal it to the roll."
          }
          ,{
            "@type": "HowToStep",
            "text": "Brush the roll with egg wash."
          }
          ,{
            "@type": "HowToStep",
            "text": "Using scissors, make slits in the dough about 2 inches (5 cm) apart from each other. Then twist them to alternating sides to create a braided look."
          }
          ,{
            "@type": "HowToStep",
            "text": "Bake for 25 minutes, or until golden brown."
          }
          ,{
            "@type": "HowToStep",
            "text": "Enjoy!"
          }
      ],
      "recipeYield": "7 servings",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "91",
        "ratingCount": "22",
        "bestRating": "100",
        "worstRating": "0"
      },
      "cookingMethod": "Pan Fry",
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "561 calories",
        "carbohydrateContent":  "33 grams",
        "fatContent":  "37 grams",
        "fiberContent": "1 grams",
        "proteinContent": "22 grams",
        "sugarContent": "7 grams"
      },
      "recipeCategory": "Breakfast",
      "recipeCuisine": "Fusion",
      "video": [{
        "contentUrl": "https://vid.tasty.co/output/12478/mp4_720x1280/1476912016",
        "description": "Here's what you need: chorizo, egg, shredded cheddar cheese, onion, bell pepper, vegetable oil, biscuit dough, egg wash, flour",
        "duration": "PT00M00S",
        "name": "Breakfast Biscuits Recipe by Tasty",
        "publisher": {
          "@type": "Organization",
          "name": "Tasty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://tasty.co/favicon.ico"
          }
        },
        "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/43ec4c37221442df96d7a2a0a7cf92bf/BFV11556_BreakfastBraid-ThumbTextless1080.jpg",
        "uploadDate": "2017-04-26T19:45:52"
      }]
    },
  
    {
      "@context": "http://schema.org/",
      "@type": "Recipe",
      "author": [
        {
          "@type": "Person",
          "name": "Tiffany Lo"
        }
      ],
      "datePublished": "2017-10-19T17:03:35",
      "description": "Here's what you need: turkey bacon, sweet potato, red bell pepper, fresh spinach, egg, olive oil, salt, pepper, shredded cheese, whole wheat tortillas",
      "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/1fad19cb0b4b429b8ad05ec61f96a298/BFV30507_Kid-FriendlyBreakfastMealPrep.jpg",
      "name": "Healthier Frozen Breakfast Burritos Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
        }
      },
      "recipeIngredient": [
            "4-6 slices turkey bacon"
            ,"1 sweet potato, peeled and diced"
            ,"1 red bell peppers, diced"
            ,"6 cups spinach, sauteed"
            ,"6 eggs, beaten"
            ,"Olive oil or oil of choice"
            ,"Salt, to taste"
            ,"Pepper, to taste"
            ,"Shredded cheese of choice, to taste"
            ,"Whole wheat tortillas"
      ],
      "recipeInstructions": [
          {
            "@type": "HowToStep",
            "text": "In a large skillet over medium heat, cook turkey bacon according to package instructions. Remove and set to the side."
          }
          ,{
            "@type": "HowToStep",
            "text": "Using the same skillet, add diced sweet potatoes and season with salt and pepper. Cook until soft. Remove from pan and set aside."
          }
          ,{
            "@type": "HowToStep",
            "text": "Add diced red bell peppers and cook until softened. Remove from pan and set aside."
          }
          ,{
            "@type": "HowToStep",
            "text": "Cook spinach, then set aside."
          }
          ,{
            "@type": "HowToStep",
            "text": "Reduce heat to medium-low and pour in beaten eggs. Remove from pan once cooked."
          }
          ,{
            "@type": "HowToStep",
            "text": "To assemble the burritos, place down parchment paper, then put the tortilla on top. Add scrambled eggs, sweet potatoes, spinach, bell pepper, turkey bacon, and cheese."
          }
          ,{
            "@type": "HowToStep",
            "text": "Fold the left and right side of the burrito in, then fold the bottom up and roll tightly."
          }
          ,{
            "@type": "HowToStep",
            "text": "Roll burrito into parchment paper."
          }
          ,{
            "@type": "HowToStep",
            "text": "Serve now or place into a bag or reusable container."
          }
          ,{
            "@type": "HowToStep",
            "text": "Transfer to the freezer. Freeze for up to 1 month."
          }
          ,{
            "@type": "HowToStep",
            "text": "To reheat, remove burrito from parchment paper and wrap in a damp paper towel."
          }
          ,{
            "@type": "HowToStep",
            "text": "Microwave for 3 minutes or until warm."
          }
          ,{
            "@type": "HowToStep",
            "text": "Rest for one minute."
          }
          ,{
            "@type": "HowToStep",
            "text": "Enjoy!"
          }
      ],
      "recipeYield": "6 servings",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "100",
        "ratingCount": "87",
        "bestRating": "100",
        "worstRating": "0"
      },
      "cookingMethod": "Pan Fry",
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "135 calories",
        "carbohydrateContent":  "0 grams",
        "fatContent":  "10 grams",
        "fiberContent": "0 grams",
        "proteinContent": "8 grams",
        "sugarContent": "0 grams"
      },
      "recipeCategory": "Breakfast",
      "recipeCuisine": "Fusion",
      "video": [{
        "contentUrl": "https://vid.tasty.co/output/57232/mp4_720x1280/1508449017",
        "description": "Here's what you need: turkey bacon, sweet potato, red bell pepper, fresh spinach, egg, olive oil, salt, pepper, shredded cheese, whole wheat tortillas",
        "duration": "PT03M57S",
        "name": "Healthier Frozen Breakfast Burritos Recipe by Tasty",
        "publisher": {
          "@type": "Organization",
          "name": "Tasty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://tasty.co/favicon.ico"
          }
        },
        "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/1fad19cb0b4b429b8ad05ec61f96a298/BFV30507_Kid-FriendlyBreakfastMealPrep.jpg",
        "uploadDate": "2017-10-19T17:03:35"
      }]
    },
  
    {
      "@context": "http://schema.org/",
      "@type": "Recipe",
      "author": [
        {
          "@type": "Person",
          "name": "Joey Firoben"
        }
      ],
      "datePublished": "2017-05-11T21:21:32",
      "description": "Here's what you need: coconut oil, turkey sausage, cannellini bean, diced tomato, salt, black pepper, dried thyme, egg, spinach, greek yogurt, ripe avocado, whole wheat flour tortillas",
      "image": "https://img.buzzfeed.com/video-api-prod/assets/31d4cfbbe73f475f830b30f47083da39/BFV14575_TurkeySausageBreakfastBurritoThumb.jpg",
      "name": "Turkey Sausage Breakfast Burrito Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
        }
      },
      "recipeIngredient": [
            "1 tablespoon coconut oil"
            ,"1 pound turkey sausage"
            ,"1 can cannellini beans, rinsed and drained"
            ,"1 can diced tomatoes, drained"
            ,"½ teaspoon salt"
            ,"½ teaspoon black pepper"
            ,"1 teaspoon dried thyme"
            ,"4 eggs, beaten"
            ,"4 cups spinach"
            ,"Greek yogurt"
            ,"2 ripe avocados"
            ,"6-8 whole wheat flour tortillas"
      ],
      "recipeInstructions": [
          {
            "@type": "HowToStep",
            "text": "Heat the oil in a large nonstick skillet over medium-high heat."
          }
          ,{
            "@type": "HowToStep",
            "text": "Toss in the sausage and break up with a wooden spoon until brown."
          }
          ,{
            "@type": "HowToStep",
            "text": "Pour in the beans, tomatoes, salt, pepper, and thyme, and mix until everything has warmed through."
          }
          ,{
            "@type": "HowToStep",
            "text": "Move the contents of the pan out of the way to form an open well in the center of the pan. Pour the eggs into the well, and as the bottom of the eggs start to cook and solidify, use a spatula to gently scrape the cooked bits off the bottom and slowly mix with the other contents of the pan."
          }
          ,{
            "@type": "HowToStep",
            "text": "Add the spinach to the pan and mix."
          }
          ,{
            "@type": "HowToStep",
            "text": "Spoon a portion of the mixture onto a warmed tortilla, top with avocado slices and Greek yogurt, and roll the tortilla into a burrito."
          }
          ,{
            "@type": "HowToStep",
            "text": "Enjoy!"
          }
      ],
      "recipeYield": "6 servings",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "92",
        "ratingCount": "61",
        "bestRating": "100",
        "worstRating": "0"
      },
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "515 calories",
        "carbohydrateContent":  "50 grams",
        "fatContent":  "37 grams",
        "fiberContent": "9 grams",
        "proteinContent": "29 grams",
        "sugarContent": "5 grams"
      },
      "recipeCategory": "Breakfast",
      "recipeCuisine": "Mexican",
      "video": [{
        "contentUrl": "https://vid.tasty.co/output/16535/mp4_720x1280/1480707596",
        "description": "Here's what you need: coconut oil, turkey sausage, cannellini bean, diced tomato, salt, black pepper, dried thyme, egg, spinach, greek yogurt, ripe avocado, whole wheat flour tortillas",
        "duration": "PT00M00S",
        "name": "Turkey Sausage Breakfast Burrito Recipe by Tasty",
        "publisher": {
          "@type": "Organization",
          "name": "Tasty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://tasty.co/favicon.ico"
          }
        },
        "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/31d4cfbbe73f475f830b30f47083da39/BFV14575_TurkeySausageBreakfastBurritoThumb.jpg",
        "uploadDate": "2017-05-11T21:21:32"
      }]
    },
  
    {
      "@context": "http://schema.org/",
      "@type": "Recipe",
      "author": [
        {
          "@type": "Person",
          "name": "Claire Nolan"
        }
      ],
      "datePublished": "2017-12-14T16:30:08",
      "description": "Here's what you need: pancake mix, egg, milk, breakfast sausage, egg, milk, salt, pepper, shredded mexican cheese blend",
      "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/123996.jpg",
      "name": "Sheet Pan Breakfast Sandwich Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
        }
      },
      "recipeIngredient": [
            "6 cups pancake mix"
            ,"6 eggs"
            ,"3 cups milk"
            ,"3 pounds breakfast sausage"
            ,"12 eggs"
            ,"½ cup milk"
            ,"Salt, to taste"
            ,"Pepper, to taste"
            ,"1 cup shredded Mexican cheese blend"
      ],
      "recipeInstructions": [
          {
            "@type": "HowToStep",
            "text": "Preheat oven to 425˚F (220˚C)."
          }
          ,{
            "@type": "HowToStep",
            "text": "In a large bowl, combine pancake mix, eggs and milk being careful not to over-mix."
          }
          ,{
            "@type": "HowToStep",
            "text": "Divide batter evenly onto two parchment paper-lined 17x11 inch baking sheets. Spread evenly and bake for 15 minutes."
          }
          ,{
            "@type": "HowToStep",
            "text": "In a large bowl, combine eggs, milk, salt and pepper. Pour the eggs onto a parchment paper-lined 17x11 inch baking sheet. Spread evenly and bake for 15-17 minutes."
          }
          ,{
            "@type": "HowToStep",
            "text": "Line another 18x13 inch baking sheet with parchment paper and spread out the sausage from corner to corner. Decrease oven temperature to 350˚F (180˚C) and bake for 20 minutes."
          }
          ,{
            "@type": "HowToStep",
            "text": "Drain fat, and sprinkle cheese on top of the sausage. Bake for another 5 minutes at the same temperature."
          }
          ,{
            "@type": "HowToStep",
            "text": "On a cutting board, layer the sandwich starting with a pancake, followed by sausage, egg, and the second pancake. Slice into breakfast size sandwiches and serve immediately, or wrap in parchment and freeze in a container for up to 1 month."
          }
          ,{
            "@type": "HowToStep",
            "text": "Enjoy!"
          }
      ],
      "recipeYield": "24 sandwiches",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "88",
        "ratingCount": "100",
        "bestRating": "100",
        "worstRating": "0"
      },
      "cookingMethod": "Bake",
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "393 calories",
        "carbohydrateContent":  "33 grams",
        "fatContent":  "20 grams",
        "fiberContent": "1 grams",
        "proteinContent": "18 grams",
        "sugarContent": "8 grams"
      },
      "recipeCategory": "Breakfast",
      "recipeCuisine": "American",
      "video": [{
        "contentUrl": "https://vid.tasty.co/output/68196/landscape_720/1513296516",
        "description": "Here's what you need: pancake mix, egg, milk, breakfast sausage, egg, milk, salt, pepper, shredded mexican cheese blend",
        "duration": "PT01M56S",
        "name": "Sheet Pan Breakfast Sandwich Recipe by Tasty",
        "publisher": {
          "@type": "Organization",
          "name": "Tasty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://tasty.co/favicon.ico"
          }
        },
        "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/123996.jpg",
        "uploadDate": "2017-12-14T16:30:08"
      }]
    },
  
    {
      "@context": "http://schema.org/",
      "@type": "Recipe",
      "author": [
        {
          "@type": "Person",
          "name": "Matthew Johnson"
        }
      ],
      "datePublished": "2018-06-15T23:26:20",
      "description": "Here's what you need: guajillo chiles, ancho chilies, chiles de árbol, tomato, water, onion, garlic, salt, corn tortilla, canola oil, large egg, queso fresco, red onion, avocado, fresh cilantro",
      "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/163764.jpg",
      "name": "Chilaquiles With Andrea Mares Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
        }
      },
      "recipeIngredient": [
            "3 guajillo chiles, stems removed and seeded"
            ,"2 ancho chiles, stems removed and seeded"
            ,"3 chiles de árbol, stems removed and seeded"
            ,"1 tomato, halved"
            ,"3 cups water"
            ,"½ onion, chopped"
            ,"3 cloves garlic"
            ,"Salt, to taste"
            ,"16 corn tortillas, cut into triangles"
            ,"Canola oil, for frying"
            ,"4 large eggs"
            ,"½ cup crumbled queso fresco, for serving"
            ,"¼ cup diced red onions, for serving"
            ,"1 avocado, sliced, for serving"
            ,"2 tablespoons chopped fresh cilantro, for serving"
      ],
      "recipeInstructions": [
          {
            "@type": "HowToStep",
            "text": "In a small pot, combine the guajillos, anchos, chiles de árbol, halved tomato, and water. Bring to a boil over [level] heat. Cover cover and cook for 10 minutes, or until the peppers are rehydrated and softened."
          }
          ,{
            "@type": "HowToStep",
            "text": "Using a slotted spoon, transfer the peppers and tomato to a blender. Add the onion, garlic, salt, and about ½ cup (60 g) of the pepper cooking liquid. Blend until smooth, adding more liquid as needed if the sauce is too thick."
          }
          ,{
            "@type": "HowToStep",
            "text": "Cut the corn tortillas into triangles. Add to a cast iron with around 2 cups (480 ml) of heated oil."
          }
          ,{
            "@type": "HowToStep",
            "text": "Fry the tortilla triangles until golden and crispy. Leaving the chips in the pan, remove all but 2 tablespoons of the hot oil."
          }
          ,{
            "@type": "HowToStep",
            "text": "Add the eggs to the pan and stir around with the chips. Once the eggs are almost set, pour in the chile sauce and stir until well-combined."
          }
          ,{
            "@type": "HowToStep",
            "text": "Top the chilaquiles with queso fresco, red onion, avocado, and cilantro."
          }
          ,{
            "@type": "HowToStep",
            "text": "Serve immediately."
          }
          ,{
            "@type": "HowToStep",
            "text": "Enjoy!"
          }
      ],
      "recipeYield": "4 servings",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "95",
        "ratingCount": "71",
        "bestRating": "100",
        "worstRating": "0"
      },
      "cookingMethod": "Deep-Fry",
      "keywords": ", baking, best, best ever, buzzfeed, chilaquiles, classic, cook, cooking, easy, easy recipes, food, how to, how to bake, how to cook, mexican food, perfect, quick and easy, recipe, recipes, tasty, ultimate, yum, yummy",
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "508 calories",
        "carbohydrateContent":  "56 grams",
        "fatContent":  "23 grams",
        "fiberContent": "10 grams",
        "proteinContent": "21 grams",
        "sugarContent": "3 grams"
      },
      "recipeCategory": "Breakfast",
      "recipeCuisine": "Mexican",
      "video": [{
        "contentUrl": "https://vid.tasty.co/output/98988/landscape_720/1529342351",
        "description": "Here's what you need: guajillo chiles, ancho chilies, chiles de árbol, tomato, water, onion, garlic, salt, corn tortilla, canola oil, large egg, queso fresco, red onion, avocado, fresh cilantro",
        "duration": "PT01M53S",
        "name": "Chilaquiles With Andrea Mares Recipe by Tasty",
        "publisher": {
          "@type": "Organization",
          "name": "Tasty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://tasty.co/favicon.ico"
          }
        },
        "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/163764.jpg",
        "uploadDate": "2018-06-15T23:26:20"
      }]
    },
  
    {
      "@context": "http://schema.org/",
      "@type": "Recipe",
      "author": [
        {
          "@type": "Person",
          "name": "Dee Robertson"
        }
      ],
      "datePublished": "2017-04-26T19:47:33",
      "description": "Here's what you need: steak, salt, pepper, chili powder, dried oregano, garlic powder, cumin, egg, salt, pepper, butter, small flour tortilla, hard taco shell, grated cheddar cheese, salsa, avocado, queso fresco, fresh cilantro, scallion",
      "image": "https://img.buzzfeed.com/video-api-prod/assets/589c808340604205baec4ebfe20e8536/Thumb2.jpg",
      "name": "Double-Decker Steak Breakfast Tacos Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
        }
      },
      "recipeIngredient": [
            "1 pound steak (flank, skirt, or flat-iron)"
            ,"1 teaspoon salt"
            ,"½ teaspoon pepper"
            ,"½ teaspoon chile powder"
            ,"½ teaspoon oregano"
            ,"½ teaspoon garlic powder"
            ,"½ teaspoon cumin"
            ,"8 eggs, beaten"
            ,"Salt, to taste"
            ,"Pepper, to taste"
            ,"1 tablespoon butter"
            ,"8 small flour tortillas"
            ,"8 hard taco shells"
            ,"1-2 cups grated cheddar or jack cheese"
            ,"1 cup salsa"
            ,"1 avocado, sliced"
            ,"Crumbled queso fresco"
            ,"Cilantro"
            ,"Scallions"
      ],
      "recipeInstructions": [
          {
            "@type": "HowToStep",
            "text": "Combine the cumin, chili powder, garlic, oregano, salt, and pepper in a small bowl."
          }
          ,{
            "@type": "HowToStep",
            "text": "Rub all over the steak."
          }
          ,{
            "@type": "HowToStep",
            "text": "Heat a large sauté pan over high heat until very hot. Add a splash of vegetable oil."
          }
          ,{
            "@type": "HowToStep",
            "text": "Add the steak to the pan and cook 3-4 minutes per side for medium, or cook to desired doneness."
          }
          ,{
            "@type": "HowToStep",
            "text": "Remove from pan and let rest at least 10 minutes."
          }
          ,{
            "@type": "HowToStep",
            "text": "Thinly slice against the grain."
          }
          ,{
            "@type": "HowToStep",
            "text": "Preheat an oven to 350˚F (180˚C)."
          }
          ,{
            "@type": "HowToStep",
            "text": "Place the flour tortillas on baking sheets. Sprinkle each with a small amount of shredded cheese, then place one hard taco shell inside."
          }
          ,{
            "@type": "HowToStep",
            "text": "Heat just until cheese melts, about 3-5 minutes."
          }
          ,{
            "@type": "HowToStep",
            "text": "Heat a nonstick pan over medium heat and add butter. Scramble the eggs and season with salt and pepper."
          }
          ,{
            "@type": "HowToStep",
            "text": "To assemble, fill each double-decker shell with a few spoonfuls of scrambled eggs and a few slices of steak. Top with salsa, avocado, queso fresco, cilantro, and scallions."
          }
          ,{
            "@type": "HowToStep",
            "text": "Enjoy!"
          }
      ],
      "recipeYield": "8 servings",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "100",
        "ratingCount": "3",
        "bestRating": "100",
        "worstRating": "0"
      },
      "cookingMethod": "Pan Fry",
      "keywords": "breakfast, eggs, steak, tacos",
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "468 calories",
        "carbohydrateContent":  "32 grams",
        "fatContent":  "24 grams",
        "fiberContent": "2 grams",
        "proteinContent": "27 grams",
        "sugarContent": "2 grams"
      },
      "recipeCategory": "Breakfast",
      "recipeCuisine": "Fusion",
      "video": [{
        "contentUrl": "https://vid.tasty.co/output/22023/mp4_720x1280/1485381654",
        "description": "Here's what you need: steak, salt, pepper, chili powder, dried oregano, garlic powder, cumin, egg, salt, pepper, butter, small flour tortilla, hard taco shell, grated cheddar cheese, salsa, avocado, queso fresco, fresh cilantro, scallion",
        "duration": "PT01M05S",
        "name": "Double-Decker Steak Breakfast Tacos Recipe by Tasty",
        "publisher": {
          "@type": "Organization",
          "name": "Tasty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://tasty.co/favicon.ico"
          }
        },
        "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/589c808340604205baec4ebfe20e8536/Thumb2.jpg",
        "uploadDate": "2017-04-26T19:47:33"
      }]
    },
  
    {
      "@context": "http://schema.org/",
      "@type": "Recipe",
      "author": [
        {
          "@type": "Person",
          "name": "Merle O'Neal"
        }
      ],
      "datePublished": "2017-06-27T21:56:51",
      "description": "Here's what you need: tortilla, oil, garlic, tofu, turmeric, paprika, red pepper flakes, nutritional yeast, vegetable stock, hot sauce, onion, fresh spinach, tomato, black beans, bell pepper, mushrooms, plant based meat alternative, pinto bean, potato, sweet potato, corn",
      "image": "https://img.buzzfeed.com/video-api-prod/assets/a0666771c1c5434bbe270c433ea72045/fb_thumb.jpg",
      "name": "Freezer-Prep Breakfast Burritos Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
        }
      },
      "recipeIngredient": [
            "Tortillas"
            ,"1 tablespoon oil"
            ,"5 cloves garlic, minced"
            ,"14 ounces tofu, broken up"
            ,"1 teaspoon turmeric"
            ,"1 teaspoon paprika"
            ,"½ teaspoons red pepper flakes"
            ,"¼ cup nutritional yeast"
            ,"¼ cup vegetable stock"
            ,"Hot sauce, optional"
            ,"Onions, diced and cooked, optional"
            ,"Spinach, cooked, optional"
            ,"Tomatoes, sliced and cooked, optional"
            ,"Black beans, optional"
            ,"Peppers, chopped and cooked, optional"
            ,"Mushrooms, chopped and cooked, optional"
            ,"Plant-based meat alternatives, cooked, optional"
            ,"Pinto beans, optional"
            ,"Potatoes, chopped and cooked, optional"
            ,"Sweet potatoes, chopped and cooked, optional"
            ,"Corn, optional"
      ],
      "recipeInstructions": [
          {
            "@type": "HowToStep",
            "text": "In a medium pan, add oil and garlic and cook until garlic is lightly browned. Add tofu by pulling pieces off to produce the full “scramble” effect."
          }
          ,{
            "@type": "HowToStep",
            "text": "Add the turmeric, paprika, red pepper flakes, and nutritional yeast and stir to combine."
          }
          ,{
            "@type": "HowToStep",
            "text": "Add the vegetable stock and cook until absorbed in the tofu."
          }
          ,{
            "@type": "HowToStep",
            "text": "Drizzle with hot sauce if you desire."
          }
          ,{
            "@type": "HowToStep",
            "text": "Spoon some of the scramble in the center of a tortilla and add any fillings you would like."
          }
          ,{
            "@type": "HowToStep",
            "text": "NOTE: Leave plenty of room on the ends otherwise food will spill out once it&#x27;s folded up."
          }
          ,{
            "@type": "HowToStep",
            "text": "Fold the left and right sides of the tortilla in toward the center, then roll the bottom (the end nearest you) up towards the top."
          }
          ,{
            "@type": "HowToStep",
            "text": "Dampen a paper towel and wrap it around the burrito, mimicking the fold of the burrito itself. Do the same with parchment paper."
          }
          ,{
            "@type": "HowToStep",
            "text": "Place your burritos in a plastic bag and freeze until breakfast."
          }
          ,{
            "@type": "HowToStep",
            "text": "NOTE: Save for up to 1 month."
          }
          ,{
            "@type": "HowToStep",
            "text": "When you are ready to eat, take one of the burritos out, remove parchment paper and microwave burrito (still in paper towel) in the microwave for 3 minutes."
          }
          ,{
            "@type": "HowToStep",
            "text": "Allow to cool for 1 minute."
          }
          ,{
            "@type": "HowToStep",
            "text": "Enjoy!"
          }
      ],
      "recipeYield": "8 servings",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "96",
        "ratingCount": "45",
        "bestRating": "100",
        "worstRating": "0"
      },
      "cookingMethod": "Pan Fry",
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "104 calories",
        "carbohydrateContent":  "10 grams",
        "fatContent":  "4 grams",
        "fiberContent": "2 grams",
        "proteinContent": "7 grams",
        "sugarContent": "2 grams"
      },
      "recipeCategory": "Breakfast",
      "recipeCuisine": "Fusion",
      "video": [{
        "contentUrl": "https://vid.tasty.co/output/35009/mp4_720x1280/1498580763",
        "description": "Here's what you need: tortilla, oil, garlic, tofu, turmeric, paprika, red pepper flakes, nutritional yeast, vegetable stock, hot sauce, onion, fresh spinach, tomato, black beans, bell pepper, mushrooms, plant based meat alternative, pinto bean, potato, sweet potato, corn",
        "duration": "PT01M40S",
        "name": "Freezer-Prep Breakfast Burritos Recipe by Tasty",
        "publisher": {
          "@type": "Organization",
          "name": "Tasty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://tasty.co/favicon.ico"
          }
        },
        "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/a0666771c1c5434bbe270c433ea72045/fb_thumb.jpg",
        "uploadDate": "2017-06-27T21:56:51"
      }]
    },
  
    {
      "@context": "http://schema.org/",
      "@type": "Recipe",
      "author": [
        {
          "@type": "Person",
          "name": "Tucker Iida"
        }
      ],
      "datePublished": "2017-04-26T19:46:16",
      "description": "Here's what you need: vegetable oil, corn tortillas, black beans, mexican blend cheese, pico de gallo, egg, red enchilada sauce, fresh cilantro, cotija cheese, cream mexicana",
      "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/c5ae61ebfc8b483d8688e23f45bfa1de/BFV5588_HUEVOSRANCHEROS-ISHBAKE_FBEXPORT1080SQ.jpg",
      "name": "Huevos Rancheros-ish Bake Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
        }
      },
      "recipeIngredient": [
            "1 cup Vegetable Oil"
            ,"5 Corn Tortillas (cut 4 of them in half)"
            ,"14 oz. can Black Beans"
            ,"1 cup Mexican Blend Cheese"
            ,"1 1/2 cup Pico de Gallo"
            ,"6 Eggs"
            ,"1/2 cup Red Enchilada Sauce"
            ,"Cilantro"
            ,"Cotija Cheese"
            ,"Cream Mexicana or Sour Cream"
      ],
      "recipeInstructions": [
          {
            "@type": "HowToStep",
            "text": "Preheat your oven to 375˚F (190˚C)"
          }
          ,{
            "@type": "HowToStep",
            "text": "In vegetable oil, lightly fry your corn tortillas. Drain on a paper towel."
          }
          ,{
            "@type": "HowToStep",
            "text": "In a 9 inch (25cm) cast iron skillet, arrange your lightly fried tortillas so they cover the bottom of the skillet."
          }
          ,{
            "@type": "HowToStep",
            "text": "Add black beans evenly over tortillas. (Some will fall in-between the tortillas, thats ok!)"
          }
          ,{
            "@type": "HowToStep",
            "text": "Sprinkle Mexican blend cheese over the black beans."
          }
          ,{
            "@type": "HowToStep",
            "text": "Add pico de gallo on top of the cheese."
          }
          ,{
            "@type": "HowToStep",
            "text": "Using the back of a large spoon, create 6 wells in the pico de gallo for the eggs to rest in."
          }
          ,{
            "@type": "HowToStep",
            "text": "Crack one egg into each well (6 wells for 6 eggs)."
          }
          ,{
            "@type": "HowToStep",
            "text": "Pour enchilada sauce over everything!"
          }
          ,{
            "@type": "HowToStep",
            "text": "Bake for 20-25 minutes. Check on it often to make sure your yolks don’t overcook!"
          }
          ,{
            "@type": "HowToStep",
            "text": "Top with your favorite huevos rancheros toppings."
          }
          ,{
            "@type": "HowToStep",
            "text": "Enjoy!"
          }
      ],
      "recipeYield": "6 servings",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "96",
        "ratingCount": "75",
        "bestRating": "100",
        "worstRating": "0"
      },
      "cookingMethod": "Bake",
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "669 calories",
        "carbohydrateContent":  "26 grams",
        "fatContent":  "55 grams",
        "fiberContent": "6 grams",
        "proteinContent": "19 grams",
        "sugarContent": "3 grams"
      },
      "recipeCategory": "Breakfast",
      "recipeCuisine": "Fusion",
      "video": [{
        "contentUrl": "https://vid.tasty.co/output/32074/mp4_720x1280/1495125320",
        "description": "Here's what you need: vegetable oil, corn tortillas, black beans, mexican blend cheese, pico de gallo, egg, red enchilada sauce, fresh cilantro, cotija cheese, cream mexicana",
        "duration": "PT00M36S",
        "name": "Huevos Rancheros-ish Bake Recipe by Tasty",
        "publisher": {
          "@type": "Organization",
          "name": "Tasty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://tasty.co/favicon.ico"
          }
        },
        "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/c5ae61ebfc8b483d8688e23f45bfa1de/BFV5588_HUEVOSRANCHEROS-ISHBAKE_FBEXPORT1080SQ.jpg",
        "uploadDate": "2017-04-26T19:46:16"
      }]
    },
  
    {
      "@context": "http://schema.org/",
      "@type": "Recipe",
      "author": [
        {
          "@type": "Person",
          "name": "Claire Nolan"
        }
      ],
      "datePublished": "2017-09-11T23:30:20",
      "description": "Here's what you need: flour tortilla, hash brown, egg, breakfast sausage, shredded mexican cheese blend",
      "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/901ad632f7964feb97f57e9dbd9a00fd/BFV28863_FreezerPrepBurritos_FB1080SQ.jpg",
      "name": "Breakfast Burritos Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
        }
      },
      "recipeIngredient": [
            "6 flour tortillas"
            ,"2 cups cooked hash browns"
            ,"2 cups scrambled eggs"
            ,"1 pound breakfast sausage, cooked"
            ,"1 cup shredded Mexican cheese blend"
      ],
      "recipeInstructions": [
          {
            "@type": "HowToStep",
            "text": "Assemble the burritos by microwaving the flour tortilla for 20 seconds, and begin to layer burrito starting with hash browns, followed by scrambled eggs, cooked breakfast sausage, and cheese."
          }
          ,{
            "@type": "HowToStep",
            "text": "Fold in the left and right sides of the tortilla and roll it up from the bottom, tucking the bottom edge under the filling. Wrap in parchment paper and label. Freeze up to 1 month."
          }
          ,{
            "@type": "HowToStep",
            "text": "To reheat from frozen, wrap the burrito in a damp paper towel and microwave for 2-3 minutes, flipping halfway or until the center is hot. Let stand 1 minute before eating."
          }
          ,{
            "@type": "HowToStep",
            "text": "Enjoy!"
          }
      ],
      "recipeYield": "6 burritos",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "97",
        "ratingCount": "78",
        "bestRating": "100",
        "worstRating": "0"
      },
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "762 calories",
        "carbohydrateContent":  "43 grams",
        "fatContent":  "48 grams",
        "fiberContent": "2 grams",
        "proteinContent": "35 grams",
        "sugarContent": "2 grams"
      },
      "recipeCategory": "Breakfast",
      "video": [{
        "contentUrl": "https://vid.tasty.co/output/51861/mp4_720x1280/1505233198",
        "description": "Here's what you need: flour tortilla, hash brown, egg, breakfast sausage, shredded mexican cheese blend",
        "duration": "PT02M02S",
        "name": "Breakfast Burritos Recipe by Tasty",
        "publisher": {
          "@type": "Organization",
          "name": "Tasty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://tasty.co/favicon.ico"
          }
        },
        "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/901ad632f7964feb97f57e9dbd9a00fd/BFV28863_FreezerPrepBurritos_FB1080SQ.jpg",
        "uploadDate": "2017-09-11T23:30:20"
      }]
    },
  
    {
      "@context": "http://schema.org/",
      "@type": "Recipe",
      "author": [
        {
          "@type": "Person",
          "name": "Pierce Abernathy"
        }
      ],
      "datePublished": "2018-05-16T13:10:06",
      "description": "Here's what you need: large egg, olive oil, kosher salt, black pepper, small corn tortilla, canned black bean, pico de gallo, fresh cilantro",
      "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/9a8e91cf3a7e4e4ca99c5d6feccd0501/BFV43066_TastyMakeAheadMealPlan_FB_V2.jpg",
      "name": "Scrambled Egg Breakfast Tacos Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
        }
      },
      "recipeIngredient": [
            "2 large eggs"
            ,"1 teaspoon olive oil"
            ,"¼ teaspoon kosher salt"
            ,"⅛ teaspoon black pepper"
            ,"2 small corn tortillas"
            ,"2 tablespoons canned black beans, drained and rinsed"
            ,"¼ cup pico de gallo"
            ,"2 tablespoons chopped, fresh cilantro"
      ],
      "recipeInstructions": [
          {
            "@type": "HowToStep",
            "text": "Crack the eggs into a small bowl and whisk to combine."
          }
          ,{
            "@type": "HowToStep",
            "text": "Heat the olive oil in a medium nonstick pan over medium heat until shimmering and add the beaten eggs, salt, and pepper. Using a rubber spatula, stir the eggs often until firm, roughly 3 minutes."
          }
          ,{
            "@type": "HowToStep",
            "text": "Divide the eggs between the tortillas."
          }
          ,{
            "@type": "HowToStep",
            "text": "Top each taco with pico de gallo, black beans, and cilantro."
          }
          ,{
            "@type": "HowToStep",
            "text": "Enjoy!"
          }
      ],
      "recipeYield": "2 tacos",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "96",
        "ratingCount": "64",
        "bestRating": "100",
        "worstRating": "0"
      },
      "keywords": ", 7 day meal plan, beans, bread, cheap meal plan, cheap meal prep, cheese, food, healthy meal plan, healthy meal prep, make-ahead meal plan, meal plan, meal prep, pasta, pico, rice, tasty, tasty's 7-day meal plan",
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "178 calories",
        "carbohydrateContent":  "15 grams",
        "fatContent":  "8 grams",
        "fiberContent": "2 grams",
        "proteinContent": "10 grams",
        "sugarContent": "1 grams"
      },
      "recipeCategory": "Breakfast",
      "recipeCuisine": "Fusion",
      "totalTime": "PT30M",
      "video": [{
        "contentUrl": "https://vid.tasty.co/output/94370/landscape_720/1526501033",
        "description": "Here's what you need: large egg, olive oil, kosher salt, black pepper, small corn tortilla, canned black bean, pico de gallo, fresh cilantro",
        "duration": "PT02M52S",
        "name": "Scrambled Egg Breakfast Tacos Recipe by Tasty",
        "publisher": {
          "@type": "Organization",
          "name": "Tasty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://tasty.co/favicon.ico"
          }
        },
        "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/9a8e91cf3a7e4e4ca99c5d6feccd0501/BFV43066_TastyMakeAheadMealPlan_FB_V2.jpg",
        "uploadDate": "2018-05-16T13:10:06"
      }]
    },
  
    {
      "@context": "http://schema.org/",
      "@type": "Recipe",
      "author": [
        {
          "@type": "Person",
          "name": "Tasty"
        }
      ],
      "datePublished": "2017-04-26T19:46:04",
      "description": "Here's what you need: bacon, sausage, baby red potato, red bell pepper, yellow onion, salt, pepper, egg, shredded cheese, green onion, flour tortilla, parchment paper",
      "image": "https://img.buzzfeed.com/video-api-prod/assets/ed6c4dc37dcb482991961425fa5fe142/2.jpg",
      "name": "Frozen Breakfast Burritos Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
        }
      },
      "recipeIngredient": [
            "Bacon"
            ,"Sausage"
            ,"Baby Red Potatoes /quartered"
            ,"1 Red Pepper /chopped"
            ,"1 Yellow Onion /chopped"
            ,"Salt and Pepper"
            ,"n/a"
            ,"10 Eggs - beaten"
            ,"1 Bag Shredded Cheese"
            ,"1 Bunch Green Onions /sliced"
            ,"Flour Tortillas"
            ,"Parchment Paper"
      ],
      "recipeInstructions": [
          {
            "@type": "HowToStep",
            "text": "In a large skillet over medium heat, cook bacon (in batches if necessary) until crispy. Remove the bacon to a paper towel lined plate - leave to cool."
          }
          ,{
            "@type": "HowToStep",
            "text": "In the same skillet - using leftover bacon grease (drain some if necessary) add the potatoes and season with salt and pepper. Once lightly browned add in peppers and onion. Cook until potatoes have browned and the peppers and onions have softened. Remove from pan and place in bowl to cool."
          }
          ,{
            "@type": "HowToStep",
            "text": "In the same saucepan, cook sausage until browned and cooked through. Remove to a paper towel lined bowl."
          }
          ,{
            "@type": "HowToStep",
            "text": "Reduce heat to medium/low and pour beaten eggs into the skillet. Fold and stir eggs occasionally until cooked but still soft and moist. Remove from pan."
          }
          ,{
            "@type": "HowToStep",
            "text": "While cooked ingredients are cooling slightly, gather flour tortillas, shredded cheese and sliced green onions (optional) and set them out on your table/workspace."
          }
          ,{
            "@type": "HowToStep",
            "text": "To assemble the burritos, lay out a tortilla and start with a base of eggs followed by desired toppings and finish with cheese."
          }
          ,{
            "@type": "HowToStep",
            "text": "To wrap, fold in both sides and then fold the bottom up and over all the ingredients. Roll up tightly."
          }
          ,{
            "@type": "HowToStep",
            "text": "NOTE: If you find the tortillas are tearing, heat them up - a few at a time - for 20 seconds in the microwave before assembling."
          }
          ,{
            "@type": "HowToStep",
            "text": "Wrap up in parchment paper. Place the parchment-wrapped burritos in a 1 gallon freezer bag and place in the freezer to store for up to one month."
          }
          ,{
            "@type": "HowToStep",
            "text": "To Reheat: Remove the frozen burrito from the freezer. Unwrap from parchment paper and wrap the frozen burrito up in a damp paper towel. Place on a microwave safe plate and microwave for 3 minutes."
          }
          ,{
            "@type": "HowToStep",
            "text": "Remove from microwave and rest for one minute before unwrapping. Remove the paper towel, serve with hot sauce, salsa, or sour cream!"
          }
          ,{
            "@type": "HowToStep",
            "text": "Enjoy!"
          }
      ],
      "recipeYield": "6 burritos",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "98",
        "ratingCount": "171",
        "bestRating": "100",
        "worstRating": "0"
      },
      "cookingMethod": "Pan Fry",
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "349 calories",
        "carbohydrateContent":  "24 grams",
        "fatContent":  "18 grams",
        "fiberContent": "2 grams",
        "proteinContent": "21 grams",
        "sugarContent": "1 grams"
      },
      "recipeCategory": "Breakfast",
      "recipeCuisine": "Fusion",
      "video": [{
        "contentUrl": "https://vid.tasty.co/output/32140/mp4_720x1280/1495125400",
        "description": "Here's what you need: bacon, sausage, baby red potato, red bell pepper, yellow onion, salt, pepper, egg, shredded cheese, green onion, flour tortilla, parchment paper",
        "duration": "PT01M11S",
        "name": "Frozen Breakfast Burritos Recipe by Tasty",
        "publisher": {
          "@type": "Organization",
          "name": "Tasty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://tasty.co/favicon.ico"
          }
        },
        "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/ed6c4dc37dcb482991961425fa5fe142/2.jpg",
        "uploadDate": "2017-04-26T19:46:04"
      }]
    }
  ]
  
  
  


  let recipes = [];


function printRecipe(array){
    let theRecipe = {};
    array.forEach(eachObject =>{

        if(eachObject.name){
        // console.log("Name: ", eachObject.name);
        theRecipe.name = eachObject.name;
        // console.log(theRecipe);
        }


        if(eachObject.recipeIngredient){
        // console.log("Recipe Ingredient: ", eachObject.recipeIngredient);
        theRecipe.ingredients = eachObject.recipeIngredient;
        }
        
        if(eachObject.recipeInstructions){
          theRecipe.steps = [];
            eachObject.recipeInstructions.forEach(step =>{
                // console.log("Step: ", step);
                theRecipe.steps.push(step.text);

            })
        }
         if(eachObject.image){
        // console.log("Image: ", eachObject.image);
        theRecipe.image = eachObject.image;
        }

        if(eachObject.recipeCategory){
        // console.log("Recipe Category: ", eachObject.recipeCategory);
        theRecipe.meal = eachObject.recipeCategory;
        // console.log(theRecipe);
        }

        if(eachObject.recipeCuisine){
        // console.log("Recipe Cuisine: ", eachObject.recipeCuisine);
        theRecipe.cuisine = "Mexican";
        }

        if(eachObject.video){
        // console.log("Video: ", eachObject.video[0].contentUrl);
        theRecipe.video = eachObject.video[0].contentUrl
        }

         if(eachObject.video){
        // console.log("Video Description: ", eachObject.video[0].description);
        theRecipe.videoDescription = eachObject.video[0].description;
        }
        // console.log(theRecipe);
        recipes.push(theRecipe);
        
    })
    // console.log(recipes[0]);
  }
  
  
  printRecipe(mexicanbreakfast);
  
  // console.log('--------------------------------------------------------',recipes);


  Recipe.create(recipes)
  .then((e) =>{
    console.log("Yay");
  })