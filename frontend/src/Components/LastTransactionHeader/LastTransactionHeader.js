

import './LastTransactionHeader.css'

function LastTransactionHeader(props) {


  return (
    <div>
      <label >{props.category}</label>
      <label>{props.type}</label >
      <label>{props.amount}</label >
    </div>
  );
}

export default LastTransactionHeader;
