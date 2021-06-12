const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        default: 1
    },
    faculty: {
        type: String,
    },
}, {
    versionKey: false
});

module.exports = mongoose.model('Student', studentSchema);