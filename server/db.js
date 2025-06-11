const mongoose = require("mongoose")

mongoose
  .connect("mongodb+srv://impa34:123@ecommerce.dgxxnxr.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .catch((e) => console.log(`Error ${e}`))

