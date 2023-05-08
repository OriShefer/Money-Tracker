
import {useState} from 'react'
import Balance from './Components/Balance/Balance';
import Header from './Components/Header/Header';


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
    <div className='' style={{display: "flex"}}>
      <Header/>
      <Balance/>
    </div>
  );
}

export default App;
