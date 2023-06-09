const mongoose = require('mongoose')

const siblingsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    grade: {
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

const siblings = mongoose.model("Siblings",siblingsSchema);

module.exports = siblings;