import { useEffect, useLayoutEffect, useState } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";

import CategorySum from "../CategorySum/CategorySum";
import RadioButton from "../RadioButton/RadioButton";

import "./Statistics.css";

function Statistics() {
  const incomeState = "Where your money is?";
  const expenseState = "Where your money go?";
 
  const [title, setTitle] = useState(incomeState);

  const { getIncomesByCategoryAmount, incomesByCategoryAmount, getExpensesByCategoryAmount, expensesByCategoryAmount } = useGlobalContext();
  const [content,setContent] = useState()



  useEffect(() => {

    if(title === incomeState ){ 
      getIncomesByCategoryAmount();
        console.log(incomesByCategoryAmount)
     
    }

    if(title === expenseState){
      getExpensesByCategoryAmount();
  
    }


  },[title])

useEffect(() => {
  setContent(incomesByCategoryAmount.map((category) => (
    <CategorySum
    key = {category._id}
    category = {category._id}
    amount = {category.totalQuantity}
    />)
    ))
}, [incomesByCategoryAmount])

useEffect(() => {
  setContent(expensesByCategoryAmount.map((category) => (
    <CategorySum
    key = {category._id}
    category = {category._id}
    amount = {category.totalQuantity}
    />
  )))
}, [expensesByCategoryAmount])


  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  



  return (
    <div>
         <label className="statistics-title">Statistics</label>
         <div className="statistics-card card">
            <div className="card-body">
                  <h5 className="card-title" style={{ display: "inline-block" }}>
                    {title}
                  </h5>
                  <RadioButton
                    incomeState={incomeState}
                    expenseState={expenseState}
                    title={title}
                    changeTitle={changeTitle}
                  />
                  {content}
            </div>
          </div>    
    </div>
    
  );
}

export default Statistics;
