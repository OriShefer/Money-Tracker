import LastTransactionHeader from "../LastTransactionHeader/LastTransactionHeader";
import Transaction from "../Transaction/Transaction";
import "./LastTransactions.css";

function LastTransactions() {
  return (
    <div className="space card me-5">
      <div class="card-header">
        <LastTransactionHeader
          category={"Category"}
          type={"Type"}
          amount={"Amount"}
        />
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <Transaction category={"ori"} type={"income"} amount={"100₪"} />
        </li>
        <li class="list-group-item">
          <Transaction category={"ori"} type={"income"} amount={"100₪"} />
        </li>
        <li class="list-group-item">
          <Transaction category={"ori"} type={"income"} amount={"100₪"} />
        </li>
      </ul>
    </div>
  );
}

export default LastTransactions;
