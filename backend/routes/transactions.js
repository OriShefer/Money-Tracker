const { addTransaction, getTransactions, deleteTransaction,deleteAllTransaction, getIncomes, getExpenses, getLastTransactions } = require('../controllers/transaction');

const router = require('express').Router();


router.post('/add-transaction', addTransaction)
    .get('/get-transactions', getTransactions)
    .get('/get-last-transactions',getLastTransactions)
    .delete('/delete-transaction/:id', deleteTransaction)
    .delete('/delete-all-transactions',deleteAllTransaction)

    .get('/get-incomes',getIncomes)
    .get('/get-expenses',getExpenses)
    

module.exports = router