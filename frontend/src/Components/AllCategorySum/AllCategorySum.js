

import CategorySum from '../CategorySum/CategorySum';
import './AllCategorySum.css'

function AllCategorySum(props) {

  return (
    <div className='card' style={{width: '20rem'}}>
     <div class="card-body">
     <h5 class="card-title">Where your money go?</h5>
     <CategorySum/>
     <CategorySum/>
     <CategorySum/>

     </div>
    </div>
  );
}

export default AllCategorySum;
