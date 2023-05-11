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


function Chart() {

    const initalArray = Array(12).fill(0);

    const {getIncomes,incomes, getExpenses,expenses} = useGlobalContext()
    const [incomeMonthsAmount,setIncomeMonthsAmount] = useState(initalArray)
    const [expenseMonthsAmount,setExpenseMonthsAmount] = useState(initalArray)

    useEffect(() => {
        getIncomes()
        getExpenses()

        setIncomeMonthsAmount(prev => {
            return prev.map( (incomeMonth, i) => {
                if(i == 1){
                    return incomeMonth + 1;
                }
            })
        })
      },[])

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomeMonthsAmount.map((incomeMonth) => {
                        return incomeMonth
                    })
                ],
                backgroundColor: 'green',
                tension: .2
            },
            {
                label: 'Expenses',
                data: [
                    ...expenses.map((expense) => {
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: 'red',
                tension: .2
            }
        ]
    }


    return (
        <div className='chart'>
            {console.log(incomeMonthsAmount)}
         <Bar options={options} data={data} />
        </div>
    )
}

export default Chart