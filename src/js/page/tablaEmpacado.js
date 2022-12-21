import { Action } from "@remix-run/router";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export const TablaEmpacado = () => {
    const {store,actions} = useContext(Context)
    // ---------------------------------------- Autenticacion ------------------------------------------------------
    actions.inicio()
    actions.cargarTablaEmpacados()
    console.log(store.empacadoRegistros)
    // -------------------------------------------------------------------------------------------------------------
    return (
        <div className="p-xxl-5">
            <div className="mb-5">
                <h1>SALIDA</h1>
            </div>
            <div>
                <ReactHTMLTableToExcel id="botonExportarExcel" className="btn btn-primary" table="salida" filename="salida" sheet="salida" buttonText="Exportar"/>
            </div>
            <div className="table-responsive  mt-1">
                <table className="table table-striped border bg-white" id="salida">
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
                            <th>FECHA EMBALAJE</th>
                            <th>TIPO CAJA</th>
                            <th>NRO CAJA</th>
                            <th>DOCUMENTO</th>
                            <th>FECHA DOCUMENTO</th>
                            <th>GUIA DESPACHO</th>
                            <th>FECHA DESPACHO</th>

                        </tr>
                    </thead>
                    <tbody>
                        {store.empacadoRegistros.map((item, index) => {
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
                                    <td>{item.fecha_embalaje}</td>
                                    <td>{item.tipo_caja}</td>
                                    <td>{item.nro_caja}</td>
                                    <td>{item.documento}</td>
                                    <td>{item.fecha_documento}</td>
                                    <td>{item.guia_despacho}</td>
                                    <td>{item.echa_despacho_fisico}</td>
                                    
                                </tr>)
                        }
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}