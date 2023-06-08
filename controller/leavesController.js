const Leaves = require('../models/leavesModel.js')


const addLeaves = async (req, res) => {

    try {

        const leaves = new Leaves(req.body);
        await leaves.save();
        res.status(201).json({ "data": leaves });

    }

    catch (error) {

        res.status(400).json({ error: error.message });

    }
}


const getLeaves = async (req,res)=>{

    try {


       const leaves = await Leaves.find();
       res.status(201).json(leaves);


    }
    
    catch (error) {

        res.status(400).json({ error: error.message });

    }
}



const getLeavesById = async (req, res) => {

    const id = req.params.id;
  
    try {


      const leaves = await Leaves.findById(id);
      res.status(201).json({ data: leaves });

    } 
    
    catch (error) {

      res.status(400).json({ error: error.message });

    }
}


const updateLeaves = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
  
    try {
      const leaves = await Leaves.findByIdAndUpdate(id, body, { new: true });
      res.status(201).json(leaves);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };



  const deleteLeaves = async (req, res) => {
    const id = req.params.id;
  
    try {
      await Leaves.findByIdAndDelete(id);
      res.status(201).send(">>>>>>> ID OF " + id + " DELETED SUCCESSFULLY");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };



module.exports = {
    addLeaves,
    getLeaves,
    getLeavesById,
    updateLeaves,
    deleteLeaves
};