const express = require("express")
const router = express.Router()
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session",  async (req,res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: req.body.items.map(item => ({
            price_data: {
                currency: "eur",
                product_data: {
                    name: item.name
                },
                unit_amount : Math.round(item.price * 100)
            },
            quantity: item.quantity
        })),
        mode: "payment",
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel"
    })
    res.json({url: session.url})
})

module.exports = router