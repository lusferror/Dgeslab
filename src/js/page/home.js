import React from "react";
import ScatterChart from "../components/graphs.jsx";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import Barra from "../components/simpleBarChart.jsx";
import BarResponsive from "../components/simpleBarResponsive.jsx";
import {PieExample} from "../components/simplePieChart.jsx";

const Home = ()=>{
    const {store, actions} = useContext(Context)
    actions.inicio()    
    return (
        <div className="ps-3 overflow-auto contenedor">
            <div className="mb-5 mt-4">
                <h1>Inicio</h1>
            </div>
            <div className=" my-5 border border-2 shadow border-warning p-4 rounded-pill">
                        <div className="row ">
                            <div className="col ">                            
                                <div className="alert alert-primary" id="UF"></div>
                            </div>
                            <div className="col">
                                <div className="alert alert-success" id="DolarO"></div>
                            </div>
                            <div className="col">
                                <div className="alert alert-danger" id="Euro"></div>
                            </div>
                            <div className="col">
                                <div className="alert alert-warning" id="UTM"></div>
                            </div>
                        </div>
                    </div>
            <div className="d-flex justify-content-center">
                <div className="row col border border-2 border-info d-flex justify-content-center p-3 me-2" style={{borderRadius:"10px"}}>
                    <Barra className="" />
                    <div className="text-secondary row"><strong> Grafica Mensual</strong></div>
                </div>
                <div className="row-sm col border border-2 border-info d-flex justify-content-center p-3" style={{borderRadius:"10px"}}>
                    <PieExample/>
                </div>
                <div className="row-sm col border border-2 border-info d-flex justify-content-center p-3 ms-2" style={{borderRadius:"10px"}}>
                    <BarResponsive/>
                </div>
            </div>
        </div>
    )
}

export default Home;