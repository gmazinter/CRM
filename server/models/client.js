const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientSchema = new Schema ({
    name: String,
    country: String,
    firstContact: String,
    email: String,
    emailType: String,
    sold: Boolean,
    owner: String
})

const Client = mongoose.model('Client', clientSchema)

module.exports = Client