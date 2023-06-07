const mongoose = require('mongoose');

const GradeSchema  = mongoose.Schema({
    grade: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true,
      },
},
  {timestamps : true}
)

const grade = mongoose.model('Grades', GradeSchema);
module.exports = grade;
