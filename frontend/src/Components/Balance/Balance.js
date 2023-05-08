import Sum from "../Total/Sum";

import "./Balance.css";

function Balance(props) {
  return (
    <div style={{marginLeft: '15rem'}}>
      <Sum title={"Income"} text={"100₪"} />
      <Sum title={"Expense"} text={"100₪"} />
      <Sum title={"Total"} text={"100₪"} />
    </div>
  );
}

export default Balance;
