import React, { useState, useContext } from "react";
import * as XLSX from 'xlsx';
import InputMask from "react-input-mask";
import { Modal } from "../components/modal.jsx";
import { Context } from "../store/appContext.js";

const HomeSupervisor = () => {
  const {actions,store} = useContext(Context)
  // -------------------------validacion de sesion--------------------------------------
  actions.inicio()
  // -----------------------------------------------------------------------------------
  const [series, setSeries] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [query, setQuery] = useState([]);
  const [guia_desp, setGuia_desp] = useState('');
  const [fec_desp, setFec_desp] = useState('');

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file)

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: 'buffer' });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      console.log('series', d);
      setSeries(d);
      setFiltrados(d);
      console.log('filtrados', filtrados);
    });
  };

  const handleBuscador = (e) => {
    const cadena = e.target.value;
    let tmpArray = [];
    const limite = series.length;

    for (let index = 0; index < limite; index++) {
      const etiquetas = series[index].Imei;
      const patt = new RegExp(cadena);
      const res = patt.test(etiquetas);
      if (res) {
        tmpArray.push(series[index]);
      }
    }
    setFiltrados(tmpArray);
  }

  return (

    <div className="container-fluid mt-3 ">
      <div className="mb-5 "><h1>Despacho</h1></div>
      <div className="mb-5 ">
        <div className="row">
          <div className="d-flex">
            <span className="pt-2 me-3 fw-bold">Ingrese el archivo:</span>
            <span className="col-6">
              <input
                type='file'
                className="form-control"
                onChange={(e) => {
                  const file = e.target.files[0];
                  readExcel(file);
                }}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <div className="">
          <div className="d-flex pt-0 ">
            <div className="col-10 pt-2">
              <div className="input-group">
                <span className="input-group-text" id="addon-wrapping">Guia de Despacho</span>
                <input type="text" id="guia_despacho" className="form-control" placeholder="Guia de Despacho" aria-label="Username" aria-describedby="addon-wrapping"
                  onChange={(e) => setGuia_desp(e.target.value)}
                />
                <span className="input-group-text" id="addon-wrapping">Fecha de Despacho</span>
                <InputMask mask="99/99/9999" value={actions.fecha()} type="text" id="fec_desp" className="form-control" placeholder="Fecha de Despacho" aria-label="Username" aria-describedby="addon-wrapping"
                  onChange={(e) => {setFec_desp(e.target.value);
                  console.log(e.target.value)
                  }} />
              </div>
            </div>

            <div className="col p-0 m-0 ">
              <button type="button" className="float-end btn btn-primary m-2" onClick={()=>actions.grabarDatos(series,fec_desp,guia_desp)} data-bs-toggle="modal" data-bs-target="#exampleModal">Grabar Datos</button>
            </div>
            <Modal/>
          </div>
          <hr className="border border-dark border-2 opacity-50"></hr>
        </div>
      </div>
      <div className="row col-12 mb-2 d-flex justify-content-end">
        <div className=" col-5 float-end pe-0">
          {series && (
            <input id="busqueda" type="search" className="form-control border border-primary border-2 me-0" placeholder="Busqueda" aria-label="Username" aria-describedby="addon-wrapping" name="term" maxLength="8"
              onChange={handleBuscador}
            //  {e => setQuery(e.target.value)}
            />
          )}
        </div>
      </div>

      <div className="overflow-auto contenedor row" style={{ height: '400px' }}>
        <table className="table table-striped border bg-white">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">ID</th>
              <th scope="col">SERIE</th>
            </tr>
          </thead>
          <tbody>
            {

              filtrados &&
              filtrados.map((item, index) => {
                return (
                  <tr key={index}>
                    <th >{index}</th>
                    <td>{item.serie}</td>
                  </tr>)
              })
            }
          </tbody>
        </table>

      </div>
    </div>

  )
}

export default HomeSupervisor;