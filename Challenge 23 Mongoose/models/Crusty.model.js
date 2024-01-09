const mongoose = require("mongoose");

const CrustySchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Recipe: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Crusty", CrustySchema);
