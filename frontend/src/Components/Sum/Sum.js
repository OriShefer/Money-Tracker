

import './Sum.css'

function Sum(props) {

  let textColor;

  if(props.title === 'Income' || props.title === 'Total' && props.amount > 0){
    textColor = "green";
  }

  if(props.title === 'Expense' || (props.title === 'Total' && props.amount < 0)){
    textColor = "red";
  }

      

  return (
    <div className="card me-5" style={{width: '18rem', backgroundColor: 'white', display: "inline-block"}}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p style={{color: textColor}} className= 'card-text'>
          {props.amount}₪
        </p>
      </div>
    </div>
  );
}

export default Sum;
