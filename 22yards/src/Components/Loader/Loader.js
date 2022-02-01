import React from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import PulseLoader from "react-spinners/PulseLoader"
import '../style.components.css'
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function Loader(){
    return(
        <div className="loaderContainer d-flex justify-content-center align-items-center">
            <PulseLoader css={override} size={30} color={"#123abc"}/>
        </div>
    )
}