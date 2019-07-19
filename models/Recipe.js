const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const recipeSchema = new Schema({
  meal: {type: String, enum: ["Breakfast", "Lunch", "Dinner", "Desert", "breakfast", "lunch", "dinner", "dessert"]},
  cuisine: {type: String},
  name: {type: String},
  ingredients: [{type: String}],
  steps: [{type: String}],
  video: {type: String},
  image: {type: String},
  videoDescription: {type: String},
  score: {type: Number},
  calories: {type: Number, default: 231},
  // ratings: [{type: Schema.Types.ObjectId, ref: 'Rating'}],
  author: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
})


const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;