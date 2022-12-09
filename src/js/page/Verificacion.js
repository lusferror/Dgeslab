import React from "react";
import { Link } from "react-router-dom";
const Verificacion = () => {
  return (

    <>
      <div >

        <div class="container">
          <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div class="col me-5">
              <h1 class="">Verificación </h1>
            </div>
            <div class="btn-group ms-5" role="group" aria-label="Basic example">
              <button type="button " class="border border-dark btn btn-primary" id="marcarTodo">Seleccionar Todo</button>
              <button type="button" class="border border-dark btn btn-primary" id="desmarcarTodo">Desmarcar Todo</button>
              <button type="button" class="border border-dark btn btn-primary">Aprobar</button>

            </div>

          </div>
        </div>

        <div class="table-responsive container mt-5">
          <table class="table table-striped border bg-white">
            <thead>
              <tr className="bg-dark text-white">
                <th>#</th>
                <th>FECHA</th>
                <th>IMEI</th>
                <th>ENTIDAD</th>
                <th>CHEQUEO</th>
                <th>APROBACION</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><span>12/12/2022</span></td>
                <td>1234</td>
                <td>Celda de tabla</td>
                <td> <form name="f1" id="formElement"><input type="checkbox" name="ch1" /> </form></td>
                <td><span>Pendiente</span></td>


              </tr>
              <tr>
                <td>2</td>
                <td><span>12/12/2022</span></td>
                <td>1234</td>
                <td>Celda de tabla</td>
                <td> <form name="f1" id="formElement"><input type="checkbox" name="ch1" /> </form></td>
                <td><span>Pendiente</span></td>

              </tr>
              <tr>
                <td>3</td>
                <td><span>12/12/2022</span></td>
                <td>1234</td>
                <td>Celda de tabla</td>
                <td> <form name="f1" id="formElement"><input type="checkbox" name="ch1" /> </form></td>
                <td><span>Pendiente</span></td>

              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </>

  )
}

export default Verificacion;
