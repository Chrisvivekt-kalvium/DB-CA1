const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const mongoConnect = () =>{
    mongoose.connect(process.env.URL)
.then(() => {console.log = "Server connected to mongoose"})
.catch((err) => {console.log = "Connection erroe",err})
}
module.exports = mongoConnect