const express = require("express")
const router = express.Router()


router.post("/", async (req, res) => {
    const {products, total} = req.body

    if(!products || !products.length ) {
        return res.status(400).json({error:"Product not found"})}

    const newOrder = new Order({

        products,
        total,
        user:req.user.userId
    })

    await newOrder.save();
    res.status(201).json(newOrder);

})

router.get("/", async (req,res) => {
    const orders = await Order.find().populate("products.productId")
    res.json(orders)
})

module.exports = router;