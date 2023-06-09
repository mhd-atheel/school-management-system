const express = require('express');

const { addSiblings, getSiblings, getSiblingsById, updateSiblings, deleteSiblings } = require('../controller/siblingsController');

const router = express.Router()

router.post('/add-siblings',addSiblings);
router.get('/get-siblings',getSiblings);
router.get('/get-siblings/:id',getSiblingsById);
router.put('/update-siblings/:id',updateSiblings);
router.delete('/delete-siblings/:id',deleteSiblings);


module.exports = router