import 'bootstrap/dist/css/bootstrap.min.css';
import {
  
  Routes,
  Route,
  useNavigate,
  useLocation
} from "react-router-dom";
import './App.css'
import Header from './Containers/Header'
import Feed from './Containers/Feed'
import Networks from './Containers/Networks'
import Profile from './Containers/Profile'
import Logout from './Containers/Logout'
import Notifications from './Containers/Notifications'
import SignInAndSignUp from './Containers/SignInAndSignUp'
import FeedBody from './Containers/Feed/FeedBody';
import LeftFooter from './Containers/Scores';
import RightFooter from './Containers/News';
import Swipe from 'react-easy-swipe';
import React,{useState,useEffect} from 'react';

import Posts from './Containers/Posts';
import Followers from './Containers/Followers';
import Following from './Containers/Following';
import {isMobile,isTablet} from 'react-device-detect'

function App(props){
  
  const [pathWhereIAm,setPathWhereIAm]=useState("")
  const navigate=useNavigate();
  const location=useLocation();
  
  useEffect(()=>{
    const {pathname} = location;
    setPathWhereIAm(pathname)
  })
  function handleLeftSwipe(event){
    navigate('/newsArticles') 
  }
  
  function handleMovementToFeed(){
    navigate('/feed')
  }
  function handleRightSwipe(event){
    navigate('/scores')
}
  if(isTablet){
      return (  
        <div>
        <div className="header">
          <Header/>
        </div>
          <div className='routing-page d-flex' style={{height:"100%",overflow:"scroll"}}   
          >
            
              <div style={{width:"60vw",height:"calc(100vh-65px)",marginRight:"1vw",marginLeft:"5vw"}}>
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
                    <Route path="/newsArticles" element={<RightFooter/>}/>
                    <Route path="/scores" element={<LeftFooter/>}/>
                    <Route path="/networks" element={<Networks/>}/>
                    <Route path="/logout" element={<Logout/>}/>
              </Routes>
              </div>
              { (pathWhereIAm!=="/") &&
                  <div 
                    style={{width:"29vw",height:"calc(100vh-65px)",border:"1px solid black",
                        position:"fixed",top:"65px",right:"5vw",bottom:"7px"}
                    }   
                  >
                    <LeftFooter />
                 </div>
              }
          </div>
          
      </div>
       )
  }
  else if(isMobile){
    return (
        <div >
          <div className="header">
            <Header/>
          </div>
            <div className='routing-page' 
               style={{height:"calc(100vh-125px)",width:"98vw"}}>
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
                <Route path="/newsArticles" element={<RightFooter/>}/>
                <Route path="/scores" element={<LeftFooter/>}/>
                <Route path="/networks" element={<Networks/>}/>
                <Route path="/logout" element={<Logout/>}/>
          </Routes>
            </div>
        
            <div 
               className='d-flex flex-row justify-content-around align-items-center'
               style={{width:"100%",border:"1px solid black",position:"fixed",bottom:"0px",height:"50px",backgroundColor:"white",
               }}>
               <img 
                 style={{cursor:"pointer"}}
                 onClick={handleRightSwipe}
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABhElEQVRIie3WyUoDQRSF4d9oInbQjkOcFcRn8GXc+SpuRQmCIILGKG40RgR16bBwHhcOQUTxMVw4LKqL3C5Ix8jNQsiBrE6oL/StrgrU80/iRXQNFfo/xwfOgaky6CxwArRqoingAvgOPuMOOi+6rBbqA2di4Q2gSaBzoisC/Rpom4PmgXjQxYAl0T1poqdi4U2BNgLLonsE+jTQJHAUga6I7g5I1wLdAZoFuiq6W6BLCz0UC+866JroboBOLfRALLwn0DjmcdvuGujQQL0INAFsie5KE92PQLdFd4zZ7VUn9ovvfABfZboEpcNDJR7hTZUXQAIoEJ6vyqaycU+pdYHHgx+j/hrZ+IQvgxyl8bjv8APQq4mngEsBZB08Jzq189mmHTNLCyxibiKLy8uhCAxo4mngXgALAnevw2dgUBPvxszSAhnR2X8dtnsDRjTxHswsLTDj4BnRvQOjmvgQ8Bos/gmMOfi0wAuaMMAw8AJMlOknMXez6uFi01KhT9YCraeq/ADfBoxsL8kwQQAAAABJRU5ErkJggg=="
               />
               <img 
                 style={{cursor:"pointer"}}
                 onClick={handleMovementToFeed}
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA20lEQVRIie2VMQrCMBSGv4o4CS6eoBfwDk56AY/gFbyCZ/AQbs4OougpBHXs6lLROvgKNdS0TdIKmg/+5fGSL7y0BDzlCIGdJGxKOgQiIJFEUkvZSn3jUjoF4ow0zQ2YSU+2bk0HWOQI1ag9VvSBdQlpXowZAEdDqbF4AlwtpInsUZqA14dyt5QmwAOYA60iaRdYOhCqWQE9nfhQgzTNPitSRxAXjcSCt72DD01Ofn6dp/DS6+Jr4rbBGifX83+j9mIvblx80ayp+uifqxxoLAtsX6QTMKoi9vwOTwk3qeyGFp8/AAAAAElFTkSuQmCC"/>
               
               <img 
                 style={{cursor:"pointer"}}
                 onClick={handleLeftSwipe}
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABg0lEQVRIie3W30pUYRSG8d+kVjZYo2lFIdFFdDPeThASdCRRSdBBTFZECRYdRlCDmZWoQWR0HZ3IdDB7mLW/RuzPMjrwhTnZz/A9rG+z1toc5j/ICTT24elp4hVu48gQfgUfMJUtvotu9bulXvlcYGtoZYrPYjsI7hhUPoJ2YO8lV34GW0HQrqR9+f1CPpkt3wyCJYzuIV/Plk/iXRA8LORLgXVwMlu+FgSPMFaxMTw5SHkLb4PgcSF/GtgbTGTKT2E1CJ7h2L+Ud4LgOY5X7CiWA3udLW/iZRC8+F35sHH4Kxk1uOIyu/hePOv+oaeWlp/fc7/asrc7kq66bKsVg8pHcC+wtGk2gw3De7mBxcA+Sprf5eh8YDC9GnobrM82cDpDWm6qdiG9EdgmpjOk5/ApHBzXYwMLgX2u/v/XmcVOOHhRvf3mA/uC8xnSi/gaDr6p/hVyNbAdXMiQUt821wvpZb0h0cU3vZtJS0tvB1/bg89V0kuZ0n6a+/Dxg5AeJj0/AAvhjW5jdOHlAAAAAElFTkSuQmCC"/>

            </div>
        </div>
      
     )
  }
  else{
    return (  
      <div>
        {console.log("path",pathWhereIAm)}
        <div className="header">
          <Header/>
        </div>
          <div className='routing-page d-flex'   
            style={{height:"100%",overflow:"scroll"}}
          >
            
              <div style={{width:"43vw",height:"calc(100vh-65px)",marginRight:"1vw",marginLeft:"18vw"}}>
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
                    <Route path="/newsArticles" element={<RightFooter/>}/>
                    <Route path="/scores" element={<LeftFooter/>}/>
                    <Route path="/networks" element={<Networks/>}/>
                    <Route path="/logout" element={<Logout/>}/>
              </Routes>
              </div>
              { (pathWhereIAm!=="/") &&
              <>
              {/* <LeftFooter/> */}
              <div style={{width:"20vw",height:"calc(100vh-65px)",
                           position:"fixed",top:"65px",right:"18vw",bottom:"7px"
              }}>
              <div 
                style={{width:"100%",height:"100%",border:"1px solid black"}}   
              >
                  <LeftFooter />
              </div>
              </div>
              </>
              }
          </div>
          
      </div>
   )
  }
}
 
export default App
