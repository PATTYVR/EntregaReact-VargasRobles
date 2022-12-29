import CarWidget from "./CarWidget";
import { Link } from "react-router-dom";
import '../App.css';


const NavBar = () => {

    return (
        
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand" href="#">ANIMES SHOP</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to= '/category/1' className="nav-link active" aria-current="page" href="#">Dragon Ball</Link>
              </li>
              <li className="nav-item">
                <Link to= '/category/2' className="nav-link" href="#">Sailor Moon</Link>
              </li>
              <li className="nav-item">
                <Link to= '/category/3' className="nav-link" href="#">Naruto</Link>
              </li>
        
              
              <div className="navCarrito"><Link to='/cart' style={{textDecoration: "none", color: "white"}}><CarWidget /></Link></div>
              
            </ul>
          </div>
        </div>
      </nav>
     
    )
}


export default NavBar;

