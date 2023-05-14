
import { useReducer } from "react";
import "./TransactionForm.css";

function reducer(state, action) {
    switch (action.type) {
      case 'changeTitle':
        return { 
            ...state,
            title: action.payload
        };
        case 'changeAmount':
        return { 
            ...state,
            amount: action.payload
        };
        case 'changeDescription':
        return { 
            ...state,
            description: action.payload
        };
        case 'changeCategory':
        return { 
            ...state,
            category: action.payload
        };
      default:
        throw new Error('Unexpected action');
    }
};

function TransactionsForm() {

    const [state, dispatch] = useReducer(reducer, {
        title: '',
        amount: '',
        description: '',
        category: ''
    });




  return (

        <div className="col-md-8 order-md-1 mt-4">
          <form className="needs-validation" noValidate="">
          <div className="col-md-4 mb-3">
                <label htmlFor="Title">Title</label>
                <input onChange={(e) => dispatch({ type: 'changeTitle', payload: e.target.value})} type="text" className="form-control" id="Title" value={state.title} required=""/>
                <div className="invalid-feedback">
                  Valid Title is required.
                </div>
              </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="Amount">Amount</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: 'changeAmount', payload: e.target.value})} type="number" className="form-control" id="Amount" min={0}  value={state.amount} required=""/>
                <div className="invalid-feedback" style={{width: '100%'}}>
                Amount is required.
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="Description">Description <span className="text-muted">(Optional)</span></label>
              <input onChange={(e) => dispatch({ type: 'changeDescription', payload: e.target.value})} type="test" className="form-control" id="Description" value={state.description}/>
              <div className="invalid-feedback">
                Please enter a valid Description
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="Category">Category</label>
                <select onChange={(e) => dispatch({ type: 'changeCategory', payload: e.target.value})} className="custom-select d-block w-100" id="Category" value={state.category} required="">
                  <option>Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
            </div>

            <button className="btn btn-primary btn-lg btn-block" type="submit">Add</button>
          </form>
        </div>
  );
}

export default TransactionsForm;
