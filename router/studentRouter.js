const express = require('express')
const { addStudent, getAllStudents } = require('../controller/studentController.js')
const router = express.Router()


router.post('/add-student',addStudent)
router.get('/get-student',getAllStudents)


module.exports = router;