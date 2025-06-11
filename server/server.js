const express = require("express");
const morgan = require("morgan");
const app = express();

const shopRoutes = require("./static/routes/shop");
const orderRoutes = require("./static/routes/orders");
const checkoutRoutes = require("./static/routes/checkout");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(morgan("dev"));
app.use(express.json());


app.use(shopRoutes);

app.use("/api/orders", orderRoutes);
app.use("/api", checkoutRoutes)

mongoose
  .connect("mongodb+srv://impa34:123@ecommerce.dgxxnxr.mongodb.net/")
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

app.set("appName", "ecomBackend");

app.use(express.static("./static"));

app.listen(3000);
console.log("Server on port 3000");
