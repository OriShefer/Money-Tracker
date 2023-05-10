

import { useGlobalContext } from '../../Context/GlobalContext';
import './Sum.css'

function Sum(props) {

  const {setTextColor} = useGlobalContext();

      
  return (
    <div className="card me-5" style={{width: '18rem', backgroundColor: 'white', display: "inline-block", borderRadius: '1rem' }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p style={{color: setTextColor(props.title)}} className= 'card-text'>
          {props.amount}₪
        </p>
      </div>
    </div>
  );
}

export default Sum;
