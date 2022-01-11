import React,{useState} from "react";
import {Card,Button,Container} from 'react-bootstrap'
import './index.css'
import InputElement from "./Util/Input/Input";


export default function SignInAndSignUP(){
   
    const [isSignUp,setSignUp]=useState(false)
    const [signInUsername,setSignInUsername]=useState('')
    const [signInPassword,setSignInPassword]=useState('')
    const [signUpUsername,setSignUpUsername]=useState('')
    const [signUpPassword,setSignUpPassword]=useState('')


    function changeSignUp(){
        setSignUp(true)
    }
    function changeSignIn(){
        setSignUp(false)
    }

    return(
        <Container className="signInSignUp-container">
           <Card className="signin-signUp-container">
            <div className="signin-signup-button-container">
                <button className="login-page-button" onClick={changeSignUp}>SignUp</button>
                <button className="login-page-button" onClick={changeSignIn}>SignIn</button>
            </div>
           { 
             !isSignUp 
               &&
             <div className="loginpage-input-container">
                 <InputElement type="text" placeholder="@username"/>
                 <InputElement type="password" placeholder="@password"/>
                 <Button variant="secondary">SignIn</Button>
             </div>
           }
           {
               isSignUp
                 &&
                <div className="loginpage-input-container">
                     <InputElement type="text" placeholder="enter username"/>
                     <InputElement type="password" placeholder="enter password"/>
                     <InputElement type="password" placeholder="re-enter password"/>
                     <Button variant="secondary">SignUp</Button>
                </div>
           }
           </Card>
        </Container>
    )
}