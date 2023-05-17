import { useEffect, useState } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";
import "./TransactionsPage.css";
import TransactionsForm from "../TransactionForm/TransactionForm";


function TransactionsPage(props) {

  const {getIncomeAmount,incomeTotalAmount,getExpenseAmount,expenseTotalAmount,INCOME,EXPENSE,setTextColor} = useGlobalContext();

  const [added,setAdded] = useState(false)

  const [title,setTitle] = useState()
  const [totalTitle,setTotalTitle] = useState()
  const [amount,setAmount] = useState()

  useEffect(() => {

    if(props.type === INCOME){
      getIncomeAmount()
      setTitle("Add Income")
      setTotalTitle("Total Incomes:")
      setAmount(incomeTotalAmount)
    }

    if(props.type === EXPENSE){
      getExpenseAmount()
      setTitle("Add Expense")
      setTotalTitle("Total Expenses:")
      setAmount(expenseTotalAmount)
    }
   
 
  },[added])

  

  return (
  <div className="card me-5 transactions-page">
    <div className="card-body">
        <h1 className="card-title"> {title}</h1>
        <div style={{fontSize: '2rem'}} className= 'card-text'>
          <div className="card me-5 ">
          <div style={{textAlign:"center"}} className="card-body ">
            {totalTitle} 
            <span style={{color: setTextColor('income'), fontWeight:'bold'}}> {amount}₪</span>
          </div>
          </div>
        </div>
        <TransactionsForm
        setAdded = {setAdded}
        />
      </div>
  </div>
  );
}

export default TransactionsPage;
