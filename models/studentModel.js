const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


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
  email: {
    type: String,
    required: true,
    unique: false,
    validate: {
      validator: (value) => {
        // Use a regular expression to validate the email formats
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: 'Invalid email format',
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        // Check if the password is at least 8 characters long and contains at least one special character
        return /^(?=.*?[!@#$%^&*()_+-=])(?=.*?[A-Za-z]).{8,}$/.test(value);
      },
      message: 'Password must be at least 8 characters long and contain at least one special character',
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
    reason:{
      type: String,
      required: true
    },
    date:{
      type: String,
      required: true
    },
  }]
    
    
},
  { timestamps: true }
);

studentSchema.pre('save', async function (next) {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(this.password, salt);

    // Replace the plaintext password with the hashed password
    this.password = hashedPassword;

    // Move on to the next middleware
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('Students', studentSchema);
module.exports = User;