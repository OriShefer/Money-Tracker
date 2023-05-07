
import {useState} from 'react'
import Total from './Components/Total/Total';

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
    <div className=''>
      <Total title = {"incomes"}/>
      <Total  title = {"expenses"}/>
      <Total title = {"total"}/>
    </div>
  );
}

export default App;
