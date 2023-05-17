
import { useReducer, useState } from "react";
import "./TransactionForm.css";
import { useGlobalContext } from "../../Context/GlobalContext";
import moment from "moment";

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
        case 'reset':
          return{
            ...intialState
          }

      default:
        throw new Error('Unexpected action');
    }
};


const intialState = 
{
  title: '',
  amount: '',
  description: '',
  category: ''
}


function TransactionsForm(props) {

    const {addTransaction} = useGlobalContext()


    const [state, dispatch] = useReducer(reducer, intialState);
    
    const [valid,setValid] = useState({
      titleValid: true,
      amountValid: true,
      categoryValid: true
    })

    const changeHandler = (e) => {
      e.preventDefault()

      switch (e.target.id) {
        case 'Title':
          dispatch({ type: 'changeTitle', payload: e.target.value})
          break;
          case 'Amount':
            dispatch({ type: 'changeAmount', payload: e.target.value})
            break;
          case 'Description':
            dispatch({ type: 'changeDescription', payload: e.target.value})
            break;
          case 'Category':
            dispatch({ type: 'changeCategory', payload: e.target.value})
            break;
        default:
          throw new Error('Unexpected action');
      }

    }

  

    const submitHandler = (e) => {
      e.preventDefault()

      const [title,amount,description,category] = [e.target.Title.value,e.target.Amount.value,e.target.Description.value,e.target.Category.value]
      
        setValid({
          titleValid: title? true: false,
          amountValid: amount? true: false,
          categoryValid: category!== 'Choose...'? true: false,

        })

        moment.locale("en-il"); 

        if(title && amount && category!== 'Choose...'){
          dispatch({ type: 'reset'})
          addTransaction({
            type: "income",
            title: title,
            amount: amount,
            date: moment().format("YYYY-MM-DD"),
            category: category,
            description: description
          })
          .then(() =>  props.setAdded(prev =>!prev))
        }
    }
    

  return (

        <div className="col-md-8 order-md-1 mt-4">
          <form onSubmit={submitHandler} className="needs-validation" noValidate="">
          <div className="col-md-4 mb-3">
                <label htmlFor="Title">Title</label>
                <input onChange={changeHandler} type="text" className={valid.titleValid? 'form-control': "form-control invalid"} maxLength={20} id="Title" value={state.title} required=""/>
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="Amount">Amount</label>
              <div className="input-group">
                <input onChange={changeHandler} type="number" className={valid.amountValid? 'form-control': "form-control invalid"} maxLength={10} id="Amount" min={1}  value={state.amount} required=""/>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="Description">Description <span className="text-muted">(Optional)</span></label>
              <input onChange={changeHandler} type="test" className="form-control" id="Description" value={state.description}/>

            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="Category">Category</label>
                <select onChange={changeHandler} className={valid.categoryValid? "custom-select d-block w-100": "custom-select d-block w-100 invalid"} maxLength={50} id="Category" value={state.category} required="">
                  <option>Choose...</option>
                  <option>United States</option>
                </select>
              </div>
            </div>

            <button className="btn btn-primary btn-lg btn-block" type="submit">Add</button>
          </form>
        </div>
  );
}

export default TransactionsForm;
