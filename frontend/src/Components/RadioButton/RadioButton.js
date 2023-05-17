

function RadioButton(props) {

  return (
    <div style={{float:'right'}}>
        <div className="form-check form-check-inline">
                  <input onChange={props.changeTitle} className="form-check-input" type="radio" value={props.incomeState} checked={props.title === props.incomeState}/>
                  <label className="form-check-label" >
                    Incomes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input onLoad={props.changeTitle} onChange={props.changeTitle} className="form-check-input" id="expense" type="radio" value={props.expenseState} checked={props.title === props.expenseState} />
                  <label className="form-check-label"  htmlFor="expense">
                    Expenses
                  </label>
                </div>
      </div>
  );
}

export default RadioButton;