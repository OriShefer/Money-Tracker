

import './Saving.css'

function Saving(props) {

    const progressWidth = (props.currentAmount / props.destinationAmount) * 100

  return (
    <div className="card me-5" style={{width: '30rem',marginBottom:'2rem', backgroundColor: 'white', borderRadius: '1rem' }}>
        <div className="card-body">
            <h5 style={{textAlign: 'right', marginRight:"1rem"}} className="card-title">{props.name}</h5>
            <div style={{ marginBottom:"1rem"}}>
                <img className='saving-img' src={process.env.PUBLIC_URL + 'img/salary.png'} style={{borderRadius: '1rem' }} />
                <div className='progress-content'>
                    <h4 className= 'current-amount'>{props.currentAmount}₪</h4>
                    <h4 className= 'destination-amount'>/{props.destinationAmount}₪</h4>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: `${progressWidth}%`}} aria-valuenow={progressWidth} aria-valuemin="0" aria-valuemax={props.destinationAmount}></div>
                    </div>
                    <h4 className= 'goal'>{`${progressWidth}% of your goal`}</h4>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Saving;
