const mongoose = require('mongoose')

const salarySchema = mongoose.Schema({
    amount: {
        type: Number,
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

const salary = mongoose.model("Salary",salarySchema);

module.exports = salary;