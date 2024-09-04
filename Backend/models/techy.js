const mongoose = require('mongoose')

const techySchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const techyModel = mongoose.model("techy",techySchema)
module.exports = techyModel