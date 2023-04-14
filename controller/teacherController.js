const Teacher = require('../models/teacherModels.js');

const addTeacher = async(req,res)=>{

    try {

        const teacher = new Teacher(req.body);
        await teacher.save();
        res.status(201).json({"data":teacher});
      }

    catch (error) {
  
      res.status(400).json({ error: error.message });
  
    }
}

const getAllTeachers = async(req,res)=>{

    try {
  
      const teacher = await Teacher.find();
      res.status(201).json(teacher);
  
    } 
  
    catch (error) {
  
      res.status(400).json({ error: error.message });
  
    }
  }


  const getTeacherById = async(req,res)=>{

    try {

      const id = req.params.id
      const teacher = await Teacher.findById(id);
      res.status(201).json(teacher);

    } catch (error) {

      res.status(400).json({ error: error.message });

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