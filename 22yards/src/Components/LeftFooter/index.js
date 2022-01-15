import React from "react";
import './index.css'

export default function LeftFooter(props){
    if(!props.show){
        {console.log(props.show)}
        return null
    }
    {console.log(props.show)}
    return(
        
        <div className="left-footer">

        </div>
    )
}