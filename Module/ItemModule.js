const mongoose = require("mongoose")
const item =  new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,

    }
},{timestamps:true})
module.exports = mongoose.model("item",item)
module.exports = {item,item}