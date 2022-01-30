import React,{useEffect, useState} from "react";
import './index.css'
import { isMobile } from "react-device-detect";
export default function RightFooter(){
    const [widthOfFooter,setWidthOfFooter]=useState("22%")

    useEffect(()=>{
        if(isMobile){
            setWidthOfFooter("100%")
        }
    })
    
    return(
        <div className="right-footer" style={{width:`${widthOfFooter}`}}>

        </div>
    )
}