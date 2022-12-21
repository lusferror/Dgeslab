import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const TablaMoviles = () => {
  const { actions, store } = useContext(Context)
  const { revisionMovil } = store
  // -------------------------validacion de sesion--------------------------------------
  actions.inicio()
  useEffect(()=>
  actions.registrosRevisionMovil(),[])
// -----------------------------------------------------------------------------------
  return (
    <div className="container-fluid p-xxl-5">
      <div className=" ">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div className="col w-100" style={{ marginRight: "10%" }}>
            <h1 className="me-5">REVISION TECNICA</h1>
          </div>
        </div>
      </div>
     
      <div className="table-responsive  contenedor overflow-auto maxTabla">
        <table className="table table-striped table-bordered bg-white ">
          <thead>
            <tr className="fst-italic">
              <th colSpan={7} className="bg-light bg-gradient bg-opacity-50 fs-4 text-center">DATOS PRINCIPALES</th>
              <th colSpan={13} className="bg-warning bg-opacity-50 fs-4 text-center">VISTAS</th>
              <th colSpan={25} className="bg-primary bg-opacity-50 fs-4 text-center">TECNICA</th>
              <th colSpan={3} className="bg-info bg-opacity-50 fs-4 text-center">SOFTWARE</th>
              <th colSpan={4} className="bg-secondary bg-gradient bg-opacity-50 fs-4 text-center">DATOS FINALES</th>
            </tr>

            <tr className="bg-dark text-white">
              <th>#</th>
              <th className="mColumnaG">SERIE</th>
              <th className="mColumnaG">NOMBRE</th>
              <th>MATERIAL</th>
              <th className="mColumnaG">TECNICO</th>
              <th>FECHA ASIGNACION</th>
              <th>ENCENDIDO</th>
              {/* ---------------------------- evaluacion cosmetica ----------------------------------------------------- */}
              <th>FRONTAL</th>
              <th>FRONTAL REFLEJO</th>
              <th>TRASERA</th>
              <th>TRASERA REFLEJO</th>
              <th>BORDE SUPERIOR</th>
              <th>BORDE SUPERIOR REFLEJO</th>
              <th>BORDE INFERIOR</th>
              <th>BORDE INFERIOR REFLEJO</th>
              <th>BORDE IZQUIERDO</th>
              <th>BORDE IZQUIERDO REFLEJO</th>
              <th>BORDE DERECHO</th>
              <th>BORDE DERECHO REFLEJO</th>
              <th className="bg-ligth">PUNTAJE COSMETICO</th>
              {/* ---------------------evaluacion tecnica ----------------------------------------- */}
              <th>PANTALLA</th>
              <th>TACTIL</th>
              <th>BOTONES LATERALES</th>
              <th>MICROFONOS</th>
              <th>PARLANTES</th>
              <th>BATERIA</th>
              <th>CONECTOR CARGA</th>
              <th>BLUETOOTH</th>
              <th>WIFI</th>
              <th>ZONA WIFI</th>
              <th>SENSOR NFC</th>
              <th>CONECTOR AUDIO </th>
              <th>ESTADO PORTA SIM</th>
              <th>FILTRACION EQUIPO</th>
              <th>EJEC EMISION LLAMADAS</th>
              <th>RECEP LLAMADAS</th>
              <th>EJEC EMISION MENSAJES</th>
              <th>RECEP MENSAJES </th>
              <th>FOTOS CAMARA FRONTAL</th>
              <th>FOTOS CAMARA TRASERA</th>
              <th>VIDEOS CAMARA FRONTAL</th>
              <th>VIDEOS CAMARA TRASERA</th>
              <th>SENSOR PROXIMIDAD</th>
              <th>VIBRACION EQUIPO</th>
              <th>PUNTAJE EV TECNICO</th>
              <th>BLOQUEO</th>
              <th>ACT SOFTWARE</th>
              <th>RESTAURACION</th>
              <th>FECHA REVISION</th>
              <th>CLASIFICACIÓN</th>
              <th>ERT</th>
              <th>OBSERVACIONES</th>


            </tr>
          </thead>
          <tbody>
                {store.registrosRevisionMovil.map((item,index)=>{
                  // console.log('Entro a registrosRevisionMovil')
                              return( <tr key={index}>
                                          <td>{index+1}</td>
                                          <td>{item.serie}</td>
                                          <td>{item.denominacion}</td>
                                          <td>{item.material}</td>
                                          <td>{item.nom_tecnico}</td>
                                          <td>{item.fecha_asignacion}</td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.encendido} onChange={()=>actions.check(index)} checked={item.encendido} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.frontal} onChange={()=>actions.check(index)} checked={item.frontal} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.frontal_r} onChange={()=>actions.check(index)} checked={item.frontal_r} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.trasera} onChange={()=>actions.check(index)} checked={item.trasera} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.trasera_r} onChange={()=>actions.check(index)} checked={item.trasera_r} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.superior} onChange={()=>actions.check(index)} checked={item.superior} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.superior_r} onChange={()=>actions.check(index)} checked={item.superior_r} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.inferior} onChange={()=>actions.check(index)} checked={item.inferior} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.inferior_r} onChange={()=>actions.check(index)} checked={item.inferior_r} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.izquierdo} onChange={()=>actions.check(index)} checked={item.izquierdo} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.izquierdo_r} onChange={()=>actions.check(index)} checked={item.izquierdo_r} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.derecho} onChange={()=>actions.check(index)} checked={item.derecho} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.derecho_r} onChange={()=>actions.check(index)} checked={item.derecho_r} disabled/> </form></td>
                                          <td>{item.puntaje_cos}</td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.pantalla} onChange={()=>actions.check(index)} checked={item.pantalla} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.tactil} onChange={()=>actions.check(index)} checked={item.tactil} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.botones} onChange={()=>actions.check(index)} checked={item.botones} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.mic} onChange={()=>actions.check(index)} checked={item.mic} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.audio} onChange={()=>actions.check(index)} checked={item.audio} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.bateria} onChange={()=>actions.check(index)} checked={item.bateria} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.conector_c} onChange={()=>actions.check(index)} checked={item.conector_c} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.bluetooth} onChange={()=>actions.check(index)} checked={item.bluetooth} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.wifi} onChange={()=>actions.check(index)} checked={item.wifi} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.zona_w} onChange={()=>actions.check(index)} checked={item.zona_w} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.nfc} onChange={()=>actions.check(index)} checked={item.nfc} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.conector_a} onChange={()=>actions.check(index)} checked={item.conector_a} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.porta_sim} onChange={()=>actions.check(index)} checked={item.porta_sim} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.filtracion} onChange={()=>actions.check(index)} checked={item.filtracion} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.llamadas_e} onChange={()=>actions.check(index)} checked={item.llamadas_e} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.llamadas_r} onChange={()=>actions.check(index)} checked={item.llamadas_r} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.msj_e} onChange={()=>actions.check(index)} checked={item.msj_e} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.msj_r} onChange={()=>actions.check(index)} checked={item.msj_r} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.foto_f} onChange={()=>actions.check(index)} checked={item.foto_f} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.foto_t} onChange={()=>actions.check(index)} checked={item.foto_t} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.video_f} onChange={()=>actions.check(index)} checked={item.video_f} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.video_t} onChange={()=>actions.check(index)} checked={item.video_t} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.sen_proximidad} onChange={()=>actions.check(index)} checked={item.sen_proximidad} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.vibrador} onChange={()=>actions.check(index)} checked={item.vibrador} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.puntaje_tec} onChange={()=>actions.check(index)} checked={item.puntaje_tec} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.bloqueo} onChange={()=>actions.check(index)} checked={item.bloqueo} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.act_sw} onChange={()=>actions.check(index)} checked={item.act_sw} disabled/> </form></td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.restauracion} onChange={()=>actions.check(index)} checked={item.restauracion} disabled/> </form></td>
                                          <td>{item.fecha_rev}</td>
                                          <td>{item.clasificacion}</td>
                                          <td><form name="f1" id="formElement"><input type="checkbox" name="ch1" value={item.ert} onChange={()=>actions.check(index)} checked={item.ert} disabled/> </form></td>
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

export default TablaMoviles;
