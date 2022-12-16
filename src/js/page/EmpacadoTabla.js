import React, { useState } from "react";
import InputMask from "react-input-mask"
import ScatterChart from "../components/graphs.jsx";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import ReactInputMask from "react-input-mask";
import { cambioSerie } from "../store/empacado.js";

const EmpacadoTabla = () => {
  const {store, actions} = useContext(Context)
  actions.obtenerDatosSerieEmpacado()
  const {empacado} = store
  const [checked,setChecked]= useState(true)
  const check = ()=>{
    checked?setChecked(false):setChecked(true)
    actions.cambioSerie()
  }
  return (
    <>
      <div >
        <div className="container">
          <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div className="col me-5 mb-5">
              <h1 className="">Empacado </h1>
              <hi>{empacado.serie}</hi>
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
              <tr>
                <td>1</td>
                <td><InputMask mask={"999999999999999"} maskChar="" maxLength={15} class="form-control style-none" id="inputPassword2" placeholder="1234" /></td>
                <td>1234</td>
                <td>Celda de tabla</td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onClick={()=>check()} checked={checked}/></td>
                <td><select class="form-select" aria-label="Default select example">
                  <option >Seleccione el tipo de empaque</option>
                  <option value="Caja Seminuevo" selected>Caja Seminuevo</option>
                  <option value="Caja seguro">Caja seguro</option>
                  <option value="Bolsa Burbuja">Bolsa Burbuja</option>
                </select></td>
                <td><span>12/12/2022</span></td>
                <td><span>tecnico</span></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </>


  )
}

export default EmpacadoTabla;
