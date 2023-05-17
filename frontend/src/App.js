import Sidebar from './Components/Sidebar/Sidebar';
import Content from './Components/Content/Content';
import TransactionsPage from './Components/TransactionsPage/TransactionsPage';
import { useState } from 'react';
import { useGlobalContext } from './Context/GlobalContext';



function App() {

  const {INCOME,EXPENSE} = useGlobalContext()
  const [active, setActive] = useState(1)

  const displayData = () => {
    console.log(active)
    switch(parseInt(active)){
      case 1:
        return <Content/>;
      case 2:
        return <TransactionsPage type = {INCOME}/>;
      case 3:
        return <TransactionsPage type = {EXPENSE}/>;
      default: 
        return <Content/>;

    }
  }

  return (
    <div>
      <Sidebar setActive = {setActive}/>
      {displayData()}
    </div>
  );
}

export default App;
