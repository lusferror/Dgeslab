import React from "react";

export default function Page(props){
    return(
        <div>
            <div className="font-header-page px-5 py-3">
                <h1>
                    <strong>{props.header}</strong>
                </h1>
            </div>
            <div className="">
                {props.body}
            </div>
            <div>
                {props.footer}
            </div> 
        </div>
    )
}
