import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Modal } from "../components/modal.jsx";
import InputMask from "react-input-mask"

const Asignar = () => {
  const { actions, store } = useContext(Context)
  // ----------------------------------------------validacion de usuario----------------------
  actions.inicio()
  // -----------------------------------------------------------------------------------------
 
  const { listaAsignacion } = store
  const id = store.listaAsignacion.length + 1
  var tecnico = ""
  if (store.asignado == true) {
    tecnico = store.asignarTecnico
  }

  return (
    <div className="p-xxl-5 ">
      <div className="row-cols-2 row-cols-lg-5 mb-5 ">
        <h1 className="">ASIGNACION </h1>
      </div>
      <div className="row-cols w-100 d-flex">
        <div className="my-2 border col-xxl-3 col-md-4 col-sm-9">
          {store.asignado ?
            <select className="form-select" disabled>
              <option selected>Selecciona el Técnico</option>
            </select>

            :
            <select className="form-select col-xxl-3 col-lg-4 col-xl-6 " aria-label="Default select example" onChange={e => { actions.asignarValor(e.target.value) }}>
              <option defaultValue>Selecciona el Técnico</option>
              <option value="1">Luis</option>
              <option value="2">Joel</option>
              <option value="3">Guilermo</option>
              <option value="4">Martin</option>
            </select>
          }
        </div>
        <div className="mt-2 ms-1 col-xxl-1 ">
          <button type="button" className="btn btn-primary w-100" id="Asignar" onClick={() => actions.asignar()}>Asignar</button>
        </div>
        <div className="mt-2 ms-1 col-xxl-1 ">
          <button type="button" className="btn btn-success w-100" id="Guardar" data-bs-toggle="modal" data-bs-target="#exampleModal"
          onClick={()=>actions.asignacionGuaradar()}>Guardar</button>
        </div>
        <Modal />
      </div>
      <div className="row-cols  contenedor" style={{display:"grid",gridAutoFlow:"column",gridAutoColumns:"100%", overflowX:"auto", overflowY:"auto",maxHeight:"60vh" }}>
        <table className="table table-striped border bg-white table-bordered" style={{minWidth:"1000px"}}>
          <thead>
            <tr className="bg-dark text-white">
              <th className="text-center">#</th>
              <th className="col-1 text-center">FECHA</th>
              <th className="col-3" >IMEI</th>
              <th className="text-center">TECNICO</th>
              <th className="col text-center">ESTADO</th>
              <th className="col text-center">ELIMINAR</th>

            </tr>
          </thead>
          <tbody>
            {
              listaAsignacion.map((item, index) => {
                return (
                <tr className="p-0 fw-bold" style={{maxHeight:"10px", fontSize:"0.8em"}}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center"><span>{item.fecha}</span></td>
                  <td className="p-2">{item.imei}</td>
                  <td className="text-center">{item.tecnico}</td>
                  <td className="text-center p-1"><span className="badge bg-warning fs-6 ">{item.estado}</span></td>
                  <td className="text-center"><button type="button" className="btn-close btn-sm" aria-label="Close" onClick={() => actions.asignacionEliminar(index)}></button></td>
                </tr>)
              })
            }
            <tr className="p-0" style={{maxHeight:"10px", fontSize:"0.8em"}}>
              <td className="text-center">{id}</td>
              <td className="text-center"><span>{actions.fecha()}</span></td>
              {store.asignado ?
                <td className="p-1"><InputMask  mask="99999999999999999999999" maskChar={""} className="form-control form-control-sm m-0"  value={store.asignarImei} onChange={e => actions.asignarImei(e.target.value)} onKeyDown={e => actions.itemAsignacion(actions.fecha(), e.target.value, tecnico, e.key)}></InputMask></td> :
                <td className="p-1 "><input className="form-control form-control-sm m-0 " disabled ></input></td>
              }
              <td className="text-center">{tecnico}</td>
              <td className="text-center p-1"><span className="badge bg-warning fs-6">Pendiente</span></td>
              <td className="text-center"><button type="button" className="btn-close btn-sm" aria-label="Close" ></button></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

  )
}

export default Asignar;
