import { modalRecepcionEstado, registrosRecepcion, borrarRegistroRecepcion, registrosRevisionMovil, revisionMovil, obtenerDatosSerieRevisionMovil, agregarSerieRevisionMovil } from './functionsRecepcion';
import { cargarTablaEmpacados, guardarEmpacados,limpiarPantallEmpacado, agregarSerieEmpacado, empacado, agregarEmpacadoEmpacado, obtenerDatosSerieEmpacado, empacadoLista } from './functionsEmpacado';
import { verificacionGuardar, agregarRegistroVerificacion, onChangeverificacionObservaciones,onChangeVerificacionImei,nroCajaVerificacion, onChangeDocumentoVerificacion , registrarDocumentoVerificacion, limpiarregistrarDocumentoVerificacion} from './functionsVerificacion'
import { salida } from './functionsSalida';
import Login from './functionsLogin';
import { crearUsuario, usuario } from './functionsUsuarios';
import { asignar, itemAsignacion, listaTecnicosAsignacion } from './functionsAsignacion';
import { fecha, inicio } from './functionsSistema';
import { aprobarAsignacion, check, checkAll, uncheckAll, registrosAprobacion} from './functionsAprobacion';
import { datosFinancieros } from './functionsApiExternal';
import Page from '../templates/page.jsx';
import BadgeForm from '../components/badgedForm.jsx';
import React from 'react';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// direccion ip
			// ip:'http://34.136.77.203:3100',
			// ip:'http://127.0.0.1:3100',
			ip:'http://192.168.0.6:3100',
			// en esta seccion se colocan todos los estados
			//GENEARL VARIABLES
			load:false,
			login:false,
			alerta:false,
			error:false,

			//SPECIFIC VARIABLES
			showTopNavBar:'',//Show or not top navbar
			navbar: true,
			modal: false,
			modalCargando:"cargando",
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
			// ----------------------------------------------------- estados de empacado ------------------------------------
			empacado: empacado, // importado de la hoja empacado
			empacadoLista,
			empacadoSerieValida:true,
			empacadoRegistros:[],
			// ------------------------------------------------------ estados recepcion -----------------------------------------
			modalRecepcion: true,
			spinnerRecepcion: false,
			spinnerLogin: false,
			recepcionRespusta: [],
			alerLogin: false, // indica la alerta de login incorrecto
			registrosRecepcion: [],
			listaTecnicosAsigacion: [],
			asignacionSerieValida: true,
			// ---------------------------------------------- estados de Modulo Verificacion de Equipos --------------
			nroCaja:"",
			registrarDocumentoVerificacion:"",
			documentoRegistrado:false,
			registrosRevisionMovil:[],
			revisionMovil:revisionMovil,
			documentoRegistrado:false,
			verificacionDocumento:true,
			verificacionImei:"",
			verificacionObservaciones:"",
			varificacionLista:[],
			verificacionSerieValida:true,
			verificacionListaSeries:[],

		},
		actions: {// En esta seccion se colocan todas las acciones o funciones

			// Functions Login page 
			login:(objeto)=>new Login(objeto,setStore,getStore),

			// ---------------------------------------------- funcion de salida del sistema -------------------------
			// setStore:()=>setStore
			salida: () =>salida(setStore),
			barraLateral: () => document.body.classList.toggle('sb-sidenav-toggled'),
			inicio: ()=>inicio(setStore,getStore,getActions),//this function validate the session
			inicioLogin: () => inicioLogin(setStore,getStore,getActions),
			reiniciarModal:()=>setStore({modalCargando:"cargando"}),
			cambiarEstadoModalCargado:(cargando)=>setStore({modalCargando:cargando}),
			fecha: () => fecha(),
			
			Page:()=>Page(),
			// ---------------------------------------------- Functions Despacho -----------------------------------------------------------------------------
			grabarDatos: (series, fec_desp, guia_desp,setSeries,setFiltrados) =>  grabarDatos(series, fec_desp, guia_desp,setSeries,setFiltrados, setStore,getso),
			
			//-------------------functions users---------------------------------------------------
			crearUsuario: (name, second_name, last_name, second_last_name, email, rut, password, role_id, history) => crearUsuario(name, second_name, last_name, second_last_name, email, rut, password, role_id, history,setStore,getStore),
			usuario: () => usuario(setStore,getStore),

			//------------------------ functions asignacion page----------------------------------------------------------------
			listaTecnicosAsignacion: () => listaTecnicosAsignacion(setStore,getStore),
			asignarValor: (e) => setStore({ asignarTecnico: e }),//funcion valor de lista de asignacion de tecncio 
			limpiarAsignacion: () => setStore({ asignado: false, listaAsignacion: [], asignarImei: "" }),// limpia pantalla asignacion 
			asignar: () =>asignar(setStore,getStore),
			itemAsignacion: (fecha, imei, tecnico, tecla) => itemAsignacion(fecha, imei, tecnico, tecla,setStore,getStore),
			asignarImei: (e) => setStore({ asignarImei: e }),//  funcion guarda valor input para imei asignado
			asignacionEliminar: (id) => asignacionEliminar(setStore,getStore,id),
			asignacionGuaradar: () =>  asignacionGuaradar(setStore, getStore),
			
			// ----------------------------------- Functions Aprobacion page---------------------------------------------------------------------
			registrosAprobacion:()=>registrosAprobacion(setStore,getStore),
			checkAll: () => checkAll(setStore,getStore),
			uncheckAll: () => uncheckAll(setStore,getStore),//this function uncheck all records
			aprobarAsignacion: () => aprobarAsignacion(setStore,getStore),
			check: (index) => check(index,setStore,getStore),
			guardarRevisionTecnica: () => setStore({ modal: true }),//this function saves the technical revision

			// -------------------------------------- This function is for data from external api ------------------------------------------------
			datosFinancieros: () => datosFinancieros(),

			// --------------------------------------- Funtions Empacado Page
			agregarSerieEmpacado: (value) => agregarSerieEmpacado(setStore, getStore, value),
			agregarEmpacadoEmpacado: (value) => agregarEmpacadoEmpacado(setStore, getStore, value),
			obtenerDatosSerieEmpacado: (key) => obtenerDatosSerieEmpacado(setStore, getStore, key),
			obtenerDatosSerieRevisionMovil: (key) => obtenerDatosSerieRevisionMovil(setStore, getStore, key),
			agregarSerieRevisionMovil: (value) => agregarSerieRevisionMovil(setStore, getStore, value),
			agregarEmpacadoEmpacado: (value) => agregarEmpacadoEmpacado(setStore, getStore, value,),
			obtenerDatosSerieEmpacado: (key,empaque,empacado) => obtenerDatosSerieEmpacado(setStore, getStore, key,empaque,empacado),
			limpiarPantallEmpacado:(setEmpacadoAsignado)=>limpiarPantallEmpacado(setStore,setEmpacadoAsignado),
			guardarEmpacados:(setEmpacadoAsignado)=>guardarEmpacados(setStore,getStore,setEmpacadoAsignado),
			cargarTablaEmpacados:()=>cargarTablaEmpacados(setStore),

			//-------------------------------- funciones de recepcion ----------------------------------
			modalRecepcionEstado: (len, lista, set) => modalRecepcionEstado(setStore, getStore, len, lista, set),
			registrosRecepcion: () => registrosRecepcion(setStore, getStore),
			borrarRegistroRecepcion: (id) => borrarRegistroRecepcion(setStore, getStore, id),

			// --------------------------------- funciones de verificacion -------------------------------
			nroCajaVerificacion:()=>nroCajaVerificacion(setStore,getStore),
			registrarDocumentoVerificacion:(e)=>registrarDocumentoVerificacion(setStore,getStore,e),
			onChangeDocumentoVerificacion:(e)=>onChangeDocumentoVerificacion(setStore,getStore,e),
			registrarDocumentoVerificacion:()=>registrarDocumentoVerificacion(setStore,getStore),
			registrosRevisionMovil:()=>registrosRevisionMovil(setStore,getStore),
			limpiarregistrarDocumentoVerificacion:()=>limpiarregistrarDocumentoVerificacion(setStore,getStore),
			onChangeVerificacionImei:(e)=>onChangeVerificacionImei(setStore,getStore,e),
			onChangeverificacionObservaciones:(e)=>onChangeverificacionObservaciones(setStore,getStore,e),
			agregarRegistroVerificacion:(imei, tecnico, documento, nro_caja,observaciones, tecla)=>agregarRegistroVerificacion(setStore,getStore,imei, tecnico, documento, nro_caja, observaciones,tecla),
			verificacionGuardar:()=>verificacionGuardar(setStore,getStore)

		},
		components:{
			Page: (props) => Page(props),
			BadgeForm: (props) => <BadgeForm props={props}/>
		}
	};
};

export default getState;
