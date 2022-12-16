import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import * as XLSX from 'xlsx';
import { ModalRecepcion } from "../components/modalRecepcion.jsx";

const Recepcion = () => {
    const { stroe, actions } = useContext(Context);
    // ------------------------ validacion ------------------------------------------------
    actions.inicio()
    // -------------------------------------------------------------------------------------
    // ---------------------------importacion de excel ---------------------------------------
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
    // -----------------------------------------------------------------------------------------------
    return (
        <div className="p-xxl-4">
            <div className="mb-4">
                <h1>RECEPCION</h1>
            </div>
            {/* ------------------------------------- cargar archivo excel -------------------------------- */}
            <div className="d-flex mb-5 ">
                <span className="pt-2 me-3 fw-bold ">Ingrese el archivo:</span>
                <span className="col-4 me-5">
                    <input type='file' className="form-control" onChange={(e) => {const file = e.target.files[0]; readExcel(file);}}/>
                </span>
                <span className="col"></span>
                <span className="col-2 float-end"><button className="btn btn-success w-100" onClick={()=>{actions.modalRecepcionEstado(series.length,series)}} data-bs-toggle="modal" data-bs-target="#exampleModal">Guardar</button></span>
                <ModalRecepcion/>
            </div>
            {/* ---------------------------------------------------------------------------------------------- */}
            <div className="maxTabla contenedor overflow-auto">
                <table className="table table-striped">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">#</th>
                            <th scope="col">DOCUMENTO</th>
                            <th scope="col">FOLIO</th>
                            <th scope="col">FECHA DE FOLIO</th>
                            <th scope="col">MATERIAL</th>
                            <th scope="col">DENOMINACION</th>
                            <th scope="col">SERIE</th>
                            <th scope="col">RUT</th>
                            <th scope="col">BODEGA DE ORIGEN</th>
                            <th scope="col">BODEGA DESTINO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {series.map((item,index)=>{
                        return( <tr>
                                    <td>{index+1}</td>
                                    <td>{item.Doc}</td>
                                    <td>{item.Folio}</td>
                                    <td>{item.Fdoc}</td>
                                    <td>{item.Material}</td>
                                    <td>{item.Descripcion}</td>
                                    <td>{item.Imei}</td>
                                    <td>{item.Rut}</td>
                                    <td>{item.Borg}</td>
                                    <td>{item.Bdest}</td>
                                </tr>
                                ) 
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Recepcion;