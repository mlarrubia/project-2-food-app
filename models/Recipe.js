const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const recipeSchema = new Schema({
  cuisineType: {type: String},
  // ingredients: [{amount: Number, units: String, name: String}],
  ingredients: {type: String},
  steps: {type: String},
  video: {type: String},
  images: [{type: String}],
  // ratings: [{type: Schema.Types.ObjectId, ref: 'Rating'}],
  // author: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
})


const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;