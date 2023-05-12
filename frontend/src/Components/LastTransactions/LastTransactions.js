import { useEffect } from "react";
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
      <label className="last-transactions-title">Last Transactions</label>
      <div className="card text-center" style={{ width: "80%" , borderRadius: '1rem'}}>
        <table className="table">
          <thead>
            <tr>
              <LastTransactionHeader
                category={"Category"}
                type={"Type"}
                date= {"Date"}
                amount={"Amount"}
              />
            </tr>
          </thead>
          <tbody>
            {lastTransactions.map((transaction) => (
              
              <Transaction
                key = {transaction.id}
                category={transaction.category}
                type={transaction.type}
                amount={transaction.amount}
                date = {transaction.date}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default LastTransactions;
