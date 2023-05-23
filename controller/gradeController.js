const Grade = require('../models/gradeModel.js')

const addGrade = async(req,res)=>{

    try {
        const {grade} = req.body
        var oldGrade = await Grade.findOne({grade})
        if(oldGrade){
            res.status(409).send("student Grade Already Exist".toUpperCase);
        }
        else{
            const grades = new Grade(req.body);
            await grades.save();
            res.status(201).json({"data":grades});
        }
      }

    catch (error) {
  
      res.status(400).json({ error: error.message });
  
    }
}


module.exports={
    addGrade
}
