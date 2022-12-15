import React from "react";

export const ModalEquiposPendientes = () => {
    return (
         <div className="modal fade" id="equiposPendientesModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog modal-dialog-scrollable modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Equipos Pendientes de Revision</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <table className="table table-striped table-bordered bg-white " style={{fontSize:"0.8em"}}>
                            <thead>
                                <tr className="bg-dark text-white">
                                    <th className="text-center">#</th>
                                    <th className="col-1 text-center mColumnaP">FECHA</th>
                                    <th className="col-3 mColumnaM" >IMEI</th>
                                    <th className="text-center mColumnaM">NOMBRE</th>
                                    <th className="col text-center">SKU</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="p-0" style={{ maxHeight: "10px" }}>
                                    <td className="text-center">id</td>
                                    <td className="text-center">14-12-2022</td>
                                    <td className="text-center">265816516516165</td>
                                    <td className="text-center">Martin</td>
                                    <td className="text-center p-1">156578</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    )
}