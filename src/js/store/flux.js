import { Navigate, Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
// import { agregarSerieEmpacado, empacado, agregarEmpacadoEmpacado, obtenerDatosSerieEmpacado, empacadoLista } from './empacado';
import { modalRecepcionEstado, registrosRecepcion, borrarRegistroRecepcion, registrosRevisionMovil, revisionMovil, obtenerDatosSerieRevisionMovil, agregarSerieRevisionMovil } from './fRecepcion';
// import { nroCajaVerificacion, onChangeDocumentoVerificacion , registrarDocumentoVerificacion} from './fverificacion'
import { cargarTablaEmpacados, guardarEmpacados,limpiarPantallEmpacado, agregarSerieEmpacado, empacado, agregarEmpacadoEmpacado, obtenerDatosSerieEmpacado, empacadoLista } from './empacado';
// import { modalRecepcionEstado, registrosRecepcion, borrarRegistroRecepcion } from './fRecepcion';
import { verificacionGuardar, agregarRegistroVerificacion, onChangeverificacionObservaciones,onChangeVerificacionImei,nroCajaVerificacion, onChangeDocumentoVerificacion , registrarDocumentoVerificacion, limpiarregistrarDocumentoVerificacion} from './fverificacion'
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// direccion ip
			ip:'http://34.136.77.203:3100',
			// en esta seccion se colocan todos los estados
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
		actions: {
			// En esta seccion se colocan todas las acciones o funciones
			// ---------------------------------------------- funcion de salida del sistema -------------------------
			salida: () => {
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
			},
			// ----------------------------------- Reiniciar Modal Cargando ------------------------------------------------
			reiniciarModal:()=>setStore({modalCargando:"cargando"}),

			cambiarEstadoModalCargado:(cargando)=>setStore({modalCargando:cargando}),
			// Funcion que guarda los elementos cargados del excel a un json
			grabarDatos: (series, fec_desp, guia_desp,setSeries,setFiltrados) => {
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

			},
			barraLateral: () => {
				document.body.classList.toggle('sb-sidenav-toggled');
			},
			//-------------------funcion para iniciar sesión------------------------------
			ingreso: (email, password, history) => {
				setStore({ spinnerLogin: true })
				fetch(getStore().ip+'/login', {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					}),
					redirect: "follow"
				})
					.then(response => response.json())
					.then(result => {
						if (result.status == "ok") {
							setStore({ token: result.token, role_id: result.rol, alertLogin: false })
							sessionStorage.setItem("token", result.token)
							if (result.token != undefined && result.token != null) {
								sessionStorage.setItem("session", true)
								sessionStorage.setItem("rol", result.rol)
								sessionStorage.setItem("user", result.user)
								sessionStorage.setItem("id",result.id_user)
								sessionStorage.setItem("rol_name",result.rol_name)
								setStore({ sesion: true })
								history("/")

							}
						}
						else {
							setStore({ alertLogin: true })
						}
						setStore({ spinnerLogin: false })

					})
					.catch(err => console.log(err));
			},
			//-------------------funcion que valida el inicio de sesion------------------------------
			inicio: () => {
				const history = useNavigate()
				const session = sessionStorage.getItem("session")
				useEffect(() => {
					if (session !== "true") {
						history('/login')
					}
					else {
						fetch(getStore().ip+'/private', {
							method: 'GET',
							headers: {
								"Authorization": `Bearer ${sessionStorage.getItem("token")}`
							},
							redirect: "follow"
						})
							.then(response => response.json())
							.then(result => {
								if (result.role_id != undefined && result.role_id != null) {
									setStore({
										usuario: {
											sesion: true,
											role_id: result.role_id,
											user_name: result.user_name
										}
									})
									// setStore({role_id: result.role_id})
									sessionStorage.setItem("session", true)
									console.log("resultado: ", result)
									console.log("role_id_back:", result.role_id)
									console.log("user_name:", result.user_name)
								}
								getActions().datosFinancieros()
							})
							.catch(err => console.log(err));
					}
				},
					[])

			},
			// ------------------------ funcion que valida si la session esta activa no muestra pantalla login ------------------------
			inicioLogin: () => {
				const history = useNavigate()
				useEffect(() => {
					const session = sessionStorage.getItem("session")
					if (session == "true") {
						history("/")
					}
				}, [])
			},
			//-------------------funcion para crear usuario------------------------------
			crearUsuario: (name, second_name, last_name, second_last_name, email, rut, password, role_id, history) => {
				fetch(getStore().ip+'/register', {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						name: name,
						second_name: second_name,
						last_name: last_name,
						second_last_name: second_last_name,
						email: email,
						rut: rut,
						password: password,
						role_id: role_id
					}),
					redirect: "follow"
				})
					.then(response => {
						response.json()
						console.log((response.status))
						if (response.status == 200) {
							setStore({ usuarioCreado: true })
							setTimeout(() => {
								location.reload()
							}, 4000);

						}
						else {
							setStore({ usuarioCreado: false })
						}

					}
					)
					.then(data => {
						console.log('User added: ', data)
					})
					.catch(err => console.log(err));
			},
			usuario: () => {
				useEffect(() => {

					fetch(getStore().ip+'/user', {
						method: 'GET',
						headers: {
							// "Authorization": `Bearer ${getStore().token}`,
							"Content-Type": "application/json"
						},
						redirect: "follow"
					})
						.then(response => response.json())
						.then(data => {
							setStore({ usuarios: data })
							console.log("usuarios:", data)
						})
						.catch((error) => console.log(error))
				}, [])
			},

			// ------------------------ funcion de fecha actual --------------------------------------
			fecha: () => {
				const hoy = Date.now()
				const fecha = new Date(hoy).toLocaleString("en-GB")
				// const dia = fecha.getDate()
				// const mes = fecha.getMonth()
				// const anyo = fecha.getFullYear()
				// const fechaCompleta = dia + "/" + mes + "/" + anyo
				return fecha;
			},
			//------------------------ lista de tecnicos ----------------------------------------------------------------
			listaTecnicosAsignacion: () => {
				useEffect(() => {
					fetch(getStore().ip+'/asignacionUsers', {
						method: 'GET',
						headers: {
							"Authorization": `Bearer ${sessionStorage.getItem("token")}`,
						},
					})
						.then(response => response.json())
						.then(data => {
							if (data.msg == "ok") {
								setStore({ listaTecnicosAsigacion: data.list_users })
							}

						})
						.catch(error => console.log(error))
				}, [])
			},
			//--------------------- funcion valor de lista de asignacion de tecncio ------------------------------------------------
			asignarValor: (e) => {
				setStore({ asignarTecnico: e })
			}
			,
			// ---------------------------------- limpia pantalla asignacion ----------------------------------------------
			limpiarAsignacion: () => {
				setStore({ asignado: false, listaAsignacion: [], asignarImei: "" })
			},
			//------------------------- funcion asignar tecnico -------------------------------------------
			asignar: () => {
				const { asignarTecnico } = getStore();
				if (asignarTecnico == "") {
					setStore({ asignado: false })
				}
				else {
					setStore({ asignado: true })

				}
			},
			//----------------------------------- funcion que guarda el item de la asignacion ------------------
			itemAsignacion: (fecha, imei, tecnico, tecla) => {
				const fecha_hoy=new Date(Date.now())
				if (tecla == "Enter" && imei != "") {
					const { listaAsignacion } = getStore()
					let duplicado=false
					if (listaAsignacion.length > 0) {
						for (let i of listaAsignacion) {
							if (imei == i.serie) {
								console.log("duplicado")
								duplicado=true
								setStore({asignacionSerieValida:false})
							}
						}
					}
					if(duplicado==false){
					fetch(getStore().ip+'/serieAsignacion', {
						method: 'POST',
						headers: {
							"Authorization": `Bearer ${sessionStorage.getItem("token")}`,
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							serie: imei
						})
					})
						.then(response => response.json())
						.then(data => {
							console.log(data)
							if (data.msg == "ok") {
								let item = {}
								const { listaAsignacion } = getStore()
								item = {
									fecha_asignacion: fecha_hoy.toLocaleString("en-GB"),
									serie: parseInt(imei),
									tecnico_id: parseInt(tecnico),
									check: false,
									estado: "Pendiente"
								}
								const lista = listaAsignacion.concat([item])
								setStore({ listaAsignacion: lista, modal: true, })
								setStore({ asignarImei: "" })
								setStore({ asignacionSerieValida: true })
							}
							else {
								setStore({ asignacionSerieValida: false })
								console.log("asignacion errada")
							}
						})
						.catch(err => console.log(err))
					}
					else{
						setStore({ asignacionSerieValida: false })
						console.log("asignacion errada")
					}
				}
			},
			// ----------------------------------- funcion guarda valor input para imei asignado-----------------------
			asignarImei: (e) => {
				setStore({ asignarImei: e })
			},
			// ------------------------------------- funcion para eliminar registros asignados------------------------------
			asignacionEliminar: (id) => {
				console.log(id)
				const { listaAsignacion } = getStore()
				let lista = []
				lista = listaAsignacion.filter((item, index) => id !== index)
				console.log(lista)
				setStore({ listaAsignacion: [...lista] })
				// console.log(listaAsignacion)
			},
			// ------------------------ funcion de guardado de lista asignada -------------------------------
			asignacionGuaradar: () => {
				const { listaAsignacion } = getStore()
				setStore({ listaAsignacionFinal: [...listaAsignacion] })
				setStore({ listaAsignacion: [], asignado: false })
				fetch(getStore().ip+'/asignacionGuardar',{
					method:'POST',
					headers:{
						"Authorization": `Bearer ${sessionStorage.getItem("token")}`,
						"Content-Type":"application/json"

					},
					body:JSON.stringify({
						lista:listaAsignacion
					})
				})
				.then(response=>response.json())
				.then(data=>console.log(data))
				.catch(error=>console.log(error))
			},
			// ----------------------------------- listado de arobacion --------------------------------------
			registrosAprobacion:()=>{
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
			},
			// ---------------------------------- selecionar todo en aprobacion ----------------------------
			checkAll: () => {
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
			},
			uncheckAll: () => {
						const {listaAsignacionFinal}=getStore()
						var lista = []
						listaAsignacionFinal.forEach(item => {
							item.check = false;
							lista.push(item)
						})
						setStore({ listaAsignacionFinal: [...lista] })
				
				
			},
			//--------------------- funcion aprobar ---------------------------------------------------------
			aprobarAsignacion: () => {
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
				// console.log("lista aprobada: ",listaUpdate)
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
			},
			check: (index) => {
				const { listaAsignacionFinal } = getStore()
				if (listaAsignacionFinal[index].check == true) {
					listaAsignacionFinal[index].check = false
					setStore({ listaAsignacionFinal: [...listaAsignacionFinal] })
				}
				else {
					listaAsignacionFinal[index].check = true
					setStore({ listaAsignacionFinal: [...listaAsignacionFinal] })
				}
			},
			guardarRevisionTecnica: () => {
				setStore({ modal: true })
			},
			datosFinancieros: () => {
				fetch('https://mindicador.cl/api').then(function (response) {
					return response.json();
				}).then(function (dailyIndicators) {
					document.getElementById("UF").innerHTML = 'El valor actual de la UF es $' + dailyIndicators.uf.valor;
					document.getElementById("DolarO").innerHTML = 'El valor actual del Dólar es $' + dailyIndicators.dolar.valor;
					// document.getElementById("DolarA").innerHTML = 'El valor actual del Dólar acuerdo es $' + dailyIndicators.dolar_intercambio.valor;
					document.getElementById("Euro").innerHTML = 'El valor actual del Euro es $' + dailyIndicators.euro.valor;
					// document.getElementById("IPC").innerHTML = 'El valor actual del IPC es ' + dailyIndicators.ipc.valor + '%';
					document.getElementById("UTM").innerHTML = 'El valor actual de la UTM es $' + dailyIndicators.utm.valor;
					// document.getElementById("IVP").innerHTML = 'El valor actual del IVP es $' + dailyIndicators.ivp.valor;
					// document.getElementById("Imacec").innerHTML = 'El valor actual del Imacec es ' + dailyIndicators.imacec.valor + '%';
				}).catch(function (error) {
					console.log('Requestfailed', error);
				});

			},
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
			//registrosRevisionMovil
			registrosRevisionMovil:()=>registrosRevisionMovil(setStore,getStore),
			limpiarregistrarDocumentoVerificacion:()=>limpiarregistrarDocumentoVerificacion(setStore,getStore),
			onChangeVerificacionImei:(e)=>onChangeVerificacionImei(setStore,getStore,e),
			onChangeverificacionObservaciones:(e)=>onChangeverificacionObservaciones(setStore,getStore,e),
			agregarRegistroVerificacion:(imei, tecnico, documento, nro_caja,observaciones, tecla)=>agregarRegistroVerificacion(setStore,getStore,imei, tecnico, documento, nro_caja, observaciones,tecla),
			verificacionGuardar:()=>verificacionGuardar(setStore,getStore)

		}
	};
};

export default getState;
