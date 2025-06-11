const express = require("express");

const router = express.Router();


const Product = require("../models/Product.js")

router.get("/products", async (req, res) => {
    try
    {const products = await Product.find()
    res.json(products);
} catch (e) {
    res.status(500).send("Error fetching products")
}
});
router.get("/products/:id", async (req, res) => {
    try{
        const product = await Product.findById(req.params.id)
        if (!product) return res.status(404).json({error: "Product not found"})
        res.json(product)
    } catch(e) {
        res.status(400).json({ error: "Invalid Id" });
    }
});

router.post("/products",async (req, res) => {
    try{
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json(newProduct);
    } catch (e) {
        res.status(400).send("Error creating products")
    }

});

router.put("/products/:id", async (req, res) => {
  try{
    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.body,
        req.body,
        {new:true}
    )
    if (!updatedProduct) return res.status(404).send("Product not found")
  }catch(e) {
    res.status(400).send("Error updating the product")
  }
});

router.delete("/products/:id", async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(
            req.params.id
        )
        if(!deletedProduct) return res.status(404).send("Product not found")
    } catch(e) {
    res.status(400).send("Error deleting the product")
    }
});






module.exports = router;
