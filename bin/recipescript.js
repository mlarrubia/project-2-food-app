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



let mexicandinner = [

  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Tasty"
      }
    ],
    "datePublished": "2019-03-25T20:01:56",
    "description": "Here's what you need: tomatillo, jalapeño, garlic, medium white onion, fresh cilantro, lime, kosher salt, olive oil, ground turkey, medium white onion, kosher salt, McCormick® Hearty Spice Blend, chili powder, corn tortilla, crumbled cotija cheese, radish, fresh cilantro, Lime wedges",
    "image": "https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/1eebdad0585a4d35a613aff846c6a8af.jpeg",
    "name": "Hearty Turkey Tacos Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "1 pound tomatillos, husks removed"
          ,"1 jalapeño, seeded"
          ,"3 cloves garlic"
          ,"½ medium white onion"
          ,"½ bunch of cilantro, leaves and stems"
          ,"Juice of 1-2 limes"
          ,"Kosher salt, to taste"
          ,"1 teaspoon olive oil"
          ,"1 pound ground turkey"
          ,"½ medium white onion, diced"
          ,"1 teaspoon kosher salt"
          ,"1 tablespoon McCormick® Hearty Spice Blend"
          ,"¼ teaspoon chili powder"
          ,"Corn tortillas"
          ,"Crumbled Cotija cheese"
          ,"Thinly sliced radishes"
          ,"Chopped fresh cilantro"
          ,"Lime wedges"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "Make the tomatillo salsa: Place the tomatillos in a medium saucepan and cover with water. Bring to a boil, then reduce the heat to low. Simmer until the tomatillos have turned darker green in color and some of the skins have started to burst. Remove from the water and set aside to cool."
        }
        ,{
          "@type": "HowToStep",
          "text": "In a food processor, combine the jalapeño, garlic, onion, cilantro and cooled tomatillos. Blend until the cilantro and onion have broken down, but you can still see the tomatillo seeds. Be careful not to overblend. Season with the lime juice and salt."
        }
        ,{
          "@type": "HowToStep",
          "text": "Make the turkey filling: Heat the olive oil in a large skillet over medium heat. Add the onion and cook until starting to soften and caramelize, about 10 minutes."
        }
        ,{
          "@type": "HowToStep",
          "text": "Increase the heat to medium-high and add the ground turkey. Season with the salt, Hearty spice blend, and chili powder. Stir occasionally, allowing the turkey to brown slightly. Once the turkey is cooked through, about 5 minutes, remove the pan from the heat."
        }
        ,{
          "@type": "HowToStep",
          "text": "Heat the tortillas in a clean skillet or over a medium-low flame on a gas burning stove. Wrap the hot tortillas in a clean kitchen towel to keep warm as you heat the remaining tortillas."
        }
        ,{
          "@type": "HowToStep",
          "text": "Assemble the tacos: Fill the hot tortillas with the turkey filling and garnish with salsa, cheese, radishes, and cilantro. Serve with lime wedges on the side."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "6 servings",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "242 calories",
      "carbohydrateContent":  "8 grams",
      "fatContent":  "12 grams",
      "fiberContent": "2 grams",
      "proteinContent": "23 grams",
      "sugarContent": "5 grams"
    },
    "recipeCategory": "Dinner",
    "recipeCuisine": "Mexican"
  },

  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Alvin Zhou"
      },
      {
        "@type": "Person",
        "name": "Alexa D'Argenio"
      }
    ],
    "datePublished": "2017-07-11T13:34:34",
    "description": "Here's what you need: ground beef, salt, chili powder, ground chorizo, oil, hamburger bun, manchego cheese, guacamole, pico de gallo, cotija cheese, sour cream",
    "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d4065efb8b844d93865003befbd8cac2/BFV12310_4BurgersAroundtheWorld-FB1080SQ.jpg",
    "name": "Mexican Chorizo Burger Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "1 pound ground beef, 80% lean"
          ,"1 teaspoon salt"
          ,"1 tablespoon chili powder"
          ,"⅓ pound ground chorizo"
          ,"1 tablespoon oil"
          ,"3 hamburger buns"
          ,"3 ounces manchego cheese, sliced"
          ,"½ cup guacamole"
          ,"⅓ cup pico de gallo"
          ,"⅓ cup cotija cheese"
          ,"¼ cup sour cream"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "Mix together the patty ingredients until combined."
        }
        ,{
          "@type": "HowToStep",
          "text": "Form the beef mixture into 3 round patties."
        }
        ,{
          "@type": "HowToStep",
          "text": "Heat oil in a pan over medium heat."
        }
        ,{
          "@type": "HowToStep",
          "text": "Cook the burgers for 3 minutes on the first side, flip, and place a slice of manchego cheese on top."
        }
        ,{
          "@type": "HowToStep",
          "text": "Cook for 6 more minutes until the cheese is melted."
        }
        ,{
          "@type": "HowToStep",
          "text": "Assemble the burgers on the buns with guacamole, cotija, pico de gallo, and sour cream."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "3 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "96",
      "ratingCount": "43",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Pan Fry",
    "keywords": "4 burgers from around the world, around the world, bfv12310, burgers, global, hamburgers",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "1151 calories",
      "carbohydrateContent":  "47 grams",
      "fatContent":  "72 grams",
      "fiberContent": "3 grams",
      "proteinContent": "72 grams",
      "sugarContent": "7 grams"
    },
    "recipeCategory": "Dinner",
    "recipeCuisine": "Mexican",
    "totalTime": "PT30M",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/10187/mp4_720x1280/1473975104",
      "description": "Here's what you need: ground beef, salt, chili powder, ground chorizo, oil, hamburger bun, manchego cheese, guacamole, pico de gallo, cotija cheese, sour cream",
      "duration": "PT00M00S",
      "name": "Mexican Chorizo Burger Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d4065efb8b844d93865003befbd8cac2/BFV12310_4BurgersAroundtheWorld-FB1080SQ.jpg",
      "uploadDate": "2017-07-11T13:34:34"
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
    "datePublished": "2018-11-07T19:04:20",
    "description": "Here's what you need: pork shoulder, large white onion, avocado leaves, pepper, kosher salt, garlic, dried bay leaves, cold water, orange juice, milk, mexican style soda, lard, white corn tortillas, guacamole, pickled vegetable, fresh cilantro, lime wedge, rice, pinto bean",
    "image": "https://s3.amazonaws.com/video-api-prod/assets/6ee55371d6a84da688395385aa1216c2/FB.jpg",
    "name": "Mexican Carnitas As Made By Claudette Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "5 pounds pork shoulder, cut into 2-inch cubes"
          ,"2 large white onions, chopped"
          ,"10 avocado leaves"
          ,"1 teaspoon pepper"
          ,"¼ cup kosher salt"
          ,"6 cloves garlic, grated"
          ,"2 bay leaves"
          ,"Cold water"
          ,"½ cup orange juice"
          ,"½ cup milk"
          ,"1 12-ounce bottle of Mexican-style cola"
          ,"3 pounds lard, cut into large cubes."
          ,"White corn tortillas"
          ,"Guacamole"
          ,"Pickled vegetables"
          ,"Chopped fresh cilantro"
          ,"Lime wedges"
          ,"Cilantro rice"
          ,"Pinto beans"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "To a large pot, add the cubed pork shoulder, onions, avocado leaves, pepper, salt, garlic, and bay leaves. Add enough cold water to cover all the meat. Bring to a boil over high heat, then continue to boil for 20 minutes."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the orange juice, milk, and cola, return to a boil, and simmer until the liquid has reduced by half, about 1 hour."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the lard, let it melt, then boil off the rest of the liquid until the meat begins to fry, 1 hour more."
        }
        ,{
          "@type": "HowToStep",
          "text": "Once the meat turns dark golden brown and is crispy, scoop it out of the pot and onto a paper bag or paper towel-lined baking sheet to drain."
        }
        ,{
          "@type": "HowToStep",
          "text": "Serve with corn tortillas, guacamole, pickled vegetables, cilantro, lime wedges, cilantro rice, and pinto beans."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "12 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "87",
      "ratingCount": "36",
      "bestRating": "100",
      "worstRating": "0"
    },
    "keywords": ", classic, claudette zepeda, el jardin, mexican, mexico, pork recipe, san diego, stove, tasty story",
    "recipeCategory": "Dinner",
    "recipeCuisine": "Mexican",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/114591/landscape_720/1541614108",
      "description": "Here's what you need: pork shoulder, large white onion, avocado leaves, pepper, kosher salt, garlic, dried bay leaves, cold water, orange juice, milk, mexican style soda, lard, white corn tortillas, guacamole, pickled vegetable, fresh cilantro, lime wedge, rice, pinto bean",
      "duration": "PT01M55S",
      "name": "Mexican Carnitas As Made By Claudette Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://s3.amazonaws.com/video-api-prod/assets/6ee55371d6a84da688395385aa1216c2/FB.jpg",
      "uploadDate": "2018-11-07T19:04:20"
    }]
  },

  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Robin Broadfoot"
      }
    ],
    "datePublished": "2017-04-26T19:47:38",
    "description": "Here's what you need: skirt steak, olive oil, salt, pepper, chili powder, cumin, onion, garlic, bell pepper, jalapeño pepper, butter, large tortilla, mexican blend cheese, guacamole, sour cream, salsa",
    "image": "https://img.buzzfeed.com/video-api-prod/assets/456abef3ea9942339a9e90242f01852a/Thumb_A.jpg",
    "name": "Steak Fajita Quesadillas Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "1 pound skirt steak"
          ,"2 tablespoons olive oil"
          ,"Salt, to taste"
          ,"Pepper, to taste"
          ,"1 teaspoon chili powder"
          ,"1 teaspoon cumin"
          ,"1 onion, sliced"
          ,"4 garlic cloves, sliced"
          ,"3 bell peppers, sliced"
          ,"1 jalapeño pepper, sliced"
          ,"1 tablespoon butter"
          ,"4 large tortillas"
          ,"2 cups Mexican cheese blend"
          ,"Guacamole"
          ,"Sour cream"
          ,"Salsa"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "Season skirt steak with olive oil, salt, pepper, chili powder, and cumin."
        }
        ,{
          "@type": "HowToStep",
          "text": "Cook on high heat for roughly 3 minutes each side, for medium-rare."
        }
        ,{
          "@type": "HowToStep",
          "text": "Let the steak rest for 10 minutes."
        }
        ,{
          "@type": "HowToStep",
          "text": "While the steak is resting, sauté onion and garlic until slightly translucent. Add bell peppers, jalapeño, salt, and pepper, cook slightly."
        }
        ,{
          "@type": "HowToStep",
          "text": "Slice the steak into strips."
        }
        ,{
          "@type": "HowToStep",
          "text": "Mix the steak into the pepper mix. Remove from heat and set aside."
        }
        ,{
          "@type": "HowToStep",
          "text": "In a clean pan, melt butter. Lay the tortilla on the buttered pan, add cheese, fajita mixture, more cheese, then top with another tortilla and pat it down."
        }
        ,{
          "@type": "HowToStep",
          "text": "Flip the quesadilla over and cook the other side until it’s golden."
        }
        ,{
          "@type": "HowToStep",
          "text": "Remove from pan and cut into quarters or eighths. Repeat these steps with the remaining tortillas."
        }
        ,{
          "@type": "HowToStep",
          "text": "Serve immediately with sour cream, salsa, and guacamole."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "4 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "99",
      "ratingCount": "149",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Pan Fry",
    "keywords": ", fajita, quesadillas, steak",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "737 calories",
      "carbohydrateContent":  "34 grams",
      "fatContent":  "43 grams",
      "fiberContent": "2 grams",
      "proteinContent": "51 grams",
      "sugarContent": "7 grams"
    },
    "recipeCategory": "Dinner",
    "recipeCuisine": "Fusion",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/21390/mp4_720x1280/1484942611",
      "description": "Here's what you need: skirt steak, olive oil, salt, pepper, chili powder, cumin, onion, garlic, bell pepper, jalapeño pepper, butter, large tortilla, mexican blend cheese, guacamole, sour cream, salsa",
      "duration": "PT00M52S",
      "name": "Steak Fajita Quesadillas Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/456abef3ea9942339a9e90242f01852a/Thumb_A.jpg",
      "uploadDate": "2017-04-26T19:47:38"
    }]
  },

  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Scott Loitsch"
      }
    ],
    "datePublished": "2017-04-26T19:47:16",
    "description": "Here's what you need: boneless, skinless chicken breast, garlic, whole clove, tomato, chipotle pepper in adobo sauce, chicken stock, cumin, nutmeg, vegetable oil, white onion, chorizo, iceberg lettuce, kosher salt, black pepper, avocado, corn tortilla",
    "image": "https://img.buzzfeed.com/video-api-prod/assets/da44fcf619c2459aa44dbc5c665c22ca/FBthumb1.jpg",
    "name": "Chicken Tinga Tacos (Tinga De Pollo) Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "2 boneless, skinless, chicken breasts"
          ,"6 garlic cloves (4 minced, 2 smashed)"
          ,"2 whole cloves"
          ,"2 tomatoes"
          ,"5 chipotle peppers in adobo"
          ,"½ cup chicken stock"
          ,"2 teaspoons cumin"
          ,"½ teaspoon nutmeg"
          ,"2 tablespoons vegetable oil"
          ,"2 white onions, halved and sliced"
          ,"¼ pound chorizo"
          ,"1 head iceberg lettuce, shredded"
          ,"Kosher salt"
          ,"Black pepper, freshly ground"
          ,"2 avocados, sliced"
          ,"12 corn tortillas"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "Place chicken in a saucepan over medium heat with enough water to cover by 1 inch (3 cm)."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the smashed garlic and cloves. Simmer until the chicken is cooked through, 12-15 minutes."
        }
        ,{
          "@type": "HowToStep",
          "text": "Remove the chicken from the pot, cool slightly, then shred with two forks."
        }
        ,{
          "@type": "HowToStep",
          "text": "Place a cast-iron skillet over medium-high heat, until smoking."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the tomatoes and roll slowly around until blackened on all sides, about 6 minutes."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the seared tomatoes to a blender with chipotle peppers, chicken stock, cumin, and nutmeg. Blend until smooth."
        }
        ,{
          "@type": "HowToStep",
          "text": "Heat the vegetable oil in a large pot over medium-high heat. Add the garlic, onions, and chorizo. Cook 2-3 minutes until the onions have softened and the chorizo has rendered a little fat."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the lettuce and sauté 2-3 additional minutes, until softened."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the tomato-chili mixture and cook for 3 minutes, stirring constantly to incorporate."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the shredded chicken and bring mixture to a simmer. Simmer, uncovered, until most of the liquid has cooked off, about 10-15 minutes. Season with salt and pepper to taste."
        }
        ,{
          "@type": "HowToStep",
          "text": "Serve on warm corn tortillas with sliced avocado."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "4 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "90",
      "ratingCount": "67",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Pan Fry",
    "keywords": "chicken, chipotle, chorizo, recipe, taco, tasty",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "661 calories",
      "carbohydrateContent":  "51 grams",
      "fatContent":  "35 grams",
      "fiberContent": "12 grams",
      "proteinContent": "37 grams",
      "sugarContent": "6 grams"
    },
    "recipeCategory": "Dinner",
    "recipeCuisine": "Fusion",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/31875/mp4_720x1280/1495124847",
      "description": "Here's what you need: boneless, skinless chicken breast, garlic, whole clove, tomato, chipotle pepper in adobo sauce, chicken stock, cumin, nutmeg, vegetable oil, white onion, chorizo, iceberg lettuce, kosher salt, black pepper, avocado, corn tortilla",
      "duration": "PT00M57S",
      "name": "Chicken Tinga Tacos (Tinga De Pollo) Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/da44fcf619c2459aa44dbc5c665c22ca/FBthumb1.jpg",
      "uploadDate": "2017-04-26T19:47:16"
    }]
  },

  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Kiano Moju"
      },
      {
        "@type": "Person",
        "name": "Alison Roman"
      },
      {
        "@type": "Person",
        "name": "Alexis Deboschnek"
      }
    ],
    "datePublished": "2018-07-27T15:25:18",
    "description": "Here's what you need: top sirloin steak, kosher salt, freshly ground black pepper, chipotle pepper in adobo sauce, vegetable oil",
    "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/e313a417aa564ba5b2df50866c062671/FB_FINAL.jpg",
    "name": "Chipotle&#x27;s Steak Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "1 ½ pounds top sirloin steak, ½-inch thick (about 2 small steaks or 1 large steak)"
          ,"Kosher salt, to taste"
          ,"Freshly ground black pepper, to taste"
          ,"2 canned chipotles in adobo, finely chopped"
          ,"1 tablespoon vegetable oil"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "On a cutting board, season the steak with salt and pepper on both sides."
        }
        ,{
          "@type": "HowToStep",
          "text": "Place the steak in a zip-top bag and add the chipotle peppers, then toss to coat."
        }
        ,{
          "@type": "HowToStep",
          "text": "Refrigerate for at least 2 hours, up to overnight."
        }
        ,{
          "@type": "HowToStep",
          "text": "Heat the oil in a large skillet over medium-high heat."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the steak to the pan and cook for 5 minutes per side."
        }
        ,{
          "@type": "HowToStep",
          "text": "Remove the steak from the pan and rest on a cutting board for 10 minutes. Cut into bite-size pieces."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "4 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "90",
      "ratingCount": "95",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Pan Fry",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "268 calories",
      "carbohydrateContent":  "1 grams",
      "fatContent":  "18 grams",
      "fiberContent": "0 grams",
      "proteinContent": "22 grams",
      "sugarContent": "0 grams"
    },
    "recipeCategory": "Dinner",
    "recipeCuisine": "Fusion",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/103338/landscape_720/1532710728",
      "description": "Here's what you need: top sirloin steak, kosher salt, freshly ground black pepper, chipotle pepper in adobo sauce, vegetable oil",
      "duration": "PT03M02S",
      "name": "Chipotle&#x27;s Steak Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/e313a417aa564ba5b2df50866c062671/FB_FINAL.jpg",
      "uploadDate": "2018-07-27T15:25:18"
    }]
  },

  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Jody Duits"
      }
    ],
    "datePublished": "2017-04-26T19:47:58",
    "description": "Here's what you need: yellow onion, red bell pepper, yellow bell pepper, green bell pepper, flank steak, taco seasoning, garlic, lime, diced tomato with green chilli, flour tortilla, fresh cilantro, cotija cheese",
    "image": "https://img.buzzfeed.com/video-api-prod/assets/74d9ee5022d54d4c9b99545bfdd1ca40/fb5.jpg",
    "name": "Slow-Cooker Steak Fajitas Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "1 yellow onion, sliced"
          ,"1 red pepper, sliced"
          ,"1 yellow pepper, sliced"
          ,"1 green pepper, sliced"
          ,"1½ pound flank steak"
          ,"2 tablespoon taco seasoning*"
          ,"4 cloves garlic, minced"
          ,"1 lime, juiced"
          ,"1 10-ounce can diced tomatoes with green chiles, drained"
          ,"Flour or corn tortillas"
          ,"Cilantro, for garnish (optional)"
          ,"Cotija, for garnish (optional)"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "Place onions, peppers, and whole flank steak in the slow cooker. Top with taco seasoning, garlic, lime, and diced tomatoes."
        }
        ,{
          "@type": "HowToStep",
          "text": "Cover and cook on high for 4 hours or on low for 8 hours."
        }
        ,{
          "@type": "HowToStep",
          "text": "Remove steak from the slow cooker."
        }
        ,{
          "@type": "HowToStep",
          "text": "Optional: broil steak for 4-5 minutes until crisp for added texture."
        }
        ,{
          "@type": "HowToStep",
          "text": "Slice steak across the grain into thin strips."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the steak back into the slow cooker and combine with other ingredients."
        }
        ,{
          "@type": "HowToStep",
          "text": "Plate with tortillas of your choice and garnish with cilantro and cotija (optional)."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "4 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "97",
      "ratingCount": "133",
      "bestRating": "100",
      "worstRating": "0"
    },
    "keywords": "dinner, easy, fajitas, fast, food, meal prep, mexican, peppers, recipe, slow cooker, steak, tasty, veggies",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "245 calories",
      "carbohydrateContent":  "6 grams",
      "fatContent":  "9 grams",
      "fiberContent": "1 grams",
      "proteinContent": "32 grams",
      "sugarContent": "3 grams"
    },
    "recipeCategory": "Dinner",
    "recipeCuisine": "Fusion",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/26780/mp4_720x1280/1489711827",
      "description": "Here's what you need: yellow onion, red bell pepper, yellow bell pepper, green bell pepper, flank steak, taco seasoning, garlic, lime, diced tomato with green chilli, flour tortilla, fresh cilantro, cotija cheese",
      "duration": "PT00M55S",
      "name": "Slow-Cooker Steak Fajitas Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/74d9ee5022d54d4c9b99545bfdd1ca40/fb5.jpg",
      "uploadDate": "2017-04-26T19:47:58"
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
    "datePublished": "2018-09-19T15:50:25",
    "description": "Here's what you need: dry corn husk, hot water, roma tomato, small white onion, dried guajillo chile, dried pasilla chile, garlic, water, salt, pepper, ground cumin, canola oil, pork shoulder, baking soda, baking powder, lard, fresh corn masa, salsa verde",
    "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/c3dcbf8204bb4a508f0b3438cf8a7d6c/tamalesfinalFB.jpg",
    "name": "Mexican Red Pork Tamales As Made By Edna Peredia Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "1 bag of dry corn husks"
          ,"Hot water, for soaking"
          ,"2 Roma tomatoes"
          ,"½ small white onion"
          ,"2 dried guajillo chiles"
          ,"2 dried pasilla chiles"
          ,"2 cloves garlic"
          ,"4 cups plus 1 tablespoon water, divided"
          ,"2 teaspoons salt, plus more to taste"
          ,"Pepper, to taste"
          ,"½ tablespoon ground cumin"
          ,"2 tablespoons canola oil"
          ,"3 pounds pork shoulder, cubed"
          ,"1 teaspoon baking soda"
          ,"1 teaspoon baking powder"
          ,"¾ cup lard"
          ,"2 pounds fresh corn masa"
          ,"Salsa verde, for serving"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "Place the dry corn husks in a baking dish. Pour hot water over the husks to cover. Weigh the husks down so they are completely submerged and let soak for 2 hours, or until pliable."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the tomatoes, onion, guajillos, pasillas, garlic, and 4 cups (960 ml) of water to a small pot. Cover, bring to a boil, and cook for 10 minutes, or until the vegetables have softened."
        }
        ,{
          "@type": "HowToStep",
          "text": "Transfer the vegetables to a blender, Add salt and pepper to taste, the cumin, and about ½ cup (60 ml) of the cooking liquid. Blend until smooth. Set aside."
        }
        ,{
          "@type": "HowToStep",
          "text": "Heat the canola oil in a large skillet over medium-high heat. Add the pork and season with salt and pepper. Fry the pork until well-browned and most of the fat has evaporated. Drain any excess fat, if necessary."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the sauce to the pan with the pork, bring to a boil, cover, and let simmer until tender, about 1 hour. Remove from the heat and let cool."
        }
        ,{
          "@type": "HowToStep",
          "text": "In a small bowl, combine the baking soda, baking powder, and 1 tablespoon water. Stir to dissolve, then set aside."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the lard to a large bowl. With an electric hand mixer, whip the lard until light and fluffy, about 5 minutes."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the masa and baking soda mixture and mix with your hands until smooth, about 5 minutes. It should be spreadable but still hold its shape."
        }
        ,{
          "@type": "HowToStep",
          "text": "Drain the soaked corn husks."
        }
        ,{
          "@type": "HowToStep",
          "text": "Place 1 husk on a clean surface and add 1-2 tablespoons of masa to the center of the husk. Spread with the back of the spoon to about ¼ inch (¾ cm) from the edges."
        }
        ,{
          "@type": "HowToStep",
          "text": "Place 1 tablespoon of meat in the center. Roll the corn husk over the filling from left to right and fold the top down to create a little pocket. Set aside. Repeat with the remaining ingredients."
        }
        ,{
          "@type": "HowToStep",
          "text": "Place the tamales, open ends up, in a steamer basket set over a large pot of boiling water. Cover with a clean kitchen towel and the lid. Let steam for 1 hour, then turn off the heat and let the tamales rest for 1 hour more."
        }
        ,{
          "@type": "HowToStep",
          "text": "Unwrap the tamales and serve with salsa verde."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "16 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "94",
      "ratingCount": "32",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Steam",
    "keywords": "baking, best, best ever, buzzfeed, chef, classic, cook, cooking, dominican, dominican republic, easy, easy recipes, food, guatemala, guatemalan, hhm, how to, how to bake, how to cook, latin, latin food, matthew francis, matthew francis johnson, matthew johnson, mexican, mexico, paches, pastel, pastel en hoja, pasteles, pasteles de yuca, perfect, plantains, potato, puerto rican, puerto rico, quick and easy, recipe, recipes, tamal, tamales, tamales recipe, tasty, ultimate, yuca, yum, yummy",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "485 calories",
      "carbohydrateContent":  "45 grams",
      "fatContent":  "24 grams",
      "fiberContent": "5 grams",
      "proteinContent": "21 grams",
      "sugarContent": "0 grams"
    },
    "recipeCategory": "Dinner",
    "recipeCuisine": "Mexican",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/109686/landscape_720/1537463153",
      "description": "Here's what you need: dry corn husk, hot water, roma tomato, small white onion, dried guajillo chile, dried pasilla chile, garlic, water, salt, pepper, ground cumin, canola oil, pork shoulder, baking soda, baking powder, lard, fresh corn masa, salsa verde",
      "duration": "PT09M27S",
      "name": "Mexican Red Pork Tamales As Made By Edna Peredia Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/c3dcbf8204bb4a508f0b3438cf8a7d6c/tamalesfinalFB.jpg",
      "uploadDate": "2018-09-19T15:50:25"
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
    "datePublished": "2017-04-26T19:45:54",
    "description": "Here's what you need: chicken breast, white rum, fresh mint, garlic, rock salt, ground pepper, lime, extra virgin olive oil",
    "image": "https://img.buzzfeed.com/video-api-prod/assets/146af612081a4410b70f7e5586c68977/BFV7137_Mojito-Marinated_Chicken_THUMB_A.jpg",
    "name": "Mojito-Marinated Chicken Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "3-4 Chicken Breasts"
          ,"75ml white rum"
          ,"15g mint (chopped)"
          ,"1 clove garlic (finely chopped/crushed)"
          ,"1 tsp rock salt"
          ,"1 tsp ground pepper"
          ,"2 limes (plus 1-2 more for garnish)"
          ,"1 tbsp extra virgin olive oil"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "Slice the chicken breasts in half lengthways."
        }
        ,{
          "@type": "HowToStep",
          "text": "Put all of the ingredients into a ziplock bag and stir them all about so everything is coated and mixed up."
        }
        ,{
          "@type": "HowToStep",
          "text": "Marinate for at least 4 hours, but try to leave them over night if you have the time."
        }
        ,{
          "@type": "HowToStep",
          "text": "Cook the chicken as you usually would, we used a griddle pan on a medium heat for about 6-7 minutes on each side, but these can go in a regular pan, the oven or even on the BBQ!"
        }
        ,{
          "@type": "HowToStep",
          "text": "Don’t forget to give it one last squeeze of lemon juice to give it that extra kick!"
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "4 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "88",
      "ratingCount": "25",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Pan Fry",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "274 calories",
      "carbohydrateContent":  "4 grams",
      "fatContent":  "7 grams",
      "fiberContent": "1 grams",
      "proteinContent": "35 grams",
      "sugarContent": "0 grams"
    },
    "recipeCategory": "Dinner",
    "recipeCuisine": "Fusion",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/32192/mp4_720x1280/1495125454",
      "description": "Here's what you need: chicken breast, white rum, fresh mint, garlic, rock salt, ground pepper, lime, extra virgin olive oil",
      "duration": "PT00M38S",
      "name": "Mojito-Marinated Chicken Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/146af612081a4410b70f7e5586c68977/BFV7137_Mojito-Marinated_Chicken_THUMB_A.jpg",
      "uploadDate": "2017-04-26T19:45:54"
    }]
  }, 

  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Cyrus Kowsari"
      }
    ],
    "datePublished": "2018-04-19T22:39:09",
    "description": "Here's what you need: olive oil, medium tomato, scallions, medium white onion, garlic, salt, chicken, yucca, mozzarella cheese, vegetable oil",
    "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/6bbee9b0450c41dd8a524a84c7a70e18/FINALFINALemp.jpg",
    "name": "Chicken Yucca Empanada Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "Olive oil"
          ,"1 medium tomato, chopped"
          ,"5 scallions, chopped"
          ,"1/2 medium white onion, chopped"
          ,"8 cloves garlic"
          ,"Salt, to taste"
          ,"1 pound cooked chicken, shredded"
          ,"8 cups yucca, cooked"
          ,"6 slices mozzarella cheese, halved"
          ,"3 cups vegetable oil, for frying"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "Heat the olive oil in a large pan over medium heat until shimmering. Add the tomato, scallions, onion, garlic, and salt, and cook, stirring occasionally."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the chicken, and cook for 5 minutes or until the chicken is warmed through."
        }
        ,{
          "@type": "HowToStep",
          "text": "For the dough, mash the cooked yucca with a fork in a large bowl."
        }
        ,{
          "@type": "HowToStep",
          "text": "Roll a 4-inch (10-cm) ball of yucca and place in the center of a piece of plastic wrap. Add another piece of plastic wrap over the dough and flatten to create a small circle.  Roll out to a 6-inch (15-cm) round."
        }
        ,{
          "@type": "HowToStep",
          "text": "Scoop 3 tablespoons of the chicken mixture onto the dough and add a couple of pieces of mozzarella over the chicken mixture. Fold over the dough to form an empanada and seal the edges. Repeat with the rest of the dough and filling."
        }
        ,{
          "@type": "HowToStep",
          "text": "Heat 2 inches (5 cm) of oil in a large pan over high heat to 350ºF (180ºC). Place the empanadas in the oil and cook for 2-3 minutes or until brown on both sides."
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
      "ratingCount": "13",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Pan Fry",
    "recipeCategory": "Dinner",
    "recipeCuisine": "Mexican",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/90709/landscape_720/1524514253",
      "description": "Here's what you need: olive oil, medium tomato, scallions, medium white onion, garlic, salt, chicken, yucca, mozzarella cheese, vegetable oil",
      "duration": "PT03M52S",
      "name": "Chicken Yucca Empanada Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/6bbee9b0450c41dd8a524a84c7a70e18/FINALFINALemp.jpg",
      "uploadDate": "2018-04-19T22:39:09"
    }]
  },

  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Alix Traeger"
      }
    ],
    "datePublished": "2018-09-26T17:32:16",
    "description": "Here's what you need: instant corn masa flour, water, dried california chile, salt, garlic, medium tomato, dried oregano, skirt steak, all-purpose meat seasoning, corn oil, refried beans, iceberg lettuce, mexican crema, queso fresco",
    "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/180575.jpg",
    "name": "Mexican Sopes Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "1 cup instant corn masa flour"
          ,"1 cup water"
          ,"4 dried California chiles"
          ,"2½ teaspoons salt, divided"
          ,"1 clove garlic"
          ,"4 medium tomatoes"
          ,"½ teaspoon dried oregano"
          ,"½ pound skirt steak (carne asada)"
          ,"½ teaspoon all-purpose meat seasoning"
          ,"2 cups corn oil"
          ,"Refried beans, for serving"
          ,"Shredded iceberg lettuce, for serving"
          ,"Mexican crema, for serving"
          ,"Queso fresco, for serving"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "In a medium bowl, mix the masa flour and ½ cup (120 ml) of water together with your hands. Once combined, add the rest of the water and knead until the dough forms a smooth ball."
        }
        ,{
          "@type": "HowToStep",
          "text": "Heat a large pan or griddle over medium-high heat."
        }
        ,{
          "@type": "HowToStep",
          "text": "Pat the dough out into 6 flat circles."
        }
        ,{
          "@type": "HowToStep",
          "text": "Fry the dough, turning frequently, until just lightly brown about 5 minutes."
        }
        ,{
          "@type": "HowToStep",
          "text": "Once the dough is cooked, shape the sopes by pinching the sides up to form a wall around the edge. Set aside to cool."
        }
        ,{
          "@type": "HowToStep",
          "text": "Rip the stems off the dried chiles and discard the seeds. Rinse the chiles, if necessary."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the chiles to a small pot of water and bring to a boil over high heat. Once boiling, remove the pot from the heat."
        }
        ,{
          "@type": "HowToStep",
          "text": "Transfer the chiles and their cooking liquid to a blender and add 1 teaspoon of salt and the garlic. Blend until smooth. Set aside."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the tomatoes to a small pot of water and bring to a boil. Cook until the tomato skins split, then remove from the heat and drain, reserving ½ cup (120 ml) of the tomato water."
        }
        ,{
          "@type": "HowToStep",
          "text": "Transfer the tomatoes to a blender with the reserved cooking liquid, oregano, and ½ teaspoon of salt. Blend until smooth. Set aside."
        }
        ,{
          "@type": "HowToStep",
          "text": "Heat a large pan or griddle over medium-high heat. Add the skirt steak and season with the meat seasoning and remaining teaspoon of salt. Cook the meat, flipping frequently until seared and cooked through, about 10 minutes."
        }
        ,{
          "@type": "HowToStep",
          "text": "Transfer the meat to a cutting board and cut into small pieces. Set aside."
        }
        ,{
          "@type": "HowToStep",
          "text": "Heat the corn oil in a deep, large pan over high heat."
        }
        ,{
          "@type": "HowToStep",
          "text": "Dip the sopes in the chile sauce, turning to coat completely."
        }
        ,{
          "@type": "HowToStep",
          "text": "Once the oil is hot, fry the sopes, flipping frequently, until golden brown, about 5 minutes. Drain the sopes on paper towels or a wire rack."
        }
        ,{
          "@type": "HowToStep",
          "text": "To serve, fill the sopes with refried beans, carne asada, shredded lettuce, tomato sauce, Mexican crema, and queso fresco."
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
      "ratingCount": "83",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Pan Fry",
    "keywords": "buzzfeed, carne asada, chile, corn, daughter, dinner, hispanic heritage month, lunch, masa, mexican, mexico, mom, mother, sopes, steak, tasty , tomato",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "493 calories",
      "carbohydrateContent":  "21 grams",
      "fatContent":  "40 grams",
      "fiberContent": "4 grams",
      "proteinContent": "13 grams",
      "sugarContent": "2 grams"
    },
    "recipeCategory": "Dinner",
    "recipeCuisine": "Mexican",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/110671/landscape_720/1538095109",
      "description": "Here's what you need: instant corn masa flour, water, dried california chile, salt, garlic, medium tomato, dried oregano, skirt steak, all-purpose meat seasoning, corn oil, refried beans, iceberg lettuce, mexican crema, queso fresco",
      "duration": "PT03M04S",
      "name": "Mexican Sopes Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/180575.jpg",
      "uploadDate": "2018-09-26T17:32:16"
    }]
  }, 

  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Quinton Washington"
      }
    ],
    "datePublished": "2017-12-14T20:41:54",
    "description": "Here's what you need: russet potato, skirt steak, olive oil, salt, pepper, paprika, shredded cheddar cheese, shredded monterey jack cheese, sour cream, salsa, green onion",
    "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/58f5ac42d8424b009038f2ba425341d7/BFV34496Tasty-Facebook-1080x1080Final1.jpg",
    "name": "Steak And Potato Nachos Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "2 russet potatoes, sliced"
          ,"1 pound skirt steak"
          ,"4 Tbsp. olive oil"
          ,"Salt (to taste)"
          ,"Pepper (to taste)"
          ,"2 tsp paprika"
          ,"1 cup shredded cheddar cheese"
          ,"½ cup shredded Monterey jack cheese"
          ,"Sour cream"
          ,"Salsa (optional)"
          ,"2 minced green onions"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "Place sliced potatoes in a large bowl. Toss with olive oil, salt, pepper, and paprika."
        }
        ,{
          "@type": "HowToStep",
          "text": "Lay the potatoes on a baking sheet and bake at 450˚F (230˚C) for 20 minutes."
        }
        ,{
          "@type": "HowToStep",
          "text": "Season skirt steak with salt and pepper. Cook on high heat for roughly three minutes each side, for medium-rare."
        }
        ,{
          "@type": "HowToStep",
          "text": "Let the steak rest for 10 minutes, then slice into cubes."
        }
        ,{
          "@type": "HowToStep",
          "text": "In a cast iron skillet or baking sheet, arrange cooked potatoes into a heap. Top with steak, then cheddar and monterey jack cheese. "
        }
        ,{
          "@type": "HowToStep",
          "text": "Broil for five minutes or until the cheese is melted."
        }
        ,{
          "@type": "HowToStep",
          "text": "Serve immediately with sour cream, salsa, green onions or any topping of choice."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "3 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "96",
      "ratingCount": "252",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Bake",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "766 calories",
      "carbohydrateContent":  "15 grams",
      "fatContent":  "52 grams",
      "fiberContent": "1 grams",
      "proteinContent": "58 grams",
      "sugarContent": "1 grams"
    },
    "recipeCategory": "Dinner",
    "recipeCuisine": "Fusion",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/68100/landscape_720/1513283473",
      "description": "Here's what you need: russet potato, skirt steak, olive oil, salt, pepper, paprika, shredded cheddar cheese, shredded monterey jack cheese, sour cream, salsa, green onion",
      "duration": "PT04M08S",
      "name": "Steak And Potato Nachos Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/58f5ac42d8424b009038f2ba425341d7/BFV34496Tasty-Facebook-1080x1080Final1.jpg",
      "uploadDate": "2017-12-14T20:41:54"
    }]
  },

  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Alvin Zhou"
      }
    ],
    "datePublished": "2017-09-18T13:49:34",
    "description": "Here's what you need: boneless pork shoulder, achiote paste, guajillo chili powder, garlic powder, dried oregano, cumin, salt, pepper, white vinegar, pineapple juice, pineapple, small corn tortilla, white onion, fresh cilantro, salsa, avocado, lime, thick wooden skewer",
    "image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
    "name": "Mexican-style Pork Tacos (Tacos Al Pastor) Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "5 pounds boneless pork shoulder"
          ,"3 tablespoons achiote paste"
          ,"2 tablespoons guajillo chili powder"
          ,"1 tablespoon garlic powder"
          ,"1 tablespoon oregano"
          ,"1 tablespoon cumin"
          ,"1 tablespoon salt"
          ,"1 tablespoon pepper"
          ,"¾ cup white vinegar"
          ,"1 cup pineapple juice"
          ,"1 pineapple, skinned and sliced into 1-inch rounds"
          ,"10-12 small corn tortillas"
          ,"1 white onion, chopped finely"
          ,"1 cup cilantro, chopped finely"
          ,"1 cup salsa of your choice"
          ,"n/a"
          ,"n/a"
          ,"1 thick wooden skewer, trimmed to the height of your oven"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "Slice the pork shoulder into about 1-centimeter (¼ in) slices, then transfer to a large dish or bowl. In a medium bowl, combine the achiote paste, chili powder, garlic powder, oregano, cumin, salt, pepper, vinegar, and pineapple juice, mashing and stirring until smooth with no lumps. Pour the marinade over the pork slices, then toss to make sure they are coated on all sides. Cover the bowl with plastic wrap, then refrigerate for at least 2 hours or up to 3 days."
        }
        ,{
          "@type": "HowToStep",
          "text": "Preheat the oven to 350°F (180°C). Line a baking sheet with parchment paper or aluminum foil."
        }
        ,{
          "@type": "HowToStep",
          "text": "Place a slice or two of the pineapple on the baking sheet. Take a wooden skewer and push it directly in the middle of the pineapple. Remove the pork from the fridge and push the slices through the skewer, layering one after the other until there is a 1-inch (2 ½ cm) gap at the top. Push another pineapple slice on top."
        }
        ,{
          "@type": "HowToStep",
          "text": "Bake for about 1½ hours, until the pork is slightly charred on the outside and deep red. Rest the meat for about 10 minutes, then carve off thin slices of pork and roasted pineapple."
        }
        ,{
          "@type": "HowToStep",
          "text": "To assemble, place some pork on the tortillas, followed by a few pieces of pineapple, a sprinkling of onion, a pinch of cilantro, and a spoonful of salsa, and some diced avocado. Serve with lime wedges."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "10 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "98",
      "ratingCount": "195",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Bake",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "537 calories",
      "carbohydrateContent":  "19 grams",
      "fatContent":  "30 grams",
      "fiberContent": "3 grams",
      "proteinContent": "47 grams",
      "sugarContent": "3 grams"
    },
    "recipeCategory": "Dinner",
    "recipeCuisine": "Mexican",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/11642/mp4_720x1280/1475864011",
      "description": "Here's what you need: boneless pork shoulder, achiote paste, guajillo chili powder, garlic powder, dried oregano, cumin, salt, pepper, white vinegar, pineapple juice, pineapple, small corn tortilla, white onion, fresh cilantro, salsa, avocado, lime, thick wooden skewer",
      "duration": "PT00M00S",
      "name": "Mexican-style Pork Tacos (Tacos Al Pastor) Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
      "uploadDate": "2017-09-18T13:49:34"
    }]
  },

  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Alvin Zhou"
      }
    ],
    "datePublished": "2017-09-18T13:49:34",
    "description": "Here's what you need: boneless pork shoulder, achiote paste, guajillo chili powder, garlic powder, dried oregano, cumin, salt, pepper, white vinegar, pineapple juice, pineapple, small corn tortilla, white onion, fresh cilantro, salsa, avocado, lime, thick wooden skewer",
    "image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
    "name": "Mexican-style Pork Tacos (Tacos Al Pastor) Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "5 pounds boneless pork shoulder"
          ,"3 tablespoons achiote paste"
          ,"2 tablespoons guajillo chili powder"
          ,"1 tablespoon garlic powder"
          ,"1 tablespoon oregano"
          ,"1 tablespoon cumin"
          ,"1 tablespoon salt"
          ,"1 tablespoon pepper"
          ,"¾ cup white vinegar"
          ,"1 cup pineapple juice"
          ,"1 pineapple, skinned and sliced into 1-inch rounds"
          ,"10-12 small corn tortillas"
          ,"1 white onion, chopped finely"
          ,"1 cup cilantro, chopped finely"
          ,"1 cup salsa of your choice"
          ,"n/a"
          ,"n/a"
          ,"1 thick wooden skewer, trimmed to the height of your oven"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "Slice the pork shoulder into about 1-centimeter (¼ in) slices, then transfer to a large dish or bowl. In a medium bowl, combine the achiote paste, chili powder, garlic powder, oregano, cumin, salt, pepper, vinegar, and pineapple juice, mashing and stirring until smooth with no lumps. Pour the marinade over the pork slices, then toss to make sure they are coated on all sides. Cover the bowl with plastic wrap, then refrigerate for at least 2 hours or up to 3 days."
        }
        ,{
          "@type": "HowToStep",
          "text": "Preheat the oven to 350°F (180°C). Line a baking sheet with parchment paper or aluminum foil."
        }
        ,{
          "@type": "HowToStep",
          "text": "Place a slice or two of the pineapple on the baking sheet. Take a wooden skewer and push it directly in the middle of the pineapple. Remove the pork from the fridge and push the slices through the skewer, layering one after the other until there is a 1-inch (2 ½ cm) gap at the top. Push another pineapple slice on top."
        }
        ,{
          "@type": "HowToStep",
          "text": "Bake for about 1½ hours, until the pork is slightly charred on the outside and deep red. Rest the meat for about 10 minutes, then carve off thin slices of pork and roasted pineapple."
        }
        ,{
          "@type": "HowToStep",
          "text": "To assemble, place some pork on the tortillas, followed by a few pieces of pineapple, a sprinkling of onion, a pinch of cilantro, and a spoonful of salsa, and some diced avocado. Serve with lime wedges."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "10 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "98",
      "ratingCount": "195",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Bake",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "537 calories",
      "carbohydrateContent":  "19 grams",
      "fatContent":  "30 grams",
      "fiberContent": "3 grams",
      "proteinContent": "47 grams",
      "sugarContent": "3 grams"
    },
    "recipeCategory": "Dinner",
    "recipeCuisine": "Mexican",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/11642/mp4_720x1280/1475864011",
      "description": "Here's what you need: boneless pork shoulder, achiote paste, guajillo chili powder, garlic powder, dried oregano, cumin, salt, pepper, white vinegar, pineapple juice, pineapple, small corn tortilla, white onion, fresh cilantro, salsa, avocado, lime, thick wooden skewer",
      "duration": "PT00M00S",
      "name": "Mexican-style Pork Tacos (Tacos Al Pastor) Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
      "uploadDate": "2017-09-18T13:49:34"
    }]
  },

  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Alvin Zhou"
      }
    ],
    "datePublished": "2017-09-18T13:49:34",
    "description": "Here's what you need: boneless pork shoulder, achiote paste, guajillo chili powder, garlic powder, dried oregano, cumin, salt, pepper, white vinegar, pineapple juice, pineapple, small corn tortilla, white onion, fresh cilantro, salsa, avocado, lime, thick wooden skewer",
    "image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
    "name": "Mexican-style Pork Tacos (Tacos Al Pastor) Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "5 pounds boneless pork shoulder"
          ,"3 tablespoons achiote paste"
          ,"2 tablespoons guajillo chili powder"
          ,"1 tablespoon garlic powder"
          ,"1 tablespoon oregano"
          ,"1 tablespoon cumin"
          ,"1 tablespoon salt"
          ,"1 tablespoon pepper"
          ,"¾ cup white vinegar"
          ,"1 cup pineapple juice"
          ,"1 pineapple, skinned and sliced into 1-inch rounds"
          ,"10-12 small corn tortillas"
          ,"1 white onion, chopped finely"
          ,"1 cup cilantro, chopped finely"
          ,"1 cup salsa of your choice"
          ,"n/a"
          ,"n/a"
          ,"1 thick wooden skewer, trimmed to the height of your oven"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "Slice the pork shoulder into about 1-centimeter (¼ in) slices, then transfer to a large dish or bowl. In a medium bowl, combine the achiote paste, chili powder, garlic powder, oregano, cumin, salt, pepper, vinegar, and pineapple juice, mashing and stirring until smooth with no lumps. Pour the marinade over the pork slices, then toss to make sure they are coated on all sides. Cover the bowl with plastic wrap, then refrigerate for at least 2 hours or up to 3 days."
        }
        ,{
          "@type": "HowToStep",
          "text": "Preheat the oven to 350°F (180°C). Line a baking sheet with parchment paper or aluminum foil."
        }
        ,{
          "@type": "HowToStep",
          "text": "Place a slice or two of the pineapple on the baking sheet. Take a wooden skewer and push it directly in the middle of the pineapple. Remove the pork from the fridge and push the slices through the skewer, layering one after the other until there is a 1-inch (2 ½ cm) gap at the top. Push another pineapple slice on top."
        }
        ,{
          "@type": "HowToStep",
          "text": "Bake for about 1½ hours, until the pork is slightly charred on the outside and deep red. Rest the meat for about 10 minutes, then carve off thin slices of pork and roasted pineapple."
        }
        ,{
          "@type": "HowToStep",
          "text": "To assemble, place some pork on the tortillas, followed by a few pieces of pineapple, a sprinkling of onion, a pinch of cilantro, and a spoonful of salsa, and some diced avocado. Serve with lime wedges."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "10 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "98",
      "ratingCount": "195",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Bake",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "537 calories",
      "carbohydrateContent":  "19 grams",
      "fatContent":  "30 grams",
      "fiberContent": "3 grams",
      "proteinContent": "47 grams",
      "sugarContent": "3 grams"
    },
    "recipeCategory": "Dinner",
    "recipeCuisine": "Mexican",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/11642/mp4_720x1280/1475864011",
      "description": "Here's what you need: boneless pork shoulder, achiote paste, guajillo chili powder, garlic powder, dried oregano, cumin, salt, pepper, white vinegar, pineapple juice, pineapple, small corn tortilla, white onion, fresh cilantro, salsa, avocado, lime, thick wooden skewer",
      "duration": "PT00M00S",
      "name": "Mexican-style Pork Tacos (Tacos Al Pastor) Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
      "uploadDate": "2017-09-18T13:49:34"
    }
    ]}
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
        theRecipe.cuisine = eachObject.recipeCuisine;
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
  
  
  printRecipe(mexicandinner);
  
  // console.log('--------------------------------------------------------',recipes);


  Recipe.create(recipes)
  .then((e) =>{
    console.log("Yay");
  })