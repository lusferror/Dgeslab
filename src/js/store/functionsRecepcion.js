export let revisionMovil = {
    // id: 1, 
    encendido: "true", 
    frontal: "true", 
    frontal_r: "true",
    trasera: "true", 
    trasera_r: "true",
    superior: "true",
    superior_r: "true",
    inferior: "true",
    inferior_r: "true",
    izquierdo: "true", 
    izquierdo_r: "true", 
    derecho: "true", 
    derecho_r: "true",
    puntaje_cos: 13, 
    pantalla: "true",
    tactil: "true",
    botones: "true",
    mic: "true",
    audio: "true",
    bateria: "true",
    conector_c: "true",
    bluetooth: "true",
    wifi: "true",
    zona_w: "true",
    nfc: "true",
    conector_a: "true",
    porta_sim: "true",
    filtracion: "true",
    llamadas_e: "true",
    llamadas_r: "true",
    msj_e: "true",
    msj_r: "true",
    foto_f: "true",
    foto_t: "true",
    video_f: "true",
    video_t: "true",
    sen_proximidad: "true",
    vibrador: "true",
    puntaje_tec: "true",
    bloqueo: "true",
    act_sw: "true",
    restauracion: "true",
    fecha_rev: "",
    clasificacion: "SEMI NUEVO",
    ert: "true",
    observaciones: "",
    // id_asignacion: 1,

    serie: "",
    fecha_asignacion: "",
    // tecnico_id: "",
    // check: "true",
    // estado: "SEMI NUEVO",

    material: "",
    denominacion: "",
    nom_tecnico: "",
}

export const modalRecepcionEstado=(set,get,len,lista,setSeries)=>{
    set({spinnerRecepcion:true})
    if (len>0){
        set({modalRecepcion:true})
        fetch(get().ip+'/recepcion',{
            method:'POST',
            headers:{
                "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                registros:lista
            })
        })
        .then((response)=>response.json())

        .then(result=>{console.log(result)
            set({spinnerRecepcion:false})
            setSeries([])
            console.log(result.lista)
            if (result.msg=="nok") {
                set({recepcionRespusta:result.lista})
                }
            else if(result.msg=="error")
                set({modalRecepcion:false})
            else if (result.msg=="ok"){
                set({modalRecepcion:true})
            }
            else{
                set({modalRecepcion:false})
            }

        })
        .catch(err=>{console.error(err)
        if(err="error"){
        }
        })
        
    }
    else{
        set({modalRecepcion:false})
    }
}

export const registrosRecepcion = (set,get) =>{
    fetch(get().ip+'/registrosRecepcion',
    {
        method:'GET',
        headers:{
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        },

    }
    )
    .then(response=>response.json())
    .then(data=>{
        console.log("data: ",data)
        if(data.status=="ok"){
            set({registrosRecepcion:data.lista})
            // console.log("Datos Cargados")
        }
        else{
            console.log("datos no pudieron ser cargados")
        }
    })
    .catch(error=>console.log(error))
}

export const  borrarRegistroRecepcion=(set,get,id)=>{
    const registros = get().registrosRecepcion;
    console.log("este es el id: ",registros[id].id)
    let lista = registros.filter((item,index)=>index!=id)
    set({registrosRecepcion:[...lista]})
    fetch(get().ip+'/borrarRegistroRecepcion',{
        method:'DELETE',
        headers:{
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
            'Content-Type':'application/json'
        },
        body:{
            id:registros[id].id
        }
    })
    .then(response=>{
        response.json();
        console.log("status: ",response.status)
    })
    .then(data=>{
        console.log(data.msg)
    })
    .catch(error=>console.log(error))

}

export const registrosRevisionMovil = (set,get) =>{
    fetch(get().ip+'/revision_movil',
    {
        method:'GET',
        headers:{
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        },

    }
    )
    .then(response=>response.json())
    .then(data=>{
        console.log("dataRevisionMovil: ",data)
        if(data.status=="ok"){
            set({registrosRevisionMovil:data.salida})
            // console.log("Datos Cargados")
        }
        else{
            console.log("datos Revision Movil no pudieron ser cargados")
        }
    })
    .catch(error=>console.log(error))
}

// Revision Movil
export const agregarSerieRevisionMovil = (set, get, value) => {
    set({ revisionMovil: {...revisionMovil,serie:value}})
}
// export const agregarEmpacadoEmpacado = (set, get, value) => {
//     if (get().empacado.empacado) {
//         set({ empacado: { empacado: false } })
//     }
//     else {
//         set({ empacado: { empacado: true } })
//     }
// }

export const obtenerDatosSerieRevisionMovil = (set,get,key) => {
    const fecha=new Date(Date.now())
    console.log("FECHA: ",typeof(fecha.toLocaleString("en-GB")))
    console.log("FECHAACTUAL: ",fecha)
    console.log("FECHA: ",fecha.toLocaleString("en-GB"))
    const lista = get().registrosRevisionMovil //empacadoLista
    const serie =get().revisionMovil.serie //empacado.serie
    const {revisionMovil} = get()//{empacado} = get()
    console.log("almacenado en revisionMovil ",revisionMovil)
    if(key=="Enter"){
    console.log(serie)
    fetch(`http://127.0.0.1:3100/datos_revision_movil/${serie}`, {
        method: 'GET'
        // ,
        // headers: {
        //     // "Authorization": `Bearer ${get().token}`
        //     "Content-Type": "application/json"
        // },
        // body: JSON.stringify({serie:serie}),
        // redirect: "follow"
    })
        .then(response => response.json())
        .then(result => {console.log('resultado revision Movil:', result)
            console.log('Parte de result', result.result.denominacion)
            if(result!=null){
                // set({empacado:{...empacado, tipoEmpaque:empacado.tipoEmpaque, denominacion:result.denominacion,material:result.material,fechaEmpacado:fecha.toLocaleString("en-GB")}})
                // set({empacadoLista:lista.concat(get().empacado)})
                set({revisionMovil:{...revisionMovil, denominacion:result.result.denominacion,material:result.result.material,fecha_rev:fecha.toLocaleString("en-GB"), nom_tecnico:sessionStorage.getItem("user") }})
                set({registrosRevisionMovil:lista.concat(get().revisionMovil)})
                set({revisionMovil:{...revisionMovil, serie:"", denominacion:"",material:"",fecha_rev:fecha.toLocaleString("en-GB"), nom_tecnico:""}})
            }
            console.log(get().registrosRevisionMovil)

        })
        .catch(err => console.log(err));
    }
    else{
        console.log("no funciono")
    }
}
