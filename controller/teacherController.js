const Teacher = require("../models/teacherModels.js");
const User = require("../models/userModel.js")

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
      password,
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

const getAllTeachers = async (req, res) => {
  try {
    // Retrieve all teacher
    const teachers = await User.find();

    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

const getTeacherById = async (req, res) => {
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
    res
      .status(500)
      .json({ error: "An error occurred while updating the teacher" });
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

module.exports = {
  addTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
};
