import React from "react";
import ScatterChart from "../components/graphs.jsx";
import { useContext } from "react";
import { Context } from "../store/appContext.js";

const Empacado = ()=>{
   
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
                <th>TIPO_EMPAQUE</th>
                <th>FECHA_EMPACADO</th>
                <th>RESPONSABLE</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><input  class="form-control style-none" id="inputPassword2" placeholder="1234"/></td>
                <td>1234</td>
                <td>Celda de tabla</td>
                <td> <form name="f1" id="formElement"><input type="checkbox" name="ch1" /> </form></td>
                <td><select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select></td>
                <td><span>12/12/2022</span></td>
                <td><span>tecnico</span></td>


              </tr>
              <tr>
                <td>2</td>
                <td><input  class="form-control style-none" id="inputPassword2" placeholder="1234"/></td>
                <td>1234</td>
                <td>Celda de tabla</td>
                <td> <form name="f1" id="formElement"><input type="checkbox" name="ch1" /> </form></td>
                <td><select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select></td>
                <td><span>12/12/2022</span></td>
                <td><span>tecnico</span></td>

              </tr>
              <tr>
                <td>3</td>
                <td><input  class="form-control style-none" id="inputPassword2" placeholder="1234"/></td>
                <td>1234</td>
                <td>Celda de tabla</td>
                <td> <form name="f1" id="formElement"><input type="checkbox" name="ch1" /> </form></td>
                <td><select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
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

export default Empacado;
