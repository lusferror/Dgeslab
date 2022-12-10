import React, { useState } from "react";
import * as XLSX from 'xlsx';

const HomeSupervisor = ()=>{
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
    const grabarDatos = () => {
      let jsonData = [];
      let largo = series.length;
      for (let index = 0; index < largo; index++) {
        jsonData.push(
          {
            'id': series[index].id,
            'serie': series[index].Imei,
            'documento': series[index]['NºDoc.'],
            'guia_despacho': guia_desp,
            'b_origen_salida': series[index]['B.Org.'],
            'b_destino_salida': series[index]['B.Dest.'],
            'fecha': fec_desp,
            'f_despacho_fisico': fec_desp,
          }
        );
      }
      console.log('Data:', jsonData);
    }
  

    return (
      
        <div className="container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-8"></div>
            <div className="col-4">
              {series && (
                <input type="search" className="form-control" placeholder="Busqueda" aria-label="Username" aria-describedby="addon-wrapping" name="term" maxLength="8"
                  onChange={handleBuscador}
                //  {e => setQuery(e.target.value)}
                />
              )}
            </div>
          </div>
        </div>
        <div className="container pb-3">
          <div className="row">
            <div className="col-6">
              <input
                type='file'
                className="form-control"
                onChange={(e) => {
                  const file = e.target.files[0];
                  readExcel(file);
                }}
              />
            </div>
            <div className="col-6"></div>
          </div>
        </div>
        <div className="overflow-auto" style={{ height: '400px' }}>
          <table className="table table-striped border bg-white">
            <thead>
              <tr className="bg-dark text-white">
                <th scope="col">ID</th>
                <th scope="col">SERIE</th>
              </tr>
            </thead>
            <tbody>
              {
                // series.filter(
                //   (item) =>item.SERIE.includes(query)
                // ).map((item) => {
                filtrados &&
                filtrados.map((item, index) => {
                  // console.log(item)
                  //console.log('query: ', query)
                  return (
                    <tr key={item.id}>
                      <th >{item.id}</th>
                      <td>{item.Imei}</td>
                    </tr>)
                })
              }
            </tbody>
          </table>

        </div>
        <div className="container m-3">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="input-group">
                <span className="input-group-text" id="addon-wrapping">Guia de Despacho</span>
                <input type="text" id="guia_despacho" className="form-control" placeholder="Guia de Despacho" aria-label="Username" aria-describedby="addon-wrapping"
                  onChange={(e) => setGuia_desp(e.target.value)}
                />
                <span className="input-group-text" id="addon-wrapping">Fecha de Despacho</span>
                <input type="text" id="fec_desp" className="form-control" placeholder="Fecha de Despacho" aria-label="Username" aria-describedby="addon-wrapping"
                  onChange={(e) => setFec_desp(e.target.value)}
                />
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary m-2" onClick={grabarDatos} >Grabar Datos</button>
        </div>
      </div>
    
    )
}

export default HomeSupervisor;