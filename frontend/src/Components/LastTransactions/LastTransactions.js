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
      <div className="card text-center" style={{ width: "30rem" }}>
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
                category={item.category}
                type={item.type}
                amount={item.amount}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>

    // <div className="space text-center card me-5">
    //   <div className="card-header">
    //     <LastTransactionHeader
    //       category={"Category"}
    //       type={"Type"}
    //       amount={"Amount"}
    //     />
    //   </div>
    //   <ul className="list-group">
    //     {lastTransactions.map((item) => (
    //       <li key={Math.random()} className="list-group-item">
    //         <Transaction
    //           category={item.category}
    //           type={item.type}
    //           amount={item.amount}
    //         />
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default LastTransactions;
