import { Navigate, Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// en esta seccion se colocan todos los estados
			navbar: true,
			modal: false,
			sesion: false,
			listaAsignacionFinal: [], // lista de asignacion			
			asignarTecnico:"",//id del tenico
			asignado:false, // estado de la asignacion
			listaAsignacion:[], // lista de asignacion
			asignarImei:"",
			token: null,
			usuario: {},
			usuarios: []
		},
		actions: {
			// En esta seccion se colocan todas las acciones o funciones
			salida: () => {
				sessionStorage.removeItem("token");
				console.log("Login out")
				setStore({ token: null});
				setStore({sesion: false})
				// const { navbar } = getStore();
				// const { sesion } = getStore();
				// setStore({ sesion: false })
				sessionStorage.setItem("session", false)
				console.log(sesion)
				document.body.classList.remove('sb-sidenav-toggled')
				// if (navbar==true){
				// 	setStore({navbar:false})
				// }
				// else{
				// 	setStore({navbar:true})
				// 	document.body.classList.toggle('')
				// }
			},
			// Funcion que guarda los elementos cargados del excel a un json
			grabarDatos: (series, fec_desp, guia_desp) => {
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
				}

			},
			barraLateral: () => {
				document.body.classList.toggle('sb-sidenav-toggled');
			},
			//-------------------funcion para iniciar sesión------------------------------
			ingreso: (email, password,history) => {
				fetch('http://127.0.0.1:3100/login',{
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
					setStore({token: result.token})
					sessionStorage.setItem("token", result.token)
					if (result.token != undefined && result.token != null){
						sessionStorage.setItem("session", true)
						setStore({sesion: true})
						console.log("esta es la session: ",sessionStorage.getItem("session"))
						history("/")

					}
					// if (result.token != undefined && result.token != null){
					// 	sessionStorage.setItem("session", true)
					// 	setStore({sesion: true})
					// }
				})
				.catch(err => console.log(err));
								
			},
			//-------------------funcion que valida el inicio de sesion------------------------------
			inicio: () => {
				// const { sesion } = getStore()
				// const history = useNavigate()
				// const session = sessionStorage.getItem("session")
				// useEffect(() => {
				// 	console.log("Puta:", session)
				// 	if (session !== "true" || sesion != true) {
				// 		history('/login')
				// 		console.log("entro")
				// 	}
					fetch('http://127.0.0.1:3100/private',{
						method: 'GET',
						headers: {
							"Authorization": `Bearer ${getStore().token}`
						},
						redirect: "follow"
					})
					.then(response => response.json())				
					.then(result => {
						// if (result.role_id != undefined && result.role_id != null){
						setStore({usuario: {
							sesion: true, 
							role_id: result.role_id,
						    user_name: result.user_name}})
						// setStore({role_id: result.role_id})
						sessionStorage.setItem("session", true)
						console.log("role_id_back:", result.role_id)
						console.log("user_name:", result.user_name)
					})
					.catch(err => console.log(err));				
				},
				// }, [])
				// .then((res) => res.ok ? setStore({sesion: true}):"Something went wrong")
				// // const session = sessionStorage.setItem("session", true)
				
				// // useEffect(() => {
				// // 	if (session == "false") {
				// // 		history('/login')
				// // 		console.log("entro")
				// // 	}
				// // },[])
			
				// // console.log("tokenverified:", getStore.token)
				// .catch((err) => console.log(err));

				// const { sesion } = getStore()
				// const history = useNavigate()
				// const session = sessionStorage.getItem("session")
				// useEffect(() => {
				// 	if (session == "false") {
				// 		history('/login')
				// 		console.log("entro")
				// 	}
				// }, [])
			
			//-------------------funcion para crear usuario------------------------------
			crearUsuario: (name, second_name, last_name, second_last_name, email, rut, password, role_id) => {
				fetch('http://127.0.0.1:3100/register',{
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
				.then(response => response.json())				
				.then(data=>{console.log('User added: ',data)})					
				.catch(err => console.log(err));								
			},
			usuario: () => {
				fetch('http://127.0.0.1:3100/user', {
					method: 'GET',
					headers: {
						"Content-Type": "application/json"
					},
					redirect: "follow"
				})
				.then(response => response.json())
				.then(data => {
					setStore({usuarios: data})						
					console.log("usuarios:", data)
				})
				.catch((error) => console.log(error))                 
			},
			// ------------------------ funcion de fecha actual --------------------------------------
			fecha: () => {
				const hoy = Date.now()
				const fecha = new Date(hoy)
				const dia = fecha.getDate()
				const mes = fecha.getMonth()
				const anyo = fecha.getFullYear()
				const fechaCompleta = dia + "/" + mes + "/" + anyo
				return fechaCompleta;
			},
			//--------------------- funcion valor de lista de asignacion de tecncio ------------------------------------------------
			asignarValor: (e) => {
				const { asignarTecnico } = getStore()
				setStore({ asignarTecnico: e })
				console.log(asignarTecnico)
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
				let item = {}
				const { listaAsignacion } = getStore()
				if (tecla == "Enter" && imei != "") {
					item = {
						fecha: fecha,
						imei: imei,
						tecnico: tecnico,
						check: false,
						estado: "Pendiente"
					}
					const lista = listaAsignacion.concat([item])
					setStore({ listaAsignacion: lista, modal: true })
					setStore({ asignarImei: "" })
					console.log(getStore().listaAsignacion)
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
			asignacionGuaradar:()=>{
				const {listaAsignacion}= getStore()
				setStore({listaAsignacionFinal:[...listaAsignacion]})
				setStore({listaAsignacion:[],asignado:false})
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
					console.log(lista)
					setStore({ listaAsignacionFinal: [...lista] })
				});
			},
			uncheckAll: () => {
				document.querySelectorAll('#formElement input[type=checkbox]').forEach(function (checkElement) {
					if (checkElement.disabled !== true) {
						console.log("si lo leyo")
						checkElement.checked = false;
						const { listaAsignacionFinal } = getStore()
						var lista = []
						listaAsignacionFinal.forEach(item => {
							item.check = false;
							lista.push(item)
						})
						setStore({ listaAsignacionFinal: [...lista] })
					}
				});
			},
			//--------------------- funcion aprobar ---------------------------------------------------------
			aprobarAsignacion: () => {
				const { listaAsignacionFinal } = getStore()
				let lista = []
				listaAsignacionFinal.forEach((item) => {
					if (item.check == true)
						item.estado = "Aprobado"
					lista.push(item)
				})
				setStore({ listaAsignacionFinal: [...lista] })
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
				console.log(getStore().listaAsignacionFinal)
			},
			guardarRevisionTecnica:()=>{
				setStore({modal:true})
			}



		}
	};
};

export default getState;
