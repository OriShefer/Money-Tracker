
import "./Sidebar.css";

function Sidebar() {

  return (
<div className="sidebar d-flex flex-column p-3 bg-light position-fixed">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <img className="m-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="40rem" height="35rem"/> 
      <span className="fs-4">Money Tracker</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="mb-2 nav-item">
        <a href="/" className="nav-link active" aria-current="page">
        <img className="me-2" src={process.env.PUBLIC_URL + 'img/dashboard.png'} width="30rem" height="30rem"/> 
         Dashboard
        </a>
      </li>
      <li>
        <a href="/add-income" className=" mb-2 nav-link link-dark ">
        <img className="me-2" src={process.env.PUBLIC_URL + 'img/income.png'} width="30rem" height="30rem"/> 
          Add Income
        </a>
      </li>
      <li>
        <a href="/add-expense" className=" mb-2 nav-link link-dark">
        <img className="me-2" src={process.env.PUBLIC_URL + 'img/expense.png'} width="30rem" height="30rem"/> 
          Add Expense
        </a>
      </li>

    </ul>
    <hr/>
  </div>
  );
}

export default Sidebar;
