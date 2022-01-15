import React from "react";
import './index.css'

export default function RightFooter(props){
    if(!props.show){
        return null
    }
    return(
        <div className="right-footer">

        </div>
    )
}