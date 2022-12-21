import { Action } from "@remix-run/router";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const TablaEmpacado = () => {
    const {store,actions} = useContext(Context)
    // ---------------------------------------- Autenticacion ------------------------------------------------------
    actions.inicio()
    actions.cargarTablaEmpacados()
    // -------------------------------------------------------------------------------------------------------------
    return (
        <div className="p-xxl-5">
            <div>
                <h1>Empacado</h1>
            </div>
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