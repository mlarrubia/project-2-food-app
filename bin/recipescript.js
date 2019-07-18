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



let mexicandessert = [


  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Tasty"
      }
    ],
    "datePublished": "2017-04-26T19:46:05",
    "description": "Here's what you need: doce de leite, butter, egg yolk, egg, flour, butter, flour, ramekins",
    "image": "https://img.buzzfeed.com/video-api-prod/assets/761d03877ebd465aa948379925c990c4/Thumb_C_-_FB.jpg",
    "name": "Dulce De Leche Lava Cake Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "1 2/3 cups Doce de Leite"
          ,"1/2 cup melted butter"
          ,"2 egg yolks"
          ,"2 whole eggs"
          ,"1/4 cup flour"
          ,"Additional butter and flour to line ramekins."
          ,"n/a"
          ,"* 4 ramekins"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "In a medium bowl, mix Doce de Leite and melted butter."
        }
        ,{
          "@type": "HowToStep",
          "text": "In a separate medium bowl, mix egg yolks and eggs. Once combined, mix in Doce de Leite mixture."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add in flour, a little at a time, to ensure everything is mixed evenly and the batter is smooth."
        }
        ,{
          "@type": "HowToStep",
          "text": "Line ramekins with butter and flour. Pour out excess flour. Divide Doce de Leite batter in each ramekin. Leave about ¼ inches (6 mm) from the top."
        }
        ,{
          "@type": "HowToStep",
          "text": "Bake the cakes for 425˚F (220˚C) for 12-14 minutes. The cakes should be golden brown and should jiggle in the middle. The more you bake, the less molten the center will be when you cut into it."
        }
        ,{
          "@type": "HowToStep",
          "text": "Run a knife along the edges of the ramekin to loosen and invert onto a plate. Serve with ice cream or whipped cream."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "4 cakes",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "99",
      "ratingCount": "105",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Bake",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "561 calories",
      "carbohydrateContent":  "39 grams",
      "fatContent":  "39 grams",
      "fiberContent": "0 grams",
      "proteinContent": "13 grams",
      "sugarContent": "29 grams"
    },
    "recipeCategory": "Bakery Goods",
    "recipeCuisine": "Fusion",
    "totalTime": "PT30M",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/32136/mp4_720x1280/1495125333",
      "description": "Here's what you need: doce de leite, butter, egg yolk, egg, flour, butter, flour, ramekins",
      "duration": "PT00M46S",
      "name": "Dulce De Leche Lava Cake Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/761d03877ebd465aa948379925c990c4/Thumb_C_-_FB.jpg",
      "uploadDate": "2017-04-26T19:46:05"
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
    "datePublished": "2017-04-26T19:46:13",
    "description": "Here's what you need: all-purpose flour, salt, sugar, zest of 1 lemon, boiling water, butter, vanilla extract, egg, peanut or vegetable oil, cinnamon sugar, strawberry jam, clotted cream, piping bag with star nozzle",
    "image": "https://img.buzzfeed.com/video-api-prod/assets/87951f208ce74724b4d4510d07236676/Video_Thumb.jpg",
    "name": "Afternoon Tea Churros Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "140g plain flour"
          ,"Pinch of salt"
          ,"2 tsp caster sugar"
          ,"Lemon"
          ,"n/a"
          ,"120g butter"
          ,"1 tsp vanilla extract"
          ,"3 eggs"
          ,"n/a"
          ,"Cinnamon sugar (cinnamon and caster sugar mixed)"
          ,"Strawberry jam &amp; clotted cream to serve"
          ,"n/a"
          ,"Piping bag w/ star nozzle"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "Sift the flour into a large bowl.  Add the salt, sugar and lemon zest and mix to combine."
        }
        ,{
          "@type": "HowToStep",
          "text": "In a large saucepan, add the boiling water, butter and vanilla. Heat gently until the butter is melted and the mixture is boiling. Turn off the heat and add the flour mixture. Beat quickly until it is lump-free, then let cool for 5 minutes."
        }
        ,{
          "@type": "HowToStep",
          "text": "Beat in the eggs 1 at a time until the mixture is thick and sticky. Let cool for another 10-15 minutes."
        }
        ,{
          "@type": "HowToStep",
          "text": "Transfer the churro mixture into a piping bag with a wide star nozzle. Heat the oil in a large saucepan until  it reaches 350°F (180°C). Pipe the churro mix into the oil, snipping the ends with kitchen shears. Cook 3-4 at a time for 5 minutes, or until golden brown."
        }
        ,{
          "@type": "HowToStep",
          "text": "Drain the churros on paper towels, then coat in a cinnamon-sugar mix. Serve with strawberry jam and clotted cream for a delicious twist on afternoon tea."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "10 pieces",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "83",
      "ratingCount": "73",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Deep-Fry",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "730 calories",
      "carbohydrateContent":  "26 grams",
      "fatContent":  "68 grams",
      "fiberContent": "1 grams",
      "proteinContent": "3 grams",
      "sugarContent": "14 grams"
    },
    "recipeCategory": "Desserts",
    "recipeCuisine": "Fusion",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/32093/mp4_720x1280/1495125380",
      "description": "Here's what you need: all-purpose flour, salt, sugar, zest of 1 lemon, boiling water, butter, vanilla extract, egg, peanut or vegetable oil, cinnamon sugar, strawberry jam, clotted cream, piping bag with star nozzle",
      "duration": "PT01M12S",
      "name": "Afternoon Tea Churros Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/87951f208ce74724b4d4510d07236676/Video_Thumb.jpg",
      "uploadDate": "2017-04-26T19:46:13"
    }]
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
    "datePublished": "2018-04-09T21:50:46",
    "description": "Here's what you need: butter, brown sugar, water, salt, flour, egg, vanilla extract, rum, mini chocolate chips, oil, granulated sugar, ground cinnamon",
    "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/42574d30e0ce4e78bef11a5e163401e0/Double_Chocolate_Stuffed_Mini_Churros_FB_FINAL_2.jpg",
    "name": "Double Chocolate-Stuffed Mini Churros (Mini Churros Rellenos De Chocolate) Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "125 grams butter, cubed"
          ,"85 grams sugar"
          ,"230 milliliters water"
          ,"1 teaspoon salt"
          ,"250 grams flour"
          ,"3 eggs"
          ,"1 tablespoon vanilla extract"
          ,"1 tablespoon rum"
          ,"Mini chocolate chips"
          ,"½ liter of oil"
          ,"100 grams sugar"
          ,"1 tablespoon ground cinnamon"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "In a saucepan over a medium heat, combine the butter, sugar, water, and salt ,and bring to a boil."
        }
        ,{
          "@type": "HowToStep",
          "text": "Reduce the heat to medium-low, and mix in the flour with a wooden spoon until the dough comes together to form a soft ball."
        }
        ,{
          "@type": "HowToStep",
          "text": "Take the saucepan off the heat and cool for 5 minutes, to prevent the eggs from curdling."
        }
        ,{
          "@type": "HowToStep",
          "text": "Gradually mix in the eggs one by one."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add in the vanilla extract and rum, and mix until creamy."
        }
        ,{
          "@type": "HowToStep",
          "text": "Spoon the mixture into a piping bag with a star nozzle."
        }
        ,{
          "@type": "HowToStep",
          "text": "Pipe mini churros onto a baking tray, about the length of your index finger, and top with mini chocolate chips."
        }
        ,{
          "@type": "HowToStep",
          "text": "Pipe another churro on top, so that no chocolate shows."
        }
        ,{
          "@type": "HowToStep",
          "text": "Freeze for 20 minutes, until set."
        }
        ,{
          "@type": "HowToStep",
          "text": "In a large saucepan, heat up the oil until it reaches 375˚F (190˚C)."
        }
        ,{
          "@type": "HowToStep",
          "text": "Fry the churros in the oil for a few minutes, until slightly golden in color."
        }
        ,{
          "@type": "HowToStep",
          "text": "Transfer to a paper towel-lined plate or a clean kitchen towel to drain."
        }
        ,{
          "@type": "HowToStep",
          "text": "Combine the remaining sugar with the cinnamon."
        }
        ,{
          "@type": "HowToStep",
          "text": "Coat each churro in the cinnamon sugar, then serve."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "12 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "84",
      "ratingCount": "50",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Deep-Fry",
    "keywords": "double chocolate stuffed mini churros",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "547 calories",
      "carbohydrateContent":  "28 grams",
      "fatContent":  "46 grams",
      "fiberContent": "0 grams",
      "proteinContent": "4 grams",
      "sugarContent": "9 grams"
    },
    "recipeCategory": "Desserts",
    "recipeCuisine": "Mexican",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/31382/mp4_720x1280/1494535514",
      "description": "Here's what you need: butter, brown sugar, water, salt, flour, egg, vanilla extract, rum, mini chocolate chips, oil, granulated sugar, ground cinnamon",
      "duration": "PT01M20S",
      "name": "Double Chocolate-Stuffed Mini Churros (Mini Churros Rellenos De Chocolate) Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/42574d30e0ce4e78bef11a5e163401e0/Double_Chocolate_Stuffed_Mini_Churros_FB_FINAL_2.jpg",
      "uploadDate": "2018-04-09T21:50:46"
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
    "datePublished": "2017-04-26T19:46:01",
    "description": "Here's what you need: sugar, passion fruit juice, heavy cream, whole milk, vanilla extract, egg yolk, egg, ramekins",
    "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/19847.jpg",
    "name": "Passion Fruit Flan Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "1 cup sugar"
          ,"1/3 cup passion fruit juice + 2 Tbsp. passion fruit juice"
          ,"1 3/4 cups heavy cream"
          ,"1 cup whole milk"
          ,"2 tsp vanilla extract"
          ,"2 egg yolks"
          ,"3 eggs"
          ,"8 Ramekins"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "Pour a cup of sugar (200g) and ⅓ cups (80ml) of passion fruit juice into a saucepan over a medium heat. Let the sugar melt and form a golden color. Don&#x27;t over stir. Take off the heat."
        }
        ,{
          "@type": "HowToStep",
          "text": "Spoon the caramel into each ramekin, and swirl it around so the bottom is covered. Set aside to cool."
        }
        ,{
          "@type": "HowToStep",
          "text": "In another saucepan, heat heavy cream, whole milk, vanilla extract, and two tablespoons of passion fruit juice. Stir until well mixed and hot."
        }
        ,{
          "@type": "HowToStep",
          "text": "In a large bowl, mix egg yolks, eggs, and gradually pour in the hot passion fruit cream mixture until fully incorporated. Pour the mixture through a sieve to make the mixture smooth."
        }
        ,{
          "@type": "HowToStep",
          "text": "Place the ramekins into a large roasting pan. Pour hot water into the pan to come roughly halfway up the sides of the ramekins. Pour the mixture into the ramekins and bake at 350˚F (180˚C) for 45 minutes."
        }
        ,{
          "@type": "HowToStep",
          "text": "Let the flan cool outside the oven, and then refrigerate it for at least two hours."
        }
        ,{
          "@type": "HowToStep",
          "text": "When you&#x27;re ready to serve the flan, run a knife around the edges to loosen, place a dish over the top of the ramekin and quickly invert it."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "8 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "77",
      "ratingCount": "30",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Bake",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "251 calories",
      "carbohydrateContent":  "21 grams",
      "fatContent":  "17 grams",
      "fiberContent": "0 grams",
      "proteinContent": "6 grams",
      "sugarContent": "21 grams"
    },
    "recipeCategory": "Desserts",
    "recipeCuisine": "Mexican",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/32158/mp4_720x1280/1495125411",
      "description": "Here's what you need: sugar, passion fruit juice, heavy cream, whole milk, vanilla extract, egg yolk, egg, ramekins",
      "duration": "PT01M00S",
      "name": "Passion Fruit Flan Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/19847.jpg",
      "uploadDate": "2017-04-26T19:46:01"
    }]
  },

  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Rie McClenny"
      }
    ],
    "datePublished": "2018-07-06T21:43:05",
    "description": "Here's what you need: granny smith apple, lemon water, sugar, cinnamon, unsalted butter, brown sugar, salt, water, all-purpose flour, large egg, oil, sugar, cinnamon, piping bag",
    "image": "https://img.buzzfeed.com/video-api-prod/assets/156842cc009c486aaba051b222d85c3b/appletotsFB2.jpg",
    "name": "Apple Tater Tots Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "2 granny smith apples"
          ,"Lemon water (to prevent apples from browning)"
          ,"2 tablespoons sugar"
          ,"¼ teaspoon cinnamon"
          ,"¼ cup (½ stick) unsalted butter"
          ,"2 tablespoons brown sugar"
          ,"½ teaspoon salt"
          ,"1 cup (235 milliliters) water"
          ,"1 cup (125 grams) all-purpose flour"
          ,"4 large eggs"
          ,"Oil, for frying"
          ,"¼ cup sugar mixed with 1 teaspoon cinnamon, for coating"
          ,"n/a"
          ,"1 piping bag with a large star tip or large round tip"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "Peel the apples and soak them in a medium bowl filled with lemon water to keep then from browning. Using a cheese grater, grate the apples."
        }
        ,{
          "@type": "HowToStep",
          "text": "In another medium bowl, combine the grated apples and sprinkle with sugar and cinnamon. Stir to coat well and set aside."
        }
        ,{
          "@type": "HowToStep",
          "text": "Make the churro dough: In a medium saucepan over high heat, combine the butter, brown sugar, salt, and water. Bring to a boil."
        }
        ,{
          "@type": "HowToStep",
          "text": "Reduce the heat to medium-low and add the flour. Using a wooden spoon, stir until the dough comes together to form a ball, about 1 minute."
        }
        ,{
          "@type": "HowToStep",
          "text": "Remove the pot from the heat and let cool for about 5 minutes to prevent accidentally cooking the eggs."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the eggs, 1 at a time, being sure to fully incorporate each egg before adding the next. Set the dough aside."
        }
        ,{
          "@type": "HowToStep",
          "text": "Spread a kitchen towel over a medium bowl. Transfer the grated apple to the towel and squeeze to remove moisture."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add the grated apple to the churro dough. Mix well with wooden spoon and transfer to a piping bag with a large star tip or large round tip."
        }
        ,{
          "@type": "HowToStep",
          "text": "Heat the oil in a large pot until it reaches 350˚F (180˚C)."
        }
        ,{
          "@type": "HowToStep",
          "text": "Pipe the dough into the hot oil, using scissors to cut into bite-size pieces as you squeeze. Work in batches, if necessary, so as not to overcrowd the pot. Fry the churros until golden brown and fully cooked, 2-3 minutes."
        }
        ,{
          "@type": "HowToStep",
          "text": "Transfer the hot churros to a medium bowl filled with cinnamon sugar and toss to coat."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "6 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "93",
      "ratingCount": "94",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Deep-Fry",
    "keywords": "apple, churros, dessert, fried treats, tater tots, unsolved",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "319 calories",
      "carbohydrateContent":  "31 grams",
      "fatContent":  "18 grams",
      "fiberContent": "1 grams",
      "proteinContent": "7 grams",
      "sugarContent": "11 grams"
    },
    "recipeCategory": "Desserts",
    "recipeCuisine": "Fusion",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/101251/landscape_720/1530921787",
      "description": "Here's what you need: granny smith apple, lemon water, sugar, cinnamon, unsalted butter, brown sugar, salt, water, all-purpose flour, large egg, oil, sugar, cinnamon, piping bag",
      "duration": "PT02M00S",
      "name": "Apple Tater Tots Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/156842cc009c486aaba051b222d85c3b/appletotsFB2.jpg",
      "uploadDate": "2018-07-06T21:43:05"
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
    "datePublished": "2017-04-26T19:46:38",
    "description": "Here's what you need: butter, brown sugar, salt, water, flour, vanilla, egg, cooking spray, oil, cinnamon sugar, ice cream, hot fudge, caramel sauce, piping bag, muffin tin",
    "image": "https://img.buzzfeed.com/video-api-prod/assets/611fa066ddb445b282cbed439031694d/BFV8528_ChurroIceCreamBowl-Thumb1080SQ.jpg",
    "name": "Churro Ice Cream Bowls Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "¼ cup butter, cubed"
          ,"2 Tbsp. brown sugar"
          ,"½ tsp salt"
          ,"1 cup water"
          ,"1 cup flour"
          ,"1 tsp vanilla"
          ,"4 eggs"
          ,"Cooking-oil spray"
          ,"Oil for frying"
          ,"Cinnamon sugar"
          ,"Ice cream"
          ,"Hot fudge and caramel topping (optional)"
          ,"n/a"
          ,"Piping bag with a small star tip"
          ,"Muffin tin (6 to 12 cups)"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "In a 1.5-quart saucepan over medium-high heat, add butter, brown sugar, salt, and water, and bring to a boil."
        }
        ,{
          "@type": "HowToStep",
          "text": "As soon as the butter has fully melted and the mixture begins to boil, reduce the heat to medium-low and add in flour. Using a wooden spoon, stir until the dough comes together to form a ball (about 1 minute)."
        }
        ,{
          "@type": "HowToStep",
          "text": "Remove from heat and let cool for 5 minutes before proceeding to the next step (to prevent accidentally cooking the eggs)."
        }
        ,{
          "@type": "HowToStep",
          "text": "Mix in the vanilla extract and add in the eggs, one at a time, being sure to fully incorporate each egg before adding the next."
        }
        ,{
          "@type": "HowToStep",
          "text": "Once all the eggs are incorporated, transfer it to a piping bag with a small star tip."
        }
        ,{
          "@type": "HowToStep",
          "text": "Invert a muffin tin and spray thoroughly with nonstick cooking spray. Pipe the dough around the inverted cups in spirals to form the bowls. Immediately transfer the tray to the freezer and freeze until solid (about 3 hours or overnight)."
        }
        ,{
          "@type": "HowToStep",
          "text": "Heat oil in a deep pot to 350˚F (175˚C). Remove the muffin tin from the freezer and flex it to release the churro bowls (you may need to also use a butter knife under the bottom edge to initially release them). Return any extras to the freezer while you wait to fry."
        }
        ,{
          "@type": "HowToStep",
          "text": "Fry them in batches, until nicely browned, no more than 3 minutes at a time. Be sure to carefully turn them so they fry evenly."
        }
        ,{
          "@type": "HowToStep",
          "text": "Once desired color is reached, remove them from the oil to a paper towel-lined plate. Dab off any excess oil then roll them in cinnamon sugar."
        }
        ,{
          "@type": "HowToStep",
          "text": "Fill with your favorite ice cream and toppings."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "8 bowls",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "91",
      "ratingCount": "180",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Deep-Fry",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "211 calories",
      "carbohydrateContent":  "15 grams",
      "fatContent":  "13 grams",
      "fiberContent": "0 grams",
      "proteinContent": "5 grams",
      "sugarContent": "2 grams"
    },
    "recipeCategory": "Desserts",
    "recipeCuisine": "Fusion",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/31948/mp4_720x1280/1495124889",
      "description": "Here's what you need: butter, brown sugar, salt, water, flour, vanilla, egg, cooking spray, oil, cinnamon sugar, ice cream, hot fudge, caramel sauce, piping bag, muffin tin",
      "duration": "PT01M16S",
      "name": "Churro Ice Cream Bowls Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/611fa066ddb445b282cbed439031694d/BFV8528_ChurroIceCreamBowl-Thumb1080SQ.jpg",
      "uploadDate": "2017-04-26T19:46:38"
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
    "datePublished": "2017-04-26T19:46:45",
    "description": "Here's what you need: water, granulated sugar, unsalted butter, all-purpose flour, red velvet cake mix, egg, canola oil, sugar, ground cinnamon, cream cheese, confectioners sugar, vanilla extract",
    "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d5b4487b069441bf82d24ed4f7667423/BFV8024_Red_Velvet_Churros-FB1080.jpg",
    "name": "Red Velvet Churros Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "2 cups water"
          ,"¼ cup granulated sugar"
          ,"4 Tbsp. unsalted butter"
          ,"1 cup all-purpose flour"
          ,"1 cup red velvet cake mix"
          ,"2 eggs"
          ,"Canola oil, for frying"
          ,"½ cup sugar"
          ,"1 tsp ground cinnamon"
          ,"8 oz cream cheese, softened"
          ,"½ cup confectioners&#x27; sugar"
          ,"1 tsp vanilla extract"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "In a pot over medium-high heat, bring water, sugar, and butter to a boil."
        }
        ,{
          "@type": "HowToStep",
          "text": "Add in the flour and the cake mix and stir vigorously until mixture has no streaks."
        }
        ,{
          "@type": "HowToStep",
          "text": "Remove from heat and add the eggs, stirring until the dough becomes a ball. Transfer dough to a piping bag with a size 9 star tip."
        }
        ,{
          "@type": "HowToStep",
          "text": "Pipe 3 to 4 inches (7-10cm) strips of the dough on a baking sheet. Freeze for 30 minutes."
        }
        ,{
          "@type": "HowToStep",
          "text": "Heat the canola oil in a pot over medium-high heat. Fry the red velvet churros for about three to four minutes."
        }
        ,{
          "@type": "HowToStep",
          "text": "Remove from oil and drain on paper towels."
        }
        ,{
          "@type": "HowToStep",
          "text": "Using a straw, poke a hole through the centers of the churros to hollow out a cavity for the filling."
        }
        ,{
          "@type": "HowToStep",
          "text": "On a plate, combine the cinnamon and the sugar and mix until it is a uniform color."
        }
        ,{
          "@type": "HowToStep",
          "text": "Roll the hollowed out churros in the cinnamon sugar."
        }
        ,{
          "@type": "HowToStep",
          "text": "In a medium bowl, combine the cream cheese, confectioners&#x27; sugar, and vanilla, stirring until smooth."
        }
        ,{
          "@type": "HowToStep",
          "text": "Transfer filling into a piping bag with a round tip."
        }
        ,{
          "@type": "HowToStep",
          "text": "Pipe the filling into the churros and serve."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "12 churros",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "81",
      "ratingCount": "61",
      "bestRating": "100",
      "worstRating": "0"
    },
    "cookingMethod": "Deep-Fry",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "294 calories",
      "carbohydrateContent":  "36 grams",
      "fatContent":  "15 grams",
      "fiberContent": "0 grams",
      "proteinContent": "4 grams",
      "sugarContent": "21 grams"
    },
    "recipeCategory": "Snacks",
    "recipeCuisine": "Fusion",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/31916/mp4_720x1280/1495124875",
      "description": "Here's what you need: water, granulated sugar, unsalted butter, all-purpose flour, red velvet cake mix, egg, canola oil, sugar, ground cinnamon, cream cheese, confectioners sugar, vanilla extract",
      "duration": "PT01M00S",
      "name": "Red Velvet Churros Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d5b4487b069441bf82d24ed4f7667423/BFV8024_Red_Velvet_Churros-FB1080.jpg",
      "uploadDate": "2017-04-26T19:46:45"
    }]
  },

  {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "author": [
      {
        "@type": "Person",
        "name": "Hector Gomez"
      }
    ],
    "datePublished": "2017-04-26T19:47:09",
    "description": "Here's what you need: sugar, cinnamon, butter, 10-inch flour tortillas, heavy cream, vanilla extract, sugar, fresh fruit",
    "image": "https://img.buzzfeed.com/video-api-prod/assets/b2423c62a5914e509d2c3d37c681bb22/FB_thumb_A.jpg",
    "name": "Tortilla Dessert Cups Recipe by Tasty",
    "publisher": {
      "@type": "Organization",
      "name": "Tasty",
      "logo": {
        "@type": "ImageObject",
        "url": "/static-assets/img/favicon.b3bba8bf837f3cc2436736a18d4c4e6d.ico"
      }
    },
    "recipeIngredient": [
          "¼ cup sugar"
          ,"1 tablespoon cinnamon"
          ,"2 tablespoons butter, melted"
          ,"3 10-inch flour tortillas"
          ,"1 cup heavy whipping cream"
          ,"1 teaspoon vanilla extract"
          ,"2 tablespoons sugar"
          ,"Fresh fruit"
    ],
    "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "Preheat the oven to 375˚F (190˚C)."
        }
        ,{
          "@type": "HowToStep",
          "text": "In a small bowl, combine the sugar and cinnamon. Butter each side of the tortillas, sprinkle with cinnamon sugar, and cut into even quarters, making 12 pieces. Place 2 pieces in 6 cups of a muffin tin and push down so that they create a cup shape. Bake for 13-15 minutes, or until crisp. Remove the cups from the oven and allow to cool in the tin."
        }
        ,{
          "@type": "HowToStep",
          "text": "In a large bowl, beat together heavy cream, vanilla extract, and sugar with an electric hand mixer until stiff peaks form."
        }
        ,{
          "@type": "HowToStep",
          "text": "Assemble the cups by placing a spoonful of whipped cream in each toasted cup. Top the whipped cream with fresh fruit of your choice."
        }
        ,{
          "@type": "HowToStep",
          "text": "Enjoy!"
        }
    ],
    "recipeYield": "6 servings",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "94",
      "ratingCount": "50",
      "bestRating": "100",
      "worstRating": "0"
    },
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "271 calories",
      "carbohydrateContent":  "19 grams",
      "fatContent":  "23 grams",
      "fiberContent": "0 grams",
      "proteinContent": "2 grams",
      "sugarContent": "7 grams"
    },
    "recipeCategory": "Desserts",
    "recipeCuisine": "Mexican",
    "video": [{
      "contentUrl": "https://vid.tasty.co/output/17175/mp4_720x1280/1481236797",
      "description": "Here's what you need: sugar, cinnamon, butter, 10-inch flour tortillas, heavy cream, vanilla extract, sugar, fresh fruit",
      "duration": "PT00M00S",
      "name": "Tortilla Dessert Cups Recipe by Tasty",
      "publisher": {
        "@type": "Organization",
        "name": "Tasty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tasty.co/favicon.ico"
        }
      },
      "thumbnailUrl": "https://img.buzzfeed.com/video-api-prod/assets/b2423c62a5914e509d2c3d37c681bb22/FB_thumb_A.jpg",
      "uploadDate": "2017-04-26T19:47:09"
    }]
  }
]







  let recipes = [];


function printRecipe(array){
  array.forEach(eachObject =>{
    let theRecipe = {};

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
        theRecipe.meal = "Dessert";
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
    console.log(recipes);
  }
  
  
  printRecipe(mexicandessert);
  
  // console.log('--------------------------------------------------------',recipes);


  Recipe.create(recipes)
  .then((e) =>{
    console.log("Yay");
  })