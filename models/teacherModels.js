const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
    biodata: {
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        nic: {
            type: String,
            required: true,
        },
        telephone: {
            type: Number,
            required: true,
        },
        profile_image: {
            type: String,
            required: false,
        },
        qualification: {
            type: String,
            required: true,
        },
        dob: {
            type: String,
            required: false,
        },
        age: {
            type: Number,
            required: false,
        },
        position: {
            type: String,
            required: false,
        },
        class_teacher: {
            type: String,
            required: false,
        },
    },
    leaves: [{
        reason: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
    }],
    status: {
        type: String,
        required: false
    },
    complaints: [{
        reason: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
    }],
    salary: [{
        amount: {
            type: Number,
            required: true
        },
        date: {
            type: String,
            required: true
        },
    }]
});


const teacher = mongoose.model('Teachers', teacherSchema);
module.exports = teacher;
