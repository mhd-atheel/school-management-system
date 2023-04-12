const mongoose = require('mongoose');


const studentSchema =  mongoose.Schema({

  biodata :
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
    },
  leaves: [{
    reason:{
      type: String,
      required: true
    },
    date:{
      type: String,
      required: true
    },
  }],
  marks: [{
    subject:{
      type: String,
      required: true
    },
    mark:{
      type: Number,
      required: true
    },
  
  }],
  status:{
    type: String,
    required: false
  },
  complaints : [{
    type: String,
    required: false
  }]
    
    
},
  { timestamps: true }
);

const User = mongoose.model('Students', studentSchema);
module.exports = User;