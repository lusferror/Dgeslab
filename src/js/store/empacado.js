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
    if (get().empacado.empacado) {
        set({ empacado: { empacado: false } })
    }
    else {
        set({ empacado: { empacado: true } })
    }
}

export const obtenerDatosSerieEmpacado = (set,get,key) => {
    const fecha=new Date(Date.now())
    console.log("FECHA: ",typeof(fecha.toLocaleString("en-GB")))
    const lista = get().empacadoLista
    const serie =get().empacado.serie
    const {empacado} = get()
    console.log("almacenado en empacado ",empacado)
    if(key=="Enter"){
    console.log(serie)
    fetch('http://127.0.0.1:3100/datos_movil_basico', {
        method: 'POST',
        headers: {
            // "Authorization": `Bearer ${get().token}`
            "Content-Type": "application/json"
        },
        body: JSON.stringify({serie:serie}),
        redirect: "follow"
    })
        .then(response => response.json())
        .then(result => {console.log(result)
            if(result!=null){
                set({empacado:{...empacado, tipoEmpaque:empacado.tipoEmpaque, denominacion:result.denominacion,material:result.material,fechaEmpacado:fecha.toLocaleString("en-GB")}})
                set({empacadoLista:lista.concat(get().empacado)})
            }
            console.log(get().empacadoLista)

        })
        .catch(err => console.log(err));
    }
    else{
        console.log("no funciono")
    }
}