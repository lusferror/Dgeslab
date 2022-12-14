import React from "react";
import ScatterChart from "../components/graphs.jsx";
import { useContext } from "react";
import { Context } from "../store/appContext.js";

const Home = ()=>{
    const {actions} = useContext(Context)
    actions.inicio()
    return (
        <div>

            <h1>DGESLA</h1>
            <ScatterChart></ScatterChart>
        </div>


//         </>
    )
}

export default Home;