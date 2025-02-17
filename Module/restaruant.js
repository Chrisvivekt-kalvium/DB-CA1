const mongoose = require("mongoose")
const restaurnts = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    place:{
        type: String,
        required: true,
    },
    itemArr:{
        type:[restaurnts],
        default:[]
    }
},{timestamps:true})