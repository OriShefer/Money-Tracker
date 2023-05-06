
import {useState} from 'react'

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
      <button onClick={fetchData}>hey</button>

    </div>
  );
}

export default App;
