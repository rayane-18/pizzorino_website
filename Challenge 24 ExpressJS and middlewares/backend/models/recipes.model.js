const mongoose = require("mongoose");

const recipesSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
});

const Recipes = mongoose.model("Recipes", recipesSchema);

module.exports = Recipes;
