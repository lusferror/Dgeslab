import React from "react";

Page.Header = function Header(props){
    return(
        <div className="font-header-page px-5 py-3">
            <h1>
                <strong>{props.children}</strong>
            </h1>
        </div>
    )
}

Page.Body = function Body(props){
    return(
        <div className="">
            {props.children}
        </div>
    )
}

export default function Page(props){
    return(
            <>
                {props.children}
            </>
    )
}