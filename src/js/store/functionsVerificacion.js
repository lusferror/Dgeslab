import { useEffect } from "react";

export function nroCajaVerificacion(set, get) {
    useEffect(() => {
        fetch(get().ip+'/nroCajaVerificacion', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.msg)
                if (data.msg == "ok") {
                    console.log("no esta entrando")
                    set({ nroCaja: data.result })
                }
                // const {nroCajaVerificacion}= get().store
                console.log(get().nroCaja)
            })

            .catch(error => console.log(error))
    }, [])
}

export function registrarDocumentoVerificacion(set, get, e) {
    e.preventDefault()
    fetch(get().ip+'/nroDocumento', {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            documento: get().registrarDocumentoVerificacion
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.msg == "ok" && data.lista.length>0) {
                set({ documentoRegistrado: true, verificacionDocumento: true, verificacionListaSeries: [...data.lista] })
            }
            else {
                set({ verificacionDocumento: false })
            }
        })
        .catch(error => console.error(error))

}

export function onChangeDocumentoVerificacion(set, get, e) {
    set({ registrarDocumentoVerificacion: e })
}

export function limpiarregistrarDocumentoVerificacion(set, get) {
    set({ registrarDocumentoVerificacion: "", documentoRegistrado: false, verificacionDocumento: true })
}

export const onChangeVerificacionImei = (set, get, value) => {
    set({ verificacionImei: value })
}

export const onChangeverificacionObservaciones = (set, get, value) => {
    set({ verificacionObservaciones: value })
    console.log(get().verificacionObservaciones)
}

export function agregarRegistroVerificacion(setStore,getStore,imei, tecnico, documento, nro_caja,observaciones, tecla) {
    const fecha_hoy = new Date(Date.now())
    const { verificacionListaSeries } = getStore()
    let duplicado = false
    const { varificacionLista } = getStore()
    if (tecla == "Enter" && imei != "") {
        if (varificacionLista.length > 0) {
            for (let i of varificacionLista) {
                if (parseInt(imei) == i.serie_b) {
                    console.log("duplicado")
                    duplicado = true
                    setStore({ verificacionSerieValida: false })
                }
            }
        }
        if (duplicado == false) {

                
           for (let i=0;i<verificacionListaSeries.length;i++){     
                if(verificacionListaSeries[i]==imei){
                    console.log(true)
                        let item = {}
                        item = {
                            f_verificacion: fecha_hoy.toLocaleString("en-GB"),
                            serie_b: parseInt(imei),
                            responsable_ver: parseInt(tecnico),
                            documento_b: documento,
                            tipo_caja: "RM",
                            nro_caja: nro_caja,
                            estado: "Verificado",
                            observaciones:observaciones
                        }
                        const lista = varificacionLista.concat([item])
                        setStore({ varificacionLista: [...lista] })
                        setStore({ verificacionImei: "" })
                        setStore({verificacionSerieValida:true})
                        setStore({verificacionObservaciones:""})
                        break;
                        
                }
                else{
                    setStore({ verificacionSerieValida: false})
                    console.log("asignacion errada")

                }
        }
          
        }
    }
}

export const verificacionGuardar=(set,get)=>{
    fetch(get().ip+'/guardarVerficacionRecepcion',{
        method:'PUT',
        headers:{
            'Authorization':`Bearer ${sessionStorage.getItem("token")}`,
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            lista:get().varificacionLista
        })
    })
    .then(response=>response.json())
    .then(data=>{console.log(data)
        if(data.msg=="ok"){
            set({modalCargando:"verdadero",nroCaja:data.nro_caja,varificacionLista:[],registrarDocumentoVerificacion:"",
            documentoRegistrado: false})
        }
        else{
            set({modalCargando:"falso"})
        }
    })
    .catch(error=>console.log(error))

}