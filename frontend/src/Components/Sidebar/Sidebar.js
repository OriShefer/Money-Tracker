
import "./Sidebar.css";

function Sidebar() {
  return (
    
<div class="d-flex flex-column p-3 bg-light position-fixed" style={{width: "280px", height: "2000px"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <img class="m-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="40" height="35"/> 
      <span class="fs-4">Money Tracker</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
        <img class="me-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="16" height="16"/> 
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
        <img class="me-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="16" height="16"/> 
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
        <img class="me-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="16" height="16"/> 
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
        <img class="me-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="16" height="16"/> 
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
        <img class="me-2" src={process.env.PUBLIC_URL + 'img/piggy-bank.png'} width="16" height="16"/> 
          Customers
        </a>
      </li>
    </ul>
    <hr/>
  </div>
  );
}

export default Sidebar;
