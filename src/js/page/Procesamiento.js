import React from "react";
import { Link } from "react-router-dom";
const Procesamiento = ()=>{
    return (
         <>
      <div >
      <div>
     <nav class="navbar bg-white bg-white">
  <div class="container-fluid bg-white">
    <a class="navbar-brand bg-white text-dark" href="#"><img className="bg-white" width={"50px"} src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"/> Nombre de tecnico</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header bg-dark">
       <h5 class="offcanvas-title bg-dark text-white" id="offcanvasNavbarLabel">DGESLAB</h5>
        <button type="button" class="btn-close text-reset text-white bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body bg-dark text-white">
      <p className="nav-link active bg-dark text-white">OPCIONES DE TECNICO</p> <hr className=""/>
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 bg-dark">
        
        <li class="nav-item">
          <a class="nav-link active bg-dark text-white" aria-current="page" href=""><img width={"20px"} src="https://www.citypng.com/public/uploads/preview/hd-white-short-pencil-icon-png-171630356111xwjjexvjg4.png"/><Link className="bg-dark text-decoration-none text-white" to={`/Verificacion`}>Verificación</Link> </a>
          </li>
          <li class="nav-item bg-dark text-white">
            <a class="nav-link bg-dark text-white" href=""><img width={"20px"} src="https://www.citypng.com/public/uploads/preview/hd-white-tick-mark-icon-transparent-background-31623251046kjwkdqb7vd.png"/><Link className="bg-dark text-decoration-none text-white" to={`/Procesamiento`}>Procesamiento</Link> </a>
          </li>
          <li class="nav-item bg-dark text-white">
            <a class="nav-link bg-dark text-white" href=""><img width={"20px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3iLmQpkbcIYxc8Jl0JJwsQhEJzWRs2ZdYQ&usqp=CAU"/><Link className="bg-dark text-decoration-none text-white" to={`/Hometecnico`}> Volver a inicio</Link></a>
          </li>
          <li class="nav-item bg-dark text-white ">
            <a class="nav-link bg-dark text-white position-absolute bottom-0 end-5" href=""><img width={"20px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3iLmQpkbcIYxc8Jl0JJwsQhEJzWRs2ZdYQ&usqp=CAU"/> Cerrar Sesión</a>
          </li>
        </ul>
        
        <form class="d-flex">
         
          
        </form>
      </div>
    </div>
  </div>
</nav>
        </div>
      <br />
      
     <div class="container">
     <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="col me-5">
      <h1 class="">Procesamiento </h1>
    </div>
      <div class="btn-group " role="group" aria-label="Basic example">
  <button type="button " class="border border-dark btn btn-primary"  id="marcarTodo">Equipos Pendientes</button>
                <button type="button" class="border border-dark btn btn-primary" id="desmarcarTodo">Guardar</button>
                <button type="button" class="border border-dark btn btn-primary">Reporte</button>
 
</div>
  </div>
</div>
   
   
  
       <div class="table-responsive container mt-5">
<table class="table table table-striped border bg-white">
<thead>
<tr className="bg-dark text-white">
<th>#</th>
<th>IMEI</th>
<th>NOMBRE</th>
<th>SKU</th>
<th>TECNICO</th>
<th>FECHA</th>
                  <th>ENCENDIDO</th>
                  <th>VISTA_FRONTAL</th>
                  <th>VISTA_FRONTAL_REFLEJO</th>
                  <th>VISTA_TRASERA</th>
                  <th>VISTA_TRASERA_REFLEJO</th>
                  <th>VISTA_BORDE_SUPERIOR</th>
                  <th>VISTA_BORDE_SUPERIOR_REFLEJO</th>
                  <th>VISTA_BORDE_INFERIOR</th>
                  <th>VISTA_BORDE_INFERIOR_REFLEJO</th>
                  <th>VISTA_BORDE_IZQUIERDO</th>
                  <th>VISTA_BORDE_IZQUIERDO_REFLEJO</th>
                  <th>VISTA_BORDE_DERECHO</th>
                  <th>VISTA_BORDE_DERECHO_REFLEJO</th>
                  <th className="bg-ligth">PUNTAJE_COSMETICO</th>
                    <th>PANTALLA</th> 
                      <th>TACTIL</th>
    <th>BOTONES_LATERALES</th>
    
      <th>MICROFONOS</th>
     <th>PARLANTES</th> 
     <th>BATERIA</th>
   <th>CONECTOR_CARGA</th>
  <th>BLUETOOTH</th>
 <th>WIFI</th>
 <th>ZONA_WIFI</th>
  <th>SENSOR_NFC</th> 
 <th>CONECTOR_AUDIO </th>
    <th>ESTADO_PORTA_SIM</th>
     <th>FILTRACION_EQUIPO</th>
    <th>EJEC_EMISION_LLAMADAS</th> 
    <th>RECEP_LLAMADAS</th> 
   <th>EJEC_EMISION_MENSAJES</th> 
   <th>RECEP_MENSAJES </th> 
    <th>FOTOS_CAMARA_FRONTAL</th> 
    <th>FOTOS_CAMARA_TRASERA</th> 
    <th>VIDEOS_CAMARA_FRONTAL</th> 
    <th>VIDEOS_CAMARA_TRASERA</th> 
   <th>SENSOR_PROXIMIDAD</th>  
  <th>VIBRACION_EQUIPO</th>  
                  <th>PUNTAJE_EV_TECNICO</th> 
                  <th>BLOQUEO</th>
                  <th>ACT_SOFTWARE</th>
                  <th>RESTAURACION</th>
                  <th>FECHA_REVISION</th>
                  <th>CLASIFICACIÓN</th>
                  <th>ERT</th>
                  <th>OBSERVACIONES</th>
                  
                 
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
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><span>22</span></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><span>33</span></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><span>Nuevo</span></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input /></td>

                
     

</tr>
<tr>
<td>2</td>
<td>Celda de tabla</td>
<td>xiaomi</td>
<td>Celda de tabla</td>
<td>Celda de tabla</td>
<td>Celda de tabla</td>
                    <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><span>22</span></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><span>33</span></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><span>Nuevo</span></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input /></td>
</tr>
<tr>
<td>3</td>
<td>Celda de tabla</td>
<td>xiaomi</td>
<td>Celda de tabla</td>
<td>Celda de tabla</td>
<td>Celda de tabla</td>
                    <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><span>22</span></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><span>33</span></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><span>Nuevo</span></td>
                   <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                  <td><input /></td>
</tr>
</tbody>
</table>
</div>
       
    </div>
    </>
    )
}

export default Procesamiento;
