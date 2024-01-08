const router = express.Router();
const Product = require("../models/product.model.js");

router.post("/add-product", async (req, res) => {
  const { adminToken, product } = req.body;

  if (adminToken !== "dsklfjdskljfkldsajfklads") {
    return res.status(401).json({ error: "Invalid admin token" });
  }

  const newProduct = new Product(product);

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
