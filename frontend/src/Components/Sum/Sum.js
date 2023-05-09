
import './Sum.css'

function Sum(props) {

  let textColor;

  if(props.title === 'Income'){
    textColor = "green";
  }

  if(props.title === 'Expense'){
    textColor = "red";
  }

  if(props.title === 'Total'){
    textColor = "blue";
  }
      

  return (
    <div className="card" style={{width: '18rem', backgroundColor: 'white', display: "inline-block"}}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p style={{color: textColor}} className= 'card-text'>
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default Sum;
