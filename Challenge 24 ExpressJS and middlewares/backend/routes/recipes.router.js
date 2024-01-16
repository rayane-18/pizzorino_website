const router = express.Router();
const Recipes = require("../models/recipes.model.js");

router.post("/add-recipes", async (req, res) => {
  const { adminToken, recipes } = req.body;

  if (adminToken !== "dsklfjdskljfkldsajfklads") {
    return res.status(401).json({ error: "Invalid admin token" });
  }

  const newRecipes = new Recipes(recipes);

  try {
    const savedRecipes = await newRecipes.save();
    res.status(201).json(savedRecipes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
