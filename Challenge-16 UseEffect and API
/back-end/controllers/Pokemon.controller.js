const {
  postPokemon,
  getAllPokemons,
  deletePokemon,
  updatePokemon,
} = require("../routes/Pokemon.route");

const router = require("express").Router();
router.post("/AddPokemon", postPokemon);
router.get("/AllPokemons", getAllPokemons);
router.delete("/DeletePokemon/:id", deletePokemon);
router.put("/UpdatePokemon/:id", updatePokemon);

module.exports = router;
