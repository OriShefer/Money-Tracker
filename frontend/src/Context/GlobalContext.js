import React, { useContext, useState } from "react"
import axios from 'axios'


const BASE_URL = "http://localhost:3000/api/";
const INCOME = 'income'
const EXPENSE = 'expense'


const GlobalContext = React.createContext()

export const GlobalProvider = (props) => {

    const [incomeTotalAmount, setIncomeTotalAmount] = useState([])
    const [expenseTotalAmount, setExpenseTotalAmount] = useState([])
    const [lastTransactions,setLastTransactions] = useState([])

    const [error, setError] = useState([])

    //calculate incomes
    const getIncome = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
            .catch((err) =>{
                setError(err.response.data.message)
            });
        let totalAmount = 0;
        response.data.forEach((income) => {totalAmount+=income.amount});
        setIncomeTotalAmount(totalAmount);
    }

    const getExpense = async () => {
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
        let transactions = response.data.map((item) => {
            return ({
               category: item.category,
               type: item.type,
               amount: item.amount
        });
            
        })
        console.log(transactions)

        setLastTransactions(transactions);
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
            getIncome,
            incomeTotalAmount,
            getExpense,
            expenseTotalAmount,
            getLastTransactions,
            lastTransactions,
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