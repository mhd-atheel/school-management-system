const express = require('express');

const { addAwards, getAwards, getAwardsById, updateAwards, deleteAwards } = require('../controller/awardsController');

const router = express.Router()

router.post('/add-awards',addAwards);
router.get('/get-awards',getAwards);
router.get('/get-awards/:id',getAwardsById);
router.put('/update-awards/:id',updateAwards);
router.delete('/delete-awards/:id',deleteAwards);


module.exports = router