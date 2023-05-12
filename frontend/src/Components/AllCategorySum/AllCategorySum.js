

import { useState } from 'react';
import CategorySum from '../CategorySum/CategorySum';
import './AllCategorySum.css'

function AllCategorySum(props) {
  const incomeState = 'Where your money is?'
  const expenseState = 'Where your money go?'

  const [title,setTitle] = useState(expenseState);

  const changeTitle = (event) => {
    setTitle(event.target.value)
  }


  return (
    <div className='card' style={{width: '25rem'}}>
     <div class="card-body">
        <h5 class="card-title" style={{display: 'inline-block', marginTop:'1rem'}}>{title}</h5>
      <div style={{float:'right'}}>
        <div class="form-check">
                  <input onChange={changeTitle} class="form-check-input" type="radio" value={incomeState} checked={title === incomeState}/>
                  <label class="form-check-label" for="Incomes">
                    Incomes
                  </label>
                </div>
                <div class="form-check">
                  <input  onChange={changeTitle} class="form-check-input" type="radio" value={expenseState} checked={title === expenseState} />
                  <label class="form-check-label" for="Expenses">
                    Expenses
                  </label>
                </div>
      </div>
       
        <CategorySum/>
        <CategorySum/>
        <CategorySum/>

     </div>
    </div>
  );
}

export default AllCategorySum;
