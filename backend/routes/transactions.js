const { addTransaction, getTransactions, deleteTransaction, getIncomes, getExpenses, getLastTransactions } = require('../controllers/transaction');

const router = require('express').Router();


router.post('/add-transaction', addTransaction)
    .get('/get-transactions', getTransactions)
    .get('/get-last-transactions',getLastTransactions)
    .delete('/delete-transaction/:id', deleteTransaction)

    .get('/get-incomes',getIncomes)
    .get('/get-expenses',getExpenses)
    

module.exports = router