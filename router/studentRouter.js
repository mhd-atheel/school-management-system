const express = require('express');
const { addStudent, getAllStudents, getStudentById, updateStudent, deleteStudent, } = require('../controller/studentController.js');
const router = express.Router();


router.post('/add-student',addStudent);
router.get('/get-student',getAllStudents);
router.get('/get-student-by-id/:id',getStudentById);
router.put('/update-student-by-id/:id',updateStudent);
router.delete('/delete-student-by-id/:id',deleteStudent);


module.exports = router;