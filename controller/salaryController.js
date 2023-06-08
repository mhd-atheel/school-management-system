const Salary = require('../models/salaryModel')


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



module.exports = {
    addSalary,
    getSalary
}