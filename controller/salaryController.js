const Salary = require("../models/salaryModel");

const addSalary = async (req, res) => {
  try {
    const salary = new Salary(req.body);
    await salary.save();
    res.status(201).json({ data: salary });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSalary = async (req, res) => {
  try {
    const salary = await Salary.find();
    res.status(201).json(salary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSalaryById = async (req, res) => {
  const id = req.params.id;

  try {
    const salary = await Salary.findById(id);
    res.status(201).json({ data: salary });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateSalary = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    const salary = await Salary.findByIdAndUpdate(id, body, { new: true });
    res.status(201).json({ data: salary });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteSalary = async (req, res) => {
  const id = req.params.id;

  try {
    await Salary.findByIdAndDelete(id);
    res.status(201).send(">>>>>>> ID OF " + id + " DELETED SUCCESSFULLY");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addSalary,
  getSalary,
  getSalaryById,
  updateSalary,
  deleteSalary,
};
