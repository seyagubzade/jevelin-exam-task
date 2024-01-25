const mongoose = require('mongoose');

const JevelinModel = mongoose.model("JevelinModel", new mongoose.Schema({
    title: String,
    subTitle: String,
    desc: String,
    model: String,
    price: Number,
    image: String
}))

module.exports = { JevelinModel }