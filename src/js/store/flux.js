const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// en esta seccion se colocan todos los estados
			navbar:true
		},
		actions: {
			// En esta seccion se colocan todas las acciones o funciones
			logueado:()=>{
				const {navbar}=getStore();
				setStore({navbar:false})
			}			
		}
	};
};

export default getState;
