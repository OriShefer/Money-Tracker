const { addSaving, getLastSavings } = require('../controllers/saving');

const router = require('express').Router();


router
    .get('/get-last-savings',getLastSavings)
    .post('/add-saving',addSaving)


module.exports = router