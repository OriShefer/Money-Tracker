import React, { useEffect, useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import {Bar} from 'react-chartjs-2'
import { useGlobalContext } from '../../Context/GlobalContext'
import moment from 'moment'

import './Chart.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );



  const labels = [ 'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'];

  const  options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  };

  const getMonthNum = (income) => {
    const {date} = income
    const fullDate = moment(date).format('MM');
    const monthNumber = parseInt(fullDate)

    return monthNumber - 1

  } 


function Chart() {

    const initalArray = Array(12).fill(0);

    const {getIncomes,incomes, getExpenses,expenses} = useGlobalContext()
    const [incomeMonthsAmount,setIncomeMonthsAmount] = useState(initalArray)
    const [expenseMonthsAmount,setExpenseMonthsAmount] = useState(initalArray)

    useEffect(() => {
        getIncomes()
        getExpenses()
      },[])

      useEffect(() => {
        
        setIncomeMonthsAmount(prev => {
            return prev.map( (incomeMonth, i) => {
                let incomeMonthTotal = 0;
                incomes.forEach((income) => {
                    if(i == getMonthNum(income)){
                        incomeMonthTotal += income.amount;
                    }
                })
                return incomeMonth + incomeMonthTotal
            })
        })
      },[incomes])

      useEffect(() => {
        setExpenseMonthsAmount(prev => {
            return prev.map( (expenseMonth, i) => {
                let expenseMonthTotal = 0;
                expenses.forEach((expense) => {
                    if(i == getMonthNum(expense)){
                        expenseMonthTotal += expense.amount;
                    }
                })
                return expenseMonth + expenseMonthTotal
            })
        })
      },[expenses])


      

      

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Income',
                data: [
                     ...incomeMonthsAmount
                ],
                backgroundColor: 'green',
                tension: .2
            },
            {
                label: 'Expenses',
                data: [
                    ...expenseMonthsAmount
                ],
                backgroundColor: 'red',
                tension: .2
            }
        ]
    }


    return (
        <div className='chart'>
         <Bar options={options} data={data} />
        </div>
    )
}

export default Chart