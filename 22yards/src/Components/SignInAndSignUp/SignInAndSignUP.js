import React,{useState} from "react";
import {Card,Button,Container} from 'react-bootstrap'
import './SignInAndSignUP.css'
import InputElement from "./Util/Input/Input";


export default function SignInAndSignUP(){
   
    const [isSignUp,setSignUp]=useState(true)

    function changeSignUp(){
        setSignUp(!isSignUp)
    }

    return(
        <Container className="signInSignUp-container">
           <Card className="signin-signUp-container">
            <div className="signin-signup-button-container">
                <button className="login-page-button" onClick={changeSignUp}>SignUp</button>
                <button className="login-page-button" onClick={changeSignUp}>SignIn</button>
            </div>
           { 
             isSignUp 
               &&
             <div className="loginpage-input-container">
                 <InputElement type="text" placeholder="@username"/>
                 <InputElement type="password" placeholder="@password"/>
                 <Button>SignUp</Button>
             </div>
           }
           {
               !isSignUp
                 &&
                <div className="loginpage-input-container">
                     <InputElement type="text" placeholder="enter username"/>
                     <InputElement type="password" placeholder="enter password"/>
                     <InputElement type="password" placeholder="re-enter password"/>
                     <Button>SignUp</Button>
                </div>
           }
           </Card>
        </Container>
    )
}