const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    username:String,
    number:String,
})


const User = mongoose.model("User",userSchema);
module.exports = User;