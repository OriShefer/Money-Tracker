
import Balance from "../Balance/Balance";
import CategorySum from "../AllCategorySum/AllCategorySum";
import Chart from "../Chart/Chart";
import Header from "../Header/Header";
import LastTransactions from "../LastTransactions/LastTransactions";
import Savings from "../Savings/Savings";
import "./Content.css";

function Content() {
  return (
    
    <div className="content">
        <Header/>
        <Balance/>
        <Chart/>
        <CategorySum/>
        <LastTransactions/>
        <Savings/>
    </div>
    
  );
}

export default Content;
