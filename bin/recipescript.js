const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');



mongoose
  .connect("mongodb://heroku_v1gjh92s:hk4dn8sqclhf404l7gitmhejrk@ds139735.mlab.com:39735/heroku_v1gjh92s", { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


let chineselunch = [
  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Ellie Holland"
      }
    ],
    "datePublished": "2017-07-11T00:53:14",
    "description": "Here's what you need: beef, salt, pepper, chinese 5 spice, garlic, red chili, chili sauce, soy sauce, noodle, red chilli, spring onion",
    "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/7507e2098b0c426198537d7649bf1dd4/BFV12924_EasyNoodles4Ways-FB1080SQ.jpg",
    "name": "Chili Beef Noodles Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
      "250 grams beef"
      , "1 teaspoon salt"
      , "½ teaspoon pepper"
      , "1 tablespoon Chinese 5 spice"
      , "3 cloves garlic"
      , "1 red chilli"
      , "2 tablespoons chilli sauce"
      , "2 tablespoons soy sauce"
      , "250 grams noodles"
      , "Red chilli"
      , "Spring onions"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Fry the beef for a couple of minutes with the salt, pepper, and 5 spice. Take out and set aside."
      }
      , {
        "@type": "HowToStep",
        "text": "In the same pan, fry the garlic and red chili for a few minutes before stirring in the chili sauce and soy sauce."
      }
      , {
        "@type": "HowToStep",
        "text": "Add the beef and noodles. Mix together for another couple of minutes."
      }
      , {
        "@type": "HowToStep",
        "text": "Serve with some red chili and spring onions."
      }
      , {
        "@type": "HowToStep",
        "text": "Enjoy!"
      }
    ],
    "recipeYield": "4 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "93",
      "ratingCount": "249",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Pan Fry",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "426 calories",
      "carbohydrateContent": "47 grams",
      "fatContent": "13 grams",
      "fiberContent": "2 grams",
      "proteinContent": "26 grams",
      "sugarContent": "2 grams"
    },
    "recipeCategory": "Lunch",
    "recipeCuisine": "Fusion",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/11272/mp4_720x1280/1475518362",
      "description": "Here's what you need: beef, salt, pepper, chinese 5 spice, garlic, red chili, chili sauce, soy sauce, noodle, red chilli, spring onion",
      "duration": "PT00M00S",
      "name": "Chili Beef Noodles Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/7507e2098b0c426198537d7649bf1dd4/BFV12924_EasyNoodles4Ways-FB1080SQ.jpg",
      "uploadDate": "2017-07-11T00:53:14"
    }]
  },

  {
    "@context": "http://schema.org",
    "@type": "VideoObject",
    "contentUrl": "https://vid.tasty.co/output/11272/mp4_720x1280/1475518362",
    "description": "Here's what you need: beef, salt, pepper, chinese 5 spice, garlic, red chili, chili sauce, soy sauce, noodle, red chilli, spring onion",
    "name": "Chili Beef Noodles Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tasty.co/favicon.ico"
      }
    },
    "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/7507e2098b0c426198537d7649bf1dd4/BFV12924_EasyNoodles4Ways-FB1080SQ.jpg",
    "uploadDate": "2017-07-11T00:53:14",
    "duration": "PT00M00S"

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
    "datePublished": "2017-09-20T17:49:23",
    "description": "Here's what you need: rice, water, soy sauce, sesame oil, bacon, frozen pea and carrot, egg, salt, fresh scallion",
    "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/8ddb77f8ad1d483099e0bf36d45c86d4/BFV28873_6MicrowaveMealsHACK.jpg",
    "name": "Microwave “Fried” Rice Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
      "½ cup rice"
      , "1 cup water"
      , "1 tablespoon soy sauce"
      , "1 teaspoon sesame oil"
      , "2 strips bacon, chopped"
      , "½ cup frozen peas and carrots"
      , "2 eggs"
      , "Salt, to taste"
      , "Scallions, to garnish"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "In a bowl, combine the rice, water, soy sauce, sesame oil, and bacon. Stir, then microwave, covered, for about 6-8 minutes until the rice is fully cooked."
      }
      , {
        "@type": "HowToStep",
        "text": "Mix the frozen peas and carrots into the rice."
      }
      , {
        "@type": "HowToStep",
        "text": "In a microwaveable mug, beat the eggs with the salt."
      }
      , {
        "@type": "HowToStep",
        "text": "Microwave the eggs and the rice again for about 1-2 minutes, until the eggs are fully cooked."
      }
      , {
        "@type": "HowToStep",
        "text": "Break up the egg into small bits, then mix it in with the rice."
      }
      , {
        "@type": "HowToStep",
        "text": "Garnish with scallions, then serve!"
      }
      , {
        "@type": "HowToStep",
        "text": "Enjoy!"
      }
    ],
    "recipeYield": "1 serving",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "88",
      "ratingCount": "40",
      "bestRating": "100",
      "worstRating": "0"
    },
    "keywords": "7 microwave meals",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "781 calories",
      "carbohydrateContent": "40 grams",
      "fatContent": "44 grams",
      "fiberContent": "3 grams",
      "proteinContent": "49 grams",
      "sugarContent": "3 grams"
    },
    "recipeCategory": "Lunch",
    "recipeCuisine": "Fusion",
    "totalTime": "PT30M",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/52822/mp4_720x1280/1505933071",
      "description": "Here's what you need: rice, water, soy sauce, sesame oil, bacon, frozen pea and carrot, egg, salt, fresh scallion",
      "duration": "PT05M10S",
      "name": "Microwave “Fried” Rice Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/8ddb77f8ad1d483099e0bf36d45c86d4/BFV28873_6MicrowaveMealsHACK.jpg",
      "uploadDate": "2017-09-20T17:49:23"
    }]
  },

  {
    "@context": "http://schema.org",
    "@type": "VideoObject",
    "contentUrl": "https://vid.tasty.co/output/52822/mp4_720x1280/1505933071",
    "description": "Here's what you need: rice, water, soy sauce, sesame oil, bacon, frozen pea and carrot, egg, salt, fresh scallion",
    "name": "Microwave “Fried” Rice Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tasty.co/favicon.ico"
      }
    },
    "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/8ddb77f8ad1d483099e0bf36d45c86d4/BFV28873_6MicrowaveMealsHACK.jpg",
    "uploadDate": "2017-09-20T17:49:23",
    "duration": "PT05M10S"

  },
  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Ellie Holland"
      }
    ],
    "datePublished": "2017-07-11T00:53:14",
    "description": "Here's what you need: chicken breast, salt, pepper, garlic, red pepper, soy sauce, ketchup, cider vinegar, noodle, sesame seed",
    "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d270d7cf01e143e5bb8efc983cd35519/BFV12924_EasyNoodles4Ways-FB1080SQ.jpg",
    "name": "Sweet-and-sour Chicken Noodles Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
      "2 breasts of chicken"
      , "1 teaspoon salt"
      , "½ teaspoon pepper"
      , "2 cloves garlic"
      , "1 red pepper"
      , "2 tablespoons soy sauce"
      , "1 tablespoon ketchup"
      , "1 tablespoon cider vinegar"
      , "250 grams noodles"
      , "Sesame seeds, to garnish"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Sear the chicken until golden brown in the pan with the salt and pepper. Take out and set aside."
      }
      , {
        "@type": "HowToStep",
        "text": "In the same pan, fry the garlic and red pepper for a couple of minutes before stirring in the soy sauce, ketchup, and vinegar."
      }
      , {
        "@type": "HowToStep",
        "text": "Add the chicken and noodles, and mix together for another couple of minutes."
      }
      , {
        "@type": "HowToStep",
        "text": "Garnish with sesame seeds."
      }
      , {
        "@type": "HowToStep",
        "text": "Enjoy!"
      }
    ],
    "recipeYield": "4 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "93",
      "ratingCount": "255",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Pan Fry",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "373 calories",
      "carbohydrateContent": "46 grams",
      "fatContent": "5 grams",
      "fiberContent": "2 grams",
      "proteinContent": "32 grams",
      "sugarContent": "1 grams"
    },
    "recipeCategory": "Lunch",
    "recipeCuisine": "Fusion",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/11272/mp4_720x1280/1475518362",
      "description": "Here's what you need: chicken breast, salt, pepper, garlic, red pepper, soy sauce, ketchup, cider vinegar, noodle, sesame seed",
      "duration": "PT00M00S",
      "name": "Sweet-and-sour Chicken Noodles Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d270d7cf01e143e5bb8efc983cd35519/BFV12924_EasyNoodles4Ways-FB1080SQ.jpg",
      "uploadDate": "2017-07-11T00:53:14"
    }]
  },

  {
    "@context": "http://schema.org",
    "@type": "VideoObject",
    "contentUrl": "https://vid.tasty.co/output/11272/mp4_720x1280/1475518362",
    "description": "Here's what you need: chicken breast, salt, pepper, garlic, red pepper, soy sauce, ketchup, cider vinegar, noodle, sesame seed",
    "name": "Sweet-and-sour Chicken Noodles Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tasty.co/favicon.ico"
      }
    },
    "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d270d7cf01e143e5bb8efc983cd35519/BFV12924_EasyNoodles4Ways-FB1080SQ.jpg",
    "uploadDate": "2017-07-11T00:53:14",
    "duration": "PT00M00S"

  },
  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Evelyn Liu"
      }
    ],
    "datePublished": "2017-09-28T11:31:49",
    "description": "Here's what you need: pork, salt, corn flour, egg, corn flour, oil, oil, garlic, green bell pepper, red bell pepper, pineapple, white caster sugar, rice vinegar, ketchup",
    "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/aa2dffba333842628649b06c0aad70db/CUT2.jpg",
    "name": "Sweet And Sour Pork Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
      "200 grams pork, chopped into bite size pieces"
      , "1 teaspoon salt"
      , "1 teaspoon corn flour"
      , "1 egg"
      , "100 grams corn flour"
      , "500 milliliters oil"
      , "2 tablespoon oil"
      , "5 grams crushed garlic"
      , "½ green pepper, chopped"
      , "½ red pepper, chopped"
      , "150 grams pineapple"
      , "50 grams white caster sugar"
      , "50 milliliters rice vinegar"
      , "2 tablespoons ketchup"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "In a bowl, combine all marinade ingredients with the pork. Cover and leave to marinade in the fridge 20 minutes."
      }
      , {
        "@type": "HowToStep",
        "text": "Place the corn flour in a large bowl and toss the marinated pork chunks until liberally coated."
      }
      , {
        "@type": "HowToStep",
        "text": "In a medium-sized saucepan, heat the oil to 350˚F (180°C)."
      }
      , {
        "@type": "HowToStep",
        "text": "Deep fry the pork pieces for about 3-4 minutes until the coating is golden brown and the pork is cooked throughout. Set aside."
      }
      , {
        "@type": "HowToStep",
        "text": "For the sauce, place a frying pan over a medium heat and add the oil."
      }
      , {
        "@type": "HowToStep",
        "text": "Sauté the garlic until fragrant, then fry the peppers until soften."
      }
      , {
        "@type": "HowToStep",
        "text": "Add in the pineapple and warm thorough."
      }
      , {
        "@type": "HowToStep",
        "text": "Add the sugar, vinegar, and ketchup, stir. Bring the mixture to a boil."
      }
      , {
        "@type": "HowToStep",
        "text": "Add the pork to the frying pan and coat everything evenly with the sauce."
      }
      , {
        "@type": "HowToStep",
        "text": "Serve top with sesame seeds."
      }
      , {
        "@type": "HowToStep",
        "text": "Nutrition  Calories: 2299 Fat: 220 grams  Carbs: 55 grams Fiber: 3 grams  Sugars: 44 grams  Protein: 35 grams"
      }
      , {
        "@type": "HowToStep",
        "text": "Enjoy!"
      }
    ],
    "recipeYield": "2 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "98",
      "ratingCount": "330",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Pan Fry",
    "keywords": "chinese food, chinese take-away, dinner, sweet and sour, sweet and sour pork",
    "recipeCategory": "Lunch",
    "recipeCuisine": "Chinese",
    "totalTime": "PT30M",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/54479/mp4_720x1280/1506963655",
      "description": "Here's what you need: pork, salt, corn flour, egg, corn flour, oil, oil, garlic, green bell pepper, red bell pepper, pineapple, white caster sugar, rice vinegar, ketchup",
      "duration": "PT01M10S",
      "name": "Sweet And Sour Pork Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/aa2dffba333842628649b06c0aad70db/CUT2.jpg",
      "uploadDate": "2017-09-28T11:31:49"
    }]
  },

  {
    "@context": "http://schema.org",
    "@type": "VideoObject",
    "contentUrl": "https://vid.tasty.co/output/54479/mp4_720x1280/1506963655",
    "description": "Here's what you need: pork, salt, corn flour, egg, corn flour, oil, oil, garlic, green bell pepper, red bell pepper, pineapple, white caster sugar, rice vinegar, ketchup",
    "name": "Sweet And Sour Pork Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tasty.co/favicon.ico"
      }
    },
    "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/aa2dffba333842628649b06c0aad70db/CUT2.jpg",
    "uploadDate": "2017-09-28T11:31:49",
    "duration": "PT01M10S"

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
    "datePublished": "2017-07-12T05:17:09",
    "description": "Here's what you need: garlic, fresh scallion, ginger, brown sugar, roasted sesame seed, rice vinegar, peanut oil, sesame oil, soy sauce",
    "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/eef5f31e0f5049828774617ea4d1ef7b/FB_04.jpg",
    "name": "Garlic Sesame Salad Dressing Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
      "n/a"
      , "2 tablespoons scallion, minced"
      , "1 tablespoon ginger, minced"
      , "¼ cup brown sugar"
      , "1 tablespoon roasted sesame seeds"
      , "½ cup rice vinegar"
      , "½ cup peanut oil"
      , "2 tablespoons sesame oil"
      , "½ cup soy sauce"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Add the ingredients into a mason jar. Screw the lid on tightly and shake vigorously."
      }
      , {
        "@type": "HowToStep",
        "text": "The dressing can remain in the fridge for 1–2 weeks."
      }
      , {
        "@type": "HowToStep",
        "text": "Pour over your favorite salad ingredients and enjoy!"
      }
    ],
    "recipeYield": "16 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "100",
      "ratingCount": "18",
      "bestRating": "100",
      "worstRating": "0"
    },
    "keywords": ", 9 ways, balsamic, buzzfeed, caesar, caeser, catalina, chipotle lime, dressing, easy, garlic ginger sesame, greek, healthy, honey mustard, how to, italian, mason jar, ranch, recipe, salad, salad dressing, shake, summer, tasty, yum",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "100 calories",
      "carbohydrateContent": "5 grams",
      "fatContent": "8 grams",
      "fiberContent": "0 grams",
      "proteinContent": "0 grams",
      "sugarContent": "5 grams"
    },
    "recipeCategory": "Lunch",
    "recipeCuisine": "Chinese",
    "totalTime": "PT30M",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/33775/mp4_720x1280/1497047581",
      "description": "Here's what you need: garlic, fresh scallion, ginger, brown sugar, roasted sesame seed, rice vinegar, peanut oil, sesame oil, soy sauce",
      "duration": "PT02M32S",
      "name": "Garlic Sesame Salad Dressing Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/eef5f31e0f5049828774617ea4d1ef7b/FB_04.jpg",
      "uploadDate": "2017-07-12T05:17:09"
    }]
  },

  {
    "@context": "http://schema.org",
    "@type": "VideoObject",
    "contentUrl": "https://vid.tasty.co/output/33775/mp4_720x1280/1497047581",
    "description": "Here's what you need: garlic, fresh scallion, ginger, brown sugar, roasted sesame seed, rice vinegar, peanut oil, sesame oil, soy sauce",
    "name": "Garlic Sesame Salad Dressing Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tasty.co/favicon.ico"
      }
    },
    "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/eef5f31e0f5049828774617ea4d1ef7b/FB_04.jpg",
    "uploadDate": "2017-07-12T05:17:09",
    "duration": "PT02M32S"

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
    "datePublished": "2017-05-11T21:21:36",
    "description": "Here's what you need: cauliflower florets, sesame oil, carrot, garlic, large shrimp, frozen peas, egg, low sodium soy sauce, white pepper, green onion",
    "image": "https://img.buzzfeed.com/video-api-prod/assets/27f3b1b32760410a91e4b0bbf336bd9a/BFV15715_CauliflowerShrimpFriedRiceThumb.jpg",
    "name": "Cauliflower Shrimp Fried Rice Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
      "3 cups cauliflower florets"
      , "1 teaspoon sesame oil"
      , "3 carrots, diced"
      , "3 cloves garlic, minced"
      , "1 pound large shrimp, peeled and deveined"
      , "1 cup frozen peas, thawed"
      , "2 eggs, beaten"
      , "3 tablespoons low-sodium soy sauce"
      , "½ teaspoon white pepper"
      , "Green onion, for garnish"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Pulse cauliflower in a food processor until broken into rice-sized pieces."
      }
      , {
        "@type": "HowToStep",
        "text": "Heat the sesame oil in a large skillet or wok. Toss in the carrots and sauté until soft, about 5 minutes."
      }
      , {
        "@type": "HowToStep",
        "text": "Add in the garlic and shrimp and sautée until the shrimp begin to turn pink, about 2 minutes."
      }
      , {
        "@type": "HowToStep",
        "text": "Add the peas and cauliflower rice and mix until the cauliflower has warmed through."
      }
      , {
        "@type": "HowToStep",
        "text": "Move the contents of the pan to the side to create a well in the center.  Pour in the eggs and slowly scraped the cooked bits off the bottom of the pan to scramble the eggs.  Once the eggs are almost finished cooking, mix everything in the pan together."
      }
      , {
        "@type": "HowToStep",
        "text": "Season the cauliflower with white pepper and soy sauce, give one last good mix to combine and serve with a garnish of sliced green onion."
      }
      , {
        "@type": "HowToStep",
        "text": "Enjoy!"
      }
    ],
    "recipeYield": "4 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "95",
      "ratingCount": "182",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Pan Fry",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "251 calories",
      "carbohydrateContent": "16 grams",
      "fatContent": "6 grams",
      "fiberContent": "5 grams",
      "proteinContent": "32 grams",
      "sugarContent": "5 grams"
    },
    "recipeCategory": "Lunch",
    "recipeCuisine": "Fusion",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/18590/mp4_720x1280/1482184543",
      "description": "Here's what you need: cauliflower florets, sesame oil, carrot, garlic, large shrimp, frozen peas, egg, low sodium soy sauce, white pepper, green onion",
      "duration": "PT00M00S",
      "name": "Cauliflower Shrimp Fried Rice Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/27f3b1b32760410a91e4b0bbf336bd9a/BFV15715_CauliflowerShrimpFriedRiceThumb.jpg",
      "uploadDate": "2017-05-11T21:21:36"
    }]
  },

  {
    "@context": "http://schema.org",
    "@type": "VideoObject",
    "contentUrl": "https://vid.tasty.co/output/18590/mp4_720x1280/1482184543",
    "description": "Here's what you need: cauliflower florets, sesame oil, carrot, garlic, large shrimp, frozen peas, egg, low sodium soy sauce, white pepper, green onion",
    "name": "Cauliflower Shrimp Fried Rice Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tasty.co/favicon.ico"
      }
    },
    "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/27f3b1b32760410a91e4b0bbf336bd9a/BFV15715_CauliflowerShrimpFriedRiceThumb.jpg",
    "uploadDate": "2017-05-11T21:21:36",
    "duration": "PT00M00S"

  },
  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Kahnita Wilkerson"
      }
    ],
    "datePublished": "2017-08-31T16:59:47",
    "description": "Here's what you need: soy sauce, hoisin sauce, rice vinegar, honey, sesame oil, ginger, garlic, chicken breast, salt, pepper, cornstarch, sesame oil, broccoli floret, red bell pepper, raw cashew, water, brown rice",
    "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/96137.jpg",
    "name": "Cashew Chicken Stir-Fry Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
      "6 tablespoons soy sauce"
      , "1 tablespoon hoisin sauce"
      , "1 tablespoon rice vinegar"
      , "2 tablespoons honey"
      , "1 teaspoon sesame oil"
      , "½ tablespoon ginger, minced"
      , "2 cloves garlic, minced"
      , "¾ pounds chicken breasts, cut into 1-inch pieces"
      , "Salt, to taste"
      , "Pepper, to taste"
      , "1 tablespoon cornstarch"
      , "1 tablespoon sesame oil"
      , "4 cups broccoli florets"
      , "1 red bell pepper, cut into 1-inch pieces"
      , "¾ cup raw cashews"
      , "½ cup water"
      , "Brown rice, to serve"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "In a medium bowl, combine the soy sauce, hoisin sauce, rice vinegar, honey, sesame oil, ginger, and garlic. Set aside."
      }
      , {
        "@type": "HowToStep",
        "text": "In a medium bowl, season the chicken with salt, pepper, and cornstarch."
      }
      , {
        "@type": "HowToStep",
        "text": "Heat a 9.5&quot; fry pan over medium-high heat and add sesame oil."
      }
      , {
        "@type": "HowToStep",
        "text": "Add the chicken and cook for 5-6 minutes, or until the chicken begins to brown."
      }
      , {
        "@type": "HowToStep",
        "text": "Remove chicken and set aside in a separate bowl."
      }
      , {
        "@type": "HowToStep",
        "text": "Add the broccoli and bell peppers, and cook for 2-3 minutes."
      }
      , {
        "@type": "HowToStep",
        "text": "Add the chicken, cashews and sauce. Stir together and allow sauce to thicken."
      }
      , {
        "@type": "HowToStep",
        "text": "Remove from heat and serve over brown rice."
      }
      , {
        "@type": "HowToStep",
        "text": "Enjoy!"
      }
    ],
    "recipeYield": "4 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "99",
      "ratingCount": "420",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Pan Fry",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "378 calories",
      "carbohydrateContent": "34 grams",
      "fatContent": "12 grams",
      "fiberContent": "6 grams",
      "proteinContent": "35 grams",
      "sugarContent": "17 grams"
    },
    "recipeCategory": "Lunch",
    "recipeCuisine": "Fusion",
    "totalTime": "PT30M",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/50604/mp4_720x1280/1504217162",
      "description": "Here's what you need: soy sauce, hoisin sauce, rice vinegar, honey, sesame oil, ginger, garlic, chicken breast, salt, pepper, cornstarch, sesame oil, broccoli floret, red bell pepper, raw cashew, water, brown rice",
      "duration": "PT00M50S",
      "name": "Cashew Chicken Stir-Fry Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/96137.jpg",
      "uploadDate": "2017-08-31T16:59:47"
    }]
  },

  {
    "@context": "http://schema.org",
    "@type": "VideoObject",
    "contentUrl": "https://vid.tasty.co/output/50604/mp4_720x1280/1504217162",
    "description": "Here's what you need: soy sauce, hoisin sauce, rice vinegar, honey, sesame oil, ginger, garlic, chicken breast, salt, pepper, cornstarch, sesame oil, broccoli floret, red bell pepper, raw cashew, water, brown rice",
    "name": "Cashew Chicken Stir-Fry Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tasty.co/favicon.ico"
      }
    },
    "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/96137.jpg",
    "uploadDate": "2017-08-31T16:59:47",
    "duration": "PT00M50S"

  },
  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Ellie Holland"
      }
    ],
    "datePublished": "2017-07-11T00:53:14",
    "description": "Here's what you need: vegetable oil, garlic, spring onion, carrot, snap pea, brown sugar, soy sauce, dried rice noodles",
    "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/24124f6a6e3748389d2551b4364214e9/BFV12924_EasyNoodles4Ways-FB1080SQ.jpg",
    "name": "Veggie Garlic Noodles Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
      "n/a"
      , "5 cloves garlic"
      , "3 spring onions"
      , "2 carrots"
      , "100 grams snap peas"
      , "2 tablespoons brown sugar"
      , "3 tablespoons soy sauce"
      , "250 grams noodles"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Heat the oil in a skillet over medium heat. Add the garlic and 3 spring onions and cook for 2-3 minutes."
      }
      , {
        "@type": "HowToStep",
        "text": "Add the carrots and peas, before stirring in the brown sugar and soy sauce."
      }
      , {
        "@type": "HowToStep",
        "text": "Add the noodles and mix together for another couple of minutes."
      }
      , {
        "@type": "HowToStep",
        "text": "Season with salt and pepper, then slice remaining spring onion and top to serve. "
      }
      , {
        "@type": "HowToStep",
        "text": "Enjoy!"
      }
    ],
    "recipeYield": "4 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "96",
      "ratingCount": "763",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Pan Fry",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "336 calories",
      "carbohydrateContent": "60 grams",
      "fatContent": "7 grams",
      "fiberContent": "2 grams",
      "proteinContent": "5 grams",
      "sugarContent": "6 grams"
    },
    "recipeCategory": "Lunch",
    "recipeCuisine": "Chinese",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/11272/mp4_720x1280/1475518362",
      "description": "Here's what you need: vegetable oil, garlic, spring onion, carrot, snap pea, brown sugar, soy sauce, dried rice noodles",
      "duration": "PT00M00S",
      "name": "Veggie Garlic Noodles Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/24124f6a6e3748389d2551b4364214e9/BFV12924_EasyNoodles4Ways-FB1080SQ.jpg",
      "uploadDate": "2017-07-11T00:53:14"
    }]
  },

  {
    "@context": "http://schema.org",
    "@type": "VideoObject",
    "contentUrl": "https://vid.tasty.co/output/11272/mp4_720x1280/1475518362",
    "description": "Here's what you need: vegetable oil, garlic, spring onion, carrot, snap pea, brown sugar, soy sauce, dried rice noodles",
    "name": "Veggie Garlic Noodles Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tasty.co/favicon.ico"
      }
    },
    "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/24124f6a6e3748389d2551b4364214e9/BFV12924_EasyNoodles4Ways-FB1080SQ.jpg",
    "uploadDate": "2017-07-11T00:53:14",
    "duration": "PT00M00S"

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
    "datePublished": "2017-04-26T19:46:28",
    "description": "Here's what you need: egg, white pepper, salt, chicken breast, cornstarch, flour, vegetable oil, oil, garlic, ginger, chili flakes, rice wine, soy sauce, vinegar, water, sugar, orange zest, scallions, cornstarch, water",
    "image": "https://img.buzzfeed.com/video-api-prod/assets/ffd5ad13445f4d34ba826811169decc2/BFV4900-Orange-Chicken-ThumbB.jpg",
    "name": "Orange Chicken (Inspired By Panda Express) Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
      "1 egg"
      , "1 tsp of white pepper"
      , "1 1/2 tsp of salt"
      , "2 chicken breasts, cubed"
      , "1/2 cup of corn starch"
      , "1/4 cup of flour"
      , "vegetable oil for frying"
      , "1 Tbsp. of oil"
      , "2 tsp of garlic"
      , "1 Tbsp. of ginger"
      , "1/2 tsp of red chili flakes"
      , "1 Tbsp. of rice wine"
      , "1 1/2 Tbsp. of soy sauce"
      , "5 Tbsp. of vinegar"
      , "1 1/2 Tbsp. of water"
      , "3 1/2 Tbsp. of sugar"
      , "1 Tbsp. of orange zest"
      , "Chopped scallions for garnish"
      , "n/a"
      , "n/a"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Combine the egg, white pepper and salt in a mixing bowl. Add the cubed chicken breast, make sure it’s coated with the egg mixture."
      }
      , {
        "@type": "HowToStep",
        "text": "In another bowl, combine corn starch and flour. Add the coated chicken to the flour mixture. Stir to coat."
      }
      , {
        "@type": "HowToStep",
        "text": "Working in batches, fry the coated chicken until golden and done. Remove with a slotted spoon and set aside."
      }
      , {
        "@type": "HowToStep",
        "text": "In a large pan or wok, add oil, garlic, ginger and red chili flakes. Stir fry until fragrant."
      }
      , {
        "@type": "HowToStep",
        "text": "Add rice wine and stir for a few seconds. Proceed to add all of the other sauce ingredients, including soy sauce, vinegar, water, sugar and orange zest."
      }
      , {
        "@type": "HowToStep",
        "text": "Add the fried chicken. Stir to coat in sauce. Thicken the sauce with the cornstarch slurry."
      }
      , {
        "@type": "HowToStep",
        "text": "Garnish with chopped scallions and serve with rice."
      }
      , {
        "@type": "HowToStep",
        "text": "Enjoy!"
      }
    ],
    "recipeYield": "2 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "93",
      "ratingCount": "101",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Pan Fry",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "689 calories",
      "carbohydrateContent": "60 grams",
      "fatContent": "26 grams",
      "fiberContent": "1 grams",
      "proteinContent": "49 grams",
      "sugarContent": "17 grams"
    },
    "recipeCategory": "Lunch",
    "recipeCuisine": "Fusion",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/31994/mp4_720x1280/1495125019",
      "description": "Here's what you need: egg, white pepper, salt, chicken breast, cornstarch, flour, vegetable oil, oil, garlic, ginger, chili flakes, rice wine, soy sauce, vinegar, water, sugar, orange zest, scallions, cornstarch, water",
      "duration": "PT00M48S",
      "name": "Orange Chicken (Inspired By Panda Express) Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/ffd5ad13445f4d34ba826811169decc2/BFV4900-Orange-Chicken-ThumbB.jpg",
      "uploadDate": "2017-04-26T19:46:28"
    }]
  },

  {
    "@context": "http://schema.org",
    "@type": "VideoObject",
    "contentUrl": "https://vid.tasty.co/output/31994/mp4_720x1280/1495125019",
    "description": "Here's what you need: egg, white pepper, salt, chicken breast, cornstarch, flour, vegetable oil, oil, garlic, ginger, chili flakes, rice wine, soy sauce, vinegar, water, sugar, orange zest, scallions, cornstarch, water",
    "name": "Orange Chicken (Inspired By Panda Express) Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tasty.co/favicon.ico"
      }
    },
    "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/ffd5ad13445f4d34ba826811169decc2/BFV4900-Orange-Chicken-ThumbB.jpg",
    "uploadDate": "2017-04-26T19:46:28",
    "duration": "PT00M48S"

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
    "datePublished": "2018-05-02T17:45:17",
    "description": "Here's what you need: water, soy sauce, sesame oil, garlic, fresh ginger, brown sugar,  sriracha, rice wine vinegar, scallions, tofu, sesame oil, medium yellow onion, mushroom, garlic, water chestnuts, scallions, canola oil, rice noodle, iceberg lettuce",
    "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/153895.jpg",
    "name": "Lettuce Wraps Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
      "1 cup water"
      , "½ cup soy sauce"
      , "¼ cup sesame oil"
      , "6 cloves garlic, minced"
      , "1 tablespoon minced fresh ginger"
      , "¼ cup brown sugar"
      , "2 tablespoons sriracha"
      , "¼ cup rice wine vinegar"
      , "⅓ cup sliced scallions"
      , "1 14-ounce package tofu"
      , "1 tablespoon sesame oil"
      , "1 medium yellow onion, diced"
      , "2½ cups chopped mushrooms, such as shiitake"
      , "1 tablespoon minced garlic"
      , "1 8-ounce can sliced water chestnuts, drained and finely chopped"
      , "⅓ cup sliced scallions"
      , "½ cup canola oil"
      , "7 ounce package rice noodles"
      , "1 head iceberg lettuce"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Remove the tofu from its packaging and drain. Wrap tofu in a kitchen towel and find a heavy object to place on top of tofu, leave it there for 10-20 minutes, until tofu feels more tender."
      }
      , {
        "@type": "HowToStep",
        "text": "Make the sauce: In a medium bowl, combine the water, soy sauce, sesame oil, garlic, ginger, sriracha, brown sugar, rice wine vinegar, and scallions, and stir. Set ½ cup (120 ml) of the sauce aside."
      }
      , {
        "@type": "HowToStep",
        "text": "Crumble the tofu into the marinade, cover, and refrigerate for 1 hour."
      }
      , {
        "@type": "HowToStep",
        "text": "In a medium wok or skillet over medium heat, add the sesame oil and onion, and cook 3 minutes, until onions are translucent. Add the mushrooms and garlic and cook for about 5 minutes, or until the mushrooms are tender."
      }
      , {
        "@type": "HowToStep",
        "text": "Add the marinated tofu to the pan and cook until the majority of marinade cooks off. Add the water chestnuts and scallions. Pour in the reserved sauce. Toss to coat and cook until just heated through. Transfer the tofu mixture to a medium bowl."
      }
      , {
        "@type": "HowToStep",
        "text": "Heat the canola oil in the same pan over high heat until a drop of water sizzles when flicked onto the oil. Fry the rice noodles for about 30 seconds, until puffed up. Transfer the fried noodles to paper towels to drain."
      }
      , {
        "@type": "HowToStep",
        "text": "Slice the core off the head of lettuce and separate into individual leaves."
      }
      , {
        "@type": "HowToStep",
        "text": "Serve with leaves of lettuce, rice noodles, and drizzle remaining sauce over top."
      }
      , {
        "@type": "HowToStep",
        "text": "Enjoy!"
      }
    ],
    "recipeYield": "4 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "94",
      "ratingCount": "243",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Pan Fry",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "701 calories",
      "carbohydrateContent": "60 grams",
      "fatContent": "45 grams",
      "fiberContent": "3 grams",
      "proteinContent": "16 grams",
      "sugarContent": "18 grams"
    },
    "recipeCategory": "Lunch",
    "recipeCuisine": "Chinese",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/92390/landscape_720/1525368539",
      "description": "Here's what you need: water, soy sauce, sesame oil, garlic, fresh ginger, brown sugar,  sriracha, rice wine vinegar, scallions, tofu, sesame oil, medium yellow onion, mushroom, garlic, water chestnuts, scallions, canola oil, rice noodle, iceberg lettuce",
      "duration": "PT01M49S",
      "name": "Lettuce Wraps Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/153895.jpg",
      "uploadDate": "2018-05-02T17:45:17"
    }]
  },

  {
    "@context": "http://schema.org",
    "@type": "VideoObject",
    "contentUrl": "https://vid.tasty.co/output/92390/landscape_720/1525368539",
    "description": "Here's what you need: water, soy sauce, sesame oil, garlic, fresh ginger, brown sugar,  sriracha, rice wine vinegar, scallions, tofu, sesame oil, medium yellow onion, mushroom, garlic, water chestnuts, scallions, canola oil, rice noodle, iceberg lettuce",
    "name": "Lettuce Wraps Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tasty.co/favicon.ico"
      }
    },
    "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/153895.jpg",
    "uploadDate": "2018-05-02T17:45:17",
    "duration": "PT01M49S"

  }
]




let recipes = [];


function printRecipe(array) {
  array.forEach((eachObject, index) => {
    // If statement is a Work around Toms Script to only get first Script tag in the html.
    if (index % 2 === 0) {
      let theRecipe = {};

      if (eachObject.name) {
        // console.log("Name: ", eachObject.name);
        theRecipe.name = eachObject.name;
        // console.log(theRecipe);
      }


      if (eachObject.recipeIngredient) {
        // console.log("Recipe Ingredient: ", eachObject.recipeIngredient);
        theRecipe.ingredients = eachObject.recipeIngredient;
      }

      if (eachObject.recipeInstructions) {
        theRecipe.steps = [];
        eachObject.recipeInstructions.forEach(step => {
          // console.log("Step: ", step);
          theRecipe.steps.push(step.text);

        })
      }
      if (eachObject.image) {
        // console.log("Image: ", eachObject.image);
        theRecipe.image = eachObject.image;
      }

      if (eachObject.recipeCategory) {
        // console.log("Recipe Category: ", eachObject.recipeCategory);
        theRecipe.meal = "Lunch";
        // console.log(theRecipe);
      }

      if (eachObject.recipeCuisine) {
        // console.log("Recipe Cuisine: ", eachObject.recipeCuisine);
        theRecipe.cuisine = "chinese";
      }

      if (eachObject.video) {
        // console.log("Video: ", eachObject.video[0].contentUrl);
        theRecipe.video = eachObject.video[0].contentUrl
      }

      if (eachObject.video) {
        // console.log("Video Description: ", eachObject.video[0].description);
        theRecipe.videoDescription = eachObject.video[0].description;
      }
      // console.log(theRecipe);
      recipes.push(theRecipe);

    }
  })
  console.log(recipes);
}


printRecipe(chineselunch);

  // console.log('--------------------------------------------------------',recipes);


  Recipe.create(recipes)
  .then((e) =>{
    console.log("Yay");
  })