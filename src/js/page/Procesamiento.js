import React from "react";
import { Link } from "react-router-dom";
const Procesamiento = () => {
  return (
    <>
      <div >


        <div class="container">
          <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div class="col" style={{marginRight:"10%"}}>
              <Link to="/Verificacion">
                <h1 class="me-5">Procesamiento </h1>
              </Link>
            </div>
            <div class="btn-group ms-5" role="group" aria-label="Basic example">
              <button type="button " class="border border-dark btn btn-primary" id="marcarTodo">Equipos Pendientes</button>
              
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
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><span>22</span></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><span>33</span></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><span>Nuevo</span></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input /></td>




              </tr>
              <tr>
                <td>2</td>
                <td>Celda de tabla</td>
                <td>xiaomi</td>
                <td>Celda de tabla</td>
                <td>Celda de tabla</td>
                <td>Celda de tabla</td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><span>22</span></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><span>33</span></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><span>Nuevo</span></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input /></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Celda de tabla</td>
                <td>xiaomi</td>
                <td>Celda de tabla</td>
                <td>Celda de tabla</td>
                <td>Celda de tabla</td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><span>22</span></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><span>33</span></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                <td><span>Nuevo</span></td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
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
