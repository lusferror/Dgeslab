import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import * as XLSX from 'xlsx';
import { ModalRecepcion } from "../components/modalRecepcion.jsx";
import formato from "../../doc/FORMATO.xls" 

const TablaRecepcion = () => {
    const { store, actions } = useContext(Context);
    // ------------------------ validacion ------------------------------------------------
    actions.inicio()
    useEffect(()=>
    actions.registrosRecepcion(),[])
    // -------------------------------------------------------------------------------------
   
    // -----------------------------------------------------------------------------------------------
    return (
        <div className="p-xxl-4">
            <div className="mb-4">
                <h1>RECEPCION</h1>
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
                        {store.registrosRecepcion.map((item,index)=>{
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

export default TablaRecepcion;