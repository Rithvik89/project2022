import {Component} from 'react'
import './index.css'
class Login extends Component{

    rotate=()=>{
        console.log("rotate initiated")
        
    }

    render(){
        return (
        <div className="container">
          <div className="header">
            <div className="logoContainer">
            </div>
          </div>
          <div className="section">
            <div className="card">
               <h2>Sign In</h2>
               <form className='login-form'>
                  <input id="login-username"className='username-input' name='username' required placeholder='username'/>
                  <input id="login-password" type={'password'}  className='password-input' name='password' placeholder='password' required/>
                  <button className='login-submit-button'>Login</button>
               </form>
               <p>Don't have an account?<span onClick={this.rotate}>Sign up</span></p>
            </div>
          </div>
          <div></div>
      </div>
        )
    }
}

export default Login