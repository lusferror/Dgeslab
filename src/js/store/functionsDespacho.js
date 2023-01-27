export const grabarDatos = (series, fec_desp, guia_desp,setSeries,setFiltrados,setStore,getStore) => {// Funcion que guarda los elementos cargados del excel a un json
    const { modal } = getStore()
    let jsonData = [];
    let largo = series.length;
    for (let index = 0; index < largo; index++) {
        jsonData.push(
            {
                // 'id': series[index].id,
                'serie': series[index].Imei,
                'documento': series[index]['NºDoc.'],
                'guia_despacho': guia_desp,
                'b_origen_salida': series[index]['B.Org.'],
                'b_destino_salida': series[index]['B.Dest.'],
                'fecha': fec_desp,
                'f_despacho_fisico': fec_desp,
            }
        );
    }
    console.log('Data:', jsonData);
    if (jsonData.length > 0) {
        setStore({ modal: true });
        console.log(getStore().modal)
        setSeries([])
        setFiltrados([])
    }
    else{
        setStore({ modal: false });
    }

}