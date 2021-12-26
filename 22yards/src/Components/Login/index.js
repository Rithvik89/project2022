import {useState} from 'react'
import './index.css'
import { IoIosLogOut } from "react-icons/io";


function Login(){

       const [signIn,setSignIn]=useState(true)

       function onSignIn(){
           setSignIn(true)
       }
       function onSignUp(){
           setSignIn(false)
       }

        return (
                <div className="container">
                  
                  <div className="section">
                    <div className='signin-signup-card'>
                      <button onClick={onSignIn} className='signin-signup-button'>Sign In</button>
                      <button onClick={onSignUp} className='signin-signup-button'>Sign Up</button>
                    </div>
                    {
                      signIn===true?
                      <div className="card">
                        <h1 className='signin-signup-heading'>Sign In</h1>
                        <form className='login-form'>
                            <input id="handle"className='handle-input' name='handle-signin' required placeholder='@handle'/>
                            <input id="password" type={'password'}  className='password-input' name='password-signin' placeholder='@password' required/>
                            <button className='login-submit-button'>SignIn</button>
                        </form>
                      </div>:
                      <div className="card">
                       <h1 className='signin-signup-heading'>Sign Up</h1>
                       <form className='login-form'> 
                           <input id="email"className='email-input' name='email-signup' required placeholder='@email'/>
                           <input id="username"className='handle-input' name='handle-signup' required placeholder='@handle'/>
                           <input id="password" type={'password'}  className='password-input' name='password-signup' placeholder='@password' required/>
                           <button className='login-submit-button'>SignUp</button>
                       </form>
                      </div>
                    }
                  </div>
              
                </div>
        )
}

export default Login