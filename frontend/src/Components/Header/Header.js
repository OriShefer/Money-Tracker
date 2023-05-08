
import "./Header.css";

function Header() {
  return (
    
<div class="d-flex flex-column p-3 bg-light" style={{width: "280px"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg class="bi m-2" width="40" height="32"></svg>
      <span class="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"></svg>
          Customers
        </a>
      </li>
    </ul>
    <hr/>
  </div>

    /*
    <div className="container">
      <img src={process.env.PUBLIC_URL + 'img/user.png'} width="50" height="50"/> 
      <div>
      <h1>Good Morning, Ori</h1>
      <h4>Welcome back, nice to see you again!</h4>
      </div>
      
    </div>
    */
  );
}

export default Header;
