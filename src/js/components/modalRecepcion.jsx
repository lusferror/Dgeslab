import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ModalRecepcion = () => {
    const { store } = useContext(Context)
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    {store.modalRecepcion ?
                        store.spinnerRecepcion ?
                            <div>
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Cargando... Por favor espere</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body d-flex justify-content-center">

                                    <div class="spinner-border text-warning" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </div>
                            :
                            <div>
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Guardado Éxitoso</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="alert alert-success" role="alert">
                                        Datos guardados con Éxito
                                    </div>
                                </div>
                            </div>
                        :
                        <div>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Error al guardar</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="alert alert-danger" role="alert">
                                    No se han podido guardar los datos
                                </div>
                            </div>
                        </div>
                    }
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    )
}