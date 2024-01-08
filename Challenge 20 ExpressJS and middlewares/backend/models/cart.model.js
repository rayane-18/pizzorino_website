const mongoose = require("mongoose");
const CartSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: true,
  },
  ids: {
    control: [
      {
        productid: {
          type: String,
          required: false,
        },
        quantity: {
          type: Number,
          required: false,
        },
      },
    ],
  },
});

module.exports = mongoose.model("Cart", CartSchema);
