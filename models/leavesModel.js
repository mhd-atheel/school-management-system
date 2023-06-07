const mongoose = require('mongoose')

const leavesSchema = mongoose.Schema({
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

const leaves = mongoose.model("Leaves",leavesSchema);

module.exports = leaves;