import React, { useState } from "react";
import InputMask from "react-input-mask"
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import { ModalCargando } from "../components/modalCargando.jsx";

const Empacado = () => {
  const { store, actions } = useContext(Context)
  //----------------------------- Autencicacion ---------------------------------------
  actions.inicio()
  //-------------------------------------------------------------------------
  // const emp ={ empacado } = store
  const [checked, setChecked] = useState(true)
  const [empaque,setEmpaque]=useState("")
  const [empacadoAsignado, setEmpacadoAsignado] = useState(false)
  const [empacado,setEmpacado]=useState(true)
  const check = () => {
    checked ? setChecked(false) : setChecked(true)
    hola.Prueba.setSerie()
  }

  function agregarEmpacadoEmpacado(e){
    if (e){
      setEmpacado(false)
    }
    else{
      setEmpacado(true)
    }
  }
  return (
    <>
      <div className="p-xxl-5">
        <div className="">
          <div className=" ">
            <div className="mb-5">
              <h1 className="">EMPACADO </h1>
            </div>
          </div>

        </div>
            <div className=" alert alert-primary d-flex">
              <p className="my-auto">Empque:</p> 
              <select className="form-select ms-2 w-50" onChange={(e)=>setEmpaque(e.target.value)} disabled={empacadoAsignado}>
                <option>Seleccione el tipo de empaque</option>
                <option value="Caja Seminuevo" >Caja Seminuevo</option>
                <option value="Caja seguro">Caja seguro</option>
                <option value="Bolsa Burbuja">Bolsa Burbuja</option>
              </select>
              <button className="btn btn-primary ms-2 col-1" type="button" onClick={()=>setEmpacadoAsignado(true)}>Asignar</button>
              <button className="btn btn-primary ms-2 col-1" type="button" onClick={(()=>actions.limpiarPantallEmpacado(setEmpacadoAsignado))}>Limpiar</button>
          
            </div>
        <div className="d-flex p-0">
          <div className="col-10"></div>
          <button className="btn btn-success col-2 " type="button" onClick={()=>{actions.guardarEmpacados(setEmpacadoAsignado)}} data-bs-toggle="modal" data-bs-target="#exampleModal">Guardar</button>
        </div>
        <ModalCargando/>
        <div className="table-responsive  mt-1">
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
                    <td>{index + 1}</td>
                    <td>{item.serie}</td>
                    <td>{item.material}</td>
                    <td>{item.denominacion}</td>
                    <td>{item.empacado ? <input className="form-check-input" type="checkbox" id="flexCheckChecked" checked disabled /> :
                      <input className="form-check-input" type="checkbox" id="flexCheckChecked" checked={false} disabled />}
                    </td>
                    <td>{item.tipoEmpaque}</td>
                    <td><span>{item.fechaEmpacado}</span></td>
                    <td><span>{item.responsable}</span></td>
                  </tr>)
              }
              )
              }
              <tr>
                <td>{store.empacadoLista.length+1}</td>
                <td><InputMask mask={"999999999999999"} maskChar="" size={15} className="form-control style-none" id="inputPassword2" placeholder="Serie" value={store.empacado.serie} onChange={e => actions.agregarSerieEmpacado(e.target.value)}
                  onKeyDown={(e) => { actions.obtenerDatosSerieEmpacado(e.key,empaque,empacado) }} disabled={!empacadoAsignado}/>
                  {store.empacadoSerieValida?<></>:<p className="text-danger" style={{fontSize:"0.8rem"}}>Ingrese una serie valida o verifique que no este repetida</p>}
                </td>
                <td></td>
                <td></td>
                <td><input className="form-check-input" type="checkbox" value={empacado} id="flexCheckChecked" onChange={e =>agregarEmpacadoEmpacado(e.target.value)} checked={empacado} /></td>
                <td>{empacadoAsignado?empaque:<></>}</td>
                <td><span>{actions.fecha()}</span></td>
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
