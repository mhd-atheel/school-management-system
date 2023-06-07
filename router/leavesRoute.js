const express = require('express');
const {addLeaves, getLeaves, getLeavesById, updateLeaves, deleteLeaves} = require('../controller/leavesController');



const router = express.Router()

router.post('/add-leaves',addLeaves);
router.get('/get-leaves',getLeaves);
router.get('/get-leaves/:id',getLeavesById);
router.put('/update-leaves/:id',updateLeaves);
router.delete('/delete-leaves/:id',deleteLeaves);


module.exports = router