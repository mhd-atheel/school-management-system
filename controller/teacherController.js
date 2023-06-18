const Teacher = require("../models/teacherModels.js");
const Salary = require("../models/salaryModel.js")
const nodemailer  = require('nodemailer')

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

    const mailOptions = {
      from: 'easyschoolatsrilanka@gmail.com',
      to: email,
      subject: 'Test Email',
      text: `your email is ${email} and password is ${password}`
    };

    await teacher.save();

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.send('Email sent successfully');
      }
    });


    


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
    console.log(teachers);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

const getTeacherById = async (req, res) => {
  try {
    // Find the teacher by ID and update the fields
    const id = req.params.id;
    const teacher = await User.findById(id);

    if (!teacher) {
      return res.status(404).json({ error: `Teacher with ID ${id} not found` });
    } else {
      res.json({ message: "Teacher updated successfully", teacher });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};





// Update a user by ID
const updateTeacher = async (req, res) => {
  try {
    const userId = req.params.id;

    // Get the allowed fields from the user model
    const allowedFields = Object.keys(User.schema.paths);

    // Get the fields in the request body
    const fieldsToUpdate = Object.keys(req.body);

    // Check for any extra fields not in the user model
    const invalidFields = fieldsToUpdate.filter(
      (field) => !allowedFields.includes(field)
    );

    if (invalidFields.length > 0) {
      console.log("Invalid fields found:", invalidFields);
      res
        .status(400)
        .json({ error: "Invalid fields found", fields: invalidFields });
      return;
    }

    // Build the updatedUser object
    const updatedUser = {};

    if (req.body.first_name) {
      updatedUser.first_name = req.body.first_name;
    }

    if (req.body.last_name) {
      updatedUser.last_name = req.body.last_name;
    }

    if (req.body.age) {
      updatedUser.age = req.body.age;
    }

    if (req.body.dob) {
      updatedUser.dob = req.body.dob;
    }

    if (req.body.address) {
      updatedUser.address = req.body.address;
    }

    if (req.body.nic) {
      updatedUser.nic = req.body.nic;
    }

    if (req.body.telephone) {
      updatedUser.telephone = req.body.telephone;
    }

    if (req.body.qualification) {
      updatedUser.qualification = req.body.qualification;
    }

    if (req.body.status) {
      updatedUser.status = req.body.status;
    }

    if (req.body.teacher_id) {
      updatedUser.teacher_id = req.body.teacher_id;
    }

    if (req.body.allocated_subject) {
      updatedUser.allocated_subject = req.body.allocated_subject;
    }

    if (req.body.email) {
      updatedUser.email = req.body.email;
    }

    if (req.body.password) {
      updatedUser.password = req.body.password;
    }

    if (req.body.join_year) {
      updatedUser.join_year = req.body.join_year;
    }

    if (req.body.profile_image) {
      updatedUser.profile_image = req.body.profile_image;
    }

    if (req.body.birth_certificate) {
      updatedUser.birth_certificate = req.body.birth_certificate;
    }

    if (req.body.nic_doc) {
      updatedUser.nic_doc = req.body.nic_doc;
    }

    if (req.body.end_year) {
      updatedUser.end_year = req.body.end_year;
    }

    if (req.body.other_docs) {
      updatedUser.other_docs = req.body.other_docs;
    }

    if (req.body.user_type) {
      updatedUser.user_type = req.body.user_type;
    }
    if (
      req.body.job ||
      req.body.father_name ||
      req.body.mother_name ||
      req.body.student_index ||
      req.body.before_school ||
      req.body.grade ||
      req.body.staff_id
    ) {
      res
      .status(400)
      .json({ error: "Invalid fields found" });
      return;
    }

    // ... (other fields)

    // Update the user document
    const result = await User.findByIdAndUpdate(userId, updatedUser);

    if (!result) {
      console.log("User not found");
      res.status(404).send("User not found");
      return;
    }

    console.log("User updated successfully");
    res
      .status(200)
      .json({
        status: 200,
        message: "User Updated Succesfully",
        response: result,
      });
  } catch (err) {
    console.log("Error occurred while updating user", err);
    res.status(500).send("Internal server error");
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
    res.status(500).json({ error: "Error searching users" });
  }
};



const getTeacherSalary = async (req, res) => {
  try {
    const {user_id} = req.body
    const id = await User.findById(user_id)

    if (!user_id) {
      return res.status(400).json({ error: "User Id  is required" });
    }
    if(!id){
      return res.status(400).json({ error: "User Id Not Found" });
    }


    const searchQuery = new RegExp(user_id);

    const salary = await Salary.find({ user_id: { $regex: searchQuery } });

   
    console.log("Succuss >>>>>>>>>>>>>>>>>><<<<<<<<<<");
    console.log(salary); 
    res.status(200).json(salary);
  } catch (error) {
    res.status(500).json({ error: "An error occurred " });
    console.log(error);
  }
};


const sendMail = async(req,res)=>{

    
      const mailOptions = {
        from: 'easyschoolatsrilanka@gmail.com',
        to: 'aathilmazz1234@gmail.com',
        subject: 'Test Email',
        text: 'This is a test email sent using Nodemailer in Express.js'
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.send('Error sending email');
        } else {
          console.log('Email sent: ' + info.response);
          res.send('Email sent successfully');
        }
      });
   
    
}








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


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'easyschoolatsrilanka@gmail.com',
    pass: 'cdllsecggvoinglj'
  }
});



module.exports = {
  addTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
  loginTeacher,
  searchTeacher,
  getTeacherSalary,
  sendMail
};



