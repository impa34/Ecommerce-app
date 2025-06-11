const mongoose = require("mongoose")


const order = new mongoose.Schema({
    products: [
        {
            productId: {
                type:mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            quantity: {
                type: Number,
                default: 1
            },

        },
    ],
    total: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now

    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
    })

    module.exports = mongoose.model("Order", order)