const Cart = require("../models/cart.model.js");
const addCart = async (req, res) => {
  try {
    const { username } = req.params;
    const { productid, quantity } = req.body;

    let cart = await Cart.findOne({ username });

    if (!cart) {
      cart = new Cart({ username, ids: { control: [] } });
    }

    const existingProduct = cart.ids.control.find(
      (item) => item.productid === productid
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.ids.control.push({ productid, quantity });
    }
    await cart.save();

    res
      .status(200)
      .json({ success: true, message: "Item added to cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
module.exports = { addCart };
