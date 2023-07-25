const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName : {
        type : String,
        required : [true,"Please enter product name"]
    },
    price : {
        type : Number,
        required : [true,"Please enter product price"]
    },
    productImage : {
        type : String,
        required : [false,"Please enter product image"]
    },
    category : {
        type : String,
        required : [true,"Please enter product category"]
    },
    starRate : {
        type : Number,
        required : [false]
    }
},
{
    timestamp : true
})

module.exports = mongoose.model("products",productSchema);