

import './Saving.css'

function Saving(props) {


  return (
    <div className="card me-5" style={{width: '30rem', backgroundColor: 'white', display: "inline-block", borderRadius: '1rem' }}>
        <div className="card-body">
            <h5 style={{textAlign: 'right', marginRight:"1rem"}} className="card-title">test</h5>
            <div style={{ marginBottom:"1rem"}}>
                <img className='saving-img' src={process.env.PUBLIC_URL + 'img/user.png'} style={{borderRadius: '1rem' }} />
                <div className='progress-content'>
                    <h4 className= 'current-amount'>100₪</h4>
                    <h4 className= 'destination-amount'>/200₪</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4 className= 'goal'>50% of your goal</h4>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Saving;
