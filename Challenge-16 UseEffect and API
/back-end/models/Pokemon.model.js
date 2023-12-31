const mongoose = require("mongoose");

const Pokemon_model = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  TypeofPokemon: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Weakness: {
    type: String,
    required: true,
  },
  Drops: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Pokemon", Pokemon_model);
