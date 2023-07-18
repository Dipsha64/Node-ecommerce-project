const nodemailer = require("nodemailer");
const UserModel = require("../models/userModel");

const registerUser = async (req,res) => {
    console.log("req...",req.body);
    const { firstName , lastName , email } = req.body;
    if(!firstName || !lastName || !email){
        res.status(400);
        throw new Error("All field is required");
    }
    const emailExist = await UserModel.findOne({email});
    if(emailExist){
        res.status(400);
        throw new Error("This email address is exist");
    }
    const newUser = await UserModel.create({
        firstName , lastName , email
    })
    if(newUser){
        res.json({email : newUser.email , firstName : newUser.firstName , lastName : newUser.lastName});
    }
    else{
        res.status(400);
        throw new Error("Requested data is not valid, Please try it again");
    }
    // const transportData = nodemailer.createTransport({
    //     service: 'gmail',
    //     port : 465,
    //     // secure : true,
    //     // logger : true,
    //     // debug : true,
    //     secureConnection : false,
    //     auth : {
    //         user : "dipshaj64@gmail.com",
    //         pass : "dipshajk#64"
    //     },
    //     tls:{
    //         rejectUnauthorized : true
    //     }
    // })
    
    // const message = {
    //     from : "dipshaj64@gmail.com",
    //     to : "dipshakalaria@gmail.com",
    //     subject : "Node JS Register mail",
    //     text : "For clients who register in our system only"
    // }

    // transportData.sendMail(message,(err)=>{
    //     if(err){
    //         console.log("It has an error",err);
    //     }
    //     else{
    //         console.log("mail sent successfully!");
    //     }
    // })
    res.json({message : "Register API"});
}

module.exports = { registerUser };