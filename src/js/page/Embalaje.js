import React from "react";
import ScatterChart from "../components/graphs.jsx";
import { useContext, useState } from "react";
import { Context } from "../store/appContext.js";

const Embalaje = ()=>{
  const [count, setCount] = useState(1);
    return (
        <>
     
        <div className="container">
          <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div className="col me-5 mb-5">
              <h1 className="">Embalaje </h1>
            </div>
          </div>
          <div className="btn-group ms-5" role="group" aria-label="Basic example">
       
              <button type="button" className="border border-dark btn btn-primary" id="desmarcarTodo" onClick={() => setCount(count + 1)}  >Aumentar numero</button>
          
            </div>
      

        <div className="table-responsive container mt-1">
          <table className="table table-striped border bg-white">
            <thead>
              <tr className="bg-dark text-white">
                <th>#</th>
                <th>SERIE</th>
                <th>MATERIAL</th>
                <th>DENOMINACION</th>
                <th>TIPO_CAJA</th>
                <th>NRO_CAJA</th>
                <th>FECHA_EMB</th>
              

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><input  class="form-control style-none" id="inputPassword2" placeholder="1234"/></td>
                <td>1234</td>
                <td>Celda de tabla</td>
                <td> <span>{count}</span></td>
                <td><span>53123</span></td>
                <td><span>12/12/2022</span></td>
             


              </tr>
              <tr>
                <td>2</td>
                <td><input  class="form-control style-none" id="inputPassword2" placeholder="1234"/></td>
                <td>1234</td>
                <td>Celda de tabla</td>
                <td> <span>1</span></td>
                <td><span>53123</span></td>
                <td><span>12/12/2022</span></td>
                

              </tr>
              <tr>
                <td>3</td>
                <td><input  class="form-control style-none" id="inputPassword2" placeholder="1234"/></td>
                <td>1234</td>
                <td>Celda de tabla</td>
                <td> <span>1</span></td>
                <td><span>53123</span></td>
                <td><span>12/12/2022</span></td>
              </tr>

           

            </tbody>
          </table>
        </div>

      </div>
    </>


    )
}

export default Embalaje;
