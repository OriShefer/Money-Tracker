const { getCategories, addCategory } = require('../controllers/category');
const { getExpenses, getExpensesByCategoryAmount } = require('../controllers/expense');
const { getIncomes, getIncomesByCategoryAmount } = require('../controllers/income');
const { addSaving, getLastSavings } = require('../controllers/saving');
const { addTransaction, getTransactions, deleteTransaction,deleteAllTransaction, getLastTransactions } = require('../controllers/transaction');

const router = require('express').Router();


router
    .get('/get-transactions', getTransactions)
    .get('/get-last-transactions',getLastTransactions)
    .post('/add-transaction', addTransaction)
    .delete('/delete-transaction/:id', deleteTransaction)
    .delete('/delete-all-transactions',deleteAllTransaction)

    .get('/get-categories', getCategories)
    .post('/add-category', addCategory)
   
    .get('/get-incomes',getIncomes)
    .get('/get-incomes-category',getIncomesByCategoryAmount)

    .get('/get-expenses',getExpenses)
    .get('/get-expenses-category',getExpensesByCategoryAmount)

    .get('/get-last-savings',getLastSavings)
    .post('/add-saving',addSaving)


module.exports = router