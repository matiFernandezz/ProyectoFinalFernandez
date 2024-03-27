
import { Search } from "lucide-react";
import CartWidget from "./CartWidget";
function NavBar() {
  return (
  <>
     <div className="col flex justify-between">
              <ul className="nav text-center items-center grow">
                <li>
                  <a href="#">
                    <img src="./src/multimedia/logo.png" alt="Foto Logo" width={60}/>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link colorFuente" href="#">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link colorFuente " href="#" >Procesadores</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link colorFuente " href="#" >Monitores</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link colorFuente" href="#" >Periféricos</a>
                </li>
              </ul>
              <a href="#" className="flex items-center ">
                <Search width={26}/>
              </a>
        </div>
        <CartWidget/>
        </>
  )
}

export default NavBar