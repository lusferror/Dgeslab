import React, { useState } from "react";
import InputMask from "react-input-mask"
import ScatterChart from "../components/graphs.jsx";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import ReactInputMask from "react-input-mask";
import { cambioSerie } from "../store/empacado.js";

const Empacado = () => {
  const { store, actions } = useContext(Context)
  const { empacado } = store
  const { hola } = actions
  const [checked, setChecked] = useState(true)
  const check = () => {
    checked ? setChecked(false) : setChecked(true)
    hola.Prueba.setSerie()  
  }
  return (
    <>
      <div >
        <div className="container">
          <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div className="col me-5 mb-5">
              <h1 className="">Empacado </h1>              
            </div>
          </div>

        </div>

        <div className="table-responsive container mt-1">
          <table className="table table-striped border bg-white">
            <thead>
              <tr className="bg-dark text-white">
                <th>#</th>
                <th>SERIE</th>
                <th>MATERIAL</th>
                <th>DENOMINACION</th>
                <th>EMPACADO</th>
                <th>TIPO EMPAQUE</th>
                <th>FECHA EMPACADO</th>
                <th>RESPONSABLE</th>

              </tr>
            </thead>
            <tbody>
              {store.empacadoLista.map((item, index) => {
                return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{item.serie}</td>
                    <td>{item.material}</td>
                    <td>{item.denominacion}</td>
                    <td>{item.empacado?<input className="form-check-input" type="checkbox" id="flexCheckChecked" checked disabled/>:
                        <input className="form-check-input" type="checkbox" id="flexCheckChecked" checked={false} disabled/>}
                    </td>
                    <td>{item.tipoEmpaque}</td>
                    <td><span>{item.fechaEmpacado}</span></td>
                    <td><span>{sessionStorage.getItem("id")}</span></td>
                  </tr>)
                }
                )
              }
              <tr>
                <td></td>
                <td><InputMask mask={"999999999999999"} maskChar="" size={15} className="form-control style-none" id="inputPassword2" placeholder="N° de serie" value={empacado.serie} onChange={e => actions.agregarSerieEmpacado(e.target.value)}
                  onKeyDown={(e) => { actions.obtenerDatosSerieEmpacado(e.key) }} />
                </td>
                <td></td>
                <td>{empacado.denominacion}</td>
                <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={e => actions.agregarEmpacadoEmpacado(e.target.value)} defaultChecked /></td>
                <td><select className="form-select" aria-label="Default select example" defaultValue={"Seleccione el tipo de empaque"}>
                  <option >Seleccione el tipo de empaque</option>
                  <option value="Caja Seminuevo" >Caja Seminuevo</option>
                  <option value="Caja seguro">Caja seguro</option>
                  <option value="Bolsa Burbuja">Bolsa Burbuja</option>
                </select></td>
                <td><span></span></td>
                <td><span>{sessionStorage.getItem("id")}</span></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </>


  )
}

export default Empacado;
