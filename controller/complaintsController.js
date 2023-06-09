const Complaints = require('../models/complaintsModel.js')


const addComplaints = async (req, res) => {

    try {

        const complaints = new Complaints(req.body);
        await complaints.save();
        res.status(201).json({ "data": complaints });

    }

    catch (error) {

        res.status(400).json({ error: error.message });

    }
}


const getComplaints = async (req,res)=>{

    try {


       const complaints = await Complaints.find();
       res.status(201).json(complaints);


    }
    
    catch (error) {

        res.status(400).json({ error: error.message });

    }
}



const getComplaintsById = async (req, res) => {

    const id = req.params.id;
  
    try {


      const complaints = await Complaints.findById(id);
      res.status(201).json({ data: complaints });

    } 
    
    catch (error) {

      res.status(400).json({ error: error.message });

    }
}


const updateComplaints = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
  
    try {
      const complaints = await Complaints.findByIdAndUpdate(id, body, { new: true });
      res.status(201).json(complaints);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };



  const deleteComplaints = async (req, res) => {
    const id = req.params.id;
  
    try {
      await Complaints.findByIdAndDelete(id);
      res.status(201).send(">>>>>>> ID OF " + id + " DELETED SUCCESSFULLY");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };



module.exports = {
   addComplaints,
   getComplaints,
   getComplaintsById,
   updateComplaints,
   deleteComplaints
};