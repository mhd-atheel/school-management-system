const Penalty = require("../models/penaltyModel");

const addPenalty = async (req, res) => {
  try {
    const penalty = new Penalty(req.body);
    await penalty.save();
    res.status(201).json({ data: penalty });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPenalty = async (req, res) => {
  try {
    const penalty = await Penalty.find();
    res.status(201).json(penalty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPenaltyById = async (req, res) => {
  const id = req.params.id;
  
  try {
    const penaltyId = await Penalty.findById(id);

    if(penaltyId){
        const penalty = await Penalty.findById(id);
        res.status(201).json({ data: penalty });
    }
    else {
        res.status(201).send(">>>>>>> ID OF " + id +"'s" + " PENALTY NOT AVAILABLE");
    }
   
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePenalty = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    const penaltyId = await Penalty.findById(id);
    
    if(penaltyId){
        const penalty = await Penalty.findByIdAndUpdate(id, body, { new: true });
        res.status(201).json({ data: penalty });
    }
    else {
        res.status(201).send(">>>>>>> ID OF " + id +"'s" + " PENALTY NOT AVAILABLE");
    }
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePenalty  = async (req, res) => {
  const id = req.params.id;

  try {
    const penaltyId = await Penalty.findById(id);

    if(penaltyId){
        
        await Penalty.findByIdAndDelete(id);
        res.status(201).send(">>>>>>> ID OF " + id + " DELETED SUCCESSFULLY");
    }
    else {
        res.status(201).send(">>>>>>> ID OF " + id +"'s" + " PENALTY NOT AVAILABLE");
    }
    
  
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = {
  addPenalty,
  getPenalty,
  getPenaltyById,
  updatePenalty,
  deletePenalty
};
