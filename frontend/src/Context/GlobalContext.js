import React, { useCallback, useContext, useState } from "react"
import axios from 'axios'


const BASE_URL = "http://localhost:3000/api/";
const INCOME = 'income'
const EXPENSE = 'expense'


const GlobalContext = React.createContext()

export const GlobalProvider = (props) => {

    const [incomes,setIncomes] = useState([])
    const [expenses,setExpenses] = useState([])

    const [incomeTotalAmount, setIncomeTotalAmount] = useState([])
    const [expenseTotalAmount, setExpenseTotalAmount] = useState([])
    const [lastTransactions,setLastTransactions] = useState([])

    const [lastSavings,setLastSavings] = useState([])

    const [error, setError] = useState([])

    
    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
            .catch((err) =>{
                setError(err.response.data.message)
            });
            setIncomes(response.data);
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
            .catch((err) =>{
                setError(err.response.data.message)
            });
            setExpenses(response.data);
    }


    //calculate incomes
    const getIncomeAmount = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
            .catch((err) =>{
                setError(err.response.data.message)
            });
        let totalAmount = 0;
        response.data.forEach((income) => {totalAmount+=income.amount});
        setIncomeTotalAmount(totalAmount);
    }

    const getExpenseAmount = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
            .catch((err) =>{
                setError(err.response.data.message)
            });
        let totalAmount = 0;
        response.data.forEach((expense) => {totalAmount+=expense.amount});
        setExpenseTotalAmount(totalAmount);
    }

    const getLastTransactions = async () => {
        const response = await axios.get(`${BASE_URL}get-last-transactions`)
        .catch((err) =>{
            setError(err.response.data.message)
        });
        console.log(response.data)
        let transactions = response.data.map((transaction) => {
            return ({
                id: transaction._id,
               category: transaction.category,
               type: transaction.type,
               amount: transaction.amount,
               date: transaction.date
        });
            
        })
        setLastTransactions(transactions);
    }

    const getLastSavings = async () => {
        const response = await axios.get(`${BASE_URL}get-last-savings`)
        .catch((err) =>{
            setError(err.response.data.message)
        });
        console.log(response.data)
        let savings = response.data.map((saving) => {
            return ({
                id: saving._id,
                name: saving.name,
                currentAmount: saving.currentAmount,
                destinationAmount: saving.destinationAmount
        });
            
        })
        console.log(savings)

        setLastSavings(savings);
    }




    const setTextColor = (type) => {
    
        type = type.toLowerCase();
        let textColor = 'black';
        if(type === INCOME){
            textColor = "green";
          }
          if(type === EXPENSE){
            textColor = "red";
          }

          return textColor;
    }


    return (
        <GlobalContext.Provider value={{
            getIncomes,
            incomes,
            getExpenses,
            expenses,
            getIncomeAmount,
            incomeTotalAmount,
            getExpenseAmount,
            expenseTotalAmount,
            getLastTransactions,
            lastTransactions,
            getLastSavings,
            lastSavings,
            setTextColor,
            INCOME,
            EXPENSE

        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}