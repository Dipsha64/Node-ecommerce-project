const express = require("express");
const connectDb = require("./config/dbConnection");
const app = express();
const dotenv = require("dotenv").config();
connectDb();
app.use(express.json());

app.use("/api/users",require("./routes/userRoute"));
app.use("/api/product",require("./routes/productRoutes"));

const port = process.env.PORT || 5006;
app.listen(port,()=>{
    console.log("Server is running", port);
})