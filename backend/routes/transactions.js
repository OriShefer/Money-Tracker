const { addTransaction, getTransactions, deleteTransaction, getIncomes, getExpenses } = require('../controllers/transaction');

const router = require('express').Router();


router.post('/add-transaction', addTransaction)
    .get('/get-transactions', getTransactions)
    .delete('/delete-transaction/:id', deleteTransaction)

    .get('/get-incomes',getIncomes)
    .get('/get-expenses',getExpenses)

module.exports = router