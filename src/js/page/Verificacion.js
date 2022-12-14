import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
const Verificacion = () => {
  const {store,actions}=useContext(Context)
  //-----------------------funcion de autenticacion-----------------------------------
  actions.inicio()
  // ----------------------------------------------------------------------------------
  console.log(store.listaAsignacion)
  const [des,setDes] = useState(false)
  function deshabilitar(){
    setDes(true)
  }
  return (

    <>
      <div >
        <div className="container">
          <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div className="col me-5 mb-5">
              <h1 className="">Aprobacion </h1>
            </div>
          </div>
          <div className="btn-group ms-5" role="group" aria-label="Basic example">
              <button type="button " className="border border-dark btn btn-primary" id="marcarTodo" onClick={()=>actions.checkAll()}>Seleccionar Todo</button>
              <button type="button" className="border border-dark btn btn-primary" id="desmarcarTodo" onClick={()=>{actions.uncheckAll()}} disabled={des}>Desmarcar Todo</button>
              <button type="button" className="border border-dark btn btn-primary" onClick={()=>{actions.aprobarAsignacion();deshabilitar()}}>Aprobar</button>
            </div>
        </div>

        <div className="table-responsive container mt-1">
          <table className="table table-striped border bg-white">
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

              {
                store.listaAsignacion.map((item,index)=>{
                  return(<tr>
                    <td className="">{index + 1}</td>
                    <td className=""><span>{item.fecha}</span></td>
                    <td className="">{item.imei}</td>
                    <td className="">{item.tecnico}</td>
                    <td className=""><form name="f1" id="formElement"><input type="checkbox" name="ch1" /> </form></td>
                    <td className=""><span className={item.estado=="Aprobado"?"badge fs-6 bg-success":"badge fs-6 bg-warning"}>{item.estado}</span></td>
                  </tr>)
                })
              }

            </tbody>
          </table>
        </div>

      </div>
    </>

  )
}

export default Verificacion;
