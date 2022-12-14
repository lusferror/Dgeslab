import { Navigate, Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// en esta seccion se colocan todos los estados
			navbar: true,
			modal: false,
			sesion: false,
			asignarTecnico:"",//id del tenico
			asignado:false, // estado de la asignacion
			listaAsignacion:[], // lista de asignacion
			asignarImei:""
		},
		actions: {
			// En esta seccion se colocan todas las acciones o funciones
			salida: () => {
				const { navbar } = getStore();
				const { sesion } = getStore();
				setStore({ sesion: false })
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
			ingreso: () => {
				const { sesion } = getStore();
				sessionStorage.setItem("session", true)
				setStore({ sesion: true })
				console.log(sesion)
			},
			//-------------------funcion que valida el inicio de sesion------------------------------
			inicio: () => {
				const { sesion } = getStore()
				const history = useNavigate()
				const session = sessionStorage.getItem("session")
				useEffect(() => {
					if (session == "false") {
						history('/login')
						console.log("entro")
					}
				}, [])
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
			asignarValor:(e)=>{
				const {asignarTecnico} = getStore()
				setStore({asignarTecnico:e})
				console.log(asignarTecnico)
			},
			//------------------------- funcion asignar tecnico -------------------------------------------
			asignar:()=>{
				const {asignarTecnico} = getStore();
				if (asignarTecnico==""){
					setStore({asignado:false})
				}
				else{
					setStore({asignado:true})
					
				}
			},
			//----------------------------------- funcion que guarda el item de la asignacion ------------------
			itemAsignacion:(fecha,imei,tecnico,tecla)=>{
				let item={}
				const {listaAsignacion}= getStore()
				if(tecla=="Enter" && imei!=""){
				item={
					fecha:fecha,
					imei:imei,
					tecnico:tecnico,
					check:false,
					estado:"Pendiente"
				}
				const lista=listaAsignacion.concat([item])
				setStore({listaAsignacion:lista,modal:true})
				setStore({asignarImei:""})
				console.log(getStore().listaAsignacion)
				}
			},
			// ----------------------------------- funcion guarda valor input para imei asignado-----------------------
			asignarImei:(e)=>{
				setStore({asignarImei:e})
			},
			// ------------------------------------- funcion para eliminar registros asignados------------------------------
			asignacionEliminar:(id)=>{
				console.log(id)
				const {listaAsignacion} = getStore()
				let lista=[]
				lista=listaAsignacion.filter((item,index)=>id!==index)
				console.log(lista)
				setStore({listaAsignacion:[...lista]})
				// console.log(listaAsignacion)
			},
			// ---------------------------------- selecionar todo en aprobacion ----------------------------
			checkAll:()=> {
				document.querySelectorAll('#formElement input[type=checkbox]').forEach(function(checkElement) {
					checkElement.checked = true;
					const {listaAsignacion} =getStore()
					let lista=[]
					listaAsignacion.forEach(item=>{
						item.check=true;
						lista.push(item)
					})
					console.log(lista)
					setStore({listaAsignacion:[...lista]})
				});},
			uncheckAll:()=> {
					document.querySelectorAll('#formElement input[type=checkbox]').forEach(function(checkElement) {
						checkElement.checked = false;
						const {listaAsignacion} =getStore()
						var lista=[]
						listaAsignacion.forEach(item=>{
						item.check=false;
						lista.push(item)
						})
						setStore({listaAsignacion:[...lista]})
					});
				},
			//--------------------- funcion aprobar ---------------------------------------------------------
			aprobarAsignacion:()=>{
				const {listaAsignacion} = getStore()
				let lista=[]
				listaAsignacion.forEach((item)=>{
					if(item.check==true)
					item.estado="Aprobado"
					lista.push(item)
				})
				setStore({listaAsignacion:[...lista]})
			}
		


		}
	};
};

export default getState;
