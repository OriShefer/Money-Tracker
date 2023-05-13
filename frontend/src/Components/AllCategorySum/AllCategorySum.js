import { useEffect, useState } from "react";
import CategorySum from "../CategorySum/CategorySum";
import "./AllCategorySum.css";
import RadioButton from "../RadioButton/RadioButton";
import { useGlobalContext } from "../../Context/GlobalContext";

function AllCategorySum(props) {
  const incomeState = "Where your money is?";
  const expenseState = "Where your money go?";
  const start = 'What you want to see?'
 
  const [title, setTitle] = useState(start);
  const [firstTime,setFirstTime] = useState(true)

  const { getIncomesByCategoryAmount, incomesByCategoryAmount, getExpensesByCategoryAmount, expensesByCategoryAmount } = useGlobalContext();
  const [content,setContent] = useState(expensesByCategoryAmount.map((category) => (
    <CategorySum
    key = {category._id}
    category = {category._id}
    amount = {category.totalQuantity}
    />
  )));

  useEffect(() => {

    if(title === incomeState || firstTime){
      getIncomesByCategoryAmount();
      setContent(incomesByCategoryAmount.map((category) => (
        <CategorySum
        key = {category._id}
        category = {category._id}
        amount = {category.totalQuantity}
        />
      )))

    }
    
    if(title === expenseState || firstTime){
      getExpensesByCategoryAmount();
      setContent(expensesByCategoryAmount.map((category) => (
        <CategorySum
        key = {category._id}
        category = {category._id}
        amount = {category.totalQuantity}
        />
      )))
    }

    setFirstTime(false)


  },[title])


  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  

  return (
    <div className="card" style={{ width: "30rem" }}>
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
  );
}

export default AllCategorySum;
