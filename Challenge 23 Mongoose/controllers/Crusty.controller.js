const {
  postCrusty,
  getAllCrustys,
  deleteCrusty,
  updateCrusty,
} = require("../routes/Crusty.route");

const router = require("express").Router();
router.post("/AddCrusty", postCrusty);
router.get("/AllCrustys", getAllCrustys);
router.delete("/DeleteCrusty/:id", deleteCrusty);
router.put("/UpdateCrusty/:id", updateCrusty);

module.exports = router;
