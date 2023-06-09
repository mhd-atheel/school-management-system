const Siblings = require('../models/siblingsModel.js')


const addSiblings = async (req, res) => {

    try {

        const siblings = new Siblings(req.body);
        await siblings.save();
        res.status(201).json({ "data": siblings });

    }

    catch (error) {

        res.status(400).json({ error: error.message });

    }
}


const getSiblings = async (req,res)=>{

    try {


       const siblings = await Siblings.find();
       res.status(201).json(siblings);


    }
    
    catch (error) {

        res.status(400).json({ error: error.message });

    }
}



const getSiblingsById = async (req, res) => {

    const id = req.params.id;
  
    try {


      const siblings = await Siblings.findById(id);
      res.status(201).json({ data: siblings });

    } 
    
    catch (error) {

      res.status(400).json({ error: error.message });

    }
}


const updateSiblings = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
  
    try {
      const siblings = await Siblings.findByIdAndUpdate(id, body, { new: true });
      res.status(201).json(siblings);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };



  const deleteSiblings = async (req, res) => {
    const id = req.params.id;
  
    try {
      await Siblings.findByIdAndDelete(id);
      res.status(201).send(">>>>>>> ID OF " + id + " DELETED SUCCESSFULLY");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };



module.exports = {
   addSiblings,
   getSiblings,
   getSiblingsById,
   updateSiblings,
   deleteSiblings
};