
import { useEffect, useReducer, useState } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";
import moment from "moment";

function reducer(state, action) {
    switch (action.type) {
      case 'changeName':
        return { 
            ...state,
            name: action.payload
        };
        case 'changeCurrent':
        return { 
            ...state,
            currentAmount: action.payload
        };
        case 'changeDestination':
        return { 
            ...state,
            destinationAmount: action.payload
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
  name: '',
  currentAmount: '',
  destinationAmount: '',
}


function SavingForm() {

    const {updateSaving,getAllSavings,lastSavings} = useGlobalContext()

    const [state, dispatch] = useReducer(reducer, intialState);
    
    const [valid,setValid] = useState({
      nameValid: true,
      currentAmountValid: true,
      destinationAmountValid: true
    })

    const [addedSaving,setAddedSaving] = useState(false)

    useEffect(() => {
        getAllSavings()
      },[addedSaving])

    const changeHandler = (e) => {
      e.preventDefault()

      switch (e.target.id) {
        case 'Name':
          dispatch({ type: 'changeName', payload: e.target.value})
          break;
          case 'Current':
            dispatch({ type: 'changeCurrent', payload: e.target.value})
            break;
          case 'Destination':
            dispatch({ type: 'changeDestination', payload: e.target.value})
            break;
        default:
          throw new Error('Unexpected action');
      }

    }

  

    const submitHandler = (e) => {
      e.preventDefault()

      const [name,currentAmount,destinationAmount] = [e.target.Name.value,e.target.Current.value,e.target.Destination.value]

      //lastSavings.find(saving => saving.name === name) === undefined
        setValid({
          nameValid: name !== 'Choose...'? true: false,
          currentAmountValid: currentAmount? true: false,
          destinationAmountValid: destinationAmount && destinationAmount > currentAmount? true: false

        })

        moment.locale("en-il"); 

        if(name !== 'Choose...' && currentAmount && destinationAmount && destinationAmount > currentAmount){
          dispatch({ type: 'reset'})
          updateSaving({
            name: name,
            currentAmount:currentAmount,
            destinationAmount:destinationAmount
          })
          .then(() => setAddedSaving(prev =>!prev))
        }
    }


  return (

        <div className="col-md-8 order-md-1 mt-4">
          <form onSubmit={submitHandler}>
          <div className="col-md-4 mb-3">
                <label htmlFor="Name">Name</label>
                <select onChange={changeHandler} className={valid.nameValid? "form-select": "form-select invalid"} maxLength={20} id="Name" value={state.name}>
                        <option>Choose...</option>
                        {lastSavings.map((saving) => (
                         <option key={saving.name}>{saving.name}</option>
                        ))}
                </select>  
                 {/* <input onChange={changeHandler} type="text" className={valid.nameValid? 'form-control': "form-control invalid"} maxLength={20} id="Name" value={state.name}/> */}
            </div>

            <div className="col-md-4 mb-3">
              <label className="Current">Current Amount</label>
              <div className="input-group mb-2">
                    <input onChange={changeHandler} type="number" className={valid.currentAmountValid? 'form-control': "form-control invalid"} maxLength={10} min={0} id="Current" value={state.currentAmount}/>
                    <div className="input-group-append">
                        <div className="input-group-text">₪</div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-3">
            <label htmlFor="Destination">Destination Amount</label>
                <div className="input-group mb-2">
                    <input onChange={changeHandler} type="number"  className={valid.destinationAmountValid? 'form-control': "form-control invalid"} maxLength={10} min={0} id="Destination" value={state.destinationAmount}/>
                    <div className="input-group-append">
                        <div className="input-group-text">₪</div>
                    </div>
                </div>
              

            </div>

                          
            <button style={{marginTop:'1rem'}} className="btn btn-primary btn-lg" type="submit">Add</button>  

          </form>
        </div>
  );
}

export default SavingForm;
