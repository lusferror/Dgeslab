import React from "react";
import ScatterChart from "../components/graphs.jsx";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import Barra from "../components/simpleBarChart.jsx";
import Radial from "../components/simpleRadialBarChart.jsx";
import BarResponsive from "../components/simpleBarResponsive.jsx";
import Pie from "../components/simplePieChart.jsx";

const Home = ()=>{
    const {store, actions} = useContext(Context)
    // actions.inicio()    
    return (
        <div className="ps-3 overflow-auto contenedor">
            <div className="mb-0 mt-5">
                <h1>Inicio</h1>
            </div>
            <div className="container d-flex mb-3">
                <div className="col-6 border border-2 border-info d-flex justify-content-center p-5 me-5 " style={{borderRadius:"10px"}}>
                    <Barra className="col" />
                </div>
                <div className="col-6 border border-2 border-info d-flex justify-content-center p-5" style={{borderRadius:"10px"}}>
                    <Radial />
                </div>
            </div>
            <div className="container d-flex">
                <div className="col-6 border border-2 border-info d-flex justify-content-center p-5 me-5 " style={{borderRadius:"10px"}}>
                    <BarResponsive/>
                </div>
                <div className="col-6 border border-2 border-info d-flex justify-content-center p-5 me-5 " style={{borderRadius:"10px"}}>
                    <Pie/>
                </div>
            </div>
            <div>

            </div>
        </div>


    )
}

export default Home;