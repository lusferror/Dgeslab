import React from "react";
import { Link } from "react-router-dom";
const Procesamiento = ()=>{
    return (
         <>
      <div >
      <div>
     <nav className="navbar bg-white bg-white">
  <div className="container-fluid bg-white">
    <a className="navbar-brand bg-white text-dark" href="#"><img className="bg-white" width={"50px"} src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"/> Nombre de tecnico</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header bg-dark">
       <h5 className="offcanvas-title bg-dark text-white" id="offcanvasNavbarLabel">DGESLAB</h5>
        <button type="button" className="btn-close text-reset text-white bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body bg-dark text-white">
      <p className="nav-link active bg-dark text-white">OPCIONES DE TECNICO</p> <hr className=""/>
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 bg-dark">
        
        <li className="nav-item">
          <a className="nav-link active bg-dark text-white" aria-current="page" href=""><img width={"20px"} src="https://www.citypng.com/public/uploads/preview/hd-white-short-pencil-icon-png-171630356111xwjjexvjg4.png"/><Link className="bg-dark text-decoration-none text-white" to={`/Verificacion`}>Verificación</Link> </a>
          </li>
          <li className="nav-item bg-dark text-white">
            <a className="nav-link bg-dark text-white" href=""><img width={"20px"} src="https://www.citypng.com/public/uploads/preview/hd-white-tick-mark-icon-transparent-background-31623251046kjwkdqb7vd.png"/><Link className="bg-dark text-decoration-none text-white" to={`/Procesamiento`}>Procesamiento</Link> </a>
          </li>
          <li className="nav-item bg-dark text-white">
            <a className="nav-link bg-dark text-white" href=""><img width={"20px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3iLmQpkbcIYxc8Jl0JJwsQhEJzWRs2ZdYQ&usqp=CAU"/><Link className="bg-dark text-decoration-none text-white" to={`/Hometecnico`}> Volver a inicio</Link></a>
          </li>
          <li className="nav-item bg-dark text-white ">
            <a className="nav-link bg-dark text-white position-absolute bottom-0 end-5" href=""><img width={"20px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3iLmQpkbcIYxc8Jl0JJwsQhEJzWRs2ZdYQ&usqp=CAU"/> Cerrar Sesión</a>
          </li>
        </ul>
        
        <form className="d-flex">
         
          
        </form>
      </div>
    </div>
  </div>
</nav>
        </div>
      <br />
      
     <div className="container">
  <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div className="col me-5">
      <h1 className="">Procesamiento </h1>
    </div>
      <div className="btn-group " role="group" aria-label="Basic example">
  <button type="button " className="border border-dark btn btn-primary">Equipos Pendientes</button>
                <button type="button" className="border border-dark btn btn-primary">Guardar</button>
                <button type="button" className="border border-dark btn btn-primary">Reporte</button>
 
</div>
  </div>
</div>
   
   
  
       <div className="table-responsive container mt-5">
<table className="table">
<thead>
<tr>
<th>#</th>
<th>IMEI</th>
<th>NOMBRE</th>
<th>SEU</th>
<th>TECNICO</th>
<th>FECHA</th>
                  <th>ENCENDIDO</th>
                  <th>FRONTAL</th>
                  <th>PUNTAJE</th>
                  <th>CLASIFICACIÓN</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Celda de tabla</td>
<td>xiaomi</td>
<td>Celda de tabla</td>
<td>Celda de tabla</td>
<td>Celda de tabla</td>
                  <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                  <td><input className="form-control" type="text" placeholder="22" aria-label="Disabled input example" disabled /></td>
                  <td><input className="form-control" type="text" placeholder="Semi-nuevo" aria-label="Disabled input example" disabled/></td>
</tr>
<tr>
<td>2</td>
<td>Celda de tabla</td>
<td>xiaomi</td>
<td>Celda de tabla</td>
<td>Celda de tabla</td>
<td>Celda de tabla</td>
                 <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                  <td><input className="form-control" type="text" placeholder="22" aria-label="Disabled input example" disabled /></td>
                     <td><input className="form-control" type="text" placeholder="Semi-nuevo" aria-label="Disabled input example" disabled/></td>
</tr>
<tr>
<td>3</td>
<td>Celda de tabla</td>
<td>xiaomi</td>
<td>Celda de tabla</td>
<td>Celda de tabla</td>
<td>Celda de tabla</td>
                <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                  <td><input className="form-control" type="text" placeholder="22" aria-label="Disabled input example" disabled /></td>
                     <td><input className="form-control" type="text" placeholder="Semi-nuevo" aria-label="Disabled input example" disabled/></td>
</tr>
</tbody>
</table>
</div>
       
    </div>
    </>
    )
}

export default Procesamiento;