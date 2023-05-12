

import { useState } from 'react';
import CategorySum from '../CategorySum/CategorySum';
import './AllCategorySum.css'
import RadioButton from '../RadioButton/RadioButton';

function AllCategorySum(props) {
  const incomeState = 'Where your money is?'
    const expenseState = 'Where your money go?'
  
    const [title,setTitle] = useState(expenseState);
  
    const changeTitle = (event) => {
      setTitle(event.target.value)
    }

  return (
    <div className='card' style={{width: '25rem'}}>
     <div className="card-body">
        <h5 className="card-title" style={{display: 'inline-block', marginTop:'1rem'}}>{title}</h5>
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
