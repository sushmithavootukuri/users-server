const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('users', userSchema)

