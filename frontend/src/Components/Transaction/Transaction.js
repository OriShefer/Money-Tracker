import { useGlobalContext } from '../../Context/GlobalContext';
import './Transaction.css'

function Transaction(props) {

  const {setTextColor} = useGlobalContext();

  return (
    <tr>
      <td className='p-4'>
        {props.category}
      </td>
      <td className='p-4'>{props.type}</td >
      <td className='p-4' style={{color: setTextColor(props.type)}}>{`${props.amount}₪`}</td >
    </tr>
  );
}

export default Transaction;
