const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

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
    required: false,
  },
  nic: {
    type: String,
    required: false,
  },
  qualification: {
    type: String,
    required: false,
  },
  father_name: {
    type: String,
    required: false,
  },
  mother_name: {
    type: String,
    required: false,
  },
  telephone: {
    type: Number,
    required: false,
  },
  religion: {
    type: String,
    required: false,
  },
  profile_image: {
    type: String,
    required: false,
  },
  grade: {
    type: String,
    required: false,
  },
  allocated_subject: {
    type: String,
    required: false,
  },
  dob: {
    type: String,
    required: false,
  },
  user_type: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,

  },
  join_year: {
    type: Number,
    required: false,
  },

  end_year: {
    type: Number,
    required: false,

  },
  teacher_id: {
    type: Number,
    required: false,
  },
  staff_id: {
    type: Number,
    required: false,
  },
  student_index: {
    type: Number,
    required: false,
  },
  before_school: {
    type: String,
    required: false,
  },
  other_docs: {
    type: String,
    required: false,
  },

  class_teacher: { 
    type: String,
    required: false,
  },
  job: {
    type: String,
    required: false,
  },
  birth_certificate: {
    type: String,
    required: false,
  },
  nic_doc: {
    type: String,
    required: false,
  },

  email: {
    type: String,
    required: false,
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
    required: false,
    validate: {
      validator: (value) => {
        // Check if the password is at least 8 characters long and contains at least one special character
        return /^(?=.*?[!@#$%^&*()_+-=])(?=.*?[A-Za-z]).{8,}$/.test(value);
      },
      message: 'Password must be at least 8 characters long and contain at least one special character',
    },
  },
  status: {
    type: String,
    required: false,
  },

},
   {timestamps:true}
);




const user = mongoose.model('Users', userSchema);
module.exports = user;
