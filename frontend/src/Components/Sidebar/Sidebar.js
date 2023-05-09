
import "./Sidebar.css";

function Sidebar() {
  return (
<div class="d-flex flex-column p-3 bg-light position-fixed" style={{width: "16rem", height: "100%"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <img class="m-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="40rem" height="35rem"/> 
      <span class="fs-4">Money Tracker</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
        <img class="me-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="16rem" height="16rem"/> 
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
        <img class="me-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="16rem" height="16rem"/> 
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
        <img class="me-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="16rem" height="16rem"/> 
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
        <img class="me-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="16rem" height="16rem"/> 
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
        <img class="me-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="16rem" height="16rem"/> 
          Customers
        </a>
      </li>
    </ul>
    <hr/>
  </div>
  );
}

export default Sidebar;
