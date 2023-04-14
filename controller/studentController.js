const Student = require('../models/studentModel');



// Create Student 
// http://localhost:3000/student/add-student/
// POST REQUEST
const addStudent = async(req,res)=>{

  try {
    const {email} = req.body;
    
    const oldUser = await Student.findOne({email});
    if(oldUser){
      res.status(409).send("student Email Already Exist".toUpperCase);
    }
    else{
      const student = new Student(req.body);
      await student.save();
      res.status(201).json({"data":student});
    }
  }
  catch (error) {

    res.status(400).json({ error: error.message });

  }
}

// Get All Student
//http://localhost:3000/student/get-student/
//GET REQUEST
const getAllStudents = async(req,res)=>{

  try {

    const user = await Student.find();
    res.status(201).json(user);

  } 

  catch (error) {

    res.status(400).json({ error: error.message });

  }
}


// Get Student by ID 
//http://localhost:3000/student/get-student-by-id/6438372ff37f64f3e8c75ab5
//GET REQUEST
const getStudentById = async(req,res)=>{

    try {

      const id = req.params.id
      const student = await Student.findById(id);
      res.status(201).json(student);

    } catch (error) {

      res.status(400).json({ error: error.message });

    }

}


// Update Student by ID 
//http://localhost:3000/student/update-student-by-id/6438372ff37f64f3e8c75ab5
//PUT REQUEST
const updateStudent = async(req,res)=>{

    try {

      const id = req.params.id;
      const body = req.body;
      const student = await Student.findByIdAndUpdate(id, body, { new: true });
      res.status(201).json(student);

    } catch (error) {

      res.status(400).json({ error: error.message });

    }

}

// Delet Student by ID 
//http://localhost:3000/student/delete-student-by-id/6438372ff37f64f3e8c75ab5
//DELETE REQUEST
const deleteStudent = async(req,res)=>{

   try {
    
    const id = req.params.id;
      await Student.findByIdAndDelete(id);
      res.status(201).send(">>>>>>> ID OF "+ id +" DELETED SUCCESSFULLY");
    

   } catch (error) {

    res.status(400).json({ error: error.message });

   }

}


module.exports = {
  addStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
}
