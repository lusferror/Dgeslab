import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const TablaAsignacion = () => {
  const { store, actions } = useContext(Context)
  //-----------------------funcion de autenticacion-----------------------------------
  actions.inicio()
  actions.registrosAprobacion()
  // ----------------------------------------------------------------------------------
  const [des, setDes] = useState(false)
  function deshabilitar() {
    setDes(true)
  }
  return (

    <div className="p-xxl-5">
      <div className="  row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        <div className="col me-5 mb-5">
          <h1 className="">ASIGNACIONES </h1>
        </div>
      </div>
      
      <div className="table-responsive">
        <table className="table table-striped border bg-white">
          <thead>
            <tr className="bg-dark text-white">
              <th>#</th>
              <th>FECHA</th>
              <th>IMEI</th>
              <th>TECNICO</th>
              <th>CHEQUEO</th>
              <th>APROBACION</th>

            </tr>
          </thead>
          <tbody>
            {
              store.listaAsignacionFinal.map((item, index) => {
                return (<tr>
                  <td className="">{index + 1}</td>
                  <td className=""><span>{item.fecha_asignacion}</span></td>
                  <td className="">{item.serie}</td>
                  <td className="">{item.tecnico_id}</td>
                  {item.estado=="Pendiente"?
                  <td className=""><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.check} onChange={()=>actions.check(index)} checked={item.check} disabled/> </form></td>:
                <td className=""><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.check} onClick={()=>actions.check(index)} checked={item.check}disabled/> </form></td>}
                  <td className=""><span className={item.estado == "Aprobado" ? "badge fs-6 bg-success" : "badge fs-6 bg-warning"}>{item.estado}</span></td>
                </tr>)
              })
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TablaAsignacion;
