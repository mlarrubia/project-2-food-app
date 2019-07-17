const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const recipeSchema = new Schema({
  meal: {type: String, enum: ["Breakfast", "Lunch", "Dinner", "Dessert", "breakfast", "lunch", "dinner", "dessert"]},
  cuisineType: {type: String},
  name: {type: String},
  ingredients: [{type: String}],
  steps: [{type: String}],
  video: {type: String},
  images: {type: String},
  // ratings: [{type: Schema.Types.ObjectId, ref: 'Rating'}],
  author: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
})


const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;