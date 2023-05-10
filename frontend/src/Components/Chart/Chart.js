import React, { useEffect } from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import { useGlobalContext } from '../../Context/GlobalContext'
import moment from 'moment'

import './Chart.css'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {

    const {getIncomes,incomes, getExpenses,expenses} = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
      },[])

    const data = {
        labels: incomes.map((inc) =>{
            const {date} = inc
            return moment(date).format('DD/MM/YYYY')
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
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
         <Line data={data} />
        </div>
    )
}

export default Chart