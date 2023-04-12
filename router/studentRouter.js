const express = require('express')
const { addStudent, getAllStudents, getStudentById } = require('../controller/studentController.js')
const router = express.Router()


router.post('/add-student',addStudent)
router.get('/get-student',getAllStudents)
router.get('/get-student-by-id/:id',getStudentById)


module.exports = router;