import { useEffect, useState } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";
import "./TransactionsPage.css";
import TransactionsForm from "../TransactionForm/TransactionForm";


function TransactionsPage() {

  const {getIncomeAmount,incomeTotalAmount,getExpenseAmount,expenseTotalAmount,setTextColor} = useGlobalContext();

  const [added,setAdded] = useState(false)

  useEffect(() => {
    getIncomeAmount()
 
  },[added])

  

  return (
  <div className="card me-5 transactions-page">
    <div className="card-body">
        <h1 className="card-title">Incomes</h1>
        <div style={{fontSize: '2rem'}} className= 'card-text'>
          <div className="card me-5 ">
          <div style={{textAlign:"center"}} className="card-body ">
            Total Income: 
            <span style={{color: setTextColor('income'), fontWeight:'bold'}}> {incomeTotalAmount}₪</span>
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
