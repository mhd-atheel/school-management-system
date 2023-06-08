const express = require('express');
const { addPenalty, getPenalty, getPenaltyById, updatePenalty, deletePenalty } = require('../controller/penaltyController');



const router = express.Router()

router.post('/add-penalty',addPenalty);
router.get('/get-penalty',getPenalty);
router.get('/get-penalty/:id',getPenaltyById);
router.put('/update-penalty/:id',updatePenalty);
router.delete('/delete-penalty/:id',deletePenalty);


module.exports = router