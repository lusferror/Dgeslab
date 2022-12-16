import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Usuarios = () => {
  const { store, actions } = useContext(Context)
  //-----------------------funcion de autenticacion-----------------------------------
  actions.usuario()
  // ----------------------------------------------------------------------------------
  console.log(store.usuarios)
  const {usuarios} = store
  const [des, setDes] = useState(false)
  function deshabilitar() {
    setDes(true)
  }
  return (

    <div className="p-xxl-5">
      <div className="  row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        <div className="col me-5 mb-5">
          <h1 className="">USUARIOS REGISTRADOS </h1>
        </div>
      </div>      
      <div className="table-responsive">
        <table className="table table-striped border bg-white">
          <thead>
            <tr className="bg-dark text-white">
              <th>ID</th>
              <th>NOMBRE</th>
              <th>SEGUNDO NOMBRE</th>
              <th>APELLIDO</th>
              <th>SEGUNDO APELLIDO</th>
              <th>EMAIL</th>
              <th>RUT</th>
              <th>FECHA</th>
              <th>ROLE</th>
            </tr>
          </thead>
          <tbody>
          {
              usuarios.map((usuarios, index) => {
                return (<tr>
                  <td className="">{usuarios.id}</td>
                  <td className="">{usuarios.name}</td>
                  <td className="">{usuarios.second_name}</td>
                  <td className="">{usuarios.last_name}</td>
                  <td className="">{usuarios.second_last_name}</td>
                  <td className="">{usuarios.email}</td>
                  <td className="">{usuarios.rut}</td>
                  <td className=""><span>{usuarios.create_at}</span></td>
                  <td className="">{usuarios.role_id}</td>                  
                </tr>)
              }) 
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Usuarios;