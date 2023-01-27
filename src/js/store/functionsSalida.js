export function salida(setStore){
        console.log("Salida del sistema")
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("session")
        sessionStorage.removeItem("user")
        sessionStorage.removeItem("rol")
        sessionStorage.removeItem("id")
        sessionStorage.removeItem("rol_name")
        setStore({
            // en esta seccion se colocan todos los estados
            navbar: true,
            modal: false,
            sesion: false,
            listaAsignacionFinal: [], // lista de asignacion			
            asignarTecnico: "",//id del tenico
            asignado: false, // estado de la asignacion
            listaAsignacion: [], // lista de asignacion
            asignarImei: "",
            token: null,
            usuario: {},
            usuarios: [],
            usuarioCreado: null,
            empacado: empacado, // importado de la hoja empacado
            empacadoLista,
            modalRecepcion: true,
            spinnerRecepcion: false,
            spinnerLogin: false,
            recepcionRespusta: [],
            alerLogin: false, // indica la alerta de login incorrecto
            registrosRecepcion: [],
            listaTecnicosAsigacion: [],
            asignacionSerieValida: true,
            registrosRevisionMovil:[],
            revisionMovil:revisionMovil
        });
        document.body.classList.remove('sb-sidenav-toggled')
    
}