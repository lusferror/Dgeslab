//IMPORTED METHODS
import React from "react";

// IMPORTED RESOURCES
import dgeslab from "../../img/logo.png";

const LoginPanel = ({ header, body, footer }) => {

    return (
        <div className="mx-auto">
            <div className="w-100 p-0">
                <div className="text-center d-flex justify-content-center align-items-center mb-5">
                    <div className="col-3 ">
                        <img src={dgeslab} className="rounded-circle shadow-lg w-50" />
                    </div>
                    <div>
                        <h2 className="text-warning font-slogan fw-bold" > DGESLAB  <span className="text-white font-slogan" style={{ fontSize: "1rem" }}>Cree en ti!</span></h2>
                    </div>
                </div>
            </div>
            <div className="form px-xxl-5 px-xl-5 px-lg-5 px-md-4 px-sm-3 px-4 pt-3 bg-white border border-1 border-warning shadow-lg w-100" style={{ borderRadius: "20px" }}>
                {body}
            </div>
        </div>
    )
}

export default LoginPanel;