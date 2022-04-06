const mongoose = require("mongoose");
const schema = mongoose.Schema;
const orderSchema = new mongoose.Schema({
    userId: schema.Types.ObjectId,
    productList: [
        {
            product: {
                type: schema.Types.ObjectId,
                ref: "products",
            },
            totalPrice: {
                type: Number,
                required: true
            },
            qty: {
                type: Number,
                required: true
            }
        }
    ],
    packageList: [
        {
            package: {
                type: schema.Types.ObjectId,
                ref: "packages",
            },
            totalPrice: {
                type: Number,
                required: true
            },
            qty: {
                type: Number,
                required: true
            }
        }
    ],
    date : {
        type : Date,
        default : Date.now
    },
    mobile : {
        type : String,
        required : true, 
    },
    address : {
        type : String,
        required : true
    }
});
    
module.exports = mongoose.model("orders", orderSchema);