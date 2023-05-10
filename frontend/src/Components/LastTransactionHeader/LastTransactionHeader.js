

import './LastTransactionHeader.css'

function LastTransactionHeader(props) {


  return (
    <>
      <th className='p-3' scope="col">{props.category}</th>
      <th className='p-3' scope="col">{props.type}</th>
      <th className='p-3' scope="col">{props.amount}</th>
    </>
  );
}

export default LastTransactionHeader;
