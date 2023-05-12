

import { useState } from 'react';
import CategorySum from '../CategorySum/CategorySum';
import './AllCategorySum.css'
import RadioButton from '../RadioButton/RadioButton';
import { useGlobalContext } from '../../Context/GlobalContext';

function AllCategorySum(props) {
  const incomeState = 'Where your money is?'
  const expenseState = 'Where your money go?'

  const {getIncomes,getExpenses} = useGlobalContext()
  
    const [title,setTitle] = useState(expenseState);
  
    const changeTitle = (event) => {
      setTitle(event.target.value)
      if(event.target.value === incomeState){
        getIncomes()
      }else{
        getExpenses()
      }

    }

  return (
    <div className='card' style={{width: '30rem'}}>
     <div className="card-body">
        <h5 className="card-title" style={{display: 'inline-block'}}>{title}</h5>
        <RadioButton
        incomeState = {incomeState}
        expenseState = {expenseState}
        title = {title}
        changeTitle = {changeTitle}
        />
        <CategorySum/>
        <CategorySum/>
        <CategorySum/>

     </div>
    </div>
  );
}

export default AllCategorySum;
