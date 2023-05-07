
import './Total.css'

function Total(props) {
  return (
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          100$
        </p>
      </div>
    </div>
  );
}

export default Total;
