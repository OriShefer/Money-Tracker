import Sidebar from './Components/Sidebar/Sidebar';
import Content from './Components/Content/Content';
import TransactionsPage from './Components/TransactionsPage/TransactionsPage';
import { useState } from 'react';



function App() {

const [active, setActive] = useState(2)

const displayData = () => {
  console.log(active)
  switch(parseInt(active)){
    case 1:
      return <Content/>;
    case 2:
      return <TransactionsPage/>;
    case 3:
      return <TransactionsPage/>;
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
