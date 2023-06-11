const Teacher = require("../models/teacherModels.js");
const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const addTeacher = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      age,
      dob,
      address,
      nic,
      telephone,
      qualification,
      status,
      teacher_id,
      allocated_subject,
      email,
      password,
      join_year,
      profile_image,
      birth_certificate,
      nic_doc,
      end_year,
      other_docs,
      user_type,
    } = req.body;

    const hashed = await hashedPassword(password);

    // Create a new teacher document
    const teacher = new User({
      first_name,
      last_name,
      age,
      dob,
      address,
      nic,
      telephone,
      qualification,
      status,
      teacher_id,
      allocated_subject,
      email,
      password: hashed,
      join_year,
      profile_image,
      birth_certificate,
      nic_doc,
      end_year,
      other_docs,
      user_type,
    });

    await teacher.save();

    res.json({ message: "Teacher created successfully", teacher });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

const loginTeacher = async (req, res) => {
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

const getAllTeachers = async (req, res) => {
  try {
    // Retrieve all teacher
    const teachers = await User.find({ teacher_id: { $exists: true } });
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

const getTeacherById = async (req, res) => {

  try {
    // Find the teacher by ID and update the fields
    const  id  = req.params.id;
    const teacher = await User.findById(id);

    if (!teacher) {
      return res.status(404).json({ error: `Teacher with ID ${id} not found` });
    }else{
      res.json({ message: "Teacher updated successfully", teacher });
    }

    
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred" });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const teacher = await Teacher.findByIdAndUpdate(id, body, { new: true });
    res.status(201).json(teacher);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const id = req.params.id;
    await Teacher.findByIdAndDelete(id);
    res.status(201).send(">>>>>>> ID OF " + id + " DELETED SUCCESSFULLY");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const searchTeacher = async (req, res) => {
  try {
    const { first_name } = req.body;

    if (!first_name) {
      return res.status(400).json({ error: "First name is required" });
    }

    const searchQuery = new RegExp(first_name, "i");

    const users = await User.find({ first_name: { $regex: searchQuery } });
    
    res.status(200).json(users);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error searching users' });
  }
};



module.exports = {
  addTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
  loginTeacher,
  searchTeacher
};

// Methods or Functions
const hashedPassword = async (password) => {
  const saltRound = 10;

  try {
    const hashed = await bcrypt.hash(password, saltRound);
    return hashed;
  } catch (error) {
    throw new Error("Password hashing failed");
  }
};
