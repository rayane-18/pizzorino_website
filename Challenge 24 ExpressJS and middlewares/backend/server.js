const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cartRouter = require("./controllers/cart.controller");
const userRouter = require("./controllers/user.controller.js");
const productRoutes = require("./routes/product.router.js");
app.use(express.json());
dotenv.config();
app.use(cors());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use("/cart", cartRouter);
app.use("/user", userRouter);
app.use("/api/products", productRoutes);
app.listen(port, () => {
  console.log("server is running " + port);
});
