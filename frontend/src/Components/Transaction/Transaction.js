import { useGlobalContext } from '../../Context/GlobalContext';
import './Transaction.css'

function Transaction(props) {

  const {setTextColor} = useGlobalContext();

  return (
    <tr key={Math.random()}>
      <td className='p-3'>
        {/* <img src={process.env.PUBLIC_URL + 'img/user.png'} width="30rem" height="30rem"/> */}
        {props.category}
      </td>
      <td className='p-3'>{props.type}</td >
      <td className='p-3' style={{color: setTextColor(props.type)}}>{`${props.amount}₪`}</td >
    </tr>
  );
}

export default Transaction;
