const mongoose = require('mongoose')

const awardsSchema = mongoose.Schema({
    image: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
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

const awards = mongoose.model("Awards", awardsSchema);

module.exports = awards;