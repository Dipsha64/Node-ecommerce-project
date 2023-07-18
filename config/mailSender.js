const nodemailer = require("nodemailer");

const transportData = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth : {
        user : "dipshaj64@gmail.com",
        pass : "dipshajk#64"
    }
})

const message = {
    from : "dipshaj64@gmail.com",
    to : "dipshakalaria@gmail.com",
    subject : "Node JS Register mail",
    text : "For clients who register in our system only"
}

transportData.sendMail(message,(err)=>{
    if(err){
        console.log("It has an error",err);
    }
    else{
        console.log("mail sent successfully!");
    }
})