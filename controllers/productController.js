const productModel = require("../models/productModel");

const createProduct = async (req,res) =>{
    console.log("REQQQ",req.body);
    const { productName, price , productImage, category, starRate } = req.body;
    if(!productName || !price || !category){
        res.status(400);
        throw new Error("All fields are required");
    }
    const isExist = await productModel.findOne({productName});
    if(isExist){
        res.status(400);
        throw new Error("This product is already exists.");
    }
    if(starRate > 5){
        res.status(400);
        throw new Error("Please enter start rate value under 5 number.");
    }
    const newPro = await productModel.create({
        productName, price , productImage, category, starRate
    })
    if(newPro){
        res.json({productName : newPro.productName , category : newPro.category });
    }
    else{
        res.status(400);
        throw new Error("Requested data is not valid, Please try it again");
    }
}
module.exports = { createProduct };