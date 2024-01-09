const Crusty = require("../models/Crusty.model");

const postCrusty = async (req, res) => {
  try {
    const addCrusty = new Crusty(req.body);
    const savedCrusty = await addCrusty.save();
    res.status(200).json(savedCrusty);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error while saving Crusty", error: err.message });
  }
};

const getAllCrustys = async (req, res) => {
  const allData = await Crusty.find();
  try {
    res.status(200).json(allData);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const deleteCrusty = async (req, res) => {
  const id = req.params.id;
  await Crusty.findByIdAndDelete(id);
  try {
    res.status(200).json({ message: "deleted Crusty" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const updateCrusty = async (req, res) => {
  const id = req.params.id;
  try {
    await Crusty.findByIdAndUpdate(id, { $set: req.body });
    res.status(200).json({ message: "Crusty updated successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error while updating Crusty", error: err.message });
  }
};

module.exports = { postCrusty, getAllCrustys, deleteCrusty, updateCrusty };
