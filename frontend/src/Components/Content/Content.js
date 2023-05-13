
import AllCategorySum from "../AllCategorySum/AllCategorySum";
import Balance from "../Balance/Balance";
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
        <div className="stats-con">
        <Chart/>
        <AllCategorySum/>  
        </div>
         <div className="extra-con">
        <Savings/>
        <LastTransactions/>
          </div>    
        
    </div>
    
  );
}

export default Content;
