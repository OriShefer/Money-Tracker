
import Balance from "../Balance/Balance";
import Header from "../Header/Header";
import LastTransactions from "../LastTransactions/LastTransactions";
import "./Content.css";

function Content() {
  return (
    
    <div className="content">
        <Header/>
        <Balance/>
        <LastTransactions/>
    </div>
    
  );
}

export default Content;
