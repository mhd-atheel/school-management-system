const express = require('express');

const { addComplaints, getComplaints, getComplaintsById, updateComplaints, deleteComplaints } = require('../controller/complaintsController');

const router = express.Router()

router.post('/add-complains',addComplaints);
router.get('/get-complains',getComplaints);
router.get('/get-complains/:id',getComplaintsById);
router.put('/update-complains/:id',updateComplaints);
router.delete('/delete-complains/:id',deleteComplaints);


module.exports = router