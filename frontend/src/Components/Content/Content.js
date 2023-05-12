
import Balance from "../Balance/Balance";
import Chart from "../Chart/Chart";
import Header from "../Header/Header";
import LastTransactions from "../LastTransactions/LastTransactions";
import Saving from "../Saving/Saving";
import "./Content.css";

function Content() {
  return (
    
    <div className="content">
        <Header/>
        <Balance/>
        <Chart/>
        <LastTransactions/>
        <Saving/>
    </div>
    
  );
}

export default Content;
