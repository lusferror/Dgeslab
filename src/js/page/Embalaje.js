import React from "react";
import InputMask from "react-input-mask"
import ScatterChart from "../components/graphs.jsx";
import { useContext, useState } from "react";
import { Context } from "../store/appContext.js";

const Embalaje = () => {
  const [tipo_caja, SetTipo_caja] = useState(1);
  const [lista, setLista] = useState([]);
  const [serie, SetSerie] = useState([]);
  const [fechaE, SetFechaE] = useState();
  const { store, actions } = useContext(Context);



  function AgregarRegistro(tecla) {
    if (tecla == "Enter") {
      var lista1 = [].concat(lista);


      lista1.push({ nroCaja: tipo_caja, fecha: actions.fecha(), Valor: serie });
      setLista([...lista1])
    }


  }

  return (
    <>

      <div className="container">
        <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div className="col me-5 mb-5">
            <h1 className="">Embalaje </h1>
          </div>
        </div>
        <div className="btn-group ms-5" role="group" aria-label="Basic example">

          <button type="button" className="border border-dark btn btn-primary" id="desmarcarTodo" onClick={() => SetTipo_caja(tipo_caja + 1)}  >Aumentar numero</button>

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
              {lista.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.Valor}</td>
                    <td>1234</td>
                    <td>Celda de tabla</td>
                    <td><span>DM</span></td>
                    <td>{item.nroCaja}</td>
                    <td>{item.fecha}</td>

                  </tr>
                )
              })}
              <tr>
                <td>{lista.length + 1}</td>
                <td><input class="form-control style-none" id="inputPassword2" onKeyDown={(evento) => AgregarRegistro(evento.key)} placeholder="N° de serie" onChange={(e) => SetSerie(e.target.value)} value={serie} /></td>
                <td>1234</td>
                <td>Celda de tabla</td>
                <td> <span>DM</span></td>
                <td><span>{tipo_caja}</span></td>
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
