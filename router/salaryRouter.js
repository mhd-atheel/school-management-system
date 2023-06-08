const express = require('express');
const { addSalary, getSalary } = require('../controller/salaryController');



const router = express.Router()

router.post('/add-salary',addSalary);
router.get('/get-salary',getSalary);
// router.get('/get-leaves/:id',getLeavesById);
// router.put('/update-leaves/:id',updateLeaves);
// router.delete('/delete-leaves/:id',deleteLeaves);


module.exports = router