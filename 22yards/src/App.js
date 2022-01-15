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
import LeftFooter from './Components/LeftFooter';
import RightFooter from './Components/RightFooter';
import Swipe from 'react-easy-swipe';
import React,{useState} from 'react'

function App(){
  
  const [showRightFooter,setRightFooter]=useState(false)
  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    
  }
  window.addEventListener('resize', handleResize)
  return _ => {
    window.removeEventListener('resize', handleResize)}
  })
  function handleLeftSwipe(event){
      console.log("Left")
      setRightFooter(true)
  }

  function handleRightSwipe(event){
    console.log("Right")
    setRightFooter(false)
}
  if(window.innerWidth>1020){
      return (
        <BrowserRouter>
          <div >
            <div className="header">
              <Header/>
            </div>
              <Swipe
              onSwipeLeft={handleLeftSwipe}
              onSwipeRight={handleRightSwipe}
              >
              {console.log("This is Desktop")}
              <div className='routing-page'>
                <LeftFooter show={true}/>
                <Routes>
                    <Route path="/" element={<SignInAndSignUp/>}/>
                    <Route path="/feed" element={<Feed/>}/>
                    <Route path="/feed/:id" element={<FeedBody/>}/>
                    <Route path="/notifications" element={<Notifications/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/networks" element={<Networks/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                </Routes>

                <RightFooter show={true}/>
              </div>
              </Swipe>
          </div>
        </BrowserRouter>
       )
  }
  else if(window.innerWidth<670){
    return (
      <BrowserRouter>
        <div >
          <div className="header">
            <Header/>
          </div>
            <Swipe
            onSwipeLeft={handleLeftSwipe}
            onSwipeRight={handleRightSwipe}
            >
              {console.log("This is Phone")}
            <div className='routing-page'>
              <Routes>
                  <Route path="/" element={<SignInAndSignUp/>}/>
                  <Route path="/feed" element={<Feed/>}/>
                  <Route path="/feed/:id" element={<FeedBody/>}/>
                  <Route path="/notifications" element={<Notifications/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/networks" element={<Networks/>}/>
                  <Route path="/logout" element={<Logout/>}/>
              </Routes>
              
              <RightFooter show={showRightFooter}/>
            </div>
            </Swipe>
        </div>
      </BrowserRouter>
     )
  }
  else {
    return (
      <BrowserRouter>
        <div >
          <div className="header">
            <Header/>
          </div>
            <Swipe
            onSwipeLeft={handleLeftSwipe}
            onSwipeRight={handleRightSwipe}
            >
              {console.log("This is Tab")}
            <div className='routing-page'>
              <LeftFooter show={true}/>
              <Routes>
                  <Route path="/" element={<SignInAndSignUp/>}/>
                  <Route path="/feed" element={<Feed/>}/>
                  <Route path="/feed/:id" element={<FeedBody/>}/>
                  <Route path="/notifications" element={<Notifications/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/networks" element={<Networks/>}/>
                  <Route path="/logout" element={<Logout/>}/>
              </Routes>
              <RightFooter show={showRightFooter}/>
            </div>
            </Swipe>
        </div>
      </BrowserRouter>
     )
  }
}
 
export default App
