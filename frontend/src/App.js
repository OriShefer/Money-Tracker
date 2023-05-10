
import {useState} from 'react'

import Sidebar from './Components/Sidebar/Sidebar';
import Content from './Components/Content/Content';


function App() {


  const [test,setTest] = useState([]);

    function fetchData(){
      fetch('http://localhost:3000/api/get-transactions')
      .then( response => {return response.json()} )
      .then(data => {
        setTest(data);
        console.log(test)
      })
    }

  
  return (
    <div>
      <Sidebar/>
     <Content/>
    </div>
  );
}

export default App;
