import React from "react";
import InputMask from "react-input-mask"
import { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { ModalCargando } from "../components/modalCargando.jsx";

const Embalaje = () => {
  const [tipo_caja, SetTipo_caja] = useState(1);
  const [lista, setLista] = useState([]);
  const [serie, SetSerie] = useState([]);
  const [serieValida, setSerieValida] = useState(true);
  const { store, actions } = useContext(Context);

// --------------------------------- Autenticacion ------------------------------------------------------
actions.inicio()
// ------------------------------------------------------------------------------------------------------

  function AgregarRegistro(tecla) {
    if (tecla == "Enter") {
      fetch('http://127.0.0.1:3100/verificarSerieEmbalaje',{
        method:'POST',
        headers:{
          'Authorization':`Bearer ${sessionStorage.getItem("token")}`,
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          serie:serie
        })
      })
      .then(response=>response.json())
      .then(result=>{console.log(result)
        if (result.msg=="ok"){
          var lista1 = [].concat(lista);
          lista1.push({ nro_caja: tipo_caja+1, fecha_embalaje: actions.fecha(), Valor: serie, denominacion:result.denominacion, material:result.material, tipo_caja:"DM",id_b:result.id });
          setLista([...lista1])
          SetSerie("")
          setSerieValida(true)
        }
        else{
          setSerieValida(false)
        }
      })
      .catch(error=>console.log(error))

    }


  }

  function guardarEmbalaje(){
    actions.cambiarEstadoModalCargado("cargando")
    fetch('http://127.0.0.1:3100/guardarEmbalaje',{
      method:'PUT',
      headers:{
        "Authorization":`Bearer ${sessionStorage.getItem("token")}`,
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        lista:lista
      })
    })
    .then(response=>response.json())
    .then(result=>{console.log(result)
      if(result.msg=="ok"){
        SetTipo_caja(result.nro_caja)
        actions.cambiarEstadoModalCargado("verdadero")
      }
      else{
        actions.cambiarEstadoModalCargado("falso")
      }
    })
    .catch(error=>console.log(error))
  }

  return (
    <>

      <div className="p-xxl-5">
        <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div className="col me-5 mb-5">
            <h1 className="">Embalaje </h1>
          </div>
        </div>
        <div className="d-flex me-2 ">
              <div className=" me-2 w-50 d-flex col-4">
                <span className="me-2 my-auto">Ultimo Nro. de Caja: </span><h3><span class="badge bg-secondary">{tipo_caja}</span></h3>
              </div>
              <div className="col-4"></div>
              <button type="button" className="btn btn-success col-2 " id="desmarcarTodo" onClick={() =>guardarEmbalaje()} data-bs-toggle="modal" data-bs-target="#exampleModal" >Guardar</button>
        </div>
        <ModalCargando/>

        <div className="table-responsive  mt-1 maxTabla overflow-auto">
          <table className="table table-striped border bg-white">
            <thead>
              <tr className="bg-dark text-white">
                <th>#</th>
                <th>SERIE</th>
                <th>MATERIAL</th>
                <th>DENOMINACION</th>
                <th>TIPO CAJA</th>
                <th>NRO CAJA</th>
                <th>FECHA EMB</th>


              </tr>
            </thead>
            <tbody>
              {lista.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.Valor}</td>
                    <td>{item.material}</td>
                    <td>{item.denominacion}</td>
                    <td><span>DM</span></td>
                    <td>{item.nro_caja}</td>
                    <td>{item.fecha_embalaje}</td>

                  </tr>
                )
              })}
              <tr>
                <td>{lista.length + 1}</td>
                <td><InputMask mask="999999999999999" maskChar={""} class="form-control style-none" id="inputPassword2" onKeyDown={(evento) => AgregarRegistro(evento.key)} placeholder="N° de serie" onChange={(e) => SetSerie(e.target.value)} value={serie} />
                {serieValida?<></>:<p className="text-danger" style={{fontSize:"0.8rem"}}>Ingrese una serie valida o verifique que no este repetida</p>}
                </td>
                <td></td>
                <td></td>
                <td> <span>DM</span></td>
                <td><span>{tipo_caja+1}</span></td>
                <td><span>{actions.fecha()}</span></td>
              </tr>



            </tbody>
          </table>
        </div>

      </div>
    </>


  )
}

export default Embalaje;
