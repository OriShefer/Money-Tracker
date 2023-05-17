import Sidebar from "./Components/Sidebar/Sidebar";
import Content from "./Components/Content/Content";
import TransactionsPage from "./Components/TransactionsPage/TransactionsPage";
import { useGlobalContext } from "./Context/GlobalContext";

import { Route, Routes } from "react-router-dom";

function App() {
  const { INCOME, EXPENSE } = useGlobalContext();

  return (
    <Routes>
      <Route path="/" exact element = {<> <Sidebar/> <Content /> </> }/>
      <Route path="/add-income" exact  element ={<> <Sidebar/>  <TransactionsPage type = {INCOME}/></>} />
      <Route path="/add-expense" exact element = {<> <Sidebar/> <TransactionsPage type={EXPENSE}/> </>}/>
      <Route path="*" element = {<> <Sidebar/> <Content /> </> }/>
    </Routes>
  );
}

export default App;
