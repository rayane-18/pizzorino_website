const Pokemon = require("../models/Pokemon.model");

const postPokemon = async (req, res) => {
  const addPokemon = new Pokemon(req.body);
  const savedPokemon = await addPokemon.save();

  try {
    res.status(200).json(savedPokemon);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getAllPokemons = async (req, res) => {
  const allData = await Pokemon.find();
  try {
    res.status(200).json(allData);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const deletePokemon = async (req, res) => {
  const id = req.params.id;
  await Pokemon.findByIdAndDelete(id);
  try {
    res.status(200).json({ message: "deleted Pokemon" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const updatePokemon = async (req, res) => {
  const id = req.params.id;
  await Pokemon.findByIdAndUpdate(id, { $set: req.body });
  try {
    res.status(200).json({ message: "updated pokemon" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = { postPokemon, getAllPokemons, deletePokemon, updatePokemon };
