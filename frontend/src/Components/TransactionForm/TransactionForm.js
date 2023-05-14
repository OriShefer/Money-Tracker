
import "./TransactionForm.css";

function TransactionsForm() {

  return (

        <div class="col-md-8 order-md-1">
          <form class="needs-validation" novalidate="">
          <div class="col-md-6 mb-3">
                <label for="Title">Title</label>
                <input type="text" class="form-control" id="Title" placeholder="" value="" required=""/>
                <div class="invalid-feedback">
                  Valid Title is required.
                </div>
              </div>

            <div class="mb-3">
              <label for="Amount">Amount</label>
              <div class="input-group">
                <input type="number" class="form-control" id="Amount" min={0} placeholder="0" required=""/>
                <div class="invalid-feedback" style={{width: '100%'}}>
                Amount is required.
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="Description">Description <span class="text-muted">(Optional)</span></label>
              <input type="test" class="form-control" id="Description" placeholder=""/>
              <div class="invalid-feedback">
                Please enter a valid Description
              </div>
            </div>

            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="Category">Category</label>
                <select class="custom-select d-block w-100" id="Category" required="">
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
            </div>

            <button class="btn btn-primary btn-lg btn-block" type="submit">Add</button>
          </form>
        </div>
  );
}

export default TransactionsForm;
