import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Header from './Components/Header'
import Feed from './Components/Feed'
import Networks from './Components/Networks'
import Profile from './Components/Profile'
import Logout from './Components/Logout'
import Notifications from './Components/Notifications'
import SignInAndSignUP from './Components/SignInAndSignUp/SignInAndSignUP';

const isLoggedIn=false

function App(){
  if(!isLoggedIn){
    return (
      <BrowserRouter>
       <Header/>
      <Container className='page1'>
         <Routes>
           <Route path="/" element={<Feed/>}/>
           <Route path="/notifications" element={<Notifications/>}/>
           <Route path="/profile" element={<Profile/>}/>
           <Route path="/networks" element={<Networks/>}/>
           <Route path="/logout" element={<Logout/>}/>
         </Routes>
        </Container>
      </BrowserRouter>
    )
  }
  else{
    return (
      <BrowserRouter className="authenticate-container">
        <Routes>
           <Route path="/signInSignUp" element={<SignInAndSignUP/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App