

import CartWidget from "./CartWidget";
import { NavLink , Link} from "react-router-dom";
import  './NavBar.css';
function NavBar() {
  return (
  
     <div className="col flex justify-between">
              <ul className="nav text-center items-center grow justify-between">
                <div>
                  <Link to="/">
                    <img src="./src/multimedia/logo.png" alt="Foto Logo" width={60}/>
                  </Link>
                </div>
                <div className="ocultar flex">
                <li className="nav-item bg-orange-300 m-3 hover:rounded-lg ">
                  <NavLink to="/"  className="nav-link colorFuente">Productos</NavLink>
                </li>
                <li className="nav-item  bg-orange-300 m-3 hover:rounded-lg ">
                  <NavLink to={"/categoria/Procesador"} className="nav-link colorFuente " >Procesadores</NavLink>
                </li>
                <li className="nav-item  bg-orange-300 m-3 hover:rounded-lg ">
                  <NavLink to={"/categoria/Monitor"} className="nav-link colorFuente " >Monitores</NavLink>
                </li>
                <li className="nav-item  bg-orange-300 m-3 hover:rounded-lg ">
                    <NavLink to={"/categoria/Periferico"} className="nav-link colorFuente" >Periféricos</NavLink>
                </li>
                </div>
                <div className="ocultar">
                  <Link to="/cart"><CartWidget/></Link>
                </div>
              </ul>
              
              
        </div>
        
  
  )
}

export default NavBar