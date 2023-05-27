const Teacher = require('../models/teacherModels.js');
const Student = require('../models/studentModel.js');





const addTeacher = async(req,res)=>{
  try {
    const { biodata, leaves, status, complaints, salary, students } = req.body;

    // Create a new teacher document
    const teacher = new Teacher({
      biodata,
      leaves,
      status,
      complaints,
      salary,
      students: []
    });

    // Iterate over the provided student IDs
    for (const studentId of students) {
      // Fetch the student document
      const student = await Student.findById(studentId);

      if (!student) {
        return res.status(404).json({ error: `Student with ID ${studentId} not found` });
      }

      // Push the student's ObjectId to the teacher's students array
      teacher.students.push(student._id);
    }

    // Save the teacher document
    await teacher.save();

    res.json({ message: 'Teacher created successfully', teacher });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}







const getAllTeachers = async(req,res)=>{

  try {
    // Retrieve all teachers
    const teachers = await Teacher.find().populate('students');

    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
  
  }


  const getTeacherById = async(req,res)=>{

    const { id } = req.params;
    const updates = req.body;
  
    try {
      // Find the teacher by ID and update the fields
      const teacher = await Teacher.findByIdAndUpdate(id, updates, { new: true });
  
      if (!teacher) {
        return res.status(404).json({ error: `Teacher with ID ${id} not found` });
      }
  
      res.json({ message: "Teacher updated successfully", teacher });
    } catch (error) {
      res.status(500).json({ error: "An error occurred while updating the teacher" });
    }
  }

const updateTeacher = async(req,res)=>{

    try {
      const id = req.params.id;
      const body = req.body;
      const teacher = await Teacher.findByIdAndUpdate(id, body, { new: true });
      res.status(201).json(teacher);

    } catch (error) {

      res.status(400).json({ error: error.message });

    }

}

const deleteTeacher = async(req,res)=>{

    try {
     
     const id = req.params.id;
       await Teacher.findByIdAndDelete(id);
       res.status(201).send(">>>>>>> ID OF "+ id +" DELETED SUCCESSFULLY");
     
 
    } catch (error) {
 
     res.status(400).json({ error: error.message });
 
    }
 
 }


module.exports = {
    addTeacher,
    getAllTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacher
}