import {useState} from 'react'
import './index.css'
import { IoIosNotifications,IoIosLogOut } from "react-icons/io";
import {FaUserCircle} from "react-icons/fa";
import {AiFillHome} from "react-icons/ai";
import {GrAddCircle} from "react-icons/gr";

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
                  <div className="header">
                    <div className="logo-container">
                         <img src="https://res.cloudinary.com/dhz8n0ka8/image/upload/v1640024219/logo_aygf3h.png" className="logo"/>
                         <div className='icon-container'>
                          <input type="search"/>
                         <IoIosLogOut className='icon-details'/>
                         </div>
                    </div>
                  </div>
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
                  <div className="footer-container">
                    <div className='footer'>
                       <IoIosNotifications className='icon-details-footer'/>
                       <FaUserCircle className='icon-details-footer'/>
                       <AiFillHome className='icon-details-footer'/>
                       <GrAddCircle className='icon-details-footer'/>
                    </div>
                  </div>
              </div>
        )
}

export default Login