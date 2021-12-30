import 'bootstrap/dist/css/bootstrap.min.css';
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

const isLoggedIn=false

function App(){
  if(!isLoggedIn){
    return (
      <BrowserRouter>
      <div className='page1'>
        <Header/>
         <Routes>
           <Route path="/" element={<Feed/>}/>
           <Route path="/notifications" element={<Notifications/>}/>
           <Route path="/profile" element={<Profile/>}/>
           <Route path="/networks" element={<Networks/>}/>
           <Route path="/logout" element={<Logout/>}/>
         </Routes>
         </div>
      </BrowserRouter>
    )
  }
  else{
    return (
      <BrowserRouter className="authenticate-container">
          
      </BrowserRouter>
    )
  }
}

export default App