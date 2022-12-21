import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import InputMask from "react-input-mask"
import { Modal } from "../components/modal.jsx";
import { ModalCargando } from "../components/modalCargando.jsx";

const Verificacionn = () => {
  const { store, actions } = useContext(Context)
  // ------------------------------ autentificacion --------------------------------------
  actions.inicio()
  actions.nroCajaVerificacion()


  //-------------------------------------------------------------------------------------
  return (
    <>
      <div className="p-xxl-5">
        <div className="">
          <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div className="col me-5 mb-5">
              <h1 className="">VERIFICACION </h1>
            </div>
          </div>

        </div>


        <div className=" d-flex p-0 mb-1 ">
          <div className="col-3"></div>
          <div className="alert alert-primary d-flex col-6 h-100 mx-auto">
            {/* <span className="my-auto col-5 border-dark me-0 p-0">Ingresa el Nro de Documento:</span> */}
            <form className="d-flex" onSubmit={(e) => actions.registrarDocumentoVerificacion(e)}>
              <p className="me-2 my-auto">Ingresa el Nro de Documento:</p>
              <span className="p-0 m-0"><InputMask mask="99999999999" maskChar={""} className="ms-0 form-control" placeholder="Documento" value={store.registrarDocumentoVerificacion} onChange={(e) => actions.onChangeDocumentoVerificacion(e.target.value)} disabled={store.documentoRegistrado}></InputMask></span>
              <span className="ms-2"><button className="btn btn-primary" type="submit" >Registrar</button></span>
              <span className="ms-2"><button className="btn btn-primary" type="reset" onClick={() => actions.limpiarregistrarDocumentoVerificacion()} >Limpiar</button></span>
            </form>
          </div>
          <div className="col me-1 ms-1">
          </div>
          <div className="col-3"></div>
        </div>
        <div className=" d-flex justify-content-center">
          {store.verificacionDocumento ?
            <></> :
            <div className="alert alert-danger w-50 text-center" role={"alert"}>
              Ha ocurrido un error o no se ha encontrado el documento
            </div>
          }
        </div>
        <div className="">
          <div className="table-responsive  mt-1">
            <div className="d-flex ">
              <div className=" me-2 w-50 d-flex">
                <span className="me-2 my-auto">Ultimo Nro. de Caja: </span><h2><span class="badge bg-secondary">{store.nroCaja}</span></h2>
              </div>
              <div className="col"></div>
              <button className="btn btn-success col-2 mb-2" type="button" onClick={()=>actions.verificacionGuardar()} data-bs-toggle="modal" data-bs-target="#exampleModal">Guardar</button>
              <ModalCargando/>
            </div>
          </div>
          <table className="table table-striped border bg-white">
            <thead>
              <tr className="bg-dark text-white">
                <th>#</th>
                <th>SERIE</th>
                <th>FECHA VERIFICACION</th>
                <th>RESPONSABLE</th>
                <th>TIPO CAJA</th>
                <th>NRO CAJA</th>
                <th>DOCUMENTO</th>
                <th>OBESERVACIONES</th>

              </tr>
            </thead>
            <tbody>
              {store.varificacionLista.map((item, index) => {
                return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{item.serie_b}</td>
                    <td>{item.f_verificacion}</td>
                    <td>{item.responsable_ver}</td>
                    <td>{item.tipo_caja}</td>
                    <td>{item.nro_caja}</td>
                    <td>{item.documento}</td>
                    <td>{item.observaciones}</td>
                  </tr>

                )
              })}
              <tr>
                <td>{store.varificacionLista.length + 1}</td>
                <td><InputMask mask={"999999999999999"} maskChar="" value={store.verificacionImei} onChange={(e) => actions.onChangeVerificacionImei(e.target.value)} className="form-control style-none" placeholder="Serie"
                  onKeyDown={(e) => actions.agregarRegistroVerificacion(store.verificacionImei, sessionStorage.getItem("id"), store.registrarDocumentoVerificacion, store.nroCaja + 1, store.verificacionObservaciones,e.key)} disabled={!store.documentoRegistrado} />
                  {store.verificacionSerieValida ? <></> : <span className="text-danger" style={{ fontSize: "0.8rem" }}>Ingrese una serie valida o verifique que no este repetida</span>}</td>
                <td>{actions.fecha()}</td>
                <td>{sessionStorage.getItem("id")}</td>
                <td>DM</td>
                <td>{store.nroCaja + 1}</td>
                <td>{store.documentoRegistrado ?
                  <span>{store.registrarDocumentoVerificacion}</span> :
                  <></>}
                </td>
                <td><input className="form-control style-none" placeholder="Observaciones" value={store.verificacionObservaciones}onChange={(e) => actions.onChangeverificacionObservaciones(e.target.value)} disabled={!store.documentoRegistrado} 
                onKeyDown={(e) => actions.agregarRegistroVerificacion(store.verificacionImei, sessionStorage.getItem("id"), store.registrarDocumentoVerificacion, store.nroCaja + 1, store.verificacionObservaciones,e.key)}/></td>


              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </>


  )
}

export default Verificacionn;
