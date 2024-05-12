

import CartWidget from "./CartWidget";
import { NavLink , Link} from "react-router-dom";


function NavBar() {
  
  return (
   <>
      <nav className=" items-center justify-between gap-4 fixed-top hidden md:flex bg-orange-300">
            <Link to="/">
              <img src="./src/multimedia/logo.png" alt="Foto Logo" width={60}/>
            </Link>
            <div className="items-center hidden md:flex md:gap-4">
              <NavLink to="/"  className="nav-link colorFuente">Productos</NavLink>
              <NavLink to={"/categoria/Procesador"} className="nav-link colorFuente" >Procesadores</NavLink>
              <NavLink to={"/categoria/Monitor"} className="nav-link colorFuente" >Monitores</NavLink>
              <NavLink to={"/categoria/Periferico"} className="nav-link colorFuente" >Periféricos</NavLink>
              
            </div>
            <Link to="/cart" className="hidden md:flex md:gap-4"><CartWidget/></Link>
            
      </nav>
      <nav className="md:hidden navbar navbar-orange bg-orange-300 fixed-top">
        <div className="container-fluid flex justify-between">
          <Link to="/"> <img src="./src/multimedia/logo.png" alt="Foto Logo" width={60}/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-white" tabindex="-1" id="offcanvasDarkNavbar"      aria-labelledby="offcanvasDarkNavbarLabel">
             <div className="offcanvas-header">
                <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas" ></button>
             </div>
             <div className="offcanvas-body navbar-nav justify-content-start items-center flex-grow-1 pe-3">
              <Link to="/"> <img src="./src/multimedia/logo.png" alt="Foto Logo" width={120}/></Link>
              <NavLink to="/"  className="nav-link colorFuente">Productos</NavLink>
              <NavLink to={"/categoria/Procesador"} className="nav-link colorFuente" >Procesadores</NavLink>
              <NavLink to={"/categoria/Monitor"} className="nav-link colorFuente" >Monitores</NavLink>
              <NavLink to={"/categoria/Periferico"} className="nav-link colorFuente" >Periféricos</NavLink>
                
             </div>
          </div>
        </div>
      </nav>
      
   </>
  )
}

export default NavBar