const mongoose = require("mongoose")

const product = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    inStock: Boolean,
    image: String,
})

module.exports = mongoose.model("Product", product)