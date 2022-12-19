import React from "react";
import ScatterChart from "../components/graphs.jsx";
import { useContext } from "react";
import { Context } from "../store/appContext.js";

const Verificacionn = ()=>{
   
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
          <table className="table table-striped border bg-white">
            <thead>
              <tr className="bg-dark text-white">
                <th>#</th>
                <th>SERIE</th>
                <th>FECHA_VERIFICACION</th>
                <th>RESPONSABLE</th>
                <th>TIPO_CAJA</th>
                <th>NRO_CAJA</th>
                <th>LISTADO</th>
                <th>OBESERVACIONES</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><input  class="form-control style-none" id="inputPassword2" placeholder="1234"/></td>
                <td>12/12/2022</td>
                <td>tecnico</td>
                <td>1</td>
                <td>123</td>
                <td><span>Celda columna</span></td>
                <td><input  class="form-control style-none" id="inputPassword2" placeholder=""/></td>


              </tr>
              <tr>
                <td>2</td>
                <td><input  class="form-control style-none" id="inputPassword2" placeholder="1234"/></td>
                <td>12/12/2022</td>
                <td>tecnico</td>
                <td>1</td>
                <td><td>123</td></td>
                <td><span>Celda columna</span></td>
                <td><input  class="form-control style-none" id="inputPassword2" placeholder=""/></td>

              </tr>
              <tr>
                <td>3</td>
                <td><input  class="form-control style-none" id="inputPassword2" placeholder="1234"/></td>
                <td>12/12/2022</td>
                <td>tecnico</td>
                <td>1</td>
                <td><td>123</td></td>
                <td><span>Celda columna</span></td>
                <td><input  class="form-control style-none" id="inputPassword2" placeholder=""/></td>
              </tr>

           

            </tbody>
          </table>
        </div>

      </div>
    </>


    )
}

export default Verificacionn;
