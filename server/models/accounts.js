const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accSchema = new Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
}, {
    timestamps : true
})

const Account = mongoose.model('Account', accSchema)

module.exports = Account