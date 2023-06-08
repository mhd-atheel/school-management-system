const express = require('express');
const { addSalary, getSalary, getSalaryById, updateSalary, deleteSalary } = require('../controller/salaryController');



const router = express.Router()

router.post('/add-salary',addSalary);
router.get('/get-salary',getSalary);
router.get('/get-salary/:id',getSalaryById);
router.put('/update-salary/:id',updateSalary);
router.delete('/delete-salary/:id',deleteSalary);


module.exports = router