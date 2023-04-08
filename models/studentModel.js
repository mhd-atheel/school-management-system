const mongoose = require('mongoose');


const studentSchema =  mongoose.Schema({
    name: [{
        type: String,
        required: true
    }],
    email: {
        type: String,
        required: true,
        
      },
    tel: {
        type: String,
        required: true
      },
});

const User = mongoose.model('User', studentSchema);
module.exports = User;