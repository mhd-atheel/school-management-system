const express = require('express');
const { addGrade } = require('../controller/gradeController');

const router = express.Router()

router.post('/add-grade',addGrade);


module.exports = router

