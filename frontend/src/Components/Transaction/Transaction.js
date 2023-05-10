import { useGlobalContext } from '../../Context/GlobalContext';
import './Transaction.css'

function Transaction(props) {

  const {setTextColor} = useGlobalContext();

  return (
    <div className="transaction">
    <img className="me-2" src={process.env.PUBLIC_URL + 'img/user.png'} width="30rem" height="30rem"/> 
      <label >{props.category}</label>
      <label>{props.type}</label >
      <label style={{color: setTextColor(props.type)}}>{`${props.amount}₪`}</label >
    </div>
  );
}

export default Transaction;
