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
    required: true,
  },
  nic: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  father_name: {
    type: String,
    required: true,
  },
  mother_name: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  profile_image: {
    type: String,
    required: false,
  },
  grade: {
    type: String,
    required: true,
  },
  allocated_subject: {
    type: String,
    required: true,
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
  leaves: [
    {
      reason: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
  ],
  awards: [
    {
      image: {
        type: String,
        required: false,
      },
      title: {
        type: String,
        required: true,
      },
    },
  ],
  salary: [
    {
      amount: {
        type: Number,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
  ],
  penalty_fee: [
    {
      amount: {
        type: Number,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      reason: {
        type: String,
        required: true,
      },
    },
  ],
  marks: [
    {
      subject: {
        type: String,
        required: true,
      },
      mark: {
        type: Number,
        required: true,
      },
    },
  ],
  status: {
    type: String,
    required: false,
  },
  complaints: [
    {
      reason: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
  ],
  
  siblings: [
    {
      name: {
        type: String,
        required: true,
      },
      age: {
        type: String,
        required: true,
      },
    },
  ],
});



const user = mongoose.model('Users', userSchema);
module.exports = user;
