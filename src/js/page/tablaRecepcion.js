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
            <div className="maxTabla contenedor overflow-auto" >
                <table className="table table-striped table-bordered" >
                    <thead >
                        <tr className="table-dark">
                            <th scope="">#</th>
                            <th scope="">DOCUMENTO</th>
                            <th scope="">FOLIO</th>
                            <th scope="" className="mColumnaG">FECHA DE FOLIO</th>
                            <th scope="">MATERIAL</th>
                            <th scope="" className="mColumnaG">DENOMINACION</th>
                            <th scope="">SERIE</th>
                            <th scope="">RUT</th>
                            <th scope="">B. ORIGEN</th>
                            <th scope="">B. DESTINO</th>
                            <th scope="" className="mColumnaM">FECHA DE VERIFICACION</th>
                            <th scope="">RESPONSABLE</th>
                            <th scope="">TIPO CAJA</th>
                            <th scope="">NRO CAJA</th>
                            <th scope="">ESTADO</th>
                            <th scope="">OBSERVACIONES</th>
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
                                    <td>{item.f_verificacion}</td>
                                    <td>{item.responsable_ver}</td>
                                    <td>{item.tipo_caja}</td>
                                    <td>{item.nro_caja}</td>
                                    <td>
                                    {item.estado=="Pendiente"?
                                        <span class="badge bg-warning">{item.estado}</span>:
                                        <span class="badge bg-success">{item.estado}</span>
                                    }
                                    </td>
                                    <td>{item.observaciones}</td>
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