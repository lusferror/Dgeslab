import React from "react";
import ScatterChart from "../components/graphs.jsx";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import InputMask from "react-input-mask"

const Verificacionn = () => {
  const { store, actions } = useContext(Context)
  // ------------------------------ autentificacion --------------------------------------
  actions.inicio()
  actions.nroCajaVerificacion()

  //-------------------------------------------------------------------------------------
  return (
    <>
      <div >
        <div className="container">
          <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div className="col me-5 mb-5">
              <h1 className="">Verificacion </h1>
            </div>
          </div>

        </div>

        <div className="table-responsive container mt-1">
          <div className="container  d-flex p-0 mb-2">
            <div className="alert alert-warning me-2 h-100" role="alert">
              Ultimo Nro. de Caja: <strong className="fs-4 m-0 p-0">{store.nroCaja}</strong>
            </div>
            <div className="alert alert-primary d-flex col-6 h-100">
                {/* <span className="my-auto col-5 border-dark me-0 p-0">Ingresa el Nro de Documento:</span> */}
                <p className="me-2 my-auto">Ingresa el Nro de Documento:</p>
                <span className="p-0 m-0"><InputMask mask="99999999999" maskChar={""} className="ms-0 form-control" placeholder="Documento" value={store.registrarDocumentoVerificacion} onChange={(e)=>actions.onChangeDocumentoVerificacion(e.target.value)}></InputMask></span>
                <span className="ms-2"><button className="btn btn-primary" type="button" onClick={()=>actions.registrarDocumentoVerificacion()}>Registrar</button></span>
            </div>
            <div className="col"></div>
            <div className="my-auto col-2">
              <button className="btn btn-success w-100" type="button">Guardar</button>
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
                <th>LISTADO</th>
                <th>OBESERVACIONES</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><input class="form-control style-none" id="inputPassword2" placeholder="Serie" /></td>
                <td>{actions.fecha()}</td>
                <td>{sessionStorage.getItem("id")}</td>
                <td>DM</td>
                <td>{store.nroCaja}</td>
                <td>{store.documentoRegistrado?
                  <span>{store.registrarDocumentoVerificacion}</span>:
                  <></>}
                </td>
                <td><input class="form-control style-none" id="inputPassword2" placeholder="" /></td>


              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </>


  )
}

export default Verificacionn;
