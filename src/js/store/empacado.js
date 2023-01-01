import { useEffect } from "react"
import { createPath } from "react-router-dom"

export let empacado = {
    serie: "",
    material: "",
    denominacion: "",
    empacado: true,
    tipoEmpaque: "Caja Seminuevo",
    fechaEmpacado: "",
    responsable: "",
}

export let empacadoLista = []

export const agregarSerieEmpacado = (set, get, value) => {
    set({ empacado: {...empacado,serie:value}})
}
export const agregarEmpacadoEmpacado = (set, get, value) => {
    if (value) {
        set({ empacado: { empacado: false } })
    }
    else {
        set({ empacado: { empacado: true } })
    }
}

export const obtenerDatosSerieEmpacado = (set,get,key,empaque,empacadov) => {
    const fecha=new Date(Date.now())
    const lista = get().empacadoLista
    const serie =get().empacado.serie
    let duplicado=false
    const {empacado} = get()
    console.log(serie)
    if(key=="Enter"){
    console.log(lista.length)
        if(lista.length>0){
            for(let i =0 ; i<lista.length;i++){
                console.log(lista[i].serie)
                if(lista[i].serie==serie){
                    console.log("entro validar")
                    set({empacadoSerieValida:false})
                    duplicado=true
                    break
                }
            }
            
        }
        if (duplicado==false){
        fetch(getStore().ip+'/datos_movil_basico', {
        method: 'POST',
        headers: {
            // "Authorization": `Bearer ${get().token}`
            "Content-Type": "application/json"
        },
        body: JSON.stringify({serie:serie}),
        redirect: "follow"
    })
        .then(response => response.json())
        .then(result => {
            if(result.msg=="ok"){
                console.log(result)
                set({empacado:{...empacado,empacado:empacadov, tipoEmpaque:empaque, denominacion:result.datos.denominacion,material:result.datos.material,fechaEmpacado:fecha.toLocaleString("en-GB"), responsable:sessionStorage.getItem("id"),revision_movil_id:result.datos.id}})
                set({empacadoLista:lista.concat(get().empacado)})
                set({empacado:{...empacado,serie:""}})
                set({empacadoSerieValida:true})
            }
            else{
                set({empacadoSerieValida:false})
            }

        })
        .catch(err => console.log(err));
    }
    else{
        console.log("no funciono")
    }
}
}

export const limpiarPantallEmpacado=(set,setEmpacadoAsignado)=>{
    set({empacado:{...empacado,serie:""},empacadoLista:[]})
    set({empacadoSerieValida:true})
    setEmpacadoAsignado(false)
}

export const guardarEmpacados=(set,get,setEmpaque)=>{
    set({modalCargando:"cargando"})
    const {empacadoLista} = get()
    console.log(empacadoLista)
    fetch(getStore().ip+'/ingresarEmpacados',{
        method:'POST',
        headers:{
            'Authorization':`Bearer ${sessionStorage.getItem("token")}`,
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            empacados:empacadoLista
        })
    })
    .then(response=>response.json())
    .then(data=>{
        if(data.msg=="ok"){
            set({modalCargando:"verdadero"})
        }
        else{
            set({modalCargando:"falso"})
        }
    })
    limpiarPantallEmpacado(set,setEmpaque)
}

export const cargarTablaEmpacados=(set)=>{
    useEffect(()=>{
        fetch(getStore().ip+'/tablaEmpacados',{
            method:'GET',
            headers:{
                'Authorization':`Bearer ${sessionStorage.getItem("token")}`,
                'Content.type':'application/json'
            }
        })
        .then(respnse=>respnse.json())
        .then(data=>{
            console.log(data)
            set({empacadoRegistros:[...data.lista]})})
        .catch(error=>console.log(error))

    },[])
}