const express = require("express")
const dotenv = require("dotenv")
const mongoConnect = require("./Db")
dotenv.config()

const app = express()
app.use(express.json())
const PORT = process.env.PORT||3600
app.get("/",(req,res) => {res.send("server connected")} )
mongoConnect()
app.listen(PORT,() => {console.log(`server is running on http://localhost:${PORT}`)})