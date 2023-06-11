const User = require('../models/userModel.js');
// const Student = require('../models/studentModel.js');
const bcrypt = require('bcrypt')



// Create Student 
// http://localhost:3000/student/add-student/
// POST REQUEST
const addStudent = async(req,res)=>{
  try {
    const {
      first_name,
      last_name,
      father_name,
      mother_name,
      age,
      dob,
      address,
      nic,
      telephone,
      status,
      email,
      password,
      join_year,
      profile_image,
      birth_certificate,
      nic_doc,
      end_year,
      other_docs,
      user_type,
      student_index,
      grade,
      before_school,
      religion
    } = req.body;

    const hashed = await hashedPassword(password);

    // Create a new teacher document
    const student = new User({
      first_name,
      last_name,
      father_name,
      mother_name,
      age,
      dob,
      address,
      nic,
      telephone,
      status,
      email,
      password: hashed,
      join_year,
      profile_image,
      birth_certificate,
      nic_doc,
      end_year,
      other_docs,
      user_type,
      student_index,
      grade,
      before_school,
      religion
    });

    await student.save();

    res.json({ message: "Student created successfully", student });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
}






const loginStudent = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!user) {
      return res.status(401).json({ error: "Incorrect Email" });
    } else if (!isValidPassword) {
      return res.status(401).json({ error: "Incorrect Password" });
    } else {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_TOKEN);
      //  const first_name = user.first_name;
      //  const last_name = user.last_name;
      //  const user_id = user._id;
      //  const profile_image = user.profile_image;
      //  const user_type = user.user_type;

      res.json({
        message: `${email} is Login successful`,
        token,
        user,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};




// Get All Student
//http://localhost:3000/student/get-student/
//GET REQUEST
const getAllStudents = async(req,res)=>{

  try {
    // Retrieve all teacher
    const student = await User.find({ student_index: { $exists: true } });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
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
  deleteStudent,
  loginStudent
}


const hashedPassword = async (password) => {
  const saltRound = 10;

  try {
    const hashed = await bcrypt.hash(password, saltRound);
    return hashed;
  } catch (error) {
    throw new Error("Password hashing failed");
  }
};
