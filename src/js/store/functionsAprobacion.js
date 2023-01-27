import { useEffect } from "react";

export const registrosAprobacion = (setStore,getStore)=>{// this function load record by accepted
    useEffect(()=>{
        fetch(getStore().ip+'/listaAprobacion',{
            method:'POST',
            headers:{
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                rol:sessionStorage.getItem("rol"),
                id:sessionStorage.getItem("id")
            })
        })
        .then(response=>response.json())
        .then(data=>{console.log(data)
            if(data.msg=="ok"){
                setStore({listaAsignacionFinal:data.lista})
            }
        })
        .catch(error=>console.log(error))
    },[])
}

export const checkAll = (setStore,getStore) => {
    document.querySelectorAll('#formElement input[type=checkbox]').forEach(function (checkElement) {
        checkElement.checked = true;
        const { listaAsignacionFinal } = getStore()
        let lista = []
        listaAsignacionFinal.forEach(item => {
            item.check = true;
            lista.push(item)
        })
        setStore({ listaAsignacionFinal: [...lista] })
    });
}

export const uncheckAll= (setStore,getStore) => {//this function check all records
    const {listaAsignacionFinal}=getStore()
    var lista = []
    listaAsignacionFinal.forEach(item => {
        item.check = false;
        lista.push(item)
    })
    setStore({ listaAsignacionFinal: [...lista] })


}

export const aprobarAsignacion = () => {// this function approves all selected records
    const { listaAsignacionFinal } = getStore()
    let lista = []
    let listaUpdate=[]
    listaAsignacionFinal.forEach((item) => {
        if (item.check == true && item.estado=="Pendiente"){
            item.estado = "Aprobado"
            item["b_id"]=item.id
            listaUpdate.push(item)
        }
        lista.push(item)
    })
    setStore({ listaAsignacionFinal: [...lista] })
    fetch(getStore().ip+'/aprobarAsignacion',{
        method:'PUT',
        headers:{
            "Authorization":`Bearer ${sessionStorage.getItem("token")}`,
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            lista:listaUpdate
        })
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
}

export const check = (index,setStore,getStore) => {// this function change value of check
    const { listaAsignacionFinal } = getStore()
    if (listaAsignacionFinal[index].check == true) {
        listaAsignacionFinal[index].check = false
        setStore({ listaAsignacionFinal: [...listaAsignacionFinal] })
    }
    else {
        listaAsignacionFinal[index].check = true
        setStore({ listaAsignacionFinal: [...listaAsignacionFinal] })
    }
}

