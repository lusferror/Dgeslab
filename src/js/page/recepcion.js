import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import * as XLSX from 'xlsx';
import { ModalRecepcion } from "../components/modalRecepcion.jsx";
import formato from "../../doc/FORMATO.xls" 

const Recepcion = () => {
    const { stroe, actions } = useContext(Context);
    // ------------------------ validacion ------------------------------------------------
    actions.inicio()
    // -------------------------------------------------------------------------------------
    // ---------------------------importacion de excel ---------------------------------------
    const [series, setSeries] = useState([]);
    const [filtrados, setFiltrados] = useState([]);
    const [query, setQuery] = useState([]);
    const [alertFile,setAlertFile] = useState(false)

    const readExcel = (file,value) => {
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
            const keys=Object.keys(d[0])
            const validateKeys=Object.assign({},keys)
            const validateKeysCorrect={
                0:"documento",
                1:"folio",
                2:"material",
                3:"denominacion",
                4:"serie",
                5:"fecha_folio",
                6:"rut",
                7:"b_origen",
                8:"b_destino",
                9:"nombre"
            }
           if(JSON.stringify(validateKeys)==JSON.stringify(validateKeysCorrect)){
            setSeries(d);
            setFiltrados(d);
            setAlertFile(false)
           }
           else{
                setAlertFile(true)
                setSeries([])
           }
        });
    };
    // -----------------------------------------------------------------------------------------------
    return (
        <div className="p-xxl-4">
            <div className="mb-4">
                <h1>RECEPCION</h1>
            </div>
                {alertFile?
                    <div className="alert alert-danger text-center" role={"alert"}>
                        El Archivo no contiene el formato correcto
                    </div>:
                    <></>
                }       
            {/* ------------------------------------- cargar archivo excel -------------------------------- */}
            <div className="d-flex mb-5 ">
                <form className="w-100 d-flex">
                <span className="pt-2 me-3 fw-bold ">Ingrese el archivo:</span>
                <span className="col-4 me-1">
                    <input type='file' className="form-control" onChange={(e) => {const file = e.target.files[0]; readExcel(file,e.target.value);e.target.value=""}}/>
                </span>
                <button className="btn btn-primary col-1 me-1" onClick={()=>setSeries([])} type="reset">Limpiar</button>
                <a className="btn btn-secondary col-1" type="button" href={formato} download="formato">Formato.xls</a>
                <span className="col"></span>
                </form>
                <ModalRecepcion/>
                <span className="col-2 float-end"><button className="btn btn-success w-100" onClick={()=>{actions.modalRecepcionEstado(series.length,series,setSeries)}} data-bs-toggle="modal" data-bs-target="#exampleModal">Guardar</button></span>
            </div>
            {/* ---------------------------------------------------------------------------------------------- */}
            <p>Cantidad de registros: <strong>{series.length}</strong></p>
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
                        return( <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.documento}</td>
                                    <td>{item.folio}</td>
                                    <td>{item.fecha_folio}</td>
                                    <td>{item.material}</td>
                                    <td>{item.denominacion}</td>
                                    <td>{item.serie}</td>
                                    <td>{item.rut}</td>
                                    <td>{item.b_origen}</td>
                                    <td>{item.b_destino}</td>
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