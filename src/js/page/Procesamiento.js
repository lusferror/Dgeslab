import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ModalEquiposPendientes } from "../components/modalEquiposPendientes.jsx";
import { ModalReporteRevision } from "../components/modalReporteRevision.jsx";
import { Context } from "../store/appContext";

const Procesamiento = () => {
  const { actions, store } = useContext(Context)
  // -------------------------validacion de sesion--------------------------------------
  actions.inicio()
  // -----------------------------------------------------------------------------------
  return (
    <div className="container-fluid p-xxl-5">
      <div className=" ">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div className="col w-100" style={{ marginRight: "10%" }}>
            <h1 className="me-5">REVISION TECNICA</h1>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="btn-group mb-3 col-xxl-4 col-lg-8 shadow-lg" role="group" aria-label="Basic example">
          <button type="button" className="border-0 col-4 btn btn-warning" id="marcarTodo" data-bs-toggle="modal" data-bs-target="#equiposPendientesModal">Equipos Pendientes</button>
          <button type="button" className="mx-1 border-0 col-4 btn btn-success" id="Guardar">Guardar</button>
          <button type="button" className="border-0 col-4  btn btn-info" data-bs-toggle="modal" data-bs-target="#reporte">Reporte</button>
        </div>
      </div>
      <ModalEquiposPendientes/>
      <ModalReporteRevision/>
      <div className="table-responsive  contenedor overflow-auto maxTabla">
        <table className="table table-striped table-bordered bg-white ">
          <thead>
            <tr className="fst-italic">
              <th colSpan={7} className="bg-light bg-gradient bg-opacity-50 fs-4 text-center">DATOS PRINCIPALES</th>
              <th colSpan={13} className="bg-warning bg-opacity-50 fs-4 text-center">VISTAS</th>
              <th colSpan={25} className="bg-primary bg-opacity-50 fs-4 text-center">TECNICA</th>
              <th colSpan={3} className="bg-info bg-opacity-50 fs-4 text-center">SOFTWARE</th>
              <th colSpan={4} className="bg-secondary bg-gradient bg-opacity-50 fs-4 text-center">DATOS FINALES</th>
            </tr>

            <tr className="bg-dark text-white">
              <th>#</th>
              <th className="mColumnaG">IMEI</th>
              <th className="mColumnaG">NOMBRE</th>
              <th>SKU</th>
              <th className="mColumnaG">TECNICO</th>
              <th>FECHA</th>
              <th>ENCENDIDO</th>
              {/* ---------------------------- evaluacion cosmetica ----------------------------------------------------- */}
              <th>FRONTAL</th>
              <th>FRONTAL REFLEJO</th>
              <th>TRASERA</th>
              <th>TRASERA REFLEJO</th>
              <th>BORDE SUPERIOR</th>
              <th>BORDE SUPERIOR REFLEJO</th>
              <th>BORDE INFERIOR</th>
              <th>BORDE INFERIOR REFLEJO</th>
              <th>BORDE IZQUIERDO</th>
              <th>BORDE IZQUIERDO REFLEJO</th>
              <th>BORDE DERECHO</th>
              <th>BORDE DERECHO REFLEJO</th>
              <th className="bg-ligth">PUNTAJE COSMETICO</th>
              {/* ---------------------evaluacion tecnica ----------------------------------------- */}
              <th>PANTALLA</th>
              <th>TACTIL</th>
              <th>BOTONES LATERALES</th>
              <th>MICROFONOS</th>
              <th>PARLANTES</th>
              <th>BATERIA</th>
              <th>CONECTOR CARGA</th>
              <th>BLUETOOTH</th>
              <th>WIFI</th>
              <th>ZONA WIFI</th>
              <th>SENSOR NFC</th>
              <th>CONECTOR AUDIO </th>
              <th>ESTADO PORTA SIM</th>
              <th>FILTRACION EQUIPO</th>
              <th>EJEC EMISION LLAMADAS</th>
              <th>RECEP LLAMADAS</th>
              <th>EJEC EMISION MENSAJES</th>
              <th>RECEP MENSAJES </th>
              <th>FOTOS CAMARA FRONTAL</th>
              <th>FOTOS CAMARA TRASERA</th>
              <th>VIDEOS CAMARA FRONTAL</th>
              <th>VIDEOS CAMARA TRASERA</th>
              <th>SENSOR PROXIMIDAD</th>
              <th>VIBRACION EQUIPO</th>
              <th>PUNTAJE EV TECNICO</th>
              <th>BLOQUEO</th>
              <th>ACT SOFTWARE</th>
              <th>RESTAURACION</th>
              <th>FECHA REVISION</th>
              <th>CLASIFICACIÓN</th>
              <th>ERT</th>
              <th>OBSERVACIONES</th>


            </tr>
          </thead>
          <tbody>
            <tr >
              <td>1</td>
              <td>Celda de tabla</td>
              <td>xiaomi</td>
              <td>161412</td>
              <td>Celda de tabla</td>
              <td>21/06/2022</td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>22</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>33</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>Nuevo</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-control form-control-sm" /></td>
            </tr>

            <tr >
              <td>1</td>
              <td>Celda de tabla</td>
              <td>xiaomi</td>
              <td>161412</td>
              <td>Celda de tabla</td>
              <td>21/06/2022</td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>22</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>33</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>Nuevo</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input /></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Celda de tabla</td>
              <td>xiaomi</td>
              <td>161412</td>
              <td>Celda de tabla</td>
              <td>21/06/2022</td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>22</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>33</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>Nuevo</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input /></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Celda de tabla</td>
              <td>xiaomi</td>
              <td>161412</td>
              <td>Celda de tabla</td>
              <td>21/06/2022</td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>22</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>33</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>Nuevo</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input /></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Celda de tabla</td>
              <td>xiaomi</td>
              <td>161412</td>
              <td>Celda de tabla</td>
              <td>21/06/2022</td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>22</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>33</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>Nuevo</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input /></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Celda de tabla</td>
              <td>xiaomi</td>
              <td>161412</td>
              <td>Celda de tabla</td>
              <td>21/06/2022</td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>22</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>33</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>Nuevo</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input /></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Celda de tabla</td>
              <td>xiaomi</td>
              <td>161412</td>
              <td>Celda de tabla</td>
              <td>21/06/2022</td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>22</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>33</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>Nuevo</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input /></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Celda de tabla</td>
              <td>xiaomi</td>
              <td>161412</td>
              <td>Celda de tabla</td>
              <td>21/06/2022</td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>22</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>33</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>Nuevo</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input /></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Celda de tabla</td>
              <td>xiaomi</td>
              <td>161412</td>
              <td>Celda de tabla</td>
              <td>21/06/2022</td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>22</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>33</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>Nuevo</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input /></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Celda de tabla</td>
              <td>xiaomi</td>
              <td>161412</td>
              <td>Celda de tabla</td>
              <td>21/06/2022</td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>22</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>33</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>Nuevo</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input /></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Celda de tabla</td>
              <td>xiaomi</td>
              <td>161412</td>
              <td>Celda de tabla</td>
              <td>21/06/2022</td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>22</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>33</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>Nuevo</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input /></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Celda de tabla</td>
              <td>xiaomi</td>
              <td>161412</td>
              <td>Celda de tabla</td>
              <td>21/06/2022</td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>22</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>33</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>Nuevo</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input /></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Celda de tabla</td>
              <td>xiaomi</td>
              <td>161412</td>
              <td>Celda de tabla</td>
              <td>21/06/2022</td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>22</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>33</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><span>Nuevo</span></td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
              <td><input /></td>
            </tr>


          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Procesamiento;
