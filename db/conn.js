const mongoose=require("mongoose");
const dotenv=require("dotenv");
const { log } = require("console");
dotenv.config();
// mongoose.connect(process.env.URL)

const connectdatabase=async()=>{
    try{
        await mongoose.connect(process.env.URL);
        console.log("connected to mongodb");

    }
    catch(e){
        console.log(e);
    }
}

module.exports=connectdatabase;
