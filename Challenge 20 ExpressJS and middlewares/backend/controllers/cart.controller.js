const { addCart } = require("../routes/cart.router");
const router = require("express").Router();
router.post("/addtoCart/:username", addCart);
//router.patch("/updateCart/:username/:productid", updateCart);
//router.delete("/removefromCart/:username/:gameid", removeCart);
//router.get("/getCart/:username", getCartData);

module.exports = router;
