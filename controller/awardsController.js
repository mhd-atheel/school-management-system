const Awards = require("../models/awardsModel");



const addAwards = async (req, res) => {
  try {
    const awards = new Awards(req.body);
    await awards.save();
    res.status(201).json({ data: awards });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const getAwards = async (req, res) => {
  try {
    const awards = await Awards.find();
    res.status(201).json({ data: awards });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const getAwardsById = async (req, res) => {
  const id = req.params.id;

  try {
    const awards = await Awards.findById(id);
    res.status(201).json({ data: awards });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const updateAwards = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    const awaits = await Awards.findByIdAndUpdate(id, body, { new: true });
    res.status(201).json(awaits);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const deleteAwards = async (req, res) => {
  const id = req.params.id;

  try {
    await Awards.findByIdAndDelete(id);
    res.status(201).send(">>>>>>> ID OF " + id + " DELETED SUCCESSFULLY");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAwards,
  addAwards,
  getAwardsById,
  updateAwards,
  deleteAwards,
};
