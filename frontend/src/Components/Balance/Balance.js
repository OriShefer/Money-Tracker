import { useEffect, useState } from 'react';
import Sum from "../Sum/Sum";
import "./Balance.css";
import { useGlobalContext } from '../../Context/GlobalContext';

function Balance(props) {

  const {getIncome,incomeTotalAmount} = useGlobalContext();

  useEffect(() => {
    getIncome()
  },[])

  return (
    <div style={{marginLeft: '15rem'}}>
      <Sum title={"Income"} text={`${incomeTotalAmount}₪`} />
      <Sum title={"Expense"} text={"100₪"} />
      <Sum title={"Total"} text={"100₪"} />
    </div>
  );
}

export default Balance;
