import React from "react";
import { useDispatch } from "react-redux";
import { SignInStart } from "../../redux/actions/Auth";
 
export default function Home(){
    const dispatch=useDispatch()
 
    function handleLogin(){
        dispatch(SignInStart("yvh"))
    }
 
    return(
        <div>
            h1
            <br></br>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}