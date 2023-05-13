const { getExpenses, getExpensesByCategoryAmount } = require('../controllers/expense');
const { getIncomes, getIncomesByCategoryAmount } = require('../controllers/income');
const { addSaving, getLastSavings } = require('../controllers/saving');
const { addTransaction, getTransactions, deleteTransaction,deleteAllTransaction, getLastTransactions } = require('../controllers/transaction');

const router = require('express').Router();


router.post('/add-transaction', addTransaction)
    .get('/get-transactions', getTransactions)
    .get('/get-last-transactions',getLastTransactions)
    .delete('/delete-transaction/:id', deleteTransaction)
    .delete('/delete-all-transactions',deleteAllTransaction)
    
    .get('/get-incomes',getIncomes)
    .get('/get-incomes-category',getIncomesByCategoryAmount)

    .get('/get-expenses',getExpenses)
    .get('/get-expenses-category',getExpensesByCategoryAmount)

    .post('/add-saving',addSaving)
    .get('/get-last-savings',getLastSavings)
    

module.exports = router