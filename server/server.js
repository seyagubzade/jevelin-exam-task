const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const app = express()
const PORT = 8080
const JevelinRouter = require("./routes/Jevelin.routes")

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://seyagubzade:seyagubzade123@cluster0.2wwolad.mongodb.net/')
    .then(() => console.log('connected to db!'));

app.use("/jevelin", JevelinRouter)


app.listen(PORT, () => {
    console.log(`listening to PORT ${PORT}`)
})