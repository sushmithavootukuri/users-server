const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true

    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

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

