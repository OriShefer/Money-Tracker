import { useEffect, useState } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";
import LastTransactionHeader from "../LastTransactionHeader/LastTransactionHeader";
import Transaction from "../Transaction/Transaction";
import "./LastTransactions.css";

function LastTransactions() {
  const { getLastTransactions, lastTransactions } = useGlobalContext();

  useEffect(() => {
    getLastTransactions();
  }, []);

  return (
    <div className="space card me-5">
      <div className="card-header">
        <LastTransactionHeader
          category={"Category"}
          type={"Type"}
          amount={"Amount"}
        />
      </div>
      <ul className="list-group">
        {lastTransactions.map((item) => (
          <li key={Math.random()} className="list-group-item">
            <Transaction
              category={item.category}
              type={item.type}
              amount={item.amount}
            />
          </li>
        ))}

        {/* <li class="list-group-item">
          <Transaction category={"ori"} type={"income"} amount={"100₪"} />
        </li>
        <li class="list-group-item">
          <Transaction category={"ori"} type={"income"} amount={"100₪"} />
        </li>
        <li class="list-group-item">
          <Transaction category={"ori"} type={"income"} amount={"100₪"} />
        </li> */}
      </ul>
    </div>
  );
}

export default LastTransactions;
