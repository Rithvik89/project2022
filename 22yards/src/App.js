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
import SignInAndSignUp from './Components/SignInAndSignUp'
import FeedBody from './Components/Feed/FeedBody';
import Posts from './Components/Posts';
import Followers from './Components/Followers';
import Following from './Components/Following';
function App(){
  return (
    <BrowserRouter>
       <div >
        <div className="header">
          <Header/>
        </div>
          <div className='routing-page'>
            <div className="left-footer">
              
            </div>

          <Routes>
                <Route path="/" element={<SignInAndSignUp/>}/>
                <Route path="/feed" element={<Feed/>}/>
                <Route path="/feed/:id" element={<FeedBody/>}/>
                <Route path="/notifications" element={<Notifications/>}/>
                <Route path="/profile" element={<Profile/>}>
                   <Route path="posts" element={<Posts/>}/> 
                   <Route path="followers" element={<Followers/>}/>
                   <Route path="Following" element={<Following/>}/>
                </Route>

                <Route path="/networks" element={<Networks/>}/>
                <Route path="/logout" element={<Logout/>}/>
          </Routes>

            <div className="right-footer">
              
            </div>
          </div>
       </div>
    </BrowserRouter>
  )
}
 
export default App
