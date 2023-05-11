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
    <div className="last-transactions">
      <label>Last Transactions</label>
      <div className="card text-center" style={{ width: "60%" , borderRadius: '1rem'}}>
        <table className="table">
          <thead>
            <tr>
              <LastTransactionHeader
                category={"Category"}
                type={"Type"}
                amount={"Amount"}
              />
            </tr>
          </thead>
          <tbody>
            {lastTransactions.map((item) => (
              
              <Transaction
                key = {item.id}
                category={item.category}
                type={item.type}
                amount={item.amount}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default LastTransactions;
