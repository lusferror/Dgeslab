import React, { useState, useEffect } from "react";
import getState from "../store/flux";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions },
						components: { ...state.components },
					})
			})
		);
		useEffect(() => {
			/**
			 * Aqui incluyen todo lo que comience con la app
			**/
			if(sessionStorage.getItem("session")==""){

				sessionStorage.setItem("session",false)
			}
		}, []);
		

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
