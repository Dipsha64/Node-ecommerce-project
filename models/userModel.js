const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : [true , "Please enter first name"]
    },
    lastName : {
        type : String,
        required : [true , "Please enter last name"]
    },
    email : {
        type : String,
        required : [true , "Please enter email"],
        unique : [true , "Email address is already taken"]
    }
},
{
    timestamp : true
})

module.exports = mongoose.model("users" , userSchema);