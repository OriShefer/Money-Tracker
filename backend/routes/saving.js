const { updateSaving, getAllSavings,getLastSavings } = require('../controllers/saving');

const router = require('express').Router();


router
    .get('/get-last-savings',getLastSavings)
    .get('/get-all-savings',getAllSavings)
    .patch('/update-saving',updateSaving)


module.exports = router