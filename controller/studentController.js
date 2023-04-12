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


const addStudent = async(req,res)=>{

  try {

    const student = new Student(req.body);
    await student.save();
    res.status(201).json({"data":student});
  }
  
  catch (error) {

    res.status(400).json({ error: error.message });

  }
}


const getAllStudents = async(req,res)=>{

  try {
    const user = await Student.find()
    res.status(201).json(user);

  } 

  catch (error) {

    res.status(400).json({ error: error.message });

  }
}



const getStudentById = async(req,res)=>{

    try {
      const id = req.params.id
      const student = await Student.findById(id)
      res.status(201).json(student);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}


module.exports = {
  addStudent,
  getAllStudents,
  getStudentById
}
