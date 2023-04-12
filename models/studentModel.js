const mongoose = require('mongoose');


const studentSchema =  mongoose.Schema({

  biodata :[
    {
      first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true,
      },
    address: {
        type: String,
        required: true
      },
    father_name: {
        type: String,
        required: true
    },
    mother_name: {
        type: String,
        required: true,
      },
    telephone: {
        type: Number,
        required: true
      },
    religion: {
        type: String,
        required: true
    },
    profile_image: {
        type: String,
        required: false,
      },
    grade: {
        type: String,
        required: true
      },
    dob: {
        type: String,
        required: false,
    },
    age: {
      type: Number,
      required: false,
  },
    }
  ],
  leaves: [{
    type: String,
    required: false
  }],
  marks: [{
    type: String,
    required: false
  }],
  status : [{
    type: String,
    required: false
  }],
  complaints : [{
    type: String,
    required: false
  }]
    
    
},
  { timestamps: true }
);

const User = mongoose.model('User', studentSchema);
module.exports = User;