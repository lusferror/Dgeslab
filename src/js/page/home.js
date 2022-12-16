import React from "react";
import ScatterChart from "../components/graphs.jsx";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import Barra from "../components/simpleBarChart.jsx";
import BarResponsive from "../components/simpleBarResponsive.jsx";
import Pie from "../components/simplePieChart.jsx";

const Home = ()=>{
    const {store, actions} = useContext(Context)
    actions.datosFinancieros()    
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
                    <Pie/>
                </div>
            </div>
            <div className="container d-flex">
                <div className="col-6 border border-2 border-info d-flex justify-content-center p-5 me-5 " style={{borderRadius:"10px"}}>
                    <BarResponsive/>
                </div>
                <div className="col-6 border border-2 border-info d-flex justify-content-center p-5 me-5 " style={{borderRadius:"10px"}}>
                    <div className="container mt-5">
                        <div className="row g-2">
                            <div className="col-6">                            
                                <div className="p-3" id="UF"></div>
                            </div>
                            <div className="col-6">
                                <div className="p-3" id="DolarO"></div>
                            </div>
                            <div className="col-6">
                                <div className="p-3" id="Euro"></div>
                            </div>
                            <div className="col-6">
                                <div className="p-3" id="UTM"></div>
                            </div>
                        </div>
                    </div>
                </div>
            <div>
            </div>        
        </div>
        </div>
    )
}

export default Home;