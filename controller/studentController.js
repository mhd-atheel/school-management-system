const Student = require('../models/studentModel')


app.post('/users', async (req, res) => {
    try {
      const student = new Student(req.body);
      await student.save();
      res.status(201).json(student);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

