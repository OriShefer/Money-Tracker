import { useEffect } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";
import "./TransactionsPage.css";
import TransactionsForm from "../TransactionForm/TransactionForm";

function TransactionsPage() {

  const {getIncomeAmount,incomeTotalAmount,getExpenseAmount,expenseTotalAmount,setTextColor} = useGlobalContext();

  useEffect(() => {
    getIncomeAmount()
  },[])

  return (
  <div className="card me-5 transactions-page">
    <div className="card-body">
        <h1 className="card-title">Incomes</h1>
        <p style={{fontSize: '2rem'}} className= 'card-text'>
          <div className="card me-5 ">
          <div style={{textAlign:"center"}} className="card-body ">
            Total Income: 
            <span style={{color: setTextColor('income'), fontWeight:'bold'}}> $0</span>
          </div>
          </div>
        </p>
        <TransactionsForm/>
      </div>
  </div>
  );
}

export default TransactionsPage;
