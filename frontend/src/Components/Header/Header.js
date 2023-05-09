
import "./Header.css";

function Header() {
  return (
    
    <div className="container">
      <img src={process.env.PUBLIC_URL + 'img/user.png'} width="50rem" height="50rem"/> 
      <div>
      <h1>Good Morning, Ori</h1>
      <h4>Welcome back, nice to see you again!</h4>
      </div>
      
    </div>
    
  );
}

export default Header;
