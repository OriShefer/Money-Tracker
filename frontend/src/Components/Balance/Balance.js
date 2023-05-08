import Sum from "../Total/Sum";
import Card from "../UI/Card/Card";

import "./Balance.css";

function Balance(props) {
  return (
    <div class="" style={{marginLeft: '500px'}}>
      <Sum title={"Income"} text={"100₪"} />
      <Sum title={"Expense"} text={"100₪"} />
      <Sum title={"Total"} text={"100₪"} />
    </div>
  );
}

export default Balance;
