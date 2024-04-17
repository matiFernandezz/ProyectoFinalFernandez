

import CartWidget from "./CartWidget";
import { NavLink , Link} from "react-router-dom";
function NavBar() {
  return (
  
     <div className="col flex justify-between">
              <ul className="nav text-center items-center grow">
                <li>
                  <Link to="/">
                    <img src="./src/multimedia/logo.png" alt="Foto Logo" width={60}/>
                  </Link>
                </li>
                <li className="nav-item">
                  <NavLink to="/"  className="nav-link colorFuente">Productos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/categoria/Procesador"} className="nav-link colorFuente " >Procesadores</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/categoria/Monitor"} className="nav-link colorFuente " >Monitores</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/categoria/Periferico"} className="nav-link colorFuente" >Periféricos</NavLink>
                </li>
              </ul>
              
              <a href="#"><CartWidget/></a>
        </div>
        
  
  )
}

export default NavBar