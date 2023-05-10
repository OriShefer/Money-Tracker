import { useEffect, useState } from 'react';
import Sum from "../Sum/Sum";
import "./Balance.css";
import { useGlobalContext } from '../../Context/GlobalContext';

function Balance(props) {

  const {getIncomeAmount,incomeTotalAmount,getExpenseAmount,expenseTotalAmount} = useGlobalContext();
  const [total,setTotal] = useState(0);

  useEffect(() => {
    getIncomeAmount()
    getExpenseAmount()
  },[])

  useEffect(() => {
    setTotal(incomeTotalAmount - expenseTotalAmount)
  },[incomeTotalAmount,expenseTotalAmount])

  return (
    <div style={{marginLeft: '5rem'}}>
      <Sum title={"Income"} amount={incomeTotalAmount} />
      <Sum title={"Expense"} amount={expenseTotalAmount} />
      <Sum title={"Total"} amount={total} />
    </div>
  );
}

export default Balance;
