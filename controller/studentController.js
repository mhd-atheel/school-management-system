const Student = require('../models/studentModel');



// app.post('/users', async (req, res) => {
//     try {
//       const student = new Student(req.body);
//       await student.save();
//       res.status(201).json(student);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   });


exports.addStudent = async(req,res)=>{
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({"data":student});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

exports.getAllStudents = async(req,res)=>{
  try {
    const user = await Student.find()
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}




