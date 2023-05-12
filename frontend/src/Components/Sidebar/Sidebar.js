
import "./Sidebar.css";

function Sidebar() {
  return (
<div className="d-flex flex-column p-3 bg-light position-fixed" style={{width: "16rem", height: "100%", top:0}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <img className="m-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="40rem" height="35rem"/> 
      <span className="fs-4">Money Tracker</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
        <img className="me-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="16rem" height="16rem"/> 
          Home
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
        <img className="me-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="16rem" height="16rem"/> 
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
        <img className="me-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="16rem" height="16rem"/> 
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
        <img className="me-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="16rem" height="16rem"/> 
          Products
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
        <img className="me-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="16rem" height="16rem"/> 
          Customers
        </a>
      </li>
    </ul>
    <hr/>
  </div>
  );
}

export default Sidebar;
