

import { useGlobalContext } from '../../Context/GlobalContext';
import Transaction from '../Transaction/Transaction';
import './LastTransactions.css'

function LastTransactions() {

  return (
    <div className='space'>
     <Transaction category = {'ori'} type = {"income"} amount = {'100₪'}/>
     <Transaction category = {'ori'} type = {"income"} amount = {'100₪'}/>
     <Transaction category = {'ori'} type = {"expense"} amount = {'100₪'}/>
    </div>
  );
}

export default LastTransactions;
