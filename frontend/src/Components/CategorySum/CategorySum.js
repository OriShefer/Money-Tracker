

import './CategorySum.css'

function CategorySum(props) {

  return (
    <div style={{margin:'1.5rem 0'}}>
        <div style={{margin:'0.2rem'}}>
        <label className='category-sum-category'>Food And Drinks</label>
        <label className='category-sum-amount'>872</label>
        </div>
        <div className="progress" style={{height: '0.5rem',color:'green'}} >
            <div className="progress-bar" role="progressbar" style={{width: `25%`, backgroundColor:'green'}} aria-valuenow={"25"} aria-valuemin="0" aria-valuemax={"100"}></div>
        </div>
    </div>
  );
}

export default CategorySum;