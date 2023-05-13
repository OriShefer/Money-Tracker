const TransactionSchema= require("../models/TransactionModel")

exports.addTransaction = async (req, res) => {
    const {type ,title, amount,date, category, description}  = req.body

    const transaction = TransactionSchema({
        type,
        title,
        amount,
        date,
        category,
        description
    })

    try {
        //validations
        if(!type || !title || !amount || !date || !category){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await transaction.save()
        res.status(200).json({message: 'Transaction Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(transaction)
}

exports.getTransactions = async (req, res) =>{
    try {
        const transactions = await TransactionSchema.find().sort({createdAt: -1})
        res.status(200).json(transactions)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.getLastTransactions = async (req, res) =>{
    try {
        const transactions = await TransactionSchema.find().sort({createdAt: -1}).limit(5)
        res.status(200).json(transactions)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}



exports.deleteTransaction = async (req, res) =>{
    const {id} = req.params;
    await TransactionSchema.findByIdAndDelete(id)
        .then(() =>{
            res.status(200).json({message: 'Transaction Deleted'})
        })
        .catch(() =>{
            res.status(500).json({message: 'Server Error'})
        })
}

exports.deleteAllTransaction = async (req, res) =>{
    await TransactionSchema.deleteMany()
        .then(() =>{
            res.status(200).json({message: 'Transactions Deleted'})
        })
        .catch(() =>{
            res.status(500).json({message: 'Server Error'})
        })
}

exports.getIncomes = async (req,res) => {

    try {
        const incomes = await TransactionSchema.find({type: 'income'}).sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.getIncomesByCategoryAmount = async (req,res) => {

    try {
        const incomes = await TransactionSchema.aggregate([
            {
                $match: {type: "income"}
            },
                {
                    $group: {_id: "$category", totalQuantity: {$sum: "$amount"}}
                },
                {
                    $sort: {totalQuantity:-1}
                }
        ]).limit(6)
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.getExpenses = async (req,res) => {

    try {
        const expenses = await TransactionSchema.find({type: 'expense'}).sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.getExpensesByCategoryAmount = async (req,res) => {

    try {
        const expenses = await TransactionSchema.aggregate([
            {
                $match: {type: "expense"}
            },
                {
                    $group: {_id: "$category", totalQuantity: {$sum: "$amount"}}
                }
        ]).limit(6)
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}