const mongoose = require('mongoose')

const complaintsSchema = mongoose.Schema({
    reason: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
)

const complaints = mongoose.model("Complaints",complaintsSchema);

module.exports = complaints;