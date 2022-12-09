import React from "react";
import { Link } from "react-router-dom";

const HomeSupervisor = ()=>{
  return (
      
    <>
     <nav className="navbar bg-white bg-white">
  <div className="container-fluid bg-white">
    <a className="navbar-brand bg-white text-dark" href="#"><img className="bg-white" width={"50px"} src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"/> Nombre de SuperVisor</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header bg-dark">
       <h5 className="offcanvas-title bg-dark text-white" id="offcanvasNavbarLabel">DGESLAB</h5>
        <button type="button" className="btn-close text-reset text-white bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body bg-dark text-white">
      <p className="nav-link active bg-dark text-white">OPCIONES DE SUPERVISOR</p> <hr className=""/>
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 bg-dark">
        
        <li className="nav-item">
          <a className="nav-link active bg-dark text-white" aria-current="page" href=""><img width={"20px"} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAAAD///+lpaVcXFxvb29paWnW1tZ7e3vLy8urq6ubm5uxsbH8/PyNjY1+fn6goKD19fVGRkba2trt7e1NTU1SUlIVFRWQkJDDw8Pk5OSJiYksLCw4ODhra2seHh5XV1e5ubkiIiIzMzMODg5iYmJAQED+vlOGAAADpUlEQVR4nO2d23LiMBBEFWx8A4xtCIRbgED+/xcDIcEBpJG2arc2Pe7zyPDgUySyZE1bxhBCCCGEEELI3+UwTdO0DvzytEwRKJ+vV7zuNU8XmmIVYDh+wmDwdb2z3c9Ph7nfsPhfl/yHfKlsq7vPJ++6DEtL5ajJsG8teYYcJMP90Fqq9BhmjtpAi+HWWRRHGyDDF6mowXBm/y88s9Bh+CxUpT9THMOlUI1VGOZCda7ecERDAHLxSksVhvZJ6YWpCsOVu1i9qjA0ibOYCYJIhrbF4QVxiQhkaCaOWiMJQhkeHTV5CYxk6LglShMaNEPrAkpe/6IZmsFDYewRRDM08e3jxEnkE4QzNGa+uH7YLL1+eM+8z9TLXZZluzJs5yLNMAj5tQghhBBCCCGEEEIIIYQQ8utYRXEcb/dhX65jDNqOmVWxuOywVc18FmAIt/d0u0fq3R+F2z98zFt4t9iwDOPHwtC3CwxlaO9l96RmkAwdnd4TPYbq8xbOVvbhmxJD/XmL+xtFi5K8xVSorlUYSnmLjQpD/b36NMQ31J+32AhV5i0QOE1bGmdRS97CfUOUbodIhh3IW7jGGmmcwTK0dOqfKURBLEPrGngnC4IZmt1DoecRRDM05V3eQhxGIQ3NrGgdJ9J8FNbwxHuxS5JkMBcfz1wpmwSBxhNQI4QQQgghhBBCCCGEEELIL+XtuDmGnPxw5n3TR2DTtuTv598vwUyWKvMW+c9m78qzw30GbHdtet+PsZBaSwENbXmLZ02G9ryF51dEMnR0eivKW7ia9eXjdIAMna3savIWj70034g9NTiGB+Yt4A27nbfg+RYIdMFQWgXpyFt0+nyLIfMWCIh5i74SQ2feQpy0QRlaVvifyKt8JEPmLTQYWpb5vgM80AxNeftujEo6NQ/T0Bx67ZC6CHggjGd4IiqyJEmy+TbAj3kLQgghhBBCCCGEEEIIIYT8U17rKIrqkCjCifUxgqB9ef7rMrn0YU6S8hBgCJe3GN/kLQI2bMB21+qHvIX3lWZYhpbOL115C2ubsNzHDmZo7/SWG4agDNXnLWpXbShGEYEM3XkL8UwkHMNu5y2k4RTHUMpbSA2mOIb6e/VpiG+oP2/h6oE+I82+cQyZt1BgOHIWxUZhIMMO5C1SR03uFUYydKwuPKcjQBlaB5sXWRDMsAt5i9Fd3iL1CcIZmlXeroSrsXSr/wLumfeJbe+TsXxG0DfHvIdA7k//EEIIIYQQQkgAH3QvjHvGQx0AAAAAAElFTkSuQmCC"/><Link className="bg-dark text-decoration-none text-white" to={`/HomeSupervisor`}> Listado Despacho
Moviles</Link> </a>
                </li>
                <li className="nav-item">
          <a className="nav-link active bg-dark text-white" aria-current="page" href=""><img width={"20px"} src="data:image/png;base64,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"/><Link className="bg-dark text-decoration-none text-white" to={`/HomeSupervisor`}> Registro de Tecnico</Link> </a>
          </li>
          <li className="nav-item bg-dark text-white">
            <a className="nav-link bg-dark text-white" href=""><img width={"20px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKZjPLysNtx1B9a6NJo8cy2EmLepVAYOQCJ6pNTWVFXgM7fBq4ExtNfkcnMtM-knMPHs&usqp=CAU"/><Link className="bg-dark text-decoration-none text-white" to={`/HomeSupervisor`}> Actualizar Estatus</Link> </a>
          </li>
          <li className="nav-item bg-dark text-white">
            <a className="nav-link bg-dark text-white" href=""><img width={"20px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3iLmQpkbcIYxc8Jl0JJwsQhEJzWRs2ZdYQ&usqp=CAU"/><Link className="bg-dark text-decoration-none text-white" to={`/HomeSupervisor`}> Volver a inicio</Link></a>
          </li>
          <li className="nav-item bg-dark text-white ">
            <a className="nav-link bg-dark text-white position-absolute bottom-0 end-5" href="#"><img width={"20px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3iLmQpkbcIYxc8Jl0JJwsQhEJzWRs2ZdYQ&usqp=CAU"/> Cerrar Sesión</a>
          </li>
        </ul>
        
        <form className="d-flex">
         
          
        </form>
      </div>
    </div>
  </div>
</nav>
        <div className="position-absolute top-50 start-50 translate-middle">
            <strong><h1 className=" display-1 text-center ">DGESLAB</h1></strong>
        </div>
    
    </>
    )
}

export default HomeSupervisor;